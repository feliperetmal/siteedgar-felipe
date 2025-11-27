import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS } from '../constants';
import { TestimonialCategory } from '../types';
import TestimonialCard from '../components/TestimonialCard';
import { Users, BookOpen, GraduationCap, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
    const [filter, setFilter] = useState<TestimonialCategory | 'Todos'>('Todos');

    const filteredTestimonials = filter === 'Todos' 
        ? TESTIMONIALS 
        : TESTIMONIALS.filter(t => t.category === filter);

    const categories: { label: string; value: TestimonialCategory | 'Todos'; icon: React.ElementType }[] = [
        { label: 'Todos', value: 'Todos', icon: Star },
        { label: 'Pais', value: 'Pais', icon: Users },
        { label: 'Alunos', value: 'Alunos', icon: BookOpen },
        { label: 'Educadores', value: 'Educadores', icon: GraduationCap },
    ];

    return (
        <div className="pt-24 pb-20 min-h-screen bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16 fade-in-up">
                    <h1 className="font-hand text-5xl md:text-6xl text-waldorf-primary mb-6">Histórias Reais</h1>
                    <p className="text-xl text-gray-600">
                        Não acredite apenas na nossa palavra. Veja o impacto da humanização na vida de quem vive a escola todos os dias.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16 fade-in-up" style={{ animationDelay: '0.1s' }}>
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        const isActive = filter === cat.value;
                        return (
                            <button
                                key={cat.value}
                                onClick={() => setFilter(cat.value)}
                                className={`
                                    flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-sm
                                    ${isActive 
                                        ? 'bg-waldorf-primary text-white shadow-lg scale-105' 
                                        : 'bg-white text-gray-600 hover:bg-gray-100'
                                    }
                                `}
                            >
                                <Icon size={18} />
                                {cat.label}
                            </button>
                        );
                    })}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
                    {filteredTestimonials.map((testimonial) => (
                        <div key={testimonial.id} className="h-full">
                            <TestimonialCard testimonial={testimonial} />
                        </div>
                    ))}
                </div>

                {/* Empty State (Just in case) */}
                {filteredTestimonials.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        <p className="text-xl">Nenhum depoimento encontrado nesta categoria.</p>
                    </div>
                )}

                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <p className="text-gray-600 mb-6 text-lg">Quer fazer parte dessa transformação?</p>
                    <Link to="/contato" className="inline-block bg-waldorf-green hover:bg-green-700 text-white font-bold px-10 py-4 rounded-full shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-xl text-lg">
                        Conte sua história para nós
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;