import { useTranslation } from 'react-i18next';

const Transform = ({ openDemoModal }) => {
    const { t } = useTranslation();

    return (
        <>
            {/* Ready to Transform CTA */}
            <section className="section transform-cta">
                <div className="container transform-inner">
                    <h2 className="transform-title">{t('TRANSFORM_TITLE')}</h2>
                    <p className="transform-subtitle">
                        {t('TRANSFORM_SUBTITLE')}
                    </p>
                    <button
                        type="button"
                        className="btn btn-cyan btn-lg transform-button"
                        onClick={openDemoModal}
                    >
                        Schedule a Demo →
                    </button>
                </div>
            </section>
        </>
    )
}

export default Transform;