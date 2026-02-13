import { useState, useEffect } from 'react';
import './App.css';

/* Logo: cyan square with white monitor icon */
function LogoIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-icon">
      <rect width="32" height="32" rx="6" fill="#22D3EE" />
      <rect x="6" y="7" width="20" height="12" rx="1" fill="white"/><rect x="13" y="19" width="6" height="3" rx="0.5" fill="white"/>
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const openDemoModal = () => {
    setDemoModalOpen(true);
    setMenuOpen(false);
  };
  const closeDemoModal = () => setDemoModalOpen(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setDemoModalOpen(false);
      }
    };
    if (menuOpen || demoModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [menuOpen, demoModalOpen]);

  return (
    <div className="landing">
      {/* Help widget */}
      <a href="#help" className="help-widget" aria-label="Help">?</a>

      {/* Header */}
      <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
        <nav className="nav">
          {menuOpen && (
            <div
              className="nav-overlay"
              onClick={closeMenu}
              aria-label="Close menu"
            />
          )}
          <a href="#home" className="logo-wrap" onClick={closeMenu}>
            <LogoIcon />
            <span className="logo-text">ORATOR</span>
          </a>
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
          <ul className="nav-links">
            <li><a href="#features" onClick={closeMenu}>Features</a></li>
            <li><a href="#benefits" onClick={closeMenu}>Benefits</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            <li><a href="#demo" className="btn btn-cyan" onClick={(e) => { e.preventDefault(); openDemoModal(); }}>Request Demo</a></li>
            <li><a href="/web/guest/login" className="btn btn-green">Login</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Smart City Digital Signage Platform</h1>
          <p className="hero-subtitle">
            Empower your municipality with ORATOR - the complete digital communication platform that connects citizens, manages content, and delivers real-time information across all channels.
          </p>
          <div className="hero-cta">
            <a href="#signup" className="btn btn-green btn-lg" onClick={(e) => { e.preventDefault(); openDemoModal(); }}>Get Started →</a>
            <a href="#demo" className="btn btn-dark btn-lg">Watch Demo</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-placeholder">ORATOR Digital Signage Display</div>
          </div>
        </div>
      </section>

      {/* Why Choose ORATOR? */}
      <section id="features" className="section why-choose">
        <div className="container">
          <h2 className="section-title">Why Choose ORATOR?</h2>
          <p className="section-subtitle">
            Built specifically for municipalities and public organizations to enhance citizen engagement and streamline communication
          </p>
          <div className="features-grid">
            <article className="feature-card glass">
              <div className="feature-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h3>Smart City Solutions</h3>
              <p>Digital solutions tailored to municipalities. Connect citizens with real-time information while maintaining transparency and improving communication.</p>
            </article>
            <article className="feature-card glass">
              <div className="feature-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h3>Increased Visibility</h3>
              <p>Through digital signage and mobile apps, content reaches more citizens and enables better engagement with your community.</p>
            </article>
            <article className="feature-card glass">
              <div className="feature-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14v4M11 10v8M15 6v12M19 2v14"/></svg>
              </div>
              <h3>Data That Matters</h3>
              <p>Harness the power of real-time analytics. Track engagement, monitor display health, and make data-driven decisions to better serve your community.</p>
            </article>
            <article className="feature-card glass">
              <div className="feature-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>Risk-Free with Maximum Value</h3>
              <p>Advanced digital infrastructure without financial or operational risk, built on a proven platform designed for municipalities.</p>
            </article>
            <article className="feature-card glass">
              <div className="feature-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h3>Real-Time System</h3>
              <p>Your content updates instantly across all displays. Respond to emergencies, announce events, and keep citizens informed in real-time.</p>
            </article>
            <article className="feature-card glass">
              <div className="feature-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3>Easy Setup & Management</h3>
              <p>Intuitive platform designed for municipal teams. Manage all content, displays, and citizen interactions from a single unified dashboard.</p>
            </article>
          </div>
        </div>
      </section>

      {/* One Platform, Every Screen + Key Benefits */}
      <section id="benefits" className="section platform-section">
        <div className="container platform-grid">
          <div className="platform-left">
            <h2 className="platform-title">One Platform, Every Screen</h2>
            <p className="platform-desc">
              ORATOR delivers your content seamlessly across outdoor digital totems, indoor displays, web portals, and mobile devices - all managed from a single dashboard.
            </p>
            <div className="platform-blocks">
              <div className="platform-block glass">
                <div className="platform-block-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                </div>
                <div>
                  <h4>Outdoor Digital Totems</h4>
                  <span>High-visibility outdoor displays</span>
                </div>
              </div>
              <div className="platform-block glass">
                <div className="platform-block-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>
                </div>
                <div>
                  <h4>Mobile & Web Portal</h4>
                  <span>Citizen engagement platform</span>
                </div>
              </div>
              <div className="platform-block glass">
                <div className="platform-block-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3v18h18"/><path d="M7 14v4M11 10v8M15 6v12M19 2v14"/></svg>
                </div>
                <div>
                  <h4>Admin Dashboard</h4>
                  <span>Centralized content management</span>
                </div>
              </div>
            </div>
          </div>
          <div className="key-benefits glass">
            <h3 className="key-benefits-title">Key Benefits</h3>
            <ul className="key-benefits-list">
              <li>Cloud-based content management</li>
              <li>Multi-display support (outdoor totems, indoor screens, mobile)</li>
              <li>Citizen engagement portal</li>
              <li>Problem reporting & tracking</li>
              <li>Real-time analytics dashboard</li>
              <li>Emergency override capability</li>
              <li>Scheduled content timelines</li>
              <li>Multi-language support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <a href="#home" className="logo-wrap">
              <LogoIcon />
              <span className="logo-text">ORATOR</span>
            </a>
            <p>Smart City Digital Signage Platform</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#benefits">Benefits</a>
              <a href="#demo">Demo</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ORATOR. All rights reserved.</p>
        </div>
      </footer>

      {/* Request Demo Modal */}
      {demoModalOpen && (
        <div className="demo-modal-overlay" onClick={closeDemoModal}>
          <div className="demo-modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="demo-modal-title">Request a Demo</h2>
            <form className="demo-modal-form" onSubmit={(e) => { e.preventDefault(); closeDemoModal(); }}>
              <div className="demo-form-group">
                <label htmlFor="demo-name">Full Name</label>
                <input
                  type="text"
                  id="demo-name"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="demo-form-group">
                <label htmlFor="demo-email">Email</label>
                <input
                  type="email"
                  id="demo-email"
                  name="email"
                  placeholder="john@municipality.gov"
                  required
                />
              </div>
              <div className="demo-form-group">
                <label htmlFor="demo-org">Organization</label>
                <input
                  type="text"
                  id="demo-org"
                  name="organization"
                  placeholder="City of..."
                  required
                />
              </div>
              <div className="demo-form-group">
                <label htmlFor="demo-message">Message</label>
                <textarea
                  id="demo-message"
                  name="message"
                  placeholder="Tell us about your needs..."
                  rows="4"
                  required
                />
              </div>
              <div className="demo-modal-buttons">
                <button type="button" className="btn-demo-cancel" onClick={closeDemoModal}>
                  Cancel
                </button>
                <button type="submit" className="btn-demo-submit">
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
