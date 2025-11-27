import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import ServiceCard from '../components/ServiceCard';
import { ArrowDownCircle, Sparkles } from 'lucide-react';

const Services: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-20">
            <div className="container mx-auto px-4">
                
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20 fade-in-up">
                    <div className="inline-block p-2 bg-blue-50 rounded-full mb-4">
                        <Sparkles className="text-waldorf-primary" size={24} />
                    </div>
                    <h1 className="font-hand text-5xl md:text-7xl text-waldorf-primary mb-6">Nossas Soluções</h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-light">
                        Uma abordagem holística para transformar o ambiente escolar. Implementamos cada módulo respeitando a identidade da sua instituição e o momento financeiro.
                    </p>
                    <ArrowDownCircle className="mx-auto text-waldorf-accent animate-bounce" size={40} />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {SERVICES.map((service) => (
                        <div key={service.id} className="fade-in-up">
                            <ServiceCard service={service} />
                        </div>
                    ))}
                </div>

                {/* CTA Box */}
                <div className="mt-24 bg-gradient-to-br from-waldorf-dark to-slate-900 rounded-[2.5rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl fade-in-up">
                    <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                         <div className="absolute top-[-50%] left-[-20%] w-[150%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,transparent_60%)] rotate-12"></div>
                    </div>
                    
                    <h2 className="font-hand text-4xl md:text-5xl mb-6 relative z-10">Sua escola está pronta para evoluir?</h2>
                    <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto relative z-10 leading-relaxed">
                        Não existe fórmula mágica, existe trabalho sério e amoroso. Entre em contato hoje e descubra como podemos desenhar um projeto personalizado para sua realidade.
                    </p>
                    <Link 
                        to="/contato" 
                        className="inline-flex items-center gap-3 bg-waldorf-accent text-waldorf-dark font-bold text-xl px-12 py-5 rounded-full hover:bg-white hover:scale-105 transition-all shadow-xl hover:shadow-2xl relative z-10"
                    >
                        Solicitar Orçamento Gratuito
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;