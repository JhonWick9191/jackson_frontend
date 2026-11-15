import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Phone, MessageSquare, RefreshCw } from 'lucide-react';
import { bannerApi } from '../services/api';
import { HOME_HERO_BANNERS } from '../data/siteContent';
import BannerEnquiryModal from './BannerEnquiryModal';
import './BannerSlider.css';

const AUTO_SLIDE_INTERVAL_MS = 6000;

export default function BannerSlider() {
  const [banners, setBanners] = useState(HOME_HERO_BANNERS);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isPaused, setIsPaused] = useState(false);
  const [modalState, setModalState] = useState({
    isOpen: false,
    banner: null,
    triggerSource: 'banner'
  });

  const loadBanners = useCallback(async () => {
    try {
      const data = await bannerApi.getActive();
      const list = Array.isArray(data?.banners) && data.banners.length > 0 ? data.banners : HOME_HERO_BANNERS;
      setBanners(list);
      setActiveIndex(0);
      setError('');
    } catch {
      // Gracefully fall back to centralized showcase banners instead of showing an empty box
      setBanners(HOME_HERO_BANNERS);
      setError('');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadBanners();
  }, [loadBanners]);

  useEffect(() => {
    if (banners.length <= 1 || isPaused || modalState.isOpen) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banners.length);
    }, AUTO_SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [banners.length, isPaused, modalState.isOpen]);

  const handlePrev = () => {
    if (banners.length <= 1) return;
    setActiveIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleNext = () => {
    if (banners.length <= 1) return;
    setActiveIndex((prev) => (prev + 1) % banners.length);
  };

  const openEnquiryModal = (banner, triggerSource) => {
    setModalState({
      isOpen: true,
      banner,
      triggerSource
    });
  };

  const closeEnquiryModal = useCallback(() => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  if (loading) {
    return (
      <section className="hero-banner hero-banner--skeleton" aria-label="Featured event services">
        <div className="container hero-skeleton-content">
          <div className="skeleton-pill" />
          <div className="skeleton-heading" />
          <div className="skeleton-text" />
          <div className="skeleton-actions">
            <div className="skeleton-btn" />
            <div className="skeleton-btn" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="hero-banner hero-banner--fallback" aria-label="Featured event services">
        <div className="container hero-fallback-content">
          <h1>Event Production &amp; Audio Visual Specialists</h1>
          <p>{error}</p>
          <div className="hero-fallback-actions">
            <button type="button" className="btn btn-accent" onClick={loadBanners}>
              <RefreshCw size={16} />
              Retry Loading
            </button>
            <Link to="/contact" className="btn btn-ghost-light">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (banners.length === 0) {
    return (
      <section className="hero-banner hero-banner--fallback" aria-label="Featured event services">
        <div className="container hero-fallback-content">
          <h1>Event Production &amp; Audio Visual Services</h1>
          <p>
            No active hero banners are published yet. Log in to the Admin Portal to publish image or
            video showcase banners.
          </p>
          <div className="hero-fallback-actions">
            <Link to="/contact" className="btn btn-accent">
              Request an Event Quote
            </Link>
            <Link to="/admin" className="btn btn-ghost-light">
              Open Admin Portal
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const currentBanner = banners[activeIndex] || banners[0];

  return (
    <>
      <section
        className="hero-banner"
        aria-roledescription="carousel"
        aria-label="Event Production Highlights"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="hero-slides-stage">
          {banners.map((banner, index) => {
            const isActive = index === activeIndex;
            const isVideo = banner.mediaType === 'video';

            return (
              <div
                key={banner._id || banner.id || index}
                className={`hero-slide ${isActive ? 'hero-slide--active' : ''}`}
                aria-hidden={!isActive}
              >
                <div className="hero-media-layer">
                  {isVideo && isActive ? (
                    <video
                      key={banner.videoUrl}
                      className="hero-media-element"
                      src={banner.videoUrl}
                      poster={banner.imageUrl || undefined}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  ) : banner.imageUrl ? (
                    <img
                      className="hero-media-element"
                      src={banner.imageUrl}
                      alt={banner.heading || banner.title}
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  ) : (
                    <div className="hero-media-placeholder" />
                  )}
                  <div className="hero-dark-overlay" />
                </div>

                <div className="container hero-content-wrap">
                  <div className="hero-text-block">
                    <span className="hero-banner-badge">{banner.title}</span>
                    {isActive ? (
                      <h1 className="hero-heading">{banner.heading}</h1>
                    ) : (
                      <h2 className="hero-heading">{banner.heading}</h2>
                    )}
                    <p className="hero-description">{banner.description}</p>

                    <div className="hero-cta-group">
                      {banner.button1Enabled !== false && (
                        <button
                          type="button"
                          className="btn btn-accent hero-cta-btn"
                          onClick={() => openEnquiryModal(banner, 'button1')}
                        >
                          <Phone size={17} aria-hidden="true" />
                          {banner.button1Text || 'Call Us'}
                        </button>
                      )}

                      {banner.button2Enabled !== false && (
                        <button
                          type="button"
                          className="btn btn-ghost-light hero-cta-btn"
                          onClick={() => openEnquiryModal(banner, 'button2')}
                        >
                          <MessageSquare size={17} aria-hidden="true" />
                          {banner.button2Text || 'Enquiry'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {banners.length > 1 && (
          <>
            <button
              type="button"
              className="hero-nav-arrow hero-nav-arrow--prev"
              onClick={handlePrev}
              aria-label="Previous banner"
            >
              <ChevronLeft size={26} />
            </button>
            <button
              type="button"
              className="hero-nav-arrow hero-nav-arrow--next"
              onClick={handleNext}
              aria-label="Next banner"
            >
              <ChevronRight size={26} />
            </button>

            <div className="hero-pagination-bar">
              <div className="container hero-pagination-inner">
                <div className="hero-dots" role="tablist" aria-label="Select banner slide">
                  {banners.map((item, idx) => (
                    <button
                      key={item._id}
                      type="button"
                      role="tab"
                      aria-selected={idx === activeIndex}
                      aria-label={`Show banner ${idx + 1}: ${item.title}`}
                      className={`hero-dot ${idx === activeIndex ? 'hero-dot--active' : ''}`}
                      onClick={() => setActiveIndex(idx)}
                    />
                  ))}
                </div>
                <span className="hero-slide-counter">
                  {String(activeIndex + 1).padStart(2, '0')} /{' '}
                  {String(banners.length).padStart(2, '0')} — {currentBanner.title}
                </span>
              </div>
            </div>
          </>
        )}
      </section>

      <BannerEnquiryModal
        isOpen={modalState.isOpen}
        banner={modalState.banner}
        triggerSource={modalState.triggerSource}
        onClose={closeEnquiryModal}
      />
    </>
  );
}
