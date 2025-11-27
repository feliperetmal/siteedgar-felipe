import React from 'react';
import { Testimonial } from '../types';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border-b-4 border-waldorf-accent relative">
            <Quote className="absolute top-4 right-4 text-gray-100 rotate-180" size={48} />
            
            <div className="flex items-center gap-4 mb-4 relative z-10">
                <img 
                    src={testimonial.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random`} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-waldorf-primary"
                />
                <div>
                    <h4 className="font-bold text-waldorf-dark text-lg">{testimonial.name}</h4>
                    <span className="text-sm text-waldorf-primary font-medium">{testimonial.role}</span>
                </div>
            </div>

            <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                    <Star 
                        key={i} 
                        size={16} 
                        className={`${i < testimonial.rating ? 'text-waldorf-accent fill-waldorf-accent' : 'text-gray-300'}`} 
                    />
                ))}
            </div>

            <p className="text-gray-600 italic leading-relaxed relative z-10">
                "{testimonial.text}"
            </p>
        </div>
    );
};

export default TestimonialCard;