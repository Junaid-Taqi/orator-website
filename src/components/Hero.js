
export default function Hero({ openDemoModal }) {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Smart City Digital Signage Platform</h1>
                <p className="hero-subtitle">
                    Empower your municipality with ORATOR - the complete digital communication platform that connects citizens, manages content, and delivers real-time information across all channels.
                </p>
                <div className="hero-cta">
                    <a href="#signup" className="btn btn-green btn-lg" onClick={(e) => { e.preventDefault(); openDemoModal(); }}>Get Started →</a>
                    <a href="#demo" className="btn btn-dark btn-lg">Watch Demo</a>
                </div>
            </div>
            <div className="hero-visual">
                <div className="hero-card">
                    <div className="hero-card-placeholder">ORATOR Digital Signage Display</div>
                </div>
            </div>
        </section>
    );
}
