import { useTranslation } from 'react-i18next';

export default function Features() {
    const { t } = useTranslation();

    const featuresData = [
        {
            title: t('FEATURE_SMART_CITY_TITLE'),
            description: t('FEATURE_SMART_CITY_DESC'),
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
            )
        },
        {
            title: t('FEATURE_VISIBILITY_TITLE'),
            description: t('FEATURE_VISIBILITY_DESC'),
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
                </svg>
            )
        },
        {
            title: t('FEATURE_ANALYTICS_TITLE'),
            description: t('FEATURE_ANALYTICS_DESC'),
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18" /><path d="M7 14v4M11 10v8M15 6v12M19 2v14" />
                </svg>
            )
        },
        {
            title: t('FEATURE_VALUE_TITLE'),
            description: t('FEATURE_VALUE_DESC'),
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            )
        },
        {
            title: t('FEATURE_REALTIME_TITLE'),
            description: t('FEATURE_REALTIME_DESC'),
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
            )
        },
        {
            title: t('FEATURE_SETUP_TITLE'),
            description: t('FEATURE_SETUP_DESC'),
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            )
        }
    ];

    return (
        <section id="features" className="section why-choose">
            <div className="container">
                <h2 className="section-title">Why Choose ORATOR?</h2>
                <p className="section-subtitle">
                    Built specifically for municipalities and public organizations to enhance citizen engagement and streamline communication
                </p>
                <div className="features-grid">
                    {featuresData.map((feature, index) => (
                        <article key={index} className="feature-card glass">
                            <div className="feature-icon-wrap">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
