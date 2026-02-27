import LogoIcon from './LogoIcon';
import { useTranslation } from 'react-i18next';

export default function Header({ menuOpen, setMenuOpen, closeMenu, openDemoModal }) {
    const { t, i18n } = useTranslation();
    

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('language', lang);
    };

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
                <a href="home" className="logo-wrap" onClick={closeMenu}>
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
                    <li><a href="#features" onClick={closeMenu}>{t('HEADER_FEATURES')}</a></li>
                    <li><a href="#benefits" onClick={closeMenu}>{t('HEADER_BENEFITS')}</a></li>
                    <li><a href="#contact" onClick={closeMenu}>{t('HEADER_CONTACT')}</a></li>
                    <li><a href="#demo" className="btn btn-cyan" onClick={(e) => { e.preventDefault(); openDemoModal(); }}>{t('HEADER_REQUEST_DEMO')}</a></li>
                    <li><a href="/web/guest/login" className="btn btn-green">{t('HEADER_LOGIN')}</a></li>
                    <li>
                        <a
                            href="home"
                            className="btn btn-cyan"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                        >
                            {t('HEADER_PARTNERSHIP')}
                        </a>
                    </li>
                    <li className="language-selector">
                        <select 
                            value={i18n.language} 
                            onChange={(e) => handleLanguageChange(e.target.value)}
                            className="language-dropdown"
                        >
                            <option value="en">English</option>
                            <option value="hr">Hrvatski</option>
                        </select>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
