import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/siteContent';
import './Footer.css';

const SOCIAL_LINKS = [
  { label: 'IG', name: 'Instagram', href: 'https://www.instagram.com' },
  { label: 'FB', name: 'Facebook', href: 'https://www.facebook.com' },
  { label: 'X', name: 'X (Twitter)', href: 'https://x.com' }
];

const FOOTER_NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services/signage-solutions' },
  { label: 'Our Work', to: '/our-work' },
  { label: 'Contact', to: '/contact' }
];

const FOOTER_UTILITY_LINKS = [
  { label: 'Signage Solutions', to: '/services/signage-solutions' },
  { label: 'Request Quote', to: '/contact' },
  { label: 'Admin Portal', to: '/admin' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-row">
          <div className="footer-social-block">
            <p className="footer-social-label">Social Media</p>
            <ul className="footer-social-list">
              {SOCIAL_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="footer-nav-link"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className="footer-main-nav" aria-label="Footer navigation">
            <ul className="footer-nav-list">
              {FOOTER_NAV_LINKS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="footer-nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-wordmark-wrap">
          <Link to="/" className="footer-wordmark-link" aria-label="Jackson Advertising Home">
            JACKSON ADVERTISING
          </Link>
        </div>

        <div className="footer-bottom-row">
          <ul className="footer-utility-list">
            {FOOTER_UTILITY_LINKS.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="footer-utility-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="footer-credits">
            <span>&copy; {currentYear} {COMPANY_INFO.name}</span>
            <span>Advertising, Signage &amp; Display Specialists</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
