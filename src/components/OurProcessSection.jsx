import './OurProcessSection.css';

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Planning',
    description:
      'We audit your venue layout, audience capacity, and show flow to design a complete AV & event production blueprint.',
    circleTheme: 'periwinkle',
    align: 'number-left'
  },
  {
    number: '02',
    title: 'Budgeting',
    description:
      'Transparent, itemized AV rental, LED screen, staging, and crew schedules tailored cleanly around your production goals.',
    circleTheme: 'lavender',
    align: 'number-right'
  },
  {
    number: '03',
    title: 'Staging',
    description:
      'Precision truss rigging, LED video wall calibration, line-array sound checks, and full cue-to-cue technical rehearsals.',
    circleTheme: 'periwinkle',
    align: 'number-left'
  },
  {
    number: '04',
    title: 'Support',
    description:
      'Dedicated on-site audio engineers, lighting operators, and show callers managing every moment through final wrap-up.',
    circleTheme: 'lavender',
    align: 'number-right'
  }
];

export default function OurProcessSection() {
  return (
    <section className="section-padding process-section" aria-labelledby="our-process-heading">
      <div className="container">
        <div className="process-header-centered">
          <div className="process-pill">
            <span className="process-pill-dot" aria-hidden="true" />
            <span>Our Process</span>
          </div>
          <h2 id="our-process-heading" className="process-heading">
            FROM BRIEF TO SEAMLESS LIVE PRODUCTION
          </h2>
        </div>

        <div className="process-timeline">
          <div className="process-center-line" aria-hidden="true" />

          {PROCESS_STEPS.map((step) => {
            const isNumberLeft = step.align === 'number-left';

            return (
              <div
                key={step.number}
                className={`process-step-row ${
                  isNumberLeft ? 'process-step-row--left-num' : 'process-step-row--right-num'
                }`}
              >
                <div className="process-col process-col--left">
                  {isNumberLeft ? (
                    <div
                      className={`process-circle process-circle--${step.circleTheme}`}
                      aria-hidden="true"
                    >
                      {step.number}
                    </div>
                  ) : (
                    <div className="process-text-box process-text-box--right-aligned">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  )}
                </div>

                <div className="process-node-col" aria-hidden="true">
                  <span className="process-node-dot" />
                </div>

                <div className="process-col process-col--right">
                  {isNumberLeft ? (
                    <div className="process-text-box process-text-box--left-aligned">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  ) : (
                    <div
                      className={`process-circle process-circle--${step.circleTheme}`}
                      aria-hidden="true"
                    >
                      {step.number}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
