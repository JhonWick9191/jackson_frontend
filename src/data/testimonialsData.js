import logo1 from '../assets/testimonials/logo-1.png';
import logo2 from '../assets/testimonials/logo-2.png';
import logo3 from '../assets/testimonials/logo-3.png';
import logo4 from '../assets/testimonials/logo-4.png';
import logo5 from '../assets/testimonials/logo-5.png';
import logo6 from '../assets/testimonials/logo-6.png';
import marcusImg from '../assets/testimonials/marcus.png';
import priyaImg from '../assets/testimonials/priya.png';

/**
 * Testimonials and performance metric data matching the reference design.
 */
export const testimonialsData = [
  {
    id: 1,
    name: 'Marcus Tan',
    role: 'VP of Growth Brand:',
    brand: 'FitPulse',
    designation: 'VP of Growth Brand: FitPulse',
    review:
      "Thrilled to have Contina as our content partner. It's not just about posting more it's about compounding the kind of trust that turns a follower into a customer.",
    image: marcusImg,
    logo: logo3,
    logoAlt: 'LOGOIPSUM logo'
  },
  {
    id: 2,
    name: 'Priya Nathan',
    role: 'Chief Marketing Officer',
    brand: 'Brand: Hearth & Grain',
    designation: 'Chief Marketing Officer Brand: Hearth & Grain',
    review:
      'Our team finally cracked the code on treating social like a product, not a chore. Contina gave us a repeatable system — and the confidence to post without second-guessing every caption.',
    image: priyaImg,
    logo: logo4,
    logoAlt: 'logoipsum logo'
  }
];

export const testimonialMetrics = [
  {
    id: 'stat-hours',
    value: '12,000+',
    description: 'Hours of content planning saved annually',
    tone: 'peach',
    logo: logo1,
    logoAlt: 'LGPSIVI logo'
  },
  {
    id: 'stat-impressions',
    value: '9.2M',
    description: 'Impressions driven by a single UGC hook in its first week',
    tone: 'pink',
    logo: logo2,
    logoAlt: 'LGPSM logo'
  },
  {
    id: 'stat-automation',
    value: '70%',
    description: 'of UGC sourcing now automated with Contina',
    tone: 'lavender',
    logo: logo5,
    logoAlt: 'Logoipsum logo'
  },
  {
    id: 'stat-hooks',
    value: '1,200',
    description: 'scroll-stopping hooks scripted by Contina in 24 hours',
    tone: 'lime',
    logo: logo6,
    logoAlt: 'LOGOIPSUM logo'
  }
];
