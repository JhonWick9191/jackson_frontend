import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layers, ClipboardList, LogOut, ExternalLink, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import SeoHead from '../components/SeoHead';
import AdminBannerManager from '../components/AdminBannerManager';
import AdminEnquiryManager from '../components/AdminEnquiryManager';
import './AdminDashboardPage.css';

export default function AdminDashboardPage() {
  const { admin, loading, logout } = useAuth();
  const navigate = useNavigate();
  const [section, setSection] = useState('enquiries');

  useEffect(() => {
    if (!loading && !admin) {
      navigate('/admin/login', { replace: true });
    }
  }, [admin, loading, navigate]);

  if (loading || !admin) {
    return (
      <div className="admin-guard-loading">
        <Loader2 size={28} className="spin-icon" />
        <span>Verifying admin session...</span>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    navigate('/admin/login', { replace: true });
  };

  return (
    <>
      <SeoHead title="Admin Dashboard" noIndex canonicalPath="/admin" />
      <section className="admin-dashboard-page">
        <div className="admin-topbar">
          <div className="container admin-topbar-inner">
            <div>
              <h1>Admin Production Console</h1>
              <p>
                Signed in as <strong>{admin.name}</strong> ({admin.email})
              </p>
            </div>

            <div className="admin-topbar-actions">
              <Link to="/" className="btn btn-outline btn-sm">
                <ExternalLink size={15} />
                View Homepage
              </Link>
              <button type="button" className="btn btn-primary btn-sm" onClick={handleLogout}>
                <LogOut size={15} />
                Sign Out
              </button>
            </div>
          </div>
        </div>

        <div className="container admin-main-container">
          <div className="admin-module-switcher" role="tablist" aria-label="Admin sections">
            <button
              type="button"
              role="tab"
              aria-selected={section === 'enquiries'}
              className={`module-switch-btn ${
                section === 'enquiries' ? 'module-switch-btn--active' : ''
              }`}
              onClick={() => setSection('enquiries')}
            >
              <ClipboardList size={18} />
              Enquiry Management
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={section === 'banners'}
              className={`module-switch-btn ${
                section === 'banners' ? 'module-switch-btn--active' : ''
              }`}
              onClick={() => setSection('banners')}
            >
              <Layers size={18} />
              Hero Banner Management
            </button>
          </div>

          {section === 'enquiries' ? <AdminEnquiryManager /> : <AdminBannerManager />}
        </div>
      </section>
    </>
  );
}
