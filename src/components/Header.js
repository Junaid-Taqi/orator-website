import React, { useEffect } from 'react';
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

    // ✅ ESC key se menu close
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                closeMenu();
            }
        };

        if (menuOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden'; // scroll lock
        }

        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, [menuOpen, closeMenu]);

    return (
        <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
            <nav className="nav">

                {/* ✅ Overlay add kiya (CSS change ki zarurat nahi agar already overlay styled hai) */}
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

                {/* Hamburger button SAME class */}
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

                {/* SAME nav-links class */}
                <ul className="nav-links">
                    <li>
                        <a className="btn btn-cyan" href="home" onClick={closeMenu}>
                            {t('HEADER_PARTNERSHIP')}
                        </a>
                    </li>

                    <li>
                        <a href="#features" onClick={closeMenu}>
                            {t('HEADER_FEATURES')}
                        </a>
                    </li>

                    <li>
                        <a href="#benefits" onClick={closeMenu}>
                            {t('HEADER_BENEFITS')}
                        </a>
                    </li>

                    <li>
                        <a href="#contact" onClick={closeMenu}>
                            {t('HEADER_CONTACT')}
                        </a>
                    </li>

                    <li>
                        <a
                            href="#demo"
                            className="btn btn-cyan"
                            onClick={(e) => {
                                e.preventDefault();
                                openDemoModal();
                                closeMenu();
                            }}
                        >
                            {t('HEADER_REQUEST_DEMO')}
                        </a>
                    </li>

                    {!hasLiferayUser && (
                        <li>
                            <a href="/web/guest/login" className="btn btn-green">
                                {t('HEADER_LOGIN')}
                            </a>
                        </li>
                    )}

                    {hasLiferayUser && (
                        <li>
                            <button type="button" onClick={handleLogout}>
                                {t('HEADER_LOGOUT')}
                            </button>
                        </li>
                    )}

                    <li>
                        <select
                            value={i18n.language}
                            className="lang-select-wrapper"
                            onChange={(e) => handleLanguageChange(e.target.value)}
                        >
                            <option value="en">English</option>
                            <option value="hr">Croatian</option>
                        </select>
                    </li>
                </ul>

            </nav>
        </header>
    );
}