import { useState, useEffect, useCallback } from 'react';
import {
  Plus,
  Pencil,
  Trash2,
  ArrowUp,
  ArrowDown,
  Image as ImageIcon,
  Video,
  CheckCircle2,
  AlertCircle,
  Loader2,
  X
} from 'lucide-react';
import { bannerApi } from '../services/api';
import './AdminBannerManager.css';

const INITIAL_FORM = {
  title: '',
  heading: '',
  description: '',
  mediaType: 'image',
  imageUrl: '',
  videoUrl: '',
  displayOrder: 1,
  button1Text: 'Call Us',
  button2Text: 'Enquiry',
  button1Enabled: true,
  button2Enabled: true,
  status: 'active'
};

export default function AdminBannerManager() {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [feedback, setFeedback] = useState('');

  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState('');

  const loadBanners = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await bannerApi.getAllAdmin();
      setBanners(Array.isArray(data.banners) ? data.banners : []);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load banners.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadBanners();
  }, [loadBanners]);

  const openCreateForm = () => {
    const nextOrder =
      banners.length > 0 ? Math.max(...banners.map((b) => b.displayOrder || 1)) + 1 : 1;
    setEditingId(null);
    setFormData({ ...INITIAL_FORM, displayOrder: nextOrder });
    setFormError('');
    setFormOpen(true);
  };

  const openEditForm = (banner) => {
    setEditingId(banner._id);
    setFormData({
      title: banner.title || '',
      heading: banner.heading || '',
      description: banner.description || '',
      mediaType: banner.mediaType || 'image',
      imageUrl: banner.imageUrl || '',
      videoUrl: banner.videoUrl || '',
      displayOrder: banner.displayOrder || 1,
      button1Text: banner.button1Text || 'Call Us',
      button2Text: banner.button2Text || 'Enquiry',
      button1Enabled: banner.button1Enabled !== false,
      button2Enabled: banner.button2Enabled !== false,
      status: banner.status || 'active'
    });
    setFormError('');
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
    setEditingId(null);
    setFormError('');
  };

  const handleFieldChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (formError) setFormError('');
  };

  const handleSave = async (event) => {
    event.preventDefault();
    if (saving) return;

    setSaving(true);
    setFormError('');
    setFeedback('');

    const payload = {
      ...formData,
      displayOrder: Number(formData.displayOrder)
    };

    try {
      if (editingId) {
        await bannerApi.update(editingId, payload);
        setFeedback('Banner updated successfully.');
      } else {
        await bannerApi.create(payload);
        setFeedback('New banner created and saved.');
      }
      closeForm();
      await loadBanners();
    } catch (err) {
      setFormError(err.response?.data?.message || 'Could not save banner.');
    } finally {
      setSaving(false);
    }
  };

  const handleToggleStatus = async (banner) => {
    const nextStatus = banner.status === 'active' ? 'inactive' : 'active';
    setFeedback('');
    setError('');
    try {
      await bannerApi.updateStatus(banner._id, nextStatus);
      setFeedback(`Banner "${banner.title}" marked as ${nextStatus}.`);
      await loadBanners();
    } catch (err) {
      setError(err.response?.data?.message || 'Could not update banner status.');
    }
  };

  const handleOrderStep = async (banner, delta) => {
    const nextOrder = Math.max(1, (banner.displayOrder || 1) + delta);
    if (nextOrder === banner.displayOrder) return;
    setFeedback('');
    setError('');
    try {
      await bannerApi.updateOrder(banner._id, nextOrder);
      setFeedback(`Updated display order for "${banner.title}" to #${nextOrder}.`);
      await loadBanners();
    } catch (err) {
      setError(err.response?.data?.message || 'Could not update display order.');
    }
  };

  const handleDelete = async (banner) => {
    if (!window.confirm(`Delete banner "${banner.title}" permanently?`)) return;
    setFeedback('');
    setError('');
    try {
      await bannerApi.remove(banner._id);
      setFeedback(`Banner "${banner.title}" deleted.`);
      await loadBanners();
    } catch (err) {
      setError(err.response?.data?.message || 'Could not delete banner.');
    }
  };

  return (
    <div className="admin-banner-manager">
      <div className="admin-section-toolbar">
        <div>
          <h2>Hero Banner &amp; Poster Management</h2>
          <p>
            Add, edit, reorder, activate, or deactivate image and video posters for the homepage
            hero slider.
          </p>
        </div>

        <button type="button" className="btn btn-primary" onClick={openCreateForm}>
          <Plus size={18} />
          Add New Banner
        </button>
      </div>

      {feedback && (
        <div className="admin-banner-alert admin-banner-alert--success" role="status">
          <CheckCircle2 size={18} />
          <span>{feedback}</span>
        </div>
      )}

      {error && (
        <div className="admin-banner-alert admin-banner-alert--error" role="alert">
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      )}

      {formOpen && (
        <div className="banner-editor-card">
          <div className="banner-editor-header">
            <h3>{editingId ? 'Edit Banner' : 'Create New Hero Banner'}</h3>
            <button
              type="button"
              className="banner-editor-close"
              onClick={closeForm}
              aria-label="Close banner editor"
            >
              <X size={18} />
            </button>
          </div>

          {formError && (
            <div className="admin-banner-alert admin-banner-alert--error" role="alert">
              <AlertCircle size={18} />
              <span>{formError}</span>
            </div>
          )}

          <form className="banner-editor-form" onSubmit={handleSave}>
            <div className="banner-form-grid">
              <div className="banner-form-field">
                <label htmlFor="banner-title">Banner Title (Enquiry Source Tag) *</label>
                <input
                  id="banner-title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleFieldChange}
                  placeholder="e.g., Signage or LED Screen"
                  required
                />
              </div>

              <div className="banner-form-field">
                <label htmlFor="banner-order">Poster Number / Display Order *</label>
                <input
                  id="banner-order"
                  name="displayOrder"
                  type="number"
                  min={1}
                  step={1}
                  value={formData.displayOrder}
                  onChange={handleFieldChange}
                  required
                />
              </div>

              <div className="banner-form-field banner-form-field--full">
                <label htmlFor="banner-heading">Banner Heading *</label>
                <input
                  id="banner-heading"
                  name="heading"
                  type="text"
                  value={formData.heading}
                  onChange={handleFieldChange}
                  placeholder="Enter main display heading shown on the homepage hero"
                  required
                />
              </div>

              <div className="banner-form-field banner-form-field--full">
                <label htmlFor="banner-description">Banner Description *</label>
                <textarea
                  id="banner-description"
                  name="description"
                  rows={3}
                  value={formData.description}
                  onChange={handleFieldChange}
                  placeholder="Enter supporting description shown below the heading"
                  required
                />
              </div>

              <div className="banner-form-field">
                <label htmlFor="banner-media-type">Media Type *</label>
                <select
                  id="banner-media-type"
                  name="mediaType"
                  value={formData.mediaType}
                  onChange={handleFieldChange}
                >
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                </select>
              </div>

              <div className="banner-form-field">
                <label htmlFor="banner-status">Banner Status *</label>
                <select
                  id="banner-status"
                  name="status"
                  value={formData.status}
                  onChange={handleFieldChange}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <div className="banner-form-field banner-form-field--full">
                <label htmlFor="banner-image-url">
                  {formData.mediaType === 'image'
                    ? 'Image URL *'
                    : 'Poster Fallback Image URL (Optional)'}
                </label>
                <input
                  id="banner-image-url"
                  name="imageUrl"
                  type="url"
                  value={formData.imageUrl}
                  onChange={handleFieldChange}
                  placeholder="https://example.com/banner-image.jpg"
                  required={formData.mediaType === 'image'}
                />
              </div>

              {formData.mediaType === 'video' && (
                <div className="banner-form-field banner-form-field--full">
                  <label htmlFor="banner-video-url">Video URL *</label>
                  <input
                    id="banner-video-url"
                    name="videoUrl"
                    type="url"
                    value={formData.videoUrl}
                    onChange={handleFieldChange}
                    placeholder="https://example.com/banner-video.mp4"
                    required
                  />
                </div>
              )}

              <div className="banner-form-field">
                <label htmlFor="banner-btn1-text">Button 1 Text</label>
                <input
                  id="banner-btn1-text"
                  name="button1Text"
                  type="text"
                  value={formData.button1Text}
                  onChange={handleFieldChange}
                />
                <label className="banner-checkbox-row">
                  <input
                    type="checkbox"
                    name="button1Enabled"
                    checked={formData.button1Enabled}
                    onChange={handleFieldChange}
                  />
                  <span>Enable Button 1</span>
                </label>
              </div>

              <div className="banner-form-field">
                <label htmlFor="banner-btn2-text">Button 2 Text</label>
                <input
                  id="banner-btn2-text"
                  name="button2Text"
                  type="text"
                  value={formData.button2Text}
                  onChange={handleFieldChange}
                />
                <label className="banner-checkbox-row">
                  <input
                    type="checkbox"
                    name="button2Enabled"
                    checked={formData.button2Enabled}
                    onChange={handleFieldChange}
                  />
                  <span>Enable Button 2</span>
                </label>
              </div>
            </div>

            <div className="banner-editor-actions">
              <button type="button" className="btn btn-outline" onClick={closeForm}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary" disabled={saving}>
                {saving ? (
                  <>
                    <Loader2 size={16} className="spin-icon" />
                    Saving...
                  </>
                ) : editingId ? (
                  'Update Banner'
                ) : (
                  'Save Banner'
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="admin-loading-box">
          <Loader2 size={24} className="spin-icon" />
          <span>Loading banners...</span>
        </div>
      ) : banners.length === 0 ? (
        <div className="admin-empty-box">
          <p>No banners created yet. Click &ldquo;Add New Banner&rdquo; to publish your first poster.</p>
        </div>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Order</th>
                <th>Preview</th>
                <th>Banner Title &amp; Copy</th>
                <th>Media Type</th>
                <th>Buttons</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {banners.map((banner) => (
                <tr key={banner._id}>
                  <td>
                    <div className="order-cell">
                      <span className="order-badge">#{banner.displayOrder}</span>
                      <div className="order-step-btns">
                        <button
                          type="button"
                          className="icon-btn"
                          title="Move earlier"
                          aria-label={`Decrease display order for ${banner.title}`}
                          onClick={() => handleOrderStep(banner, -1)}
                          disabled={banner.displayOrder <= 1}
                        >
                          <ArrowUp size={14} />
                        </button>
                        <button
                          type="button"
                          className="icon-btn"
                          title="Move later"
                          aria-label={`Increase display order for ${banner.title}`}
                          onClick={() => handleOrderStep(banner, 1)}
                        >
                          <ArrowDown size={14} />
                        </button>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="banner-thumb-box">
                      {banner.imageUrl ? (
                        <img src={banner.imageUrl} alt={banner.title} loading="lazy" />
                      ) : (
                        <Video size={20} />
                      )}
                    </div>
                  </td>

                  <td>
                    <strong className="banner-row-title">{banner.title}</strong>
                    <div className="banner-row-heading">{banner.heading}</div>
                  </td>

                  <td>
                    <span className="media-type-chip">
                      {banner.mediaType === 'video' ? (
                        <>
                          <Video size={14} /> Video
                        </>
                      ) : (
                        <>
                          <ImageIcon size={14} /> Image
                        </>
                      )}
                    </span>
                  </td>

                  <td>
                    <div className="banner-buttons-summary">
                      <span>
                        1: {banner.button1Enabled ? banner.button1Text : 'Disabled'}
                      </span>
                      <span>
                        2: {banner.button2Enabled ? banner.button2Text : 'Disabled'}
                      </span>
                    </div>
                  </td>

                  <td>
                    <button
                      type="button"
                      className={`status-toggle-pill ${
                        banner.status === 'active'
                          ? 'status-toggle-pill--active'
                          : 'status-toggle-pill--inactive'
                      }`}
                      onClick={() => handleToggleStatus(banner)}
                    >
                      {banner.status === 'active' ? 'Active' : 'Inactive'}
                    </button>
                  </td>

                  <td>
                    <div className="row-actions-group">
                      <button
                        type="button"
                        className="btn btn-outline btn-sm"
                        onClick={() => openEditForm(banner)}
                      >
                        <Pencil size={14} />
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger-outline btn-sm"
                        onClick={() => handleDelete(banner)}
                      >
                        <Trash2 size={14} />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
