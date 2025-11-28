
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MessageCircle } from 'lucide-react';
import { TESTIMONIALS, SERVICES } from '../constants';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const Home: React.FC = () => {
    // Show only first 3 items for preview
    const previewServices = SERVICES.slice(0, 3);
    const previewTestimonials = TESTIMONIALS.slice(0, 3);

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <header className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-gray-50">
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-waldorf-secondary/10 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-waldorf-green/5 rounded-full blur-[120px]"></div>

                <div className="container mx-auto px-4 z-10 text-center fade-in-up">
                    <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white border border-gray-200 shadow-sm text-waldorf-primary font-bold text-sm mb-8 tracking-wide animate-bounce-slow">
                        <Star size={16} className="text-waldorf-accent fill-waldorf-accent" />
                        CONSULTORIA PEDAGÓGICA HUMANIZADA
                    </div>
                    
                    <h1 className="font-hand text-6xl md:text-7xl lg:text-9xl text-waldorf-dark mb-8 leading-[1.1] tracking-tight">
                        Educação que <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-waldorf-primary to-waldorf-secondary relative inline-block pb-2">
                             respira
                            <svg className="absolute w-full h-4 bottom-0 left-0 text-waldorf-accent opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                            </svg>
                        </span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                        Transforme a ansiedade escolar em criatividade. Implementamos a profundidade da Pedagogia Waldorf em sua escola.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link 
                            to="/contato" 
                            className="group relative px-10 py-5 bg-waldorf-dark text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Agendar Consultoria <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-waldorf-primary to-waldorf-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                        
                        <Link 
                            to="/metodo" 
                            className="group px-10 py-5 rounded-full font-bold text-lg text-waldorf-dark bg-white border-2 border-gray-200 hover:border-waldorf-primary hover:text-waldorf-primary transition-all shadow-sm hover:shadow-md"
                        >
                            Como Funciona?
                        </Link>
                    </div>
                </div>
            </header>

            {/* Services Preview */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="font-hand text-5xl text-waldorf-primary mb-6">Nossas Soluções</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                            Módulos práticos para inserir arte, ritmo e sentido no currículo tradicional.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {previewServices.map(service => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>

                    <div className="text-center">
                        <Link to="/servicos" className="inline-block border-b-2 border-waldorf-primary text-waldorf-primary font-bold text-lg pb-1 hover:text-waldorf-secondary hover:border-waldorf-secondary transition-all">
                            Ver todos os 6 serviços disponíveis
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Preview */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="font-hand text-5xl text-waldorf-dark mb-4">Comunidade Viva</h2>
                            <p className="text-lg text-gray-600">O que pais, alunos e diretores dizem sobre a transformação.</p>
                        </div>
                        <Link 
                            to="/depoimentos" 
                            className="flex items-center gap-2 text-waldorf-primary font-bold bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all border border-gray-100 hover:border-waldorf-primary"
                        >
                            <MessageCircle size={20} />
                            Ler +20 Histórias
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {previewTestimonials.map(testimonial => (
                            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
