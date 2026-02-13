import LogoIcon from './LogoIcon';

export default function Header({ menuOpen, setMenuOpen, closeMenu, openDemoModal }) {
    return (
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
    );
}
