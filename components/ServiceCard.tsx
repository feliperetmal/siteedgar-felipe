import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../types';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
    service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    const Icon = service.icon;

    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full border border-gray-100 relative">
            <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-10"></div>
                <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {Icon && (
                    <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-lg text-waldorf-primary group-hover:text-waldorf-secondary transition-colors">
                        <Icon size={28} />
                    </div>
                )}
            </div>
            
            <div className="p-8 flex-grow flex flex-col">
                <h3 className="font-hand text-3xl font-bold text-waldorf-primary mb-4 group-hover:text-waldorf-secondary transition-colors">
                    {service.title}
                </h3>
                <p className="text-gray-700 font-semibold mb-4 text-lg">
                    {service.description}
                </p>
                <div className="w-12 h-1 bg-waldorf-accent mb-4 rounded-full group-hover:w-20 transition-all duration-300"></div>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow text-justify">
                    {service.details}
                </p>
            </div>
            
            <div className="p-8 pt-0 mt-auto">
                <Link 
                    to="/contato"
                    className="w-full py-3 px-6 rounded-xl border-2 border-waldorf-primary text-waldorf-primary font-bold hover:bg-waldorf-primary hover:text-white transition-all text-sm uppercase tracking-wide flex items-center justify-center gap-2 group-hover:shadow-md"
                >
                    Implementar na minha escola <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;