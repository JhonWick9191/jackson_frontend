import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/siteContent';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services', hasDropdown: true },
  { label: 'Our Work', to: '/our-work' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <header
      className={`site-header ${isHomePage ? 'site-header--overlay' : ''} ${
        scrolled ? 'site-header--scrolled' : ''
      }`}
    >
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo-link" aria-label="Jackson Advertising Home">
          <img
            src={COMPANY_INFO.logoUrl}
            alt="Jackson Advertising Company Logo"
            className="navbar-logo-img"
            width="168"
            height="52"
          />
        </Link>

        <nav className="navbar-nav-desktop" aria-label="Main navigation">
          <ul className="navbar-links-list">
            {NAV_LINKS.map((item) => {
              if (item.hasDropdown) {
                return (
                  <li
                    key={item.to}
                    ref={dropdownRef}
                    className="navbar-item navbar-item--has-dropdown"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      className={`navbar-link navbar-dropdown-trigger ${
                        location.pathname.startsWith('/services') ? 'navbar-link--active' : ''
                      }`}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                      onClick={() => setDropdownOpen((prev) => !prev)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={14}
                        className={`navbar-chevron ${dropdownOpen ? 'navbar-chevron--open' : ''}`}
                        aria-hidden="true"
                      />
                    </button>

                    <div
                      className={`navbar-dropdown-menu ${
                        dropdownOpen ? 'navbar-dropdown-menu--open' : ''
                      }`}
                      role="menu"
                      aria-label="Our Services submenu"
                    >
                      <div className="navbar-dropdown-header">
                        <Link
                          to="/services"
                          className="navbar-dropdown-header-link"
                          onClick={() => setDropdownOpen(false)}
                        >
                          Our Services
                        </Link>
                      </div>

                      <ul className="navbar-dropdown-list">
                        {SERVICES_LIST.map((service, sIdx) => (
                          <li key={service.id} role="none">
                            <Link
                              to={`/services#${service.slug}`}
                              role="menuitem"
                              className="navbar-dropdown-link"
                              onClick={() => setDropdownOpen(false)}
                            >
                              <span className="navbar-dropdown-num">{`0${sIdx + 1}`}</span>
                              <span className="navbar-dropdown-title">{service.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.to} className="navbar-item">
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `navbar-link ${isActive ? 'navbar-link--active' : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="navbar-actions">
          <Link to="/contact" className="btn btn-primary navbar-cta-btn">
            Enquiry Now
          </Link>

          <button
            type="button"
            className="navbar-hamburger"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="navbar-mobile-drawer" aria-label="Mobile navigation">
          <ul className="navbar-mobile-list">
            {NAV_LINKS.map((item) => {
              if (item.hasDropdown) {
                return (
                  <li key={item.to} className="navbar-mobile-item">
                    <div className="navbar-mobile-accordion-row">
                      <NavLink
                        to={item.to}
                        end={item.to === '/'}
                        className={({ isActive }) =>
                          `navbar-mobile-link ${isActive ? 'navbar-mobile-link--active' : ''}`
                        }
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                      <button
                        type="button"
                        className="navbar-mobile-accordion-btn"
                        aria-expanded={mobileDropdownOpen}
                        aria-label="Toggle Services submenu"
                        onClick={() => setMobileDropdownOpen((prev) => !prev)}
                      >
                        <ChevronDown
                          size={18}
                          className={`navbar-chevron ${
                            mobileDropdownOpen ? 'navbar-chevron--open' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </div>

                    {mobileDropdownOpen && (
                      <ul className="navbar-mobile-submenu">
                        {SERVICES_LIST.map((service, sIdx) => (
                          <li key={service.id}>
                            <Link
                              to={`/services#${service.slug}`}
                              className="navbar-mobile-sublink"
                              onClick={() => {
                                setMenuOpen(false);
                                setMobileDropdownOpen(false);
                              }}
                            >
                              <span className="navbar-mobile-subnum">{`0${sIdx + 1}`}</span>
                              <span>{service.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.to} className="navbar-mobile-item">
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `navbar-mobile-link ${isActive ? 'navbar-mobile-link--active' : ''}`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
            <li className="navbar-mobile-cta-wrap">
              <Link to="/contact" className="btn btn-primary navbar-mobile-cta">
                Enquiry Now
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
