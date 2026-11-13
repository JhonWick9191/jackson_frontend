import { COMPANY_INFO } from '../data/siteContent';
import './HomeContactDetailsSection.css';

export default function HomeContactDetailsSection() {
  return (
    <section
      className="contact-details-section"
      aria-label="Office hours and direct contact details"
    >
      <div className="container">
        <div className="contact-details-hours">
          <h3 className="contact-details-hours-title">Office hours line:</h3>
          <p className="contact-details-hours-text">{COMPANY_INFO.hours}</p>
        </div>

        <div className="contact-details-grid">
          <div className="contact-details-card">
            <h4 className="contact-details-card-title">Locations</h4>
            <p className="contact-details-card-value">{COMPANY_INFO.location}</p>
          </div>

          <div className="contact-details-card">
            <h4 className="contact-details-card-title">Email</h4>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="contact-details-card-value contact-details-link"
            >
              {COMPANY_INFO.email}
            </a>
          </div>

          <div className="contact-details-card">
            <h4 className="contact-details-card-title">Phone number</h4>
            <a
              href={`tel:${COMPANY_INFO.phoneHref}`}
              className="contact-details-card-value contact-details-link"
            >
              {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
