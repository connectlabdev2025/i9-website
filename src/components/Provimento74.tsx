import React from 'react';
import { Shield, Server, Cloud, Lock, AlertTriangle, CheckCircle, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Provimento74() {
    return (
        <section id="provimento" className="py-20 bg-[#0F172A] text-white border-t border-white/10">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00AEEF]/10 mb-6">
                        <Shield className="w-8 h-8 text-[#00AEEF]" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                        Provimento 74 e 149 do CNJ: <br />
                        <span className="text-[#00AEEF]">O Guia de Conformidade</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Entenda os requisitos obrigatórios de segurança que protegem seu cartório de sanções.
                    </p>
                </div>

                {/* Educational Grid (3 Pillars) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {/* Pillar 1 */}
                    <div className="bg-[#1E293B] p-8 rounded-xl border border-white/5 hover:border-[#00AEEF]/50 transition-all duration-300">
                        <div className="mb-4 text-[#00AEEF]">
                            <Server size={40} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Disponibilidade</h3>
                        <p className="text-gray-400">
                            O sistema não pode parar. Exigência de servidores redundantes e nobreaks para garantir operação contínua.
                        </p>
                    </div>

                    {/* Pillar 2 */}
                    <div className="bg-[#1E293B] p-8 rounded-xl border border-white/5 hover:border-[#00AEEF]/50 transition-all duration-300">
                        <div className="mb-4 text-[#00AEEF]">
                            <Cloud size={40} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Integridade</h3>
                        <p className="text-gray-400">
                            Cópias de segurança automáticas em nuvem e local (RAID) para garantir que seus dados nunca sejam perdidos.
                        </p>
                    </div>

                    {/* Pillar 3 */}
                    <div className="bg-[#1E293B] p-8 rounded-xl border border-white/5 hover:border-[#00AEEF]/50 transition-all duration-300">
                        <div className="mb-4 text-[#00AEEF]">
                            <Lock size={40} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Confidencialidade</h3>
                        <p className="text-gray-400">
                            Controle rigoroso de quem acessa os dados com Firewall avançado e VPN segura para acesso remoto.
                        </p>
                    </div>
                </div>

                {/* Comparison Section */}
                <div className="mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
                        Onde a maioria erra <span className="text-gray-500 text-lg font-normal block md:inline md:ml-2">(E a Corregedoria multa)</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 max-w-5xl mx-auto">
                        {/* Risk Column */}
                        <div className="bg-red-500/10 border border-red-500/20 p-8 rounded-t-xl md:rounded-xl flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                                <AlertTriangle className="w-8 h-8 text-red-500" />
                            </div>
                            <h4 className="text-xl font-bold text-red-400 mb-2">Risco Alto</h4>
                            <p className="text-gray-300">
                                Uso de Computadores Comuns (Desktops) como servidor principal.
                            </p>
                        </div>

                        {/* Security Column */}
                        <div className="bg-green-500/10 border border-green-500/20 p-8 rounded-b-xl md:rounded-xl flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                                <CheckCircle className="w-8 h-8 text-green-500" />
                            </div>
                            <h4 className="text-xl font-bold text-green-400 mb-2">Conformidade Total</h4>
                            <p className="text-gray-300">
                                Uso de Servidores Enterprise (I9 Software) com redundância e segurança.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-[#1A2B4C] to-[#0F172A] rounded-2xl p-8 md:p-12 border border-[#00AEEF]/30 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#00AEEF]/5 blur-3xl -z-10"></div>

                    <h3 className="text-2xl md:text-4xl font-bold mb-4">
                        Não perca tempo decifrando a lei sozinho.
                    </h3>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Nossa equipe técnica já leu cada parágrafo do Provimento 74. Tire suas dúvidas específicas e saiba se seu cartório passa na fiscalização agora mesmo.
                    </p>

                    <Link
                        href="https://wa.me/55SEUNUMERO"
                        target="_blank"
                        className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-green-500/50"
                    >
                        <MessageCircle size={24} />
                        Falar com Especialista Agora
                    </Link>
                </div>
            </div>
        </section>
    );
}
