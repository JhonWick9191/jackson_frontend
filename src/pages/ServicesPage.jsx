import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SeoHead from '../components/SeoHead';
import { SERVICES_LIST } from '../data/siteContent';
import './ServicesPage.css';

export default function ServicesPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash, location.pathname]);

  return (
    <>
      <SeoHead
        title="Our Services"
        description="Explore our 6 core services: Signage Solutions, LED Screen Supply & Installation, Kiosk Design & Installation, Exhibition Stalls & Stands, Branding Solutions, and Promotional Items & Corporate Gifts."
        canonicalPath="/services"
      />

      {/* Hero Header */}
      <section className="page-hero-band" aria-labelledby="services-page-title">
        <div className="container">
          <div className="services-page-hero-content">
            <div className="services-pill">
              <span className="services-pill-dot" aria-hidden="true" />
              <span>Full-Service Capabilities</span>
            </div>
            <h1 id="services-page-title">Our Services</h1>
            <p>
              Turnkey architectural signage, commercial LED video walls, interactive digital kiosks,
              bespoke exhibition stalls, environmental branding, and luxury corporate promotional merchandise.
            </p>

            {/* Quick Jump Bar */}
            <nav className="services-quick-nav" aria-label="Jump to a service">
              {SERVICES_LIST.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.slug}`}
                  className="services-quick-pill"
                >
                  {service.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Detailed Services Sections */}
      <section className="section-padding services-detail-section" aria-label="Detailed service offerings">
        <div className="container services-detail-container">
          {SERVICES_LIST.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={service.id}
                id={service.slug}
                className={`service-detail-card ${
                  isReversed ? 'service-detail-card--reversed' : ''
                }`}
              >
                {/* Media Column */}
                <div className="service-detail-media">
                  <div className="service-detail-img-frame">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="service-detail-img"
                      loading="lazy"
                    />
                    <div className="service-detail-badge">
                      <span>{`0${index + 1}`}</span>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="service-detail-content">
                  <span className="service-detail-eyebrow">Service {`0${index + 1}`}</span>
                  <h2 className="service-detail-title">{service.title}</h2>
                  <p className="service-detail-desc">{service.fullDesc}</p>

                  {service.highlights && service.highlights.length > 0 && (
                    <div className="service-detail-highlights">
                      <p className="service-detail-highlights-title">Key Capabilities &amp; Features:</p>
                      <ul className="service-detail-highlights-list">
                        {service.highlights.map((highlight) => (
                          <li key={highlight} className="service-detail-highlight-item">
                            <CheckCircle2 size={16} className="service-detail-check-icon" aria-hidden="true" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="service-detail-cta-wrap">
                    <Link
                      to="/contact"
                      className="btn btn-primary service-detail-enquiry-btn"
                      aria-label={`Enquire about ${service.title}`}
                    >
                      Enquiry Now <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
