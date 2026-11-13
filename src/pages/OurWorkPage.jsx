import SeoHead from '../components/SeoHead';
import PortfolioSection from '../components/PortfolioSection';

export default function OurWorkPage() {
  return (
    <>
      <SeoHead
        title="Our Work"
        description="Browse completed event productions, LED stage installations, corporate conferences, wedding sound & lighting rigs, and print branding."
        canonicalPath="/our-work"
      />
      <section className="page-hero-band">
        <div className="container">
          <h1>Our Work</h1>
          <p>
            Featured live stages, corporate conclaves, LED installations, and bespoke celebrations
            crafted by our production crew.
          </p>
        </div>
      </section>
      <PortfolioSection preview={false} />
    </>
  );
}
