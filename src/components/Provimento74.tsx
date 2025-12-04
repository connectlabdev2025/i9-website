import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Provimento74() {
    return (
        <section id="provimento" className="py-20 bg-[#0F172A] text-white border-t border-white/10 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00AEEF]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="bg-gradient-to-r from-[#1A2B4C] to-[#0F172A] rounded-2xl p-8 md:p-12 border border-[#00AEEF]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 bg-[#00AEEF]/20 text-[#00AEEF] px-4 py-1 rounded-full text-sm font-semibold mb-4">
                            <Shield size={16} />
                            Compliance Obrigatório
                        </div>
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                            Seu cartório está em conformidade com o <span className="text-[#00AEEF]">Provimento 74/149?</span>
                        </h2>
                        <p className="text-gray-300 text-lg max-w-xl">
                            Evite multas e sanções da Corregedoria. Entenda os requisitos de infraestrutura, backup e segurança exigidos por lei.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/provimento-74-guia"
                            className="inline-flex items-center gap-3 bg-[#00AEEF] hover:bg-[#0099d1] text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/30"
                        >
                            Entenda a Lei e Evite Multas
                            <ArrowRight size={20} />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
