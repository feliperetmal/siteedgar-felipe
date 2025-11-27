import React from 'react';
import { Link } from 'react-router-dom';
import { METHODOLOGY_STEPS, COMPARISON_DATA, DEVELOPMENT_STAGES } from '../constants';
import { ArrowRight, Info } from 'lucide-react';

const Method: React.FC = () => {
    return (
        <div className="pt-24 pb-20 bg-white">
            <div className="container mx-auto px-4">
                
                {/* Introduction */}
                <div className="text-center max-w-4xl mx-auto mb-20 fade-in-up">
                    <span className="inline-block py-2 px-6 rounded-full bg-blue-50 text-waldorf-primary font-bold text-sm mb-6 tracking-wide uppercase border border-blue-100">
                        Fundamentos Antroposóficos
                    </span>
                    <h1 className="font-hand text-5xl md:text-7xl text-waldorf-dark mt-2 mb-8">
                        O Ser Humano em <br/> <span className="text-waldorf-accent">Três Dimensões</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        A pedagogia tradicional muitas vezes foca apenas no cérebro (intelecto). Nós entendemos que a educação completa precisa tocar também o coração (sentir) e as mãos (fazer). É o que chamamos de <strong>Trimembração Social</strong>.
                    </p>
                </div>

                {/* Trimembrado Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 fade-in-up" style={{ animationDelay: '0.1s' }}>
                    {METHODOLOGY_STEPS.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className={`relative overflow-hidden rounded-[2rem] p-10 ${step.bg} border border-opacity-50 border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group`}>
                                <div className="absolute -top-6 -right-6 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform rotate-12 group-hover:rotate-45 duration-700">
                                    <Icon size={180} />
                                </div>
                                <div className={`w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-8 ${step.color} relative z-10 group-hover:scale-110 transition-transform`}>
                                    <Icon size={40} />
                                </div>
                                <h2 className={`font-hand text-4xl mb-3 ${step.color} relative z-10`}>{step.title}</h2>
                                <h3 className="text-sm font-bold text-gray-500 mb-6 uppercase tracking-widest relative z-10 border-b pb-2 inline-block border-gray-300">{step.subtitle}</h3>
                                <p className="text-gray-700 leading-relaxed relative z-10 font-medium text-lg">
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Comparison Section (New) */}
                <div className="bg-waldorf-dark rounded-[3rem] p-8 md:p-16 mb-24 text-white shadow-2xl relative overflow-hidden fade-in-up">
                    <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    
                    <div className="relative z-10 text-center mb-16">
                        <h2 className="font-hand text-4xl md:text-6xl text-white mb-6">Tradicional vs. Waldorf</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                            Entenda as principais diferenças que tornam nossa abordagem única e necessária para o século XXI.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto relative z-10">
                        {/* Header Row Desktop */}
                        <div className="hidden md:grid grid-cols-12 gap-4 text-sm font-bold uppercase tracking-wider text-gray-400 border-b border-gray-600 pb-4 mb-2">
                            <div className="col-span-4 pl-4">Aspecto</div>
                            <div className="col-span-4">Ensino Tradicional</div>
                            <div className="col-span-4 text-waldorf-secondary">Abordagem Waldorf</div>
                        </div>

                        {COMPARISON_DATA.map((item, idx) => (
                            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 bg-white/5 p-8 rounded-3xl hover:bg-white/10 transition-colors items-center border border-white/5">
                                <div className="col-span-4 flex items-center gap-4">
                                    <div className="p-3 bg-waldorf-accent rounded-xl text-waldorf-dark shadow-lg">
                                        <item.icon size={24} />
                                    </div>
                                    <span className="font-bold text-xl">{item.aspect}</span>
                                </div>
                                <div className="col-span-4 text-gray-300 md:border-l md:border-gray-600 md:pl-6 text-lg">
                                    <span className="md:hidden text-xs uppercase font-bold text-gray-500 block mb-2">Tradicional:</span>
                                    {item.traditional}
                                </div>
                                <div className="col-span-4 text-waldorf-secondary font-bold md:border-l md:border-gray-600 md:pl-6 text-lg">
                                    <span className="md:hidden text-xs uppercase font-bold text-gray-500 block mb-2">Waldorf:</span>
                                    {item.waldorf}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Developmental Stages (New) */}
                <div className="max-w-7xl mx-auto fade-in-up">
                    <div className="text-center mb-16">
                        <h2 className="font-hand text-5xl text-waldorf-primary mb-4">Os Setênios</h2>
                        <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                            Respeitamos o tempo biológico da criança. Cada ciclo de 7 anos pede uma abordagem pedagógica completamente diferente.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {DEVELOPMENT_STAGES.map((stage, idx) => (
                            <div key={idx} className={`bg-white rounded-[2.5rem] p-10 border-2 ${stage.color} hover:scale-105 transition-transform duration-300 shadow-xl flex flex-col items-center text-center relative overflow-hidden group`}>
                                <div className={`absolute top-0 left-0 w-full h-2 ${stage.color.replace('border-', 'bg-').split(' ')[0]}`}></div>
                                
                                <div className="mb-8 p-6 rounded-full bg-gray-50 shadow-inner group-hover:bg-white transition-colors">
                                    <stage.icon size={48} className="text-gray-700" />
                                </div>
                                <span className="inline-block px-5 py-2 rounded-full text-sm font-bold bg-gray-100 text-gray-600 mb-6 uppercase tracking-wider">
                                    {stage.age}
                                </span>
                                <h3 className="font-hand text-4xl mb-3 text-waldorf-dark">{stage.title}</h3>
                                <h4 className="font-bold text-xl mb-6 text-waldorf-primary">{stage.focus}</h4>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {stage.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final CTA */}
                <div className="text-center mt-32">
                    <Link to="/contato" className="inline-flex items-center gap-3 bg-waldorf-primary hover:bg-waldorf-secondary text-white font-bold text-xl px-14 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                        Quero implementar este método <ArrowRight />
                    </Link>
                    <p className="mt-6 text-gray-500 flex items-center justify-center gap-2">
                        <Info size={16} /> Consultoria disponível para todo o Brasil
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Method;