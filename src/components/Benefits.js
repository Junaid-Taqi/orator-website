
import { useTranslation } from 'react-i18next';

export default function Benefits() {
    const { t } = useTranslation();

    return (
        <section id="benefits" className="section platform-section">
            <div className="container platform-grid">
                <div className="platform-left">
                    <h2 className="platform-title">{t('BENEFITS_TITLE')}</h2>
                    <p className="platform-desc">
                        {t('BENEFITS_SUBTITLE')}
                    </p>
                    <div className="platform-blocks">
                        <div className="platform-block glass">
                            <div className="platform-block-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
                            </div>
                            <div>
                                <h4>{t('BENEFITS_OUTDOOR_TOTEMS')}</h4>
                                <span>{t('BENEFITS_OUTDOOR_TOTEMS_DESC')}</span>
                            </div>
                        </div>
                        <div className="platform-block glass">
                            <div className="platform-block-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg>
                            </div>
                            <div>
                                <h4>{t('BENEFITS_MOBILE_WEB')}</h4>
                                <span>{t('BENEFITS_MOBILE_WEB_DESC')}</span>
                            </div>
                        </div>
                        <div className="platform-block glass">
                            <div className="platform-block-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3v18h18" /><path d="M7 14v4M11 10v8M15 6v12M19 2v14" /></svg>
                            </div>
                            <div>
                                <h4>{t('BENEFITS_ADMIN_DASHBOARD')}</h4>
                                <span>{t('BENEFITS_ADMIN_DASHBOARD_DESC')}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="key-benefits glass">
                    <h3 className="key-benefits-title">{t('BENEFITS_KEY_BENEFITS_TITLE')}</h3>
                    <ul className="key-benefits-list">
                        <li>{t('BENEFITS_CLOUD')}</li>
                        <li>{t('BENEFITS_MULTI_DISPLAY')}</li>
                        <li>{t('BENEFITS_CITIZEN_PORTAL')}</li>
                        <li>{t('BENEFITS_REPORTING')}</li>
                        <li>{t('BENEFITS_ANALYTICS')}</li>
                        <li>{t('BENEFITS_EMERGENCY')}</li>
                        <li>{t('BENEFITS_SCHEDULED')}</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
