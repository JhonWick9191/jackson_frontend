import './PainPointsSection.css';

const PAIN_POINTS = [
  {
    number: '01',
    emoji: '😑',
    emojiLabel: 'Frustrated expression',
    badge: 'Split Vendors',
    description:
      "Juggling separate vendors for sound, LED walls, and staging leaves your timeline vulnerable to miscommunication and delayed show cues.",
    theme: 'dark'
  },
  {
    number: '02',
    emoji: '🙄',
    emojiLabel: 'Unimpressed expression',
    badge: 'Audio Glitches',
    description:
      "Great keynote speakers and lavish stages lose impact instantly when feedback squeals, weak audio, or lagging wireless mics interrupt the hall.",
    theme: 'slate'
  },
  {
    number: '03',
    emoji: '🥱',
    emojiLabel: 'Tired expression',
    badge: 'Visual Lag',
    description:
      "Low-resolution projection or glitchy LED screen feeds turn important corporate presentations and celebrations into an embarrassing distraction.",
    theme: 'dark'
  },
  {
    number: '04',
    emoji: '🫠',
    emojiLabel: 'Melting overwhelmed expression',
    badge: 'Stressful Cues',
    description:
      "No dedicated show caller or AV director on-site means event hosts and coordinators spend show day firefighting instead of hosting guests.",
    theme: 'slate'
  }
];

export default function PainPointsSection() {
  return (
    <section
      className="pain-points-section"
      aria-labelledby="pain-points-heading"
    >
      <div className="container">
        {/* Header Row */}
        <div className="pain-points-header-row">
          <div className="pain-points-header-left">
            <div className="pain-points-pill">
              <span className="pain-points-pill-dot" aria-hidden="true" />
              <span>Pain Point</span>
            </div>
            <h2 id="pain-points-heading" className="pain-points-heading">
              IF YOUR EVENT ISN&apos;T DELIVERING IMPACT,
              <br />
              IT&apos;S NOT AN EVENT PROBLEM, IT&apos;S A
              <br />
              PRODUCTION PROBLEM
            </h2>
          </div>

          <div className="pain-points-header-right">
            <p className="pain-points-subtitle">
              Most organizers don&apos;t have an event concept problem. They face execution hurdles
              with split vendors, audio dropouts, and delayed cues that all stem from uncoordinated
              AV production. Before we plan anything, here&apos;s what we hear before clients partner
              with us
            </p>
          </div>
        </div>

        {/* Cards Track with Sinusoidal Wave Ribbon */}
        <div className="pain-points-track">
          <svg
            className="pain-points-wave-svg"
            viewBox="0 0 1000 140"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 15 82 C 160 82, 260 22, 360 22 C 465 22, 530 128, 610 128 C 655 128, 665 42, 695 18 C 725 -6, 785 126, 855 126 C 920 126, 955 82, 995 72"
              stroke="#BABBFF"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>

          <div className="pain-points-grid">
            {PAIN_POINTS.map((item, idx) => (
              <article
                key={item.number}
                className={`pain-point-card pain-point-card--${item.theme} pain-point-card--${idx}`}
              >
                <div className="pain-point-card-top">
                  <div className="pain-point-icon-box">
                    <span
                      className="pain-point-emoji"
                      role="img"
                      aria-label={item.emojiLabel}
                    >
                      {item.emoji}
                    </span>
                  </div>
                  <span className="pain-point-pill">{item.badge}</span>
                </div>

                <div className="pain-point-card-body">
                  <p className="pain-point-number">{item.number}</p>
                  <p className="pain-point-desc">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
