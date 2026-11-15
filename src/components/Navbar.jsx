import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteContent';
import { servicesData } from '../data/servicesData';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services/signage-solutions', hasDropdown: true },
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
  const closeTimerRef = useRef(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  }, [location.pathname]);

  // Navbar scroll background change
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Clear pending timers on unmount
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  // Handle outside click for desktop dropdown
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        if (closeTimerRef.current) {
          clearTimeout(closeTimerRef.current);
        }
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Mouse enter handler (cancels any pending close and opens dropdown)
  const handleDropdownEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setDropdownOpen(true);
  };

  // Mouse leave handler (graceful delay prevents accidental closure during diagonal moves)
  const handleDropdownLeave = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 240);
  };

  const isServicesActive = location.pathname.startsWith('/services');

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

        {/* Desktop Navigation */}
        <nav className="navbar-nav-desktop" aria-label="Main navigation">
          <ul className="navbar-links-list">
            {NAV_LINKS.map((item) => {
              if (item.hasDropdown) {
                return (
                  <li
                    key={item.label}
                    className="navbar-item navbar-dropdown-wrapper"
                    ref={dropdownRef}
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      type="button"
                      className={`navbar-link navbar-dropdown-toggle ${
                        isServicesActive ? 'navbar-link--active' : ''
                      }`}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                      onClick={() => {
                        if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
                        setDropdownOpen((prev) => !prev);
                      }}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={14}
                        className={`navbar-chevron ${dropdownOpen ? 'navbar-chevron--open' : ''}`}
                        aria-hidden="true"
                      />
                    </button>

                    {/* Desktop Dropdown Menu with Hover Safety Bridge */}
                    <div
                      className={`navbar-dropdown-menu ${
                        dropdownOpen ? 'navbar-dropdown-menu--open' : ''
                      }`}
                      role="menu"
                      aria-label="Our Services"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="navbar-dropdown-header">
                        <span className="navbar-dropdown-header-dot" aria-hidden="true" />
                        <span className="navbar-dropdown-header-title">Our Services</span>
                      </div>
                      <ul className="navbar-dropdown-list">
                        {servicesData.map((svc, idx) => (
                          <li key={svc.id} role="none">
                            <NavLink
                              to={`/services/${svc.slug}`}
                              className={({ isActive }) =>
                                `navbar-dropdown-link ${
                                  isActive ? 'navbar-dropdown-link--active' : ''
                                }`
                              }
                              role="menuitem"
                              onClick={() => {
                                if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
                                setDropdownOpen(false);
                              }}
                            >
                              <span className="navbar-dropdown-num">{`0${idx + 1}`}</span>
                              <div className="navbar-dropdown-text">
                                <span className="navbar-dropdown-item-title">{svc.title}</span>
                                <span className="navbar-dropdown-item-tag">{svc.tagline}</span>
                              </div>
                            </NavLink>
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

      {/* Mobile & Tablet Drawer */}
      {menuOpen && (
        <nav className="navbar-mobile-drawer" aria-label="Mobile navigation">
          <ul className="navbar-mobile-list">
            {NAV_LINKS.map((item) => {
              if (item.hasDropdown) {
                return (
                  <li key={item.label} className="navbar-mobile-item">
                    <button
                      type="button"
                      className={`navbar-mobile-link navbar-mobile-accordion-toggle ${
                        isServicesActive ? 'navbar-mobile-link--active' : ''
                      }`}
                      aria-expanded={mobileDropdownOpen}
                      onClick={() => setMobileDropdownOpen((prev) => !prev)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={16}
                        className={`navbar-chevron ${
                          mobileDropdownOpen ? 'navbar-chevron--open' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {/* Mobile Accordion Sub-Menu */}
                    {mobileDropdownOpen && (
                      <ul className="navbar-mobile-sublist">
                        <li className="navbar-mobile-subheading">Our Services</li>
                        {servicesData.map((svc, idx) => (
                          <li key={svc.id}>
                            <NavLink
                              to={`/services/${svc.slug}`}
                              className={({ isActive }) =>
                                `navbar-mobile-sublink ${
                                  isActive ? 'navbar-mobile-sublink--active' : ''
                                }`
                              }
                              onClick={() => {
                                setMenuOpen(false);
                                setMobileDropdownOpen(false);
                              }}
                            >
                              <span className="navbar-mobile-subnum">{`0${idx + 1}`}</span>
                              <span>{svc.title}</span>
                            </NavLink>
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
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              );
            })}

            <li className="navbar-mobile-item navbar-mobile-cta-wrap">
              <Link
                to="/contact"
                className="btn navbar-mobile-cta"
                onClick={() => setMenuOpen(false)}
              >
                Enquiry Now
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
