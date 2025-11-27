import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <NavLink to="/" className="flex items-center gap-2 group">
                        <span className={`font-hand text-2xl md:text-3xl font-bold transition-colors ${isScrolled ? 'text-waldorf-primary' : 'text-waldorf-dark'}`}>
                            Caminho Waldorf
                        </span>
                    </NavLink>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        <div className="flex gap-6">
                            {NAV_ITEMS.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) => 
                                        `text-sm font-bold uppercase tracking-wider transition-all hover:text-waldorf-secondary relative group ${
                                            isActive ? 'text-waldorf-primary' : isScrolled ? 'text-gray-600' : 'text-gray-800'
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            {item.label}
                                            <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-waldorf-secondary transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                                        </>
                                    )}
                                </NavLink>
                            ))}
                        </div>
                        <NavLink 
                            to="/contato" 
                            className="bg-waldorf-primary hover:bg-waldorf-secondary text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:-translate-y-0.5 hover:shadow-lg flex items-center gap-2 shadow-md"
                        >
                            <Phone size={18} /> Contato
                        </NavLink>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 focus:outline-none transition-colors ${isScrolled ? 'text-waldorf-dark' : 'text-waldorf-dark'}`}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 bg-white/98 backdrop-blur-xl z-40 transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="flex flex-col h-full justify-center items-center space-y-8 p-6">
                    {NAV_ITEMS.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => 
                                `text-2xl font-bold font-hand ${isActive ? 'text-waldorf-primary' : 'text-gray-600'}`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                    <NavLink 
                        to="/contato" 
                        className="w-full max-w-xs text-center bg-waldorf-primary text-white py-4 rounded-xl font-bold shadow-xl active:scale-95 transition-transform text-lg"
                    >
                        Agendar Consultoria
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;