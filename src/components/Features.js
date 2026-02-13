
const featuresData = [
    {
        title: "Smart City Solutions",
        description: "Digital solutions tailored to municipalities. Connect citizens with real-time information while maintaining transparency and improving communication.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        )
    },
    {
        title: "Increased Visibility",
        description: "Through digital signage and mobile apps, content reaches more citizens and enables better engagement with your community.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
            </svg>
        )
    },
    {
        title: "Data That Matters",
        description: "Harness the power of real-time analytics. Track engagement, monitor display health, and make data-driven decisions to better serve your community.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18" /><path d="M7 14v4M11 10v8M15 6v12M19 2v14" />
            </svg>
        )
    },
    {
        title: "Risk-Free with Maximum Value",
        description: "Advanced digital infrastructure without financial or operational risk, built on a proven platform designed for municipalities.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        )
    },
    {
        title: "Real-Time System",
        description: "Your content updates instantly across all displays. Respond to emergencies, announce events, and keep citizens informed in real-time.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        )
    },
    {
        title: "Easy Setup & Management",
        description: "Intuitive platform designed for municipal teams. Manage all content, displays, and citizen interactions from a single unified dashboard.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        )
    }
];

export default function Features() {
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
