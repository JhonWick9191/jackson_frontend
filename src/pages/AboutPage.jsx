import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Eye,
  Target,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Building,
  GraduationCap,
  Utensils,
  Building2,
  ShoppingBag,
  HeartPulse,
  Landmark,
  ShieldCheck,
  Compass,
  Wrench,
  Layers
} from 'lucide-react';
import SeoHead from '../components/SeoHead';
import { COMPANY_INFO } from '../data/siteContent';
import './AboutPage.css';

const STATS_DATA = [
  {
    id: 'exp',
    label: 'Years of Experience',
    sublabel: 'Delivering excellence across advertising & displays',
    target: 10,
    suffix: '+',
    colorVariant: 'peach'
  },
  {
    id: 'team',
    label: 'Team Members',
    sublabel: 'Skilled in-house designers, fabricators & technicians',
    target: 20,
    suffix: '+',
    colorVariant: 'violet'
  },
  {
    id: 'projects',
    label: 'Projects Executed',
    sublabel: 'Turnkey architectural signage & commercial displays',
    target: 500,
    suffix: '+',
    colorVariant: 'periwinkle'
  },
  {
    id: 'satisfaction',
    label: 'Client Satisfaction',
    sublabel: 'Committed to long-term partnerships and trust',
    target: 100,
    suffix: '%',
    colorVariant: 'mint'
  }
];

const INDUSTRIES_DATA = [
  {
    id: 'shopping-malls',
    number: '01',
    title: 'Shopping Malls',
    category: 'Retail & Commercial Destinations',
    description:
      'High-impact architectural pylon signage, multi-level interactive wayfinding totems, dynamic atrium LED video walls, and customized tenant storefront displays that elevate the shopper journey.',
    imageUrl:
      'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=900&q=80',
    icon: ShoppingBag,
    colorTheme: 'violet'
  },
  {
    id: 'property-developers',
    number: '02',
    title: 'Property Developers',
    category: 'Real Estate & Architectural Ventures',
    description:
      'Turnkey luxury sales gallery signage, heavy-duty perimeter hoarding graphics, 3D architectural brass/acrylic emblems, scale model display plinths, and monument entrance structures.',
    imageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    icon: Landmark,
    colorTheme: 'peach'
  },
  {
    id: 'schools-institutes',
    number: '03',
    title: 'Schools & Institutes',
    category: 'Education & Institutional Campuses',
    description:
      'Campus-wide navigational wayfinding systems, auditorium fine-pitch LED display walls, illuminated institutional monument signs, donor recognition boards, and safety compliance graphics.',
    imageUrl:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80',
    icon: GraduationCap,
    colorTheme: 'blue'
  },
  {
    id: 'restaurants-cafes',
    number: '04',
    title: 'Restaurants & Cafes',
    category: 'Hospitality & Dining Venues',
    description:
      'Custom neon statement art, illuminated 3D storefront fascias, high-brightness digital menu totems, acoustic lightboxes, and ambient environmental branding tailored to unique dining concepts.',
    imageUrl:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80',
    icon: Utensils,
    colorTheme: 'lime'
  },
  {
    id: 'office-towers-residences',
    number: '05',
    title: 'Office Towers & Residences',
    category: 'Corporate Hubs & Prestige Living',
    description:
      'Architectural lobby identification logos, digital directory kiosks, frosted glass privacy manifestations, underground parking wayfinding, and durable exterior identification signage.',
    imageUrl:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
    icon: Building2,
    colorTheme: 'violet'
  },
  {
    id: 'retail-showrooms',
    number: '06',
    title: 'Retail Showrooms',
    category: 'Experiential Brand Stores',
    description:
      'Interactive customer touchpoint kiosks, fine-pitch window display LED panels, modular branded exhibition plinths, 3D backlit feature walls, and promotional campaign installations.',
    imageUrl:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80',
    icon: Building,
    colorTheme: 'peach'
  },
  {
    id: 'hospitals',
    number: '07',
    title: 'Hospitals',
    category: 'Healthcare & Medical Facilities',
    description:
      'High-clarity emergency entrance signage, illuminated departmental directories, ADA-compliant directional wayfinding, hygiene-grade door plaques, and digital health information totems.',
    imageUrl:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80',
    icon: HeartPulse,
    colorTheme: 'mint'
  }
];

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery & Client Vision',
    desc: 'We begin by thoroughly understanding your business objectives, target audience, brand aesthetic, and architectural site requirements.'
  },
  {
    number: '02',
    title: 'Design & 3D Prototyping',
    desc: 'Our design studio translates your concepts into precise 3D architectural renders, material specifications, and engineering schematics.'
  },
  {
    number: '03',
    title: 'In-House Fabrication',
    desc: 'Our 20+ specialized craftsmen fabricate in our dedicated facility with laser cutting, metalwork, LED integration, and rigorous QC testing.'
  },
  {
    number: '04',
    title: 'On-Site Installation & Handover',
    desc: 'Our structural crew manages on-site rigging, electrical calibration, zero-fault testing, and handover on strict project timelines.'
  }
];

export default function AboutPage() {
  const statsSectionRef = useRef(null);
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [counts, setCounts] = useState(() => STATS_DATA.map(() => 0));

  // Animated counters triggered by IntersectionObserver
  useEffect(() => {
    const node = statsSectionRef.current;
    if (!node || statsAnimated) return undefined;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let frameId = null;

    const startCounting = () => {
      if (statsAnimated) return;
      setStatsAnimated(true);

      if (prefersReducedMotion) {
        setCounts(STATS_DATA.map((item) => item.target));
        return;
      }

      const duration = 1600;
      const startTime = performance.now();

      const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Smooth cubic ease out
        const eased = 1 - Math.pow(1 - progress, 3);

        setCounts(STATS_DATA.map((item) => Math.round(item.target * eased)));

        if (progress < 1) {
          frameId = window.requestAnimationFrame(step);
        } else {
          setCounts(STATS_DATA.map((item) => item.target));
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
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [statsAnimated]);

  return (
    <div className="about-page">
      <SeoHead
        title="About Us"
        description="Learn about Jackson Advertising — 10+ years of proven expertise, 20+ dedicated in-house team members, and comprehensive advertising, architectural signage, and display solutions."
        canonicalPath="/about"
      />

      {/* 1. HERO BAND */}
      <section className="about-hero-section" aria-labelledby="about-hero-heading">
        <div className="container about-hero-container">
          <div className="about-hero-badge">
            <span className="about-hero-badge-dot" aria-hidden="true" />
            <span>About Jackson Advertising</span>
          </div>

          <h1 id="about-hero-heading" className="about-hero-title">
            TRANSFORMING VISIONS INTO ICONIC ADVERTISING, SIGNAGE &amp; DISPLAY SOLUTIONS
          </h1>

          <p className="about-hero-lead">
            Jackson Advertising is built on trust, strong business relationships, and enduring
            partnerships. With more than a decade of specialized industry experience and an exclusive
            in-house team of 20+ professionals, we bring brand identities to life through creative
            craftsmanship, engineering precision, and dependable on-time execution.
          </p>

          {/* Quick Stats Pill Strip */}
          <div className="about-hero-kpi-bar" ref={statsSectionRef}>
            {STATS_DATA.map((stat, idx) => (
              <div
                key={stat.id}
                className={`about-kpi-card about-kpi-card--${stat.colorVariant}`}
              >
                <div className="about-kpi-val-wrap">
                  <span className="about-kpi-number">{counts[idx]}</span>
                  <span className="about-kpi-suffix">{stat.suffix}</span>
                </div>
                <h2 className="about-kpi-label">{stat.label}</h2>
                <p className="about-kpi-sublabel">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. ABOUT OUR COMPANY SECTION */}
      <section
        className="section-padding about-overview-section"
        aria-labelledby="overview-heading"
      >
        <div className="container about-overview-grid">
          {/* Left Column: Narrative Copy */}
          <div className="about-overview-copy">
            <div className="about-pill">
              <Sparkles size={14} className="about-pill-icon" aria-hidden="true" />
              <span>Our Story &amp; Philosophy</span>
            </div>

            <h2 id="overview-heading" className="about-section-heading">
              BUILT ON TRUST, CREATIVE VISION &amp; LONG-TERM CLIENT PARTNERSHIPS
            </h2>

            <div className="about-narrative-content">
              <p>
                <strong>Jackson Advertising</strong> is built on trust, strong business
                relationships, and long-term partnerships with clients. We believe every successful
                project begins with deeply understanding our client&apos;s vision, commercial
                objectives, and strategic expectations.
              </p>
              <p>
                Our experienced team works closely with clients to transform their ideas into creative
                concepts and professionally executed final products. From the initial discussion and
                planning to 3D design, production, installation, and final execution, we focus on
                delivering quality results while respecting strict project timelines.
              </p>
              <p>
                With more than <strong>10 years of experience</strong> and a dedicated team of{' '}
                <strong>20+ people</strong>, we have developed the specialized expertise and
                infrastructure to handle diverse advertising, branding, architectural signage, and
                display requirements across varied sectors.
              </p>
              <p>
                We have an exclusive, well-equipped in-house team committed to understanding changing
                market demands and providing creative, practical, and effective solutions. Our approach
                combines creativity, technical knowledge, teamwork, and meticulous attention to detail
                to help businesses communicate their brand identity effectively.
              </p>
            </div>

            {/* Core Values Feature Checklist */}
            <div className="about-feature-grid">
              <div className="about-feature-item">
                <div className="about-feature-icon-box">
                  <CheckCircle2 size={18} className="about-feature-check" />
                </div>
                <div>
                  <h3 className="about-feature-title">Client-Centric Collaboration</h3>
                  <p className="about-feature-desc">
                    Transparent communication from day one, ensuring your vision is precisely reflected.
                  </p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="about-feature-icon-box">
                  <Wrench size={18} className="about-feature-check" />
                </div>
                <div>
                  <h3 className="about-feature-title">Turnkey In-House Production</h3>
                  <p className="about-feature-desc">
                    Fabrication, assembly, and testing handled directly by our 20+ member in-house crew.
                  </p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="about-feature-icon-box">
                  <ShieldCheck size={18} className="about-feature-check" />
                </div>
                <div>
                  <h3 className="about-feature-title">Strict Quality &amp; Safety Standards</h3>
                  <p className="about-feature-desc">
                    Weatherproof materials, commercial-grade components, and durable engineering.
                  </p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="about-feature-icon-box">
                  <Award size={18} className="about-feature-check" />
                </div>
                <div>
                  <h3 className="about-feature-title">Timeline Commitment</h3>
                  <p className="about-feature-desc">
                    Reliable scheduling and punctual handover for retail openings, exhibitions, and events.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Collage */}
          <div className="about-overview-media">
            <div className="about-collage-wrapper">
              <div className="about-collage-frame about-collage-frame--main">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80"
                  alt="Jackson Advertising in-house engineering and fabrication studio"
                  className="about-collage-img"
                  loading="lazy"
                />
              </div>

              <div className="about-collage-frame about-collage-frame--secondary">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=750&q=80"
                  alt="Jackson Advertising creative planning and client design review"
                  className="about-collage-img"
                  loading="lazy"
                />
              </div>

              {/* Floating Highlight Card 1 */}
              <div className="about-floating-card about-floating-card--exp">
                <span className="about-floating-badge-icon">
                  <Sparkles size={16} />
                </span>
                <div>
                  <span className="about-floating-val">10+ Years</span>
                  <span className="about-floating-lbl">Industry Experience</span>
                </div>
              </div>

              {/* Floating Highlight Card 2 */}
              <div className="about-floating-card about-floating-card--team">
                <span className="about-floating-badge-icon">
                  <Users size={16} />
                </span>
                <div>
                  <span className="about-floating-val">20+ Members</span>
                  <span className="about-floating-lbl">In-House Experts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR VISION & OUR MISSION */}
      <section
        className="section-padding about-vm-section"
        aria-labelledby="vision-mission-heading"
      >
        <div className="container">
          <div className="about-vm-header">
            <div className="about-pill">
              <Compass size={14} className="about-pill-icon" aria-hidden="true" />
              <span>Guiding Principles</span>
            </div>
            <h2 id="vision-mission-heading" className="about-section-heading">
              DRIVEN BY VISION, COMMITTED TO OUR MISSION
            </h2>
            <p className="about-section-subheading">
              Our guiding principles inspire our craftsmen, designers, and project managers to set new
              benchmarks in advertising, architectural fabrication, and customer excellence.
            </p>
          </div>

          <div className="about-vm-grid">
            {/* Our Vision Card */}
            <article className="about-vm-card about-vm-card--vision">
              <div className="about-vm-card-top">
                <div className="about-vm-icon-bubble">
                  <Eye size={28} aria-hidden="true" />
                </div>
                <span className="about-vm-tag">Future Horizon</span>
              </div>

              <h3 className="about-vm-card-title">Our Vision</h3>

              <blockquote className="about-vm-quote">
                &ldquo;To build a strong, successful, and globally recognized organization that
                serves as a role model for future business leaders. We aim to become a strong market
                player, continuously improve our capabilities, and expand our presence globally
                through innovation, quality, and lasting business relationships.&rdquo;
              </blockquote>

              <ul className="about-vm-checklist">
                <li>
                  <CheckCircle2 size={16} className="about-vm-check" />
                  <span>Continuous technological innovation and facility upgrades</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="about-vm-check" />
                  <span>Expanding global reach through lasting client trust</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="about-vm-check" />
                  <span>Setting the benchmark as role models for future leaders</span>
                </li>
              </ul>
            </article>

            {/* Our Mission Card */}
            <article className="about-vm-card about-vm-card--mission">
              <div className="about-vm-card-top">
                <div className="about-vm-icon-bubble">
                  <Target size={28} aria-hidden="true" />
                </div>
                <span className="about-vm-tag">Operational Purpose</span>
              </div>

              <h3 className="about-vm-card-title">Our Mission</h3>

              <blockquote className="about-vm-quote">
                &ldquo;Our mission is to achieve outstanding results through strong determination,
                hard work, creativity, and a skilled in-house team. We are committed to
                understanding our clients&apos; requirements, delivering effective advertising and
                branding solutions, maintaining quality standards, and building long-term
                relationships based on trust and excellence.&rdquo;
              </blockquote>

              <ul className="about-vm-checklist">
                <li>
                  <CheckCircle2 size={16} className="about-vm-check" />
                  <span>Strong determination and relentless attention to craftsmanship</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="about-vm-check" />
                  <span>Delivering high-impact, practical, and effective brand solutions</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="about-vm-check" />
                  <span>Maintaining exacting quality standards on every single project</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* 4. OUR PROJECTS / INDUSTRIES WE SERVE */}
      <section
        className="section-padding about-industries-section"
        aria-labelledby="industries-heading"
      >
        <div className="container">
          <div className="about-industries-header">
            <div className="about-pill">
              <Layers size={14} className="about-pill-icon" aria-hidden="true" />
              <span>Projects &amp; Sectors</span>
            </div>
            <h2 id="industries-heading" className="about-section-heading">
              INDUSTRIES WE SERVE &amp; TRANSFORM
            </h2>
            <p className="about-section-subheading">
              With specialized production capabilities and architectural engineering expertise, we
              serve prestigious clients across diverse commercial, residential, and institutional
              landscapes.
            </p>
          </div>

          <div className="about-industries-grid">
            {INDUSTRIES_DATA.map((industry) => {
              const IconComp = industry.icon;
              return (
                <article
                  key={industry.id}
                  className={`about-industry-card about-industry-card--${industry.colorTheme}`}
                >
                  <div className="about-industry-img-box">
                    <img
                      src={industry.imageUrl}
                      alt={`${industry.title} advertising and signage by Jackson Advertising`}
                      className="about-industry-img"
                      loading="lazy"
                    />
                    <div className="about-industry-index">{industry.number}</div>
                    <div className="about-industry-icon-pill">
                      <IconComp size={16} aria-hidden="true" />
                    </div>
                  </div>

                  <div className="about-industry-content">
                    <span className="about-industry-category">{industry.category}</span>
                    <h3 className="about-industry-title">{industry.title}</h3>
                    <p className="about-industry-desc">{industry.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. THE JACKSON ADVANTAGE & EXECUTION PROCESS */}
      <section
        className="section-padding about-process-section"
        aria-labelledby="process-heading"
      >
        <div className="container">
          <div className="about-process-header">
            <div className="about-pill">
              <Sparkles size={14} className="about-pill-icon" aria-hidden="true" />
              <span>The Jackson Advantage</span>
            </div>
            <h2 id="process-heading" className="about-section-heading">
              HOW WE DELIVER QUALITY FROM INITIAL CONCEPT TO FINAL INSTALLATION
            </h2>
            <p className="about-section-subheading">
              A streamlined, accountable 4-step framework combining design empathy, engineering rigor,
              and punctual on-site execution.
            </p>
          </div>

          <div className="about-process-grid">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="about-process-step-card">
                <div className="about-process-step-number">{step.number}</div>
                <h3 className="about-process-step-title">{step.title}</h3>
                <p className="about-process-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BAND */}
      <section className="about-cta-band" aria-label="Partner with Jackson Advertising">
        <div className="container about-cta-inner">
          <div className="about-cta-copy">
            <span className="about-cta-eyebrow">Ready to Collaborate?</span>
            <h2 className="about-cta-title">
              LET&apos;S ELEVATE YOUR BRAND PRESENCE WITH PRECISION &amp; IMPACT
            </h2>
            <p className="about-cta-desc">
              Connect with our experienced team of 20+ advertising, signage, and display specialists.
              We are ready to evaluate your architectural, retail, or commercial requirements.
            </p>
          </div>

          <div className="about-cta-actions">
            <Link to="/contact" className="btn btn-primary about-cta-btn-main">
              Start Your Project <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link to="/services" className="btn btn-secondary about-cta-btn-sub">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
