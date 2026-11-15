import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, MessageSquare } from 'lucide-react';
import { faqData } from '../data/faqData';
import { FAQ_MEDIA } from '../data/siteContent';
import './FaqSection.css';

export default function FaqSection() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="faq-section section-padding" aria-label="Frequently asked questions">
      <div className="container">
        <div className="faq-layout">
          <div className="faq-intro">
            <span className="faq-pill">
              <span className="faq-pill-dot" aria-hidden="true" />
              FAQs
            </span>
            <h2 className="faq-heading">
              FREQUENTLY ASKED
              <br />
              QUESTIONS
            </h2>

            <div className="faq-consult-card">
              <div className="faq-consult-image-frame">
                <img
                  src={FAQ_MEDIA.image}
                  alt={FAQ_MEDIA.alt}
                  loading="lazy"
                  width="360"
                  height="210"
                />
                <div className="faq-consult-overlay">
                  <span className="faq-consult-badge">{FAQ_MEDIA.badge}</span>
                </div>
              </div>
              <div className="faq-consult-body">
                <h3 className="faq-consult-title">{FAQ_MEDIA.title}</h3>
                <p className="faq-consult-text">{FAQ_MEDIA.description}</p>
                <Link to="/contact" className="faq-consult-link">
                  <MessageSquare size={14} aria-hidden="true" />
                  <span>Talk to Our Production Team</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="faq-list">
            {faqData.map((item) => {
              const isOpen = openId === item.id;
              const panelId = `faq-panel-${item.id}`;
              const triggerId = `faq-trigger-${item.id}`;

              return (
                <div key={item.id} className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                  <button
                    id={triggerId}
                    type="button"
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => handleToggle(item.id)}
                  >
                    <span className="faq-question-bubble">{item.question}</span>
                    <ArrowDown
                      size={18}
                      strokeWidth={1.85}
                      className="faq-arrow-icon"
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className="faq-answer-collapse"
                  >
                    <div className="faq-answer-inner">
                      <p className="faq-answer-text">{item.answer}</p>
                      <Link to="/contact" className="faq-contact-link">
                        Contact Us for a Custom Quote
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
