import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';


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
      }
    };

    if (menuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      // If only DemoModal is open, it handles its own overflow/escape.
      // But wait, if menuOpen is false, we remove this listener.
      // What if I just rely on DemoModal to close itself via the onClose prop?
      // That is safer.
    }

    if (menuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      if (!demoModalOpen) {
        document.body.style.overflow = '';
      }
    };
  }, [menuOpen, demoModalOpen]);


  return (
    <div className="landing">
      {/* Help widget */}
      <a href="#help" className="help-widget" aria-label="Help">?</a>

      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        closeMenu={closeMenu}
        openDemoModal={openDemoModal}
      />

      <Hero openDemoModal={openDemoModal} />

      <Features />

      <Benefits />

      <Footer />

      {/* Request Demo Modal */}
      {demoModalOpen && (
        <DemoModal onClose={closeDemoModal} />
      )}
    </div>
  );
}

export default App;
