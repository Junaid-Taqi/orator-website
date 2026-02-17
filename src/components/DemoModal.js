import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ReCAPTCHA from 'react-google-recaptcha';

export default function DemoModal({ onClose }) {
    const { t } = useTranslation();
    
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
        if (!fullName.trim()) newErrors.fullName = t('DEMO_ERROR_FULL_NAME');
        if (!email.trim()) newErrors.email = t('DEMO_ERROR_EMAIL');
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = t('DEMO_ERROR_INVALID_EMAIL');
        if (!organization.trim()) newErrors.organization = t('DEMO_ERROR_ORGANIZATION');
        if (!message.trim()) newErrors.message = t('DEMO_ERROR_MESSAGE');
        if (!captchaValue) newErrors.captcha = t('DEMO_ERROR_CAPTCHA');
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
                alert(data.message || t('DEMO_SUCCESS_MESSAGE'));
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
                alert(data.message || t('DEMO_ERROR_GENERIC'));
            }
        } catch (err) {
            console.error(err);
            alert(err?.message || t('DEMO_ERROR_GENERIC'));
        }
    };

    return (
        <div className="demo-modal-overlay" onClick={onClose}>
            <div className="demo-modal" onClick={(e) => e.stopPropagation()}>
                <h2 className="demo-modal-title">{t('DEMO_TITLE')}</h2>
                <form className="demo-modal-form" onSubmit={(e) => { e.preventDefault(); handleSubmitDemo(); }}>
                    <div className="demo-form-group">
                        <label htmlFor="demo-name">{t('DEMO_FULL_NAME_LABEL')}</label>
                        <input
                            type="text"
                            id="demo-name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder={t('DEMO_FULL_NAME_PLACEHOLDER')}
                            required
                        />
                        {errors.fullName && <small className="error">{errors.fullName}</small>}
                    </div>
                    <div className="demo-form-group">
                        <label htmlFor="demo-email">{t('DEMO_EMAIL_LABEL')}</label>
                        <input
                            type="email"
                            id="demo-email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={t('DEMO_EMAIL_PLACEHOLDER')}
                            required
                        />
                        {errors.email && <small className="error">{errors.email}</small>}
                    </div>
                    <div className="demo-form-group">
                        <label htmlFor="demo-org">{t('DEMO_ORGANIZATION_LABEL')}</label>
                        <input
                            type="text"
                            id="demo-org"
                            value={organization}
                            onChange={(e) => setOrganization(e.target.value)}
                            placeholder={t('DEMO_ORGANIZATION_PLACEHOLDER')}
                            required
                        />
                        {errors.organization && <small className="error">{errors.organization}</small>}
                    </div>
                    <div className="demo-form-group">
                        <label htmlFor="demo-message">{t('DEMO_MESSAGE_LABEL')}</label>
                        <textarea
                            id="demo-message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder={t('DEMO_MESSAGE_PLACEHOLDER')}
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
                        <button type="button" className="btn-demo-cancel" onClick={onClose}>{t('DEMO_CANCEL_BUTTON')}</button>
                        <button type="submit" className="btn-demo-submit">{t('DEMO_SUBMIT_BUTTON')}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
