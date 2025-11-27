import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Method from './pages/Method';
import Testimonials from './pages/Testimonials';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const App: React.FC = () => {
    return (
        <HashRouter>
            <div className="flex flex-col min-h-screen font-sans text-waldorf-dark bg-gray-50">
                <ScrollToTop />
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/servicos" element={<Services />} />
                        <Route path="/sobre" element={<About />} />
                        <Route path="/contato" element={<Contact />} />
                        <Route path="/metodo" element={<Method />} />
                        <Route path="/depoimentos" element={<Testimonials />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </HashRouter>
    );
};

export default App;