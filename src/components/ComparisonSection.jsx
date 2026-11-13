import { X, Check } from 'lucide-react';
import './ComparisonSection.css';

const OTHER_VENDORS_POINTS = [
  'Outdated rental gear with no spare backup',
  'Generic stage setups for every venue',
  'Split vendors for LED, sound, and print',
  'Slow on-site troubleshooting during live cues',
  'Unclear cabling and rushed stage rigging',
  'One-size-fits-all AV packages'
];

const JACKSON_AV_POINTS = [
  'Pre-tested AV racks with full redundant backup',
  'Custom LED screens & lighting tailored to your venue',
  'Single-team coordination from planning to wrap-up',
  'Dedicated FOH audio & show engineers on every cue',
  'Clean, concealed rigging and calibrated acoustics',
  'Flexible packages built around your event scale'
];

export default function ComparisonSection() {
  return (
    <section
      className="section-padding comparison-section"
      aria-labelledby="comparison-heading"
    >
      <div className="container">
        <div className="comparison-header-row">
          <div className="comparison-header-left">
            <div className="comparison-pill">
              <span className="comparison-pill-dot" aria-hidden="true" />
              <span>Comparison</span>
            </div>
            <h2 id="comparison-heading" className="comparison-heading">
              DON&apos;T SETTLE FOR LESS
            </h2>
          </div>

          <p className="comparison-header-subtitle">
            Plenty of vendors supply basic gear—but conferences, concerts, and milestone events
            leave zero room for guesswork. Here is how our technical production team operates
            differently on every stage.
          </p>
        </div>

        <div className="comparison-cards-grid">
          <article className="comparison-card comparison-card--others">
            <h3 className="comparison-card-title">Other Vendors</h3>
            <ul className="comparison-list">
              {OTHER_VENDORS_POINTS.map((point) => (
                <li key={point} className="comparison-list-item">
                  <span className="comparison-icon comparison-icon--x" aria-hidden="true">
                    <X size={13} strokeWidth={2.6} />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="comparison-card comparison-card--brand">
            <span className="comparison-corner-reactions" aria-hidden="true">
              ❤️🔥👍
            </span>
            <h3 className="comparison-card-title">Jackson Advertising</h3>
            <ul className="comparison-list">
              {JACKSON_AV_POINTS.map((point) => (
                <li key={point} className="comparison-list-item">
                  <span className="comparison-icon comparison-icon--check" aria-hidden="true">
                    <Check size={13} strokeWidth={2.8} />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
