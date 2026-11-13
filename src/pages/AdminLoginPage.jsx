import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Loader2, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import SeoHead from '../components/SeoHead';
import './AdminLoginPage.css';

export default function AdminLoginPage() {
  const { admin, loading: authLoading, login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!authLoading && admin) {
      navigate('/admin', { replace: true });
    }
  }, [admin, authLoading, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitting) return;

    if (!email.trim() || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      await login(email.trim(), password);
      navigate('/admin', { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SeoHead title="Admin Login" noIndex canonicalPath="/admin/login" />
      <section className="admin-login-page">
        <div className="admin-login-card">
          <div className="admin-login-icon">
            <Lock size={24} aria-hidden="true" />
          </div>
          <h1>Admin Portal Sign In</h1>
          <p className="admin-login-subtitle">
            Manage homepage hero banners and track banner-wise customer enquiries.
          </p>

          {error && (
            <div className="admin-login-error" role="alert">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          <form className="admin-login-form" onSubmit={handleSubmit}>
            <div className="admin-login-field">
              <label htmlFor="admin-email">Email Address</label>
              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@jacksonav.com"
                autoComplete="email"
                disabled={submitting}
                required
              />
            </div>

            <div className="admin-login-field">
              <label htmlFor="admin-password">Password</label>
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
                disabled={submitting}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary admin-login-btn" disabled={submitting}>
              {submitting ? (
                <>
                  <Loader2 size={18} className="spin-icon" />
                  Signing In...
                </>
              ) : (
                'Sign In to Dashboard'
              )}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
