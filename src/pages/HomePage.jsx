import { Link } from 'react-router-dom';
import SeoHead from '../components/SeoHead';
import BannerSlider from '../components/BannerSlider';
import LogoCarousel from '../components/LogoCarousel';
import PainPointsSection from '../components/PainPointsSection';
import OurMissionSection from '../components/OurMissionSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import OurProcessSection from '../components/OurProcessSection';
import ComparisonSection from '../components/ComparisonSection';
import GetStartedSection from '../components/GetStartedSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FaqSection from '../components/FaqSection';
import HomeContactSection from '../components/HomeContactSection';
import HomeContactDetailsSection from '../components/HomeContactDetailsSection';
import AboutSection from '../components/AboutSection';
import './HomePage.css';

export default function HomePage() {
  return (
    <>
      <SeoHead
        title="Advertising, Signage & LED Screen Solutions"
        description="Jackson Advertising delivers turnkey Signage Solutions, LED Screen Supply & Installation, Kiosk Design, Exhibition Stalls, Branding Solutions, and Promotional Corporate Gifts."
        canonicalPath="/"
      />

      <BannerSlider />

      <LogoCarousel />

      <PainPointsSection />

      <OurMissionSection />

      <ServicesSection preview />

      <PortfolioSection preview />

      <OurProcessSection />

      <ComparisonSection />

      <GetStartedSection />

      <TestimonialsSection />

      <FaqSection />

      <HomeContactSection />

      <HomeContactDetailsSection />

      <AboutSection compact />

      <section className="home-cta-band" aria-label="Book your event production">
        <div className="container home-cta-inner">
          <div>
            <h2>Ready to Elevate Your Next Event?</h2>
            <p>
              Speak with our AV architects for custom LED stage plans, sound engineering, and full
              production quotes.
            </p>
          </div>
          <Link to="/contact" className="btn btn-accent">
            Get a Production Quote
          </Link>
        </div>
      </section>
    </>
  );
}
