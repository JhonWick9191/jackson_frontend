import { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { enquiryApi } from '../services/api';
import './BannerEnquiryModal.css';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+]?[\d\s().-]{7,20}$/;

function validateFields(values) {
  const errors = {};
  if (!values.firstName.trim()) {
    errors.firstName = 'First name is required';
  }
  if (!values.lastName.trim()) {
    errors.lastName = 'Last name is required';
  }
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address';
  }
  const phoneDigits = values.phone.trim().replace(/\D/g, '');
  if (!PHONE_PATTERN.test(values.phone.trim()) || phoneDigits.length < 7 || phoneDigits.length > 15) {
    errors.phone = 'Please enter a valid phone number (7–15 digits)';
  }
  return errors;
}

export default function BannerEnquiryModal({ isOpen, banner, triggerSource, onClose }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submittedEnquiry, setSubmittedEnquiry] = useState(null);
  const submitLockRef = useRef(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    setFormData({ firstName: '', lastName: '', email: '', phone: '' });
    setFieldErrors({});
    setSubmitError('');
    setSubmittedEnquiry(null);
    setSubmitting(false);
    submitLockRef.current = false;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, banner?._id, onClose]);

  if (!isOpen || !banner) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
    if (submitError) setSubmitError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitLockRef.current || submitting || submittedEnquiry) return;

    const errors = validateFields(formData);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    submitLockRef.current = true;
    setSubmitting(true);
    setSubmitError('');

    try {
      const response = await enquiryApi.submit({
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        bannerId: banner._id,
        triggerSource: triggerSource || 'banner'
      });
      setSubmittedEnquiry(response.enquiry);
    } catch (error) {
      const message =
        error.response?.data?.message ||
        'Unable to submit your enquiry right now. Please try again.';
      setSubmitError(message);
      submitLockRef.current = false;
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="enquiry-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="banner-enquiry-modal-title"
      onClick={onClose}
    >
      <div className="enquiry-modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="enquiry-modal-close"
          onClick={onClose}
          aria-label="Close enquiry popup"
        >
          <X size={20} />
        </button>

        {submittedEnquiry ? (
          <div className="enquiry-modal-success">
            <CheckCircle2 size={48} className="enquiry-success-icon" />
            <h2 id="banner-enquiry-modal-title">Enquiry Received</h2>
            <p className="enquiry-success-text">
              Thank you, <strong>{submittedEnquiry.firstName}</strong>. Your enquiry for{' '}
              <strong>{submittedEnquiry.bannerTitle}</strong> has been logged and our production
              coordinator will reach out shortly.
            </p>
            <button type="button" className="btn btn-primary" onClick={onClose}>
              Back to Site
            </button>
          </div>
        ) : (
          <>
            <div className="enquiry-modal-header">
              <span className="enquiry-source-pill">{banner.title}</span>
              <h2 id="banner-enquiry-modal-title">Request a Production Quote</h2>
              <p>
                Share your details below and our AV &amp; event team will contact you promptly.
              </p>
            </div>

            {submitError && (
              <div className="enquiry-alert-error" role="alert">
                <AlertCircle size={18} />
                <span>{submitError}</span>
              </div>
            )}

            <form className="enquiry-modal-form" onSubmit={handleSubmit} noValidate>
              <div className="enquiry-form-row">
                <div className="enquiry-field">
                  <label htmlFor="enquiry-first-name">First Name *</label>
                  <input
                    id="enquiry-first-name"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Alex"
                    autoComplete="given-name"
                    disabled={submitting}
                    required
                  />
                  {fieldErrors.firstName && (
                    <span className="enquiry-field-error">{fieldErrors.firstName}</span>
                  )}
                </div>

                <div className="enquiry-field">
                  <label htmlFor="enquiry-last-name">Last Name *</label>
                  <input
                    id="enquiry-last-name"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Morgan"
                    autoComplete="family-name"
                    disabled={submitting}
                    required
                  />
                  {fieldErrors.lastName && (
                    <span className="enquiry-field-error">{fieldErrors.lastName}</span>
                  )}
                </div>
              </div>

              <div className="enquiry-field">
                <label htmlFor="enquiry-email">Email Address *</label>
                <input
                  id="enquiry-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex.morgan@company.com"
                  autoComplete="email"
                  disabled={submitting}
                  required
                />
                {fieldErrors.email && (
                  <span className="enquiry-field-error">{fieldErrors.email}</span>
                )}
              </div>

              <div className="enquiry-field">
                <label htmlFor="enquiry-phone">Phone Number *</label>
                <input
                  id="enquiry-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98200 45120"
                  autoComplete="tel"
                  disabled={submitting}
                  required
                />
                {fieldErrors.phone && (
                  <span className="enquiry-field-error">{fieldErrors.phone}</span>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary enquiry-submit-btn"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <Loader2 size={18} className="spin-icon" />
                    Submitting Enquiry...
                  </>
                ) : (
                  'Submit Enquiry'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
