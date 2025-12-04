"use client";

import React, { useState } from 'react';
import {
    BookOpen,
    Server,
    Battery,
    Cloud,
    Shield,
    ChevronDown,
    ChevronUp,
    CheckCircle,
    XCircle,
    AlertTriangle,
    MessageCircle,
    ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function Provimento74GuiaPage() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen text-slate-800 font-sans">
            {/* Header de Artigo */}
            <header className="bg-[#1A2B4C] text-white py-20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-[#00AEEF]/20 text-[#00AEEF] px-4 py-1 rounded-full text-sm font-semibold mb-6">
                        <BookOpen size={16} />
                        Guia Completo
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight max-w-4xl mx-auto">
                        Tudo o que o Titular precisa saber sobre o Provimento 74 e 149
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Atualizado conforme normas 2024/2025
                    </p>
                </div>
            </header>

            <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
                {/* Índice de Navegação (Sticky) */}
                <aside className="lg:w-1/4 hidden lg:block">
                    <div className="sticky top-24 bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-4 text-lg">Neste Artigo:</h3>
                        <nav className="space-y-2">
                            <button onClick={() => scrollToSection('classes')} className="block w-full text-left text-slate-600 hover:text-[#00AEEF] transition-colors py-1">
                                1. Classes do Cartório
                            </button>
                            <button onClick={() => scrollToSection('hardware')} className="block w-full text-left text-slate-600 hover:text-[#00AEEF] transition-colors py-1">
                                2. Hardware & Servidores
                            </button>
                            <button onClick={() => scrollToSection('energia')} className="block w-full text-left text-slate-600 hover:text-[#00AEEF] transition-colors py-1">
                                3. Energia & Nobreaks
                            </button>
                            <button onClick={() => scrollToSection('backup')} className="block w-full text-left text-slate-600 hover:text-[#00AEEF] transition-colors py-1">
                                4. Backup & Nuvem
                            </button>
                            <button onClick={() => scrollToSection('faq')} className="block w-full text-left text-slate-600 hover:text-[#00AEEF] transition-colors py-1">
                                5. Perguntas Frequentes
                            </button>
                        </nav>
                        <div className="mt-8 pt-6 border-t border-slate-100">
                            <p className="text-sm text-slate-500 mb-4">Precisa de ajuda urgente?</p>
                            <Link
                                href="https://wa.me/557140421022"
                                target="_blank"
                                className="block w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-center font-bold py-3 rounded-lg transition-colors text-sm"
                            >
                                Falar no WhatsApp
                            </Link>
                        </div>
                    </div>
                </aside>

                {/* Conteúdo Principal */}
                <main className="lg:w-3/4 space-y-16">

                    {/* Introdução */}
                    <div className="prose prose-lg max-w-none text-slate-600">
                        <p className="lead text-xl text-slate-700 font-medium">
                            A segurança da informação deixou de ser um diferencial e se tornou uma obrigação para os cartórios extrajudiciais. O Provimento 74/2018 do CNJ, atualizado pelo Provimento 149, estabelece padrões mínimos de tecnologia para garantir a integridade, disponibilidade e confidencialidade dos atos notariais e registrais.
                        </p>
                    </div>

                    {/* Seção 1: Classes do Cartório */}
                    <section id="classes" className="scroll-mt-28">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="bg-[#00AEEF] text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl">1</span>
                            Classes do Cartório
                        </h2>
                        <p className="text-slate-600 mb-6 text-lg">
                            O CNJ divide os cartórios em três classes baseadas na arrecadação semestral. Cada classe tem exigências específicas de infraestrutura.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                <div className="text-[#00AEEF] font-bold text-xl mb-2">Classe 1</div>
                                <div className="text-sm text-slate-500 mb-4">Até R$ 100 mil / semestre</div>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 shrink-0 mt-1" /> Internet Banda Larga</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 shrink-0 mt-1" /> 1 Servidor Local</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 shrink-0 mt-1" /> Backup em Nuvem</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md border-2 border-[#00AEEF] relative transform md:-translate-y-2">
                                <div className="absolute top-0 right-0 bg-[#00AEEF] text-white text-xs px-2 py-1 rounded-bl-lg font-bold">Mais Comum</div>
                                <div className="text-[#00AEEF] font-bold text-xl mb-2">Classe 2</div>
                                <div className="text-sm text-slate-500 mb-4">R$ 100 mil a R$ 500 mil</div>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 shrink-0 mt-1" /> Tudo da Classe 1</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 shrink-0 mt-1" /> 2 Servidores (Alta Disp.)</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 shrink-0 mt-1" /> Nobreak com Gerenciamento</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                <div className="text-[#00AEEF] font-bold text-xl mb-2">Classe 3</div>
                                <div className="text-sm text-slate-500 mb-4">Acima de R$ 500 mil</div>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 shrink-0 mt-1" /> Tudo da Classe 2</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 shrink-0 mt-1" /> Sala Cofre / Datacenter</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 shrink-0 mt-1" /> Gerador de Energia</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Seção 2: Hardware */}
                    <section id="hardware" className="scroll-mt-28">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="bg-[#00AEEF] text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl">2</span>
                            Hardware: PC Gamer vs Servidor
                        </h2>

                        <div className="bg-blue-50 border-l-4 border-[#00AEEF] p-6 rounded-r-xl mb-8">
                            <h4 className="font-bold text-[#1A2B4C] flex items-center gap-2 mb-2">
                                <AlertTriangle size={20} />
                                Dica do Especialista
                            </h4>
                            <p className="text-slate-700">
                                Jamais utilize um computador comum ("PC Gamer" ou Desktop) como servidor. Eles não foram feitos para ficar ligados 24/7 e não possuem redundância de peças. Se a fonte queimar, seu cartório para.
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm">
                                <thead>
                                    <tr className="bg-[#1A2B4C] text-white">
                                        <th className="p-4">Característica</th>
                                        <th className="p-4 bg-red-500/20">PC Comum / Gamer</th>
                                        <th className="p-4 bg-green-500/20">Servidor Enterprise</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    <tr className="border-b border-slate-100">
                                        <td className="p-4 font-semibold text-slate-700">Tempo de Atividade</td>
                                        <td className="p-4 text-slate-600">8h a 12h por dia</td>
                                        <td className="p-4 text-slate-600 font-bold text-green-600">24 horas / 7 dias (24/7)</td>
                                    </tr>
                                    <tr className="border-b border-slate-100">
                                        <td className="p-4 font-semibold text-slate-700">Redundância de Disco</td>
                                        <td className="p-4 text-slate-600"><XCircle size={16} className="inline text-red-500 mr-1" /> Não possui (RAID via software instável)</td>
                                        <td className="p-4 text-slate-600"><CheckCircle size={16} className="inline text-green-500 mr-1" /> Hardware RAID (Hot-swap)</td>
                                    </tr>
                                    <tr className="border-b border-slate-100">
                                        <td className="p-4 font-semibold text-slate-700">Fonte de Energia</td>
                                        <td className="p-4 text-slate-600">Única (se queimar, desliga)</td>
                                        <td className="p-4 text-slate-600">Redundante (se uma queimar, a outra assume)</td>
                                    </tr>
                                    <tr className="border-b border-slate-100">
                                        <td className="p-4 font-semibold text-slate-700">Memória RAM</td>
                                        <td className="p-4 text-slate-600">Comum (sem correção de erro)</td>
                                        <td className="p-4 text-slate-600">ECC (Corrige erros automaticamente)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Seção 3: Energia */}
                    <section id="energia" className="scroll-mt-28">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="bg-[#00AEEF] text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl">3</span>
                            Energia Contínua
                        </h2>
                        <p className="text-slate-600 mb-6 text-lg">
                            O Provimento exige que o cartório tenha autonomia de energia para finalizar os atos em caso de apagão.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start gap-4">
                                <div className="bg-yellow-100 p-3 rounded-lg text-yellow-600">
                                    <Battery size={32} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">Nobreaks Gerenciáveis</h4>
                                    <p className="text-slate-600 text-sm">
                                        Devem sustentar os servidores e equipamentos de rede por <strong>pelo menos 30 minutos</strong>. Além disso, devem enviar alertas se a bateria estiver fraca.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start gap-4">
                                <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                                    <Shield size={32} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">Geradores (Classe 3)</h4>
                                    <p className="text-slate-600 text-sm">
                                        Para cartórios de maior porte, o gerador é obrigatório para garantir a continuidade do serviço por longos períodos de falta de energia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Seção 4: Backup */}
                    <section id="backup" className="scroll-mt-28">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="bg-[#00AEEF] text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl">4</span>
                            A Regra de Ouro do Backup
                        </h2>
                        <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00AEEF] rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4">Backup Local + Backup em Nuvem</h3>
                                <p className="text-gray-300 mb-6">
                                    Não basta ter um HD externo. O Provimento exige redundância geográfica.
                                </p>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <div className="flex items-center gap-2 text-[#00AEEF] font-bold mb-2">
                                            <Server size={20} /> Backup Local
                                        </div>
                                        <p className="text-sm text-gray-400">
                                            Cópia rápida para recuperação imediata de arquivos deletados acidentalmente. Geralmente em NAS ou Storage dedicado.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 text-[#00AEEF] font-bold mb-2">
                                            <Cloud size={20} /> Backup em Nuvem
                                        </div>
                                        <p className="text-sm text-gray-400">
                                            Cópia criptografada enviada para Datacenter seguro. Protege contra incêndios, roubos físicos e sequestro de dados (Ransomware).
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section id="faq" className="scroll-mt-28">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8">Perguntas Frequentes</h2>
                        <div className="space-y-4">
                            {[
                                {
                                    q: "O que acontece se eu for fiscalizado e não estiver adequado?",
                                    a: "O titular pode sofrer Processo Administrativo Disciplinar (PAD), multas pesadas e, dependendo da gravidade e reincidência, até a perda da delegação."
                                },
                                {
                                    q: "Posso usar Google Drive ou Dropbox como backup?",
                                    a: "Não é recomendado como única solução. Essas ferramentas são de sincronização, não de backup profissional. Se um arquivo for infectado por vírus no seu PC, ele será sincronizado infectado para a nuvem. O backup precisa ser imutável e versionado."
                                },
                                {
                                    q: "Quanto tempo demora para adequar meu cartório?",
                                    a: "Depende da estrutura atual. Em média, um projeto completo de adequação leva de 15 a 45 dias, incluindo a compra de equipamentos e configuração."
                                },
                                {
                                    q: "Preciso contratar um funcionário de TI?",
                                    a: "Não necessariamente. O provimento permite a contratação de empresas especializadas (terceirizadas) para prestar o suporte e manutenção, o que costuma ser mais econômico e eficiente."
                                },
                                {
                                    q: "O que é o Laudo Técnico de Conformidade?",
                                    a: "É um documento emitido por um profissional ou empresa de TI atestando que o cartório cumpre todos os requisitos técnicos do Provimento 74. Esse laudo deve ser renovado anualmente."
                                }
                            ].map((item, index) => (
                                <div key={index} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                                    >
                                        {item.q}
                                        {openFaqIndex === index ? <ChevronUp size={20} className="text-[#00AEEF]" /> : <ChevronDown size={20} className="text-gray-400" />}
                                    </button>
                                    {openFaqIndex === index && (
                                        <div className="p-6 pt-0 text-slate-600 bg-slate-50 border-t border-slate-100">
                                            {item.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA Final */}
                    <section className="bg-gradient-to-r from-[#1A2B4C] to-[#0F172A] rounded-2xl p-10 text-center text-white shadow-xl">
                        <h3 className="text-2xl font-bold mb-4">Sua serventia tem dúvidas específicas?</h3>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            Não corra riscos desnecessários. Nossa equipe pode fazer um pré-diagnóstico gratuito da sua estrutura.
                        </p>
                        <Link
                            href="https://wa.me/557140421022"
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-[#00AEEF] hover:bg-[#0099d1] text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
                        >
                            <MessageCircle size={20} />
                            Falar com Consultor sobre Provimento 74
                        </Link>
                    </section>

                </main>
            </div>
        </div>
    );
}
