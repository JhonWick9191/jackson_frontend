import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { GET_STARTED_MEDIA } from '../data/siteContent';
import './GetStartedSection.css';

export default function GetStartedSection() {
  return (
    <section
      className="section-padding get-started-section"
      aria-labelledby="get-started-heading"
    >
      <div className="container get-started-grid">
        <div className="get-started-media-card">
          <div className="get-started-image-frame">
            <img
              src={GET_STARTED_MEDIA.image}
              alt={GET_STARTED_MEDIA.alt}
              loading="lazy"
              width="720"
              height="520"
            />
          </div>
          <span className="get-started-reactions" aria-hidden="true">
            😍❤️🔥
          </span>
        </div>

        <div className="get-started-cta-card">
          <svg
            className="get-started-loop"
            viewBox="0 0 180 120"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M28 -12C34 52 96 66 112 24C126 -14 68 -18 82 32C94 74 142 104 188 112"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>

          <div className="get-started-pill">
            <span className="get-started-pill-dot" aria-hidden="true" />
            <span>Get Started</span>
          </div>

          <h2 id="get-started-heading" className="get-started-heading">
            LET&apos;S STAGE AN EVENT WORTH REMEMBERING
          </h2>

          <Link to="/contact" className="btn get-started-btn">
            <span>Get Started</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
