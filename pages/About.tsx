import React from 'react';
import { TEAM } from '../constants';
import { Linkedin, Instagram } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="pt-24 pb-20">
            {/* Header */}
            <div className="container mx-auto px-4 mb-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="font-hand text-5xl md:text-6xl text-waldorf-primary mb-6">Quem Somos</h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Nascemos da união entre a vivência prática e a visão estratégica. Somos estudantes da <strong>Umanut</strong> com uma missão clara: democratizar o ensino humanizado no Brasil.
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <section className="bg-white py-16 mb-20 skew-y-1">
                <div className="container mx-auto px-4 -skew-y-1">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px]">
                            <img 
                                src="https://picsum.photos/seed/teamwork/800/800" 
                                alt="Nossa Missão" 
                                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <p className="text-white font-hand text-2xl">
                                    "Educar é impregnar de sentido a vida."
                                </p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-waldorf-dark">Nossa Missão</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Acreditamos que a educação atual enfrenta uma crise de sentido. Crianças estressadas, professores exaustos e famílias desconectadas.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                O <strong>Caminho Waldorf</strong> surge para trazer o "respiro". Não queremos transformar sua escola em uma instituição Waldorf radical do dia para a noite, mas sim injetar a alma dessa pedagogia em suas práticas diárias: nas artes, no ritmo, no olhar para a criança.
                            </p>
                            <div className="pt-4 flex gap-4">
                                <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-waldorf-primary">
                                    <h4 className="font-bold text-waldorf-primary">Humanização</h4>
                                    <p className="text-sm text-gray-600">Respeito ao tempo da infância.</p>
                                </div>
                                <div className="bg-yellow-50 p-4 rounded-xl border-l-4 border-waldorf-accent">
                                    <h4 className="font-bold text-waldorf-accent">Inovação</h4>
                                    <p className="text-sm text-gray-600">Ancestralidade aplicada ao moderno.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Grid */}
            <div className="container mx-auto px-4">
                <h2 className="font-hand text-4xl text-center text-waldorf-dark mb-16">Nossa Equipe</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {TEAM.map((member, index) => (
                        <div key={index} className="bg-white rounded-3xl p-8 shadow-xl flex flex-col md:flex-row gap-8 items-center md:items-start hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-32 h-32 flex-shrink-0">
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="w-full h-full rounded-full object-cover border-4 border-waldorf-secondary shadow-md"
                                />
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-bold text-waldorf-primary">{member.name}</h3>
                                <span className="text-waldorf-accent font-semibold text-sm uppercase tracking-wider block mb-4">{member.role}</span>
                                <p className="text-gray-600 mb-6">
                                    {member.description}
                                </p>
                                <div className="flex justify-center md:justify-start gap-4 text-gray-400">
                                    <a href="#" className="hover:text-waldorf-primary transition-colors"><Linkedin size={20} /></a>
                                    <a href="#" className="hover:text-pink-600 transition-colors"><Instagram size={20} /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;