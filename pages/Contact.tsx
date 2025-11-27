import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setFormStatus('success');
        }, 1500);
    };

    return (
        <div className="pt-24 pb-20 bg-gradient-to-b from-blue-50 to-white min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="font-hand text-5xl text-waldorf-primary mb-4">Vamos Conversar?</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Cada escola é um universo único. Queremos ouvir sobre seus desafios e sonhar juntos uma solução.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    
                    {/* Info Card */}
                    <div className="bg-waldorf-dark text-white rounded-3xl p-10 shadow-xl flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                        
                        <div>
                            <h3 className="text-2xl font-bold mb-8">Informações de Contato</h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-lg">
                                        <Phone className="text-waldorf-accent" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Telefone / WhatsApp</p>
                                        <p className="text-xl font-semibold">+55 11 99246-7733</p>
                                        <p className="text-sm text-gray-400 mt-1">Seg a Sex, 9h às 18h</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-lg">
                                        <Mail className="text-waldorf-accent" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Email</p>
                                        <p className="text-xl font-semibold break-all">contato@caminhowaldorf.com.br</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-lg">
                                        <MapPin className="text-waldorf-accent" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Localização</p>
                                        <p className="text-xl font-semibold">São Paulo, SP</p>
                                        <p className="text-sm text-gray-400 mt-1">Atendemos em todo o Brasil (Presencial e Online)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10">
                            <p className="text-sm text-gray-400 italic">
                                "O nosso objetivo: Elaborar uma pedagogia que ensine a aprender, a aprender para toda a vida."
                                <br /> <span className="text-waldorf-accent not-italic font-bold mt-2 block">- Rudolf Steiner</span>
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                        {formStatus === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center animate-bounce-in">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle size={40} className="text-green-500" />
                                </div>
                                <h3 className="text-3xl font-bold text-waldorf-dark mb-4">Mensagem Enviada!</h3>
                                <p className="text-gray-600 mb-8">
                                    Obrigado pelo contato. O Edgar ou o Felipe entrarão em contato em até 24 horas úteis.
                                </p>
                                <button 
                                    onClick={() => setFormStatus('idle')}
                                    className="text-waldorf-primary font-bold hover:underline"
                                >
                                    Enviar outra mensagem
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="school" className="block text-sm font-bold text-gray-700 mb-2">Nome da Escola / Instituição</label>
                                    <input 
                                        type="text" 
                                        id="school" 
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-waldorf-primary focus:ring-2 focus:ring-waldorf-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                                        placeholder="Ex: Colégio Pequeno Príncipe"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Seu Nome</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-waldorf-primary focus:ring-2 focus:ring-waldorf-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                                            placeholder="João Silva"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">WhatsApp</label>
                                        <input 
                                            type="tel" 
                                            id="phone" 
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-waldorf-primary focus:ring-2 focus:ring-waldorf-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                                            placeholder="(11) 99999-9999"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Como podemos ajudar?</label>
                                    <textarea 
                                        id="message" 
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-waldorf-primary focus:ring-2 focus:ring-waldorf-primary/20 outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                                        placeholder="Gostaria de saber mais sobre a marcenaria..."
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={formStatus === 'submitting'}
                                    className="w-full bg-waldorf-green hover:bg-green-700 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {formStatus === 'submitting' ? 'Enviando...' : (
                                        <>Enviar Mensagem <Send size={20} /></>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;