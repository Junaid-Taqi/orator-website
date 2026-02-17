import LogoIcon from './LogoIcon';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer id="contact" className="footer">
            <div className="container footer-inner">
                <div className="footer-brand">
                    <a href="#home" className="logo-wrap">
                        <LogoIcon />
                        <span className="logo-text">ORATOR</span>
                    </a>
                    <p>{t('FOOTER_TAGLINE')}</p>
                </div>
                <div className="footer-links">
                    <div className="footer-col">
                        <h4>{t('FOOTER_PRODUCT_HEADING')}</h4>
                        <a href="#features">{t('FOOTER_PRODUCT_FEATURES')}</a>
                        <a href="#benefits">{t('FOOTER_PRODUCT_BENEFITS')}</a>
                        <a href="#demo">{t('FOOTER_PRODUCT_DEMO')}</a>
                    </div>
                    <div className="footer-col">
                        <h4>{t('FOOTER_COMPANY_HEADING')}</h4>
                        <a href="#about">{t('FOOTER_COMPANY_ABOUT')}</a>
                        <a href="#contact">{t('FOOTER_COMPANY_CONTACT')}</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} {t('FOOTER_COPYRIGHT')}</p>
            </div>
        </footer>
    );
}
