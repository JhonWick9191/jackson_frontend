import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_LIST } from '../data/siteContent';
import './ServicesSection.css';

export default function ServicesSection({ preview = false }) {
  const [selectedId, setSelectedId] = useState(SERVICES_LIST[0].id);
  const location = useLocation();

  // Synchronize selection if user navigated via hash
  useEffect(() => {
    if (location.hash) {
      const slug = location.hash.replace('#', '');
      const match = SERVICES_LIST.find((s) => s.slug === slug || s.id === slug);
      if (match) {
        setSelectedId(match.id);
      }
    }
  }, [location.hash]);

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  return (
    <section className="section-padding services-section" id="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="services-header-centered">
          <div className="services-pill">
            <span className="services-pill-dot" aria-hidden="true" />
            <span>Our Services</span>
          </div>
          <h2 id="services-heading" className="services-main-heading">
            PREMIUM SIGNAGE, LED SCREENS &amp; BRANDING SOLUTIONS
          </h2>
          <p className="services-main-subtitle">
            From architectural signage and fine-pitch LED video walls to interactive digital kiosks,
            exhibition stalls, environmental branding, and promotional corporate gifts.
          </p>
        </div>

        <div className="services-showcase-list" role="tablist" aria-label="Services List">
          {SERVICES_LIST.map((service, index) => {
            const isSelected = service.id === selectedId;
            const secondaryImage =
              service.secondaryImageUrl ||
              SERVICES_LIST[(index + 1) % SERVICES_LIST.length].imageUrl;

            return (
              <div
                key={service.id}
                id={service.slug}
                role="tab"
                tabIndex={0}
                aria-selected={isSelected}
                className={`service-showcase-card ${
                  isSelected ? 'service-showcase-card--selected' : ''
                }`}
                onClick={() => handleSelect(service.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSelect(service.id);
                  }
                }}
              >
                {/* Left Floating Image Frame */}
                <div
                  className="service-showcase-photo service-showcase-photo--left"
                  aria-hidden="true"
                >
                  <img
                    src={service.imageUrl}
                    alt={`${service.title} primary display`}
                    loading="lazy"
                    width="160"
                    height="200"
                  />
                </div>

                {/* Center Content Block */}
                <div className="service-showcase-center">
                  <span className="service-showcase-num">{`0${index + 1}`}</span>
                  <h3 className="service-showcase-title">{service.title}</h3>

                  <div className="service-showcase-details">
                    <p className="service-showcase-desc">
                      {isSelected ? service.fullDesc : service.shortDesc}
                    </p>

                    {isSelected && service.highlights && (
                      <div className="service-highlights-row" aria-label="Key features">
                        {service.highlights.map((highlight) => (
                          <span key={highlight} className="service-highlight-pill">
                            <CheckCircle2 size={12} aria-hidden="true" />
                            <span>{highlight}</span>
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="service-action-row">
                      <Link
                        to={`/services/${service.slug}`}
                        className="btn btn-secondary service-view-detail-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Explore Service <ArrowRight size={14} aria-hidden="true" />
                      </Link>
                      <Link
                        to="/contact"
                        className="btn btn-primary service-enquiry-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Enquiry Now
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right Floating Image Frame */}
                <div
                  className="service-showcase-photo service-showcase-photo--right"
                  aria-hidden="true"
                >
                  <img
                    src={secondaryImage}
                    alt={`${service.title} secondary showcase`}
                    loading="lazy"
                    width="160"
                    height="200"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {preview && (
          <div className="services-footer-cta">
            <Link to="/contact" className="btn btn-outline">
              Discuss Your Project With Us
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
