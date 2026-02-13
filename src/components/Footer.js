import LogoIcon from './LogoIcon';

export default function Footer() {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-inner">
                <div className="footer-brand">
                    <a href="#home" className="logo-wrap">
                        <LogoIcon />
                        <span className="logo-text">ORATOR</span>
                    </a>
                    <p>Smart City Digital Signage Platform</p>
                </div>
                <div className="footer-links">
                    <div className="footer-col">
                        <h4>Product</h4>
                        <a href="#features">Features</a>
                        <a href="#benefits">Benefits</a>
                        <a href="#demo">Demo</a>
                    </div>
                    <div className="footer-col">
                        <h4>Company</h4>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} ORATOR. All rights reserved.</p>
            </div>
        </footer>
    );
}
