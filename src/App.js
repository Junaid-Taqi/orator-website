import './App.css';
import {useState} from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import Stats from './components/Stats';
import Transform from './components/Trasnform';


function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [demoModalOpen, setDemoModalOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);
    const openDemoModal = () => {
        setDemoModalOpen(true);
        setMenuOpen(false);
    };
    const closeDemoModal = () => setDemoModalOpen(false);

    return (
        <div className="landing">

            <Header
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                closeMenu={closeMenu}
                openDemoModal={openDemoModal}
            />

            <Hero openDemoModal={openDemoModal}/>

            <Features/>

            <Benefits/>

            {/*<Stats/>*/}

            <Transform openDemoModal={openDemoModal}/>

            <Footer openDemoModal={openDemoModal}/>

            {/* Request Demo Modal */}
            {demoModalOpen && (
                <DemoModal onClose={closeDemoModal}/>
            )}
        </div>
    );
}

export default App;
