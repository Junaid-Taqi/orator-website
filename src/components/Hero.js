import banner from '../images/orator-banner-img.png';
import { useTranslation } from 'react-i18next';

export default function Hero({ openDemoModal }) {
    const { t } = useTranslation();

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1 className="hero-title">{t('HERO_TITLE')}</h1>
                <p className="hero-subtitle">
                    {t('HERO_SUBTITLE')}
                </p>
                <div className="hero-cta">
                    <a href="#signup" className="btn btn-green btn-lg" onClick={(e) => { e.preventDefault(); openDemoModal(); }}>{t('HERO_GET_STARTED')}</a>
                    <a href="#demo" className="btn btn-dark btn-lg">{t('HERO_WATCH_DEMO')}</a>
                </div>
            </div>
            <div className="hero-visual">
                <div className="hero-card">
                    <img src={banner} alt="ORATOR Digital Signage Display" className="hero-banner" />
                </div>
            </div>
        </section>
    );
}
