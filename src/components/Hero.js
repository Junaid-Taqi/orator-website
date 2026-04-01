import banner from '../images/orator-banner-img.png';
import demoVideo from '../images/Orator_System_Flow.mp4';
import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';

export default function Hero({ openDemoModal }) {
    const { t, i18n } = useTranslation();
    const [showVideo, setShowVideo] = useState(false);
    const videoRef = useRef(null);

    const closeVideo = () => {
        setShowVideo(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    const rotatingWords1_EN = ["Digital", "Trusted", "Innovative", "Strategic"];
    const rotatingWords1_HR = ["Digitalni", "Pouzdani", "Inovativni", "Strateški"];

    const rotatingWords2_EN = ["better", "smarter", "connected", "advanced"];
    const rotatingWords2_HR = ["bolju", "napredniju", "povezaniju", "pametniju"];

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentWordIndex2, setCurrentWordIndex2] = useState(0);
    const [fade, setFade] = useState(true);

    const rotatingWords = i18n.language === "hr" ? rotatingWords1_HR : rotatingWords1_EN;

    const rotatingWordsSecond = i18n.language === "hr" ? rotatingWords2_HR : rotatingWords2_EN;


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
            setCurrentWordIndex2((prev) => (prev + 1) % rotatingWordsSecond.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [rotatingWords, rotatingWordsSecond]);

    return (
        <>
            <section id="home" className="hero">
                <div className="hero-content">
                    <h1 className="hero-title"><span>{rotatingWords[currentWordIndex]}</span> {t('HERO_TITLE')}</h1>
                    <h3 className="heroSubtitle">
                        {t('BUILDING')} <span className="fade-word">{rotatingWordsSecond[currentWordIndex2]}</span> {t('COMMUNITIES')}.
                    </h3>
                    <p className="hero-subtitle">
                        {t('HERO_SUBTITLE')}
                    </p>

                    <div className="hero-cta">
                        <a
                            href="#signup"
                            className="btn btn-green btn-lg"
                            onClick={(e) => {
                                e.preventDefault();
                                openDemoModal();
                            }}
                        >
                            {t('HERO_GET_STARTED')}
                        </a>

                        <a
                            href="#demo"
                            className="btn btn-dark btn-lg"
                            onClick={(e) => {
                                e.preventDefault();
                                setShowVideo(true);
                            }}
                        >
                            {t('HERO_WATCH_DEMO')}
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-card">
                        <img
                            src={banner}
                            alt="ORATOR Digital Signage Display"
                            className="hero-banner"
                        />
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {showVideo && (
                <div className="video-overlay">
                    <div className="video-box">
                        <button className="close-btn" onClick={closeVideo}>
                            ✕
                        </button>

                        <video
                            ref={videoRef}
                            controls
                            autoPlay
                            width="100%"
                        >
                            <source src={demoVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </>
    );
}