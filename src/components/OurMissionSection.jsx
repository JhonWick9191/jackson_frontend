import { useEffect, useRef, useState } from 'react';
import './OurMissionSection.css';

const MISSION_STATS = [
  {
    id: 'experience',
    label: 'YEARS OF EXPERIENCE',
    target: 10,
    suffix: '+',
    badgeVariant: 'primary'
  },
  {
    id: 'employees',
    label: 'NUMBER OF EMPLOYEES',
    target: 35,
    suffix: '+',
    badgeVariant: 'secondary'
  },
  {
    id: 'projects',
    label: 'PROJECTS DONE',
    target: 200,
    suffix: '+',
    badgeVariant: 'primary'
  },
  {
    id: 'satisfaction',
    label: 'AVERAGE CLIENT SATISFACTION',
    target: 100,
    suffix: '%',
    badgeVariant: 'secondary'
  }
];

const MISSION_IMAGE_1 =
  'https://pub-60262726c6594670a8cb8e295fb9b6a4.r2.dev/pexels-luka-franzi-1256113832-40735374.jpg';
const MISSION_IMAGE_2 =
  'https://pub-60262726c6594670a8cb8e295fb9b6a4.r2.dev/pexels-aysin-15564467.jpg';

const ANIMATION_DURATION_MS = 1400;

export default function OurMissionSection() {
  const sectionRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const [counts, setCounts] = useState(() => MISSION_STATS.map(() => 0));

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || hasAnimatedRef.current) return undefined;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let frameId = null;

    const startCounting = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      if (prefersReducedMotion) {
        setCounts(MISSION_STATS.map((item) => item.target));
        return;
      }

      const startTime = performance.now();

      const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / ANIMATION_DURATION_MS, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        setCounts(MISSION_STATS.map((item) => Math.round(item.target * eased)));

        if (progress < 1) {
          frameId = window.requestAnimationFrame(step);
        } else {
          setCounts(MISSION_STATS.map((item) => item.target));
        }
      };

      frameId = window.requestAnimationFrame(step);
    };

    if (!('IntersectionObserver' in window)) {
      startCounting();
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          startCounting();
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding mission-section"
      aria-labelledby="our-mission-heading"
    >
      <div className="container mission-grid">
        <div className="mission-left-col">
          <div className="mission-pill">
            <span className="mission-pill-dot" aria-hidden="true" />
            <span>Our Mission</span>
          </div>

          <h2 id="our-mission-heading" className="mission-heading">
            WE TURN EVERY EVENT INTO AN EXPERIENCE YOU CAN MEASURE
          </h2>

          <p className="mission-intro">
            Great event production goes far beyond rigging lights and speakers. It is about
            precision audio, crystal-clear LED visuals, seamless coordination, and technical
            reliability that lets your audience stay completely immersed.
          </p>

          <ul className="mission-stats-list">
            {MISSION_STATS.map((stat, idx) => (
              <li key={stat.id} className="mission-stat-row">
                <span className="mission-stat-label">{stat.label}</span>
                <span className={`mission-stat-badge mission-stat-badge--${stat.badgeVariant}`}>
                  {counts[idx]}
                  {stat.suffix}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mission-right-col">
          <div className="mission-collage">
            <svg
              className="mission-decorative-loop"
              viewBox="0 0 180 260"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M15 28C72 10 142 36 132 82C122 126 42 138 34 106C26 74 96 68 128 118C158 164 134 224 74 238"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>

            <div className="mission-photo-frame mission-photo-frame--primary">
              <img
                src={MISSION_IMAGE_1}
                alt="Live event lighting and stage production atmosphere"
                loading="lazy"
                width="460"
                height="480"
              />
            </div>

            <div className="mission-photo-frame mission-photo-frame--secondary">
              <img
                src={MISSION_IMAGE_2}
                alt="Audience and AV visual experience at a live production"
                loading="lazy"
                width="260"
                height="240"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
