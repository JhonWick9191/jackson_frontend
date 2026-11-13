import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/siteContent';
import { contactApi } from '../services/api';
import './ContactSection.css';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+]?[\d\s().-]{7,20}$/;

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: SERVICES_LIST[0].title,
    eventDate: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!formData.fullName.trim()) nextErrors.fullName = 'Full name is required';
    if (!EMAIL_PATTERN.test(formData.email.trim())) nextErrors.email = 'Valid email is required';
    const digits = formData.phone.trim().replace(/\D/g, '');
    if (!PHONE_PATTERN.test(formData.phone.trim()) || digits.length < 7 || digits.length > 15) {
      nextErrors.phone = 'Valid phone number (7–15 digits) is required';
    }
    if (!formData.message.trim()) nextErrors.message = 'Please share your event requirements';
    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
    if (apiError) setApiError('');
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
      await contactApi.submit(formData);
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        serviceInterest: SERVICES_LIST[0].title,
        eventDate: '',
        message: ''
      });
    } catch (error) {
      setApiError(
        error.response?.data?.message || 'Could not send your message. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Jackson Advertising, I would like to discuss signage, advertising, and branding requirements.'
  )}`;

  return (
    <section className="section-padding contact-section" aria-label="Contact information and enquiry form">
      <div className="container contact-grid">
        <div className="contact-info-panel">
          <span className="section-eyebrow">Direct Channels</span>
          <h2>Speak With Our Production Desk</h2>
          <p className="contact-intro">
            Planning a corporate conference, LED screen installation, wedding production, or custom
            AV rental? Reach our engineers directly or submit your brief.
          </p>

          <ul className="contact-details-list">
            <li>
              <span className="contact-icon-box">
                <Phone size={18} aria-hidden="true" />
              </span>
              <div>
                <strong>Phone</strong>
                <a href={`tel:${COMPANY_INFO.phoneHref}`}>{COMPANY_INFO.phoneDisplay}</a>
              </div>
            </li>

            <li>
              <span className="contact-icon-box">
                <Mail size={18} aria-hidden="true" />
              </span>
              <div>
                <strong>Email</strong>
                <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
              </div>
            </li>

            <li>
              <span className="contact-icon-box">
                <MapPin size={18} aria-hidden="true" />
              </span>
              <div>
                <strong>Business Location</strong>
                <span>{COMPANY_INFO.location}</span>
              </div>
            </li>

            <li>
              <span className="contact-icon-box">
                <Clock size={18} aria-hidden="true" />
              </span>
              <div>
                <strong>Operating Hours</strong>
                <span>{COMPANY_INFO.hours}</span>
              </div>
            </li>
          </ul>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn contact-whatsapp-btn"
          >
            <MessageCircle size={19} aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </div>

        <div className="contact-form-card">
          <h3>General Event Enquiry Form</h3>
          <p className="contact-form-subtitle">
            Tell us about your venue, expected audience size, and technical requirements.
          </p>

          {submitted && (
            <div className="contact-success-banner" role="status">
              <CheckCircle2 size={20} />
              <div>
                <strong>Message Sent Successfully</strong>
                <p>Thank you for reaching out. Our production coordinator will reply shortly.</p>
              </div>
            </div>
          )}

          {apiError && (
            <div className="contact-error-banner" role="alert">
              <AlertCircle size={18} />
              <span>{apiError}</span>
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-field">
              <label htmlFor="contact-fullName">Full Name *</label>
              <input
                id="contact-fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Jordan Blake"
                disabled={submitting}
              />
              {errors.fullName && <span className="contact-field-error">{errors.fullName}</span>}
            </div>

            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-email">Email Address *</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jordan@organization.com"
                  disabled={submitting}
                />
                {errors.email && <span className="contact-field-error">{errors.email}</span>}
              </div>

              <div className="contact-field">
                <label htmlFor="contact-phone">Phone Number *</label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98200 45120"
                  disabled={submitting}
                />
                {errors.phone && <span className="contact-field-error">{errors.phone}</span>}
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-service">Service Needed</label>
                <select
                  id="contact-service"
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  disabled={submitting}
                >
                  {SERVICES_LIST.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                  <option value="Full Production Package">Full Production Package</option>
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-eventDate">Tentative Event Date</label>
                <input
                  id="contact-eventDate"
                  name="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={handleChange}
                  disabled={submitting}
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Project / Event Details *</label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Share venue city, stage size, LED/AV requirements, or event format..."
                disabled={submitting}
              />
              {errors.message && <span className="contact-field-error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary contact-submit-btn" disabled={submitting}>
              {submitting ? (
                <>
                  <Loader2 size={18} className="spin-icon" />
                  Sending Enquiry...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
