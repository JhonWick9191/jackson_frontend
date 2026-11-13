import partner1 from '../assets/logos/partner-1.svg';
import partner2 from '../assets/logos/partner-2.svg';
import partner3 from '../assets/logos/partner-3.svg';
import partner4 from '../assets/logos/partner-4.svg';
import partner5 from '../assets/logos/partner-5.svg';
import partner6 from '../assets/logos/partner-6.svg';
import './LogoCarousel.css';

const PARTNER_LOGOS = [
  { id: 'apex-summits', name: 'ApexSummits', src: partner1 },
  { id: 'veloce-live', name: 'VeloceLive', src: partner2 },
  { id: 'crestline', name: 'Crestline', src: partner3 },
  { id: 'nova-stage', name: 'NovaStage', src: partner4 },
  { id: 'medtech-expo', name: 'MedTechExpo', src: partner5 },
  { id: 'horizon-gala', name: 'HorizonGala', src: partner6 }
];

export default function LogoCarousel() {
  return (
    <section className="logo-carousel-section" aria-label="Trusted brands and production partners">
      <div className="logo-carousel-shell">
        <p className="logo-carousel-caption">
          Trusted by 60+ brands &middot; 500+ live productions &middot; 10+ years in AV
        </p>

        <div className="logo-marquee-viewport">
          <div className="logo-marquee-track">
            <div className="logo-marquee-group">
              {PARTNER_LOGOS.map((logo) => (
                <div key={`a-${logo.id}`} className="logo-marquee-item">
                  <img
                    src={logo.src}
                    alt={`${logo.name} partner logo`}
                    className="logo-marquee-img"
                    width="152"
                    height="38"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="logo-marquee-group" aria-hidden="true">
              {PARTNER_LOGOS.map((logo) => (
                <div key={`b-${logo.id}`} className="logo-marquee-item">
                  <img
                    src={logo.src}
                    alt=""
                    className="logo-marquee-img"
                    width="152"
                    height="38"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
