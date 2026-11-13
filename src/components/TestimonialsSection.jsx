import { testimonialMetrics, testimonialsData } from '../data/testimonialsData';
import './TestimonialsSection.css';

export default function TestimonialsSection() {
  return (
    <section
      className="testimonials-section section-padding"
      aria-label="Client testimonials and performance metrics"
    >
      <div className="container">
        <h2 className="sr-only">Client Testimonials &amp; Impact Metrics</h2>

        <div className="testimonials-bento-grid">
          {testimonialMetrics.map((metric, idx) => (
            <article
              key={metric.id}
              className={`testimonial-stat-card testimonial-stat-card--${metric.tone} testimonial-stat-order-${idx}`}
            >
              <div className="testimonial-stat-top">
                <p className="testimonial-stat-value">{metric.value}</p>
                <p className="testimonial-stat-desc">{metric.description}</p>
              </div>
              <div className="testimonial-stat-logo-wrap">
                <img
                  src={metric.logo}
                  alt={metric.logoAlt}
                  className="testimonial-card-logo"
                  loading="lazy"
                />
              </div>
            </article>
          ))}

          {testimonialsData.map((testimonial, idx) => (
            <article
              key={testimonial.id}
              className={`testimonial-quote-card testimonial-quote-order-${idx < 2 ? idx : 'extra'}`}
            >
              <div className="testimonial-portrait-frame">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-portrait-img"
                  loading="lazy"
                />
                <div className="testimonial-portrait-overlay">
                  <h3 className="testimonial-client-name">{testimonial.name}</h3>
                  {testimonial.role ? (
                    <p className="testimonial-client-role">{testimonial.role}</p>
                  ) : null}
                  {testimonial.brand ? (
                    <p className="testimonial-client-brand">{testimonial.brand}</p>
                  ) : (
                    <p className="testimonial-client-designation">{testimonial.designation}</p>
                  )}
                </div>
              </div>

              <div className="testimonial-quote-body">
                <blockquote className="testimonial-quote-text">
                  {testimonial.review}
                </blockquote>

                <div className="testimonial-quote-footer">
                  {testimonial.logo ? (
                    <img
                      src={testimonial.logo}
                      alt={testimonial.logoAlt || `${testimonial.name} partner logo`}
                      className="testimonial-card-logo"
                      loading="lazy"
                    />
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
