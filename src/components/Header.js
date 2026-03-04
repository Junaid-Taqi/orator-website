import LogoIcon from './LogoIcon';
import { useTranslation } from 'react-i18next';

export default function Header({ menuOpen, setMenuOpen, closeMenu, openDemoModal }) {
    const { t, i18n } = useTranslation();
    const hasLiferayUser = !!sessionStorage.getItem('liferayUser');

    const handleLogout = () => {
        window.location.href = '/c/portal/logout';
    };

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        sessionStorage.setItem('language', lang);
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
                    <li><a href="#features" onClick={closeMenu}>{t('HEADER_FEATURES')}</a></li>
                    <li><a href="#benefits" onClick={closeMenu}>{t('HEADER_BENEFITS')}</a></li>
                    <li><a href="#contact" onClick={closeMenu}>{t('HEADER_CONTACT')}</a></li>
                    <li className="request-demo-link"><a href="#demo" className="btn btn-cyan" onClick={(e) => { e.preventDefault(); openDemoModal(); }}>{t('HEADER_REQUEST_DEMO')}</a></li>
                    {!hasLiferayUser && (
                        <>
                            <li className="login-link"><a href="/web/guest/login" className="btn btn-green">{t('HEADER_LOGIN')}</a></li>
                        </>
                    )}
                    {hasLiferayUser && (
                        <li className="logout-link"><button type="button" className="btn btn-green" onClick={handleLogout}>{t('HEADER_LOGOUT')}</button></li>
                    )}
                    <li className="language-selector">
                        <div className="lang-select-wrapper">
                            <svg className="lang-icon" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                            <select
                                value={i18n.language}
                                onChange={(e) => handleLanguageChange(e.target.value)}
                                className="language-dropdown"
                            >
                                <option value="en">English</option>
                                <option value="hr">Croatian</option>
                            </select>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
