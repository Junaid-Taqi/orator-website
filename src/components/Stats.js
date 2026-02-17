import { useTranslation } from 'react-i18next';

const Stats = () => {
    const { t } = useTranslation();

    return (
        <section className="section stats-section" >
            <div className="container stats-grid">
                <div className="stat-item">
                    <div className="stat-value stat-cyan">99.9%</div>
                    <div className="stat-label">Uptime Guarantee</div>
                </div>
                <div className="stat-item">
                    <div className="stat-value stat-green">24/7</div>
                    <div className="stat-label">Support Available</div>
                </div>
                <div className="stat-item">
                    <div className="stat-value stat-cyan">50+</div>
                    <div className="stat-label">{t('STATS_MUNICIPALITIES')}</div>
                </div>
                <div className="stat-item">
                    <div className="stat-value stat-orange">100K+</div>
                    <div className="stat-label">{t('STATS_CITIZENS')}</div>
                </div>
            </div>
      </section >
    )
}

export default Stats;