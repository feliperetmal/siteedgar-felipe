import { LucideIcon } from 'lucide-react';

export interface Service {
    id: number;
    title: string;
    description: string;
    details: string;
    image: string;
    icon?: LucideIcon;
}

export type TestimonialCategory = 'Pais' | 'Alunos' | 'Educadores';

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    text: string;
    rating: number;
    avatar?: string;
    category: TestimonialCategory;
}

export interface TeamMember {
    name: string;
    role: string;
    description: string;
    image: string;
}

export interface NavItem {
    label: string;
    path: string;
}

export interface ComparisonItem {
    aspect: string;
    traditional: string;
    waldorf: string;
    icon: LucideIcon;
}

export interface StageItem {
    age: string;
    title: string;
    focus: string;
    description: string;
    icon: LucideIcon;
    color: string;
}