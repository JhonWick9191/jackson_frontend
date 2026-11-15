import { useEffect } from 'react';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageSquare, PhoneCall, Layers } from 'lucide-react';
import SeoHead from '../components/SeoHead';
import { servicesData } from '../data/servicesData';
import { COMPANY_INFO } from '../data/siteContent';
import './ServiceDetailPage.css';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Find active service based on URL slug or URL hash (e.g. #signage-solutions)
  const targetSlug = slug || (location.hash ? location.hash.replace('#', '') : null);

  const activeService =
    servicesData.find((s) => s.slug === targetSlug || s.id === targetSlug) ||
    servicesData[0];

  // If visiting without slug or hash, redirect cleanly to the first service
  useEffect(() => {
    if (!slug && !location.hash) {
      navigate(`/services/${servicesData[0].slug}`, { replace: true });
    }
  }, [slug, location.hash, navigate]);

  // Scroll to top whenever the active service changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeService.slug]);

  const cardsList = activeService.cards || [];
  const categoriesList = activeService.serviceCategories || [];

  return (
    <div className="service-detail-page">
      <SeoHead
        title={`${activeService.title} - Jackson Advertising`}
        description={activeService.shortDescription || activeService.fullDescription}
        canonicalPath={`/services/${activeService.slug}`}
      />

      {/* 1. HERO SECTION WITH SERVICE-SPECIFIC BACKGROUND IMAGE (Breadcrumbs removed) */}
      <main
        className="service-detail-hero-section"
        aria-labelledby="service-main-heading"
        style={{
          backgroundImage: `url(${activeService.heroBackgroundImage || activeService.mainImage})`
        }}
      >
        <div className="service-detail-hero-overlay" aria-hidden="true" />

        <div className="container service-detail-hero-container">
          <div className="service-detail-header-row">
            <div className="service-detail-header-left">
              <div className="service-detail-pill">
                <span className="service-detail-pill-dot" aria-hidden="true" />
                <span>{activeService.tagline || activeService.title}</span>
              </div>

              <h1 id="service-main-heading" className="service-detail-heading">
                {activeService.headline || activeService.title}
              </h1>
            </div>

            <div className="service-detail-header-right">
              <p className="service-detail-lead-desc">
                {activeService.fullDescription || activeService.shortDescription}
              </p>

              <div className="service-detail-action-bar">
                <Link to="/contact" className="btn btn-primary service-cta-primary-btn">
                  Enquiry Now <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Jackson Advertising, I would like to inquire about ${activeService.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary service-cta-whatsapp-btn"
                >
                  <MessageSquare size={16} aria-hidden="true" /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* 5-Card Flowing Wave Stage */}
          {cardsList.length > 0 && (
            <div className="service-detail-wave-stage">
              <svg
                className="service-detail-ribbon"
                viewBox="0 0 1440 260"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <path
                  d="M-20,135 C180,50 360,230 540,115 C720,20 900,240 1080,120 C1260,30 1380,190 1460,110"
                  stroke="#F56A32"
                  strokeWidth="7"
                  strokeLinecap="round"
                  opacity="0.85"
                />
              </svg>

              <div className="service-detail-cards-grid" role="list" aria-label="Service highlights">
                {cardsList.map((card, idx) => (
                  <article
                    key={card.number || idx}
                    className={`service-curved-card service-curved-card--${idx + 1}`}
                    role="listitem"
                  >
                    <div className="service-curved-card-top">
                      <span className="service-curved-card-emoji" aria-hidden="true">
                        {card.emoji || '✨'}
                      </span>
                      <span className="service-curved-card-badge">{card.badge}</span>
                    </div>

                    <div className="service-curved-card-num">{card.number}</div>

                    <div className="service-curved-card-body">
                      <h2 className="service-curved-card-title">{card.title}</h2>
                      <p className="service-curved-card-caption">{card.caption}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* 2. TYPES OF SERVICES OR WORK CATEGORIES SECTION (Reference Content) */}
      {categoriesList.length > 0 && (
        <section
          className="service-detail-categories-section"
          aria-labelledby="service-categories-heading"
        >
          <div className="container">
            <div className="service-section-header">
              <span className="service-subheading-eyebrow">Service Offerings</span>
              <h2 id="service-categories-heading" className="service-section-title">
                TYPES OF {activeService.title.toUpperCase()} &amp; WORK CATEGORIES
              </h2>
              <p className="service-section-subtitle">
                Comprehensive technical specifications, fabrication types, and work classifications
                delivered by our specialized {activeService.title} production unit.
              </p>
            </div>

            <div className="service-categories-grid">
              {categoriesList.map((category, idx) => (
                <div key={idx} className="service-category-card">
                  <div className="service-category-card-header">
                    <span className="service-category-icon-box">
                      <Layers size={18} aria-hidden="true" />
                    </span>
                    {category.badge && (
                      <span className="service-category-badge">{category.badge}</span>
                    )}
                  </div>
                  <h3 className="service-category-title">{category.title}</h3>
                  <p className="service-category-desc">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. KEY FEATURES & CAPABILITIES CHECKLIST */}
      <section className="service-detail-overview-band" aria-label="Key features and capabilities">
        <div className="container service-detail-features-grid">
          <div className="service-features-left">
            <span className="service-subheading-eyebrow">Key Features &amp; Benefits</span>
            <h2 className="service-features-heading">
              PRECISION ENGINEERING &amp; 100% IN-HOUSE FABRICATION
            </h2>
            <p className="service-features-desc">
              Every {activeService.title} project is managed end-to-end by Jackson Advertising&apos;s
              team of 20+ dedicated in-house designers, metal fabricators, electrical technicians, and
              certified installation specialists. We ensure strict adherence to safety standards,
              timelines, and long-term warranties.
            </p>
          </div>

          <div className="service-features-right">
            <ul className="service-feature-checklist">
              {activeService.features && activeService.features.length > 0 ? (
                activeService.features.map((feature, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={18} className="service-check-icon" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))
              ) : (
                <>
                  <li>
                    <CheckCircle2 size={18} className="service-check-icon" aria-hidden="true" />
                    <span>Dedicated 3D CAD modeling, engineering calculations &amp; site surveys</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="service-check-icon" aria-hidden="true" />
                    <span>Direct in-house manufacturing using high-grade weatherproof materials</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="service-check-icon" aria-hidden="true" />
                    <span>Strict project timeline adherence with turnkey on-site rigging</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="service-check-icon" aria-hidden="true" />
                    <span>Ongoing preventative maintenance, warranty coverage &amp; 24/7 technical support</span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. DEDICATED RELATED WORK & PROJECTS SECTION */}
      {activeService.projects && activeService.projects.length > 0 && (
        <section
          className="service-detail-projects-section"
          aria-labelledby="service-projects-heading"
        >
          <div className="container">
            <div className="service-section-header">
              <span className="service-subheading-eyebrow">Proven Track Record</span>
              <h2 id="service-projects-heading" className="service-section-title">
                FEATURED {activeService.title.toUpperCase()} PROJECTS
              </h2>
              <p className="service-section-subtitle">
                {activeService.workDescription ||
                  `Recent turnkey installations, bespoke fabrication, and technical executions delivered by Jackson Advertising.`}
              </p>
            </div>

            <div className="service-projects-grid">
              {activeService.projects.map((project, idx) => (
                <article key={idx} className="service-project-card">
                  <div className="service-project-img-frame">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="service-project-img"
                      loading="lazy"
                    />
                    <span className="service-project-badge">{project.category}</span>
                  </div>
                  <div className="service-project-body">
                    <h3 className="service-project-title">{project.title}</h3>
                    <p className="service-project-desc">{project.description}</p>
                    <Link
                      to="/contact"
                      className="service-project-link"
                      aria-label={`Inquire about ${project.title}`}
                    >
                      <span>Inquire About Similar Project</span>
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. DEDICATED SERVICE IMAGE GALLERY */}
      {activeService.galleryImages && activeService.galleryImages.length > 0 && (
        <section
          className="service-detail-gallery-section"
          aria-labelledby="service-gallery-heading"
        >
          <div className="container">
            <div className="service-section-header">
              <span className="service-subheading-eyebrow">Visual Portfolio</span>
              <h2 id="service-gallery-heading" className="service-section-title">
                {activeService.title.toUpperCase()} IMAGE GALLERY
              </h2>
              <p className="service-section-subtitle">
                Curated imagery showcasing real-world material finishes, structural installations,
                and engineering precision from Jackson Advertising.
              </p>
            </div>

            <div className="service-gallery-grid">
              {activeService.galleryImages.map((imgItem, idx) => (
                <figure key={idx} className="service-gallery-item">
                  <div className="service-gallery-frame">
                    <img
                      src={imgItem.url}
                      alt={imgItem.caption || `${activeService.title} work example ${idx + 1}`}
                      className="service-gallery-img"
                      loading="lazy"
                    />
                    <div className="service-gallery-overlay">
                      <span className="service-gallery-overlay-badge">View Detail</span>
                    </div>
                  </div>
                  <figcaption className="service-gallery-caption">
                    <span className="service-gallery-caption-dot" aria-hidden="true" />
                    <span className="service-gallery-caption-text">{imgItem.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. BOTTOM INQUIRY CALL TO ACTION */}
      <section className="service-detail-cta-band" aria-label="Book your service">
        <div className="container service-cta-inner">
          <div className="service-cta-copy">
            <span className="service-cta-tag">Ready to Elevate Your Brand?</span>
            <h2 className="service-cta-title">
              DISCUSS YOUR {activeService.title.toUpperCase()} REQUIREMENTS WITH OUR SPECIALISTS
            </h2>
            <p className="service-cta-desc">
              Schedule a site inspection, request custom 3D architectural renders, or get a
              transparent itemized estimate from our team of 20+ production experts.
            </p>
          </div>

          <div className="service-cta-btns">
            <Link to="/contact" className="btn btn-primary service-bottom-cta-main">
              {activeService.ctaText || 'Request a Quote'}{' '}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phoneHref}`}
              className="btn btn-secondary service-bottom-cta-call"
            >
              <PhoneCall size={16} aria-hidden="true" /> {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
