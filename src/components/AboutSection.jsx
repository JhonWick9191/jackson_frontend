import { Link } from 'react-router-dom';
import { Award, ShieldCheck, Headphones, Layers } from 'lucide-react';
import './AboutSection.css';

const PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Redundant Show Reliability',
    text: 'Dual-path signal routing, backup switchers, and pre-tested AV racks before every door opens.'
  },
  {
    icon: Headphones,
    title: 'In-House Technical Crew',
    text: 'Experienced audio engineers, LED technicians, lighting directors, and show callers on every project.'
  },
  {
    icon: Layers,
    title: 'Single-Vendor Integration',
    text: 'LED walls, sound, lighting, print signage, and multi-cam photography coordinated seamlessly.'
  },
  {
    icon: Award,
    title: 'Precision Production Standards',
    text: 'Clean rigging, hidden cabling, calibrated acoustics, and crisp visual presentation.'
  }
];

export default function AboutSection({ compact = false }) {
  return (
    null
  );
}
