const Transform = ({ openDemoModal }) => {
    return (
        <>
            {/* Ready to Transform CTA */}
            <section className="section transform-cta">
                <div className="container transform-inner">
                    <h2 className="transform-title">Ready to Transform Your City?</h2>
                    <p className="transform-subtitle">
                        Join forward-thinking municipalities using ORATOR to connect with their citizens and build smarter communities.
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