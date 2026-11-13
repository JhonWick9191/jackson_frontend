import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ourWorkData } from '../data/ourWorkData';
import './PortfolioSection.css';

const FILTER_CATEGORIES = [
  'All',
  'Conferences and Conclaves',
  'LED Screen',
  'Wedding and Birthday Parties',
  'Print Design',
  'Audio Visual Support',
  'Event Photography & Videography',
  'Event Coordination'
];

export default function PortfolioSection({ preview = false }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const visibleItems = preview
    ? ourWorkData.slice(0, 7)
    : selectedCategory === 'All'
      ? ourWorkData
      : ourWorkData.filter((item) => item.category === selectedCategory);

  return (
    <section className="section-padding work-section" aria-labelledby="portfolio-heading">
      <div className="container">
        <div className="work-header-row">
          <div className="work-header-left">
            <div className="work-pill">
              <span className="work-pill-dot" aria-hidden="true" />
              <span>Our Work</span>
            </div>
            <h2 id="portfolio-heading" className="work-heading">
              RESULTS THAT SPEAK LOUDER THAN WORDS
            </h2>
          </div>

          <p className="work-header-subtitle">
            Explore real event productions, fine-pitch LED installations, concert sound rigs, and
            turnkey stage environments built by our technical crew.
          </p>
        </div>

        {!preview && (
          <div className="work-filter-bar" role="tablist" aria-label="Filter projects by category">
            {FILTER_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selectedCategory === category}
                className={`work-filter-btn ${
                  selectedCategory === category ? 'work-filter-btn--active' : ''
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        <div className="work-stack-list">
          {visibleItems.map((project, index) => (
            <article
              key={project.id}
              className="work-card-sticky"
            >
              <div
                className="work-card-shell"
                data-bg={project.backgroundColor}
              >
                <div className="work-folder-tab">
                  {project.number || String(index + 1).padStart(2, '0')}
                </div>

                <div className="work-card-body">
                  <div className="work-card-left">
                    <div>
                      <h3 className="work-card-title">{project.title}</h3>
                      <p className="work-card-category">Category: {project.category}</p>
                    </div>

                    {Array.isArray(project.metrics) && project.metrics.length > 0 && (
                      <div className="work-metrics-row">
                        {project.metrics.map((metric) => (
                          <div key={metric.label} className="work-metric-item">
                            <strong className="work-metric-value">{metric.value}</strong>
                            <span className="work-metric-label">{metric.label}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="work-card-footer">
                      <p className="work-card-desc">Result: {project.description}</p>
                      <Link to="/contact" className="btn work-card-enquiry-btn">
                        Enquiry Now
                        <ArrowRight size={15} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>

                  <div className="work-card-right">
                    <div className="work-card-image-wrap">
                      <img
                        src={project.image}
                        alt={`${project.title} — ${project.category}`}
                        loading="lazy"
                        width="520"
                        height="390"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {preview && (
          <div className="work-show-more-wrap">
            <Link to="/our-work" className="btn btn-primary work-show-more-btn">
              Show More
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
