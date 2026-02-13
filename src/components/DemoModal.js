import { useState, useRef, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function DemoModal({ onClose }) {
    // Form state
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [organization, setOrganization] = useState('');
    const [message, setMessage] = useState('');
    const [captchaValue, setCaptchaValue] = useState(null);
    const [errors, setErrors] = useState({});
    const recaptchaRef = useRef(null);

    // Handle Escape key and body scroll
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    // ---------------- VALIDATION ----------------
    const validateForm = () => {
        const newErrors = {};
        if (!fullName.trim()) newErrors.fullName = 'Full Name is required';
        if (!email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Enter a valid email';
        if (!organization.trim()) newErrors.organization = 'Organization is required';
        if (!message.trim()) newErrors.message = 'Message is required';
        if (!captchaValue) newErrors.captcha = 'Please verify that you are not a robot';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // ---------------- SUBMIT ----------------
    const handleSubmitDemo = async () => {
        if (!validateForm()) return;

        try {
            const payload = {
                token: captchaValue,
                fullName,
                contactEmail: email,
                organization,
                message,
            };

            const response = await fetch('/o/requestDemoApplication/requestDemo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (data.success) {
                alert(data.message || 'Demo request submitted successfully!');
                // Reset form
                setFullName('');
                setEmail('');
                setOrganization('');
                setMessage('');
                setCaptchaValue(null);
                setErrors({});
                if (recaptchaRef.current) recaptchaRef.current.reset();
                onClose();
            } else {
                alert(data.message || 'Something went wrong!');
            }
        } catch (err) {
            console.error(err);
            alert(err?.message || 'Request failed');
        }
    };

    return (
        <div className="demo-modal-overlay" onClick={onClose}>
            <div className="demo-modal" onClick={(e) => e.stopPropagation()}>
                <h2 className="demo-modal-title">Request a Demo</h2>
                <form className="demo-modal-form" onSubmit={(e) => { e.preventDefault(); handleSubmitDemo(); }}>
                    <div className="demo-form-group">
                        <label htmlFor="demo-name">Full Name</label>
                        <input
                            type="text"
                            id="demo-name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="John Doe"
                            required
                        />
                        {errors.fullName && <small className="error">{errors.fullName}</small>}
                    </div>
                    <div className="demo-form-group">
                        <label htmlFor="demo-email">Email</label>
                        <input
                            type="email"
                            id="demo-email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="john@municipality.gov"
                            required
                        />
                        {errors.email && <small className="error">{errors.email}</small>}
                    </div>
                    <div className="demo-form-group">
                        <label htmlFor="demo-org">Organization</label>
                        <input
                            type="text"
                            id="demo-org"
                            value={organization}
                            onChange={(e) => setOrganization(e.target.value)}
                            placeholder="City of..."
                            required
                        />
                        {errors.organization && <small className="error">{errors.organization}</small>}
                    </div>
                    <div className="demo-form-group">
                        <label htmlFor="demo-message">Message</label>
                        <textarea
                            id="demo-message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Tell us about your needs..."
                            rows="4"
                            required
                        />
                        {errors.message && <small className="error">{errors.message}</small>}
                    </div>
                    <div className="demo-form-group">
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey="6Ld7PGosAAAAAKW0wruLeowTCOdG6j8c4qInVmg8"
                            onChange={(value) => setCaptchaValue(value)}
                        />
                        {errors.captcha && <small className="error">{errors.captcha}</small>}
                    </div>
                    <div className="demo-modal-buttons">
                        <button type="button" className="btn-demo-cancel" onClick={onClose}>Cancel</button>
                        <button type="submit" className="btn-demo-submit">Send Request</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
