import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-waldorf-dark text-white pt-16 pb-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    
                    {/* Brand */}
                    <div className="text-center md:text-left space-y-4">
                        <h3 className="font-hand text-3xl text-waldorf-accent">Caminho Waldorf</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Humanizando a educação através da arte, do ritmo e do respeito ao desenvolvimento natural da criança.
                        </p>
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                            <Heart size={16} className="text-red-400" />
                            <span className="text-sm font-medium">Site e projeto desenvolvido na Umanut</span>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-bold mb-6 text-white border-b border-gray-600 inline-block pb-2">Navegação</h4>
                        <ul className="space-y-3">
                            <li><NavLink to="/servicos" className="text-gray-300 hover:text-waldorf-secondary transition-colors">Nossos Serviços</NavLink></li>
                            <li><NavLink to="/metodo" className="text-gray-300 hover:text-waldorf-secondary transition-colors">O Método Waldorf</NavLink></li>
                            <li><NavLink to="/sobre" className="text-gray-300 hover:text-waldorf-secondary transition-colors">Quem Somos</NavLink></li>
                            <li><NavLink to="/contato" className="text-gray-300 hover:text-waldorf-secondary transition-colors">Agendar Consultoria</NavLink></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-bold mb-6 text-white border-b border-gray-600 inline-block pb-2">Fale Conosco</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center justify-center md:justify-start gap-3 text-gray-300">
                                <Phone size={18} className="text-waldorf-accent" />
                                <span>+55 11 99246-7733</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3 text-gray-300">
                                <Mail size={18} className="text-waldorf-accent" />
                                <span>contato@caminhowaldorf.com.br</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3 text-gray-300">
                                <MapPin size={18} className="text-waldorf-accent" />
                                <span>São Paulo, SP</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={16} className="text-waldorf-green" />
                        <span>Site Seguro & Verificado | Proteção SSL</span>
                    </div>
                    <div className="text-center md:text-right">
                        &copy; {new Date().getFullYear()} Caminho Waldorf. Desenvolvido por Edgar Chalom & Felipe Kauffman.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;