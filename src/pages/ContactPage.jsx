import SeoHead from '../components/SeoHead';
import ContactSection from '../components/ContactSection';

export default function ContactPage() {
  return (
    <>
      <SeoHead
        title="Contact Us"
        description="Get in touch with Jackson Advertising via phone, email, WhatsApp, or our online enquiry form for your signage, LED displays, and branding needs."
        canonicalPath="/contact"
      />
      <section className="page-hero-band">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Connect with our team to discuss your next architectural signage, LED display installation,
            kiosk, exhibition stall, or branding requirement.
          </p>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
