import { useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { COMPANY_INFO, HOME_CONTACT_MEDIA } from '../data/siteContent';
import { contactApi } from '../services/api';
import './HomeContactSection.css';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+]?[\d\s().-]{7,20}$/;

const INITIAL_FORM = {
  fullName: '',
  phone: '',
  email: '',
  message: ''
};

export default function HomeContactSection() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!formData.fullName.trim()) {
      nextErrors.fullName = 'Please enter your name';
    }
    const digits = formData.phone.trim().replace(/\D/g, '');
    if (!PHONE_PATTERN.test(formData.phone.trim()) || digits.length < 7 || digits.length > 15) {
      nextErrors.phone = 'Enter a valid phone number';
    }
    if (!EMAIL_PATTERN.test(formData.email.trim())) {
      nextErrors.email = 'Enter a valid email address';
    }
    if (!formData.message.trim()) {
      nextErrors.message = 'Please enter your message';
    }
    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    if (apiError) setApiError('');
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitting) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    setApiError('');

    try {
      await contactApi.submit({
        fullName: formData.fullName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        message: formData.message.trim()
      });
      setSubmitted(true);
      setFormData(INITIAL_FORM);
    } catch (error) {
      setApiError(
        error.response?.data?.message || 'Could not send your message. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="home-contact-section section-padding" aria-label="Contact us">
      <div className="container">
        <div className="home-contact-grid">
          <div className="home-contact-copy">
            <div className="home-contact-header">
              <span className="home-contact-pill">
                <span className="home-contact-pill-dot" aria-hidden="true" />
                Contact
              </span>

              <h2 className="home-contact-heading">
                LET&apos;S MAKE YOUR EVENT
                <br />
                IMPOSSIBLE TO IGNORE
              </h2>

              <p className="home-contact-subtitle">
                Let&apos;s stage an experience guests won&apos;t scroll past. Tell us about your
                event, and let&apos;s start a conversation.
              </p>
            </div>

            <div className="home-contact-showcase">
              <div className="home-contact-image-frame">
                <img
                  src={HOME_CONTACT_MEDIA.image}
                  alt={HOME_CONTACT_MEDIA.alt}
                  loading="lazy"
                  width="480"
                  height="260"
                />
                <div className="home-contact-image-overlay">
                  <span className="home-contact-image-badge">
                    <span className="home-contact-image-badge-dot" aria-hidden="true" />
                    <span>{HOME_CONTACT_MEDIA.badge}</span>
                  </span>
                </div>
              </div>
              <div className="home-contact-showcase-caption">
                <strong>{HOME_CONTACT_MEDIA.title}</strong>
                <p>{HOME_CONTACT_MEDIA.description}</p>
              </div>
            </div>
          </div>

          <div className="home-contact-card-wrap">
            <svg
              className="home-contact-loop"
              viewBox="0 0 180 210"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M142 16C114 4 86 24 88 58C90 92 126 112 152 84C174 60 156 18 118 32C68 50 48 116 96 164C120 188 152 198 176 202"
                stroke="currentColor"
                strokeWidth="9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="home-contact-card">
              <form className="home-contact-form" onSubmit={handleSubmit} noValidate>
                <div className="home-contact-field">
                  <label htmlFor="home-contact-name" className="home-contact-label">
                    Your Name
                  </label>
                  <input
                    id="home-contact-name"
                    name="fullName"
                    type="text"
                    className={`home-contact-input ${errors.fullName ? 'is-error' : ''}`}
                    placeholder="Your Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                  {errors.fullName ? (
                    <span className="home-contact-field-error">{errors.fullName}</span>
                  ) : null}
                </div>

                <div className="home-contact-row">
                  <div className="home-contact-field">
                    <label htmlFor="home-contact-phone" className="home-contact-label">
                      Phone Number
                    </label>
                    <input
                      id="home-contact-phone"
                      name="phone"
                      type="tel"
                      className={`home-contact-input ${errors.phone ? 'is-error' : ''}`}
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                    />
                    {errors.phone ? (
                      <span className="home-contact-field-error">{errors.phone}</span>
                    ) : null}
                  </div>

                  <div className="home-contact-field">
                    <label htmlFor="home-contact-email" className="home-contact-label">
                      Email Address
                    </label>
                    <input
                      id="home-contact-email"
                      name="email"
                      type="email"
                      className={`home-contact-input ${errors.email ? 'is-error' : ''}`}
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                    {errors.email ? (
                      <span className="home-contact-field-error">{errors.email}</span>
                    ) : null}
                  </div>
                </div>

                <div className="home-contact-field">
                  <label htmlFor="home-contact-message" className="home-contact-label">
                    Messages
                  </label>
                  <textarea
                    id="home-contact-message"
                    name="message"
                    rows="5"
                    className={`home-contact-textarea ${errors.message ? 'is-error' : ''}`}
                    placeholder="Tell us about your event, venue, or AV requirements"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message ? (
                    <span className="home-contact-field-error">{errors.message}</span>
                  ) : null}
                </div>

                {apiError ? (
                  <div className="home-contact-alert home-contact-alert--error" role="alert">
                    <AlertCircle size={16} aria-hidden="true" />
                    <span>{apiError}</span>
                  </div>
                ) : null}

                {submitted ? (
                  <div className="home-contact-alert home-contact-alert--success" role="status">
                    <CheckCircle2 size={16} aria-hidden="true" />
                    <span>Thank you! Your message has been sent to our production team.</span>
                  </div>
                ) : null}

                <div className="home-contact-actions">
                  <button
                    type="submit"
                    className="home-contact-submit-btn"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={16} className="home-contact-spinner" aria-hidden="true" />
                        Sending...
                      </>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
