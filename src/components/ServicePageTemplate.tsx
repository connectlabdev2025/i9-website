import React from 'react';
import { AlertTriangle, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Step {
    title: string;
    description: string;
}

interface Differentiator {
    title: string;
    icon: React.ReactNode;
}

interface ServicePageTemplateProps {
    heroTitle: string;
    heroSubtitle: string;
    heroImage?: string; // Path to image
    problemTitle: string;
    problemDescription: string;
    howItWorksSteps: Step[];
    differentiators: Differentiator[];
    ctaTitle?: string;
    whatsappLink: string;
}

export default function ServicePageTemplate({
    heroTitle,
    heroSubtitle,
    heroImage = "/hero-bg.jpg", // Default fallback
    problemTitle,
    problemDescription,
    howItWorksSteps,
    differentiators,
    ctaTitle = "Solicitar Orçamento",
    whatsappLink,
}: ServicePageTemplateProps) {
    return (
        <div className="bg-slate-900 min-h-screen">
            {/* 1. Hero Specific */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-slate-900/80 z-10"></div>
                    {/* Placeholder for actual image if we had one, for now using a colored div or we could use the Image component if we had assets */}
                    <div className="w-full h-full bg-slate-800"></div>
                </div>

                <div className="container mx-auto px-4 relative z-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        {heroTitle}
                    </h1>
                    <p className="text-xl md:text-2xl text-cyan-400 font-medium max-w-3xl mx-auto">
                        {heroSubtitle}
                    </p>
                </div>
            </section>

            {/* 2. The Problem (White/Gray Section) */}
            <section className="py-20 bg-slate-100 text-slate-800">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl border-l-8 border-red-500 flex flex-col md:flex-row items-start gap-8">
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                                <AlertTriangle className="w-8 h-8 text-red-600" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                {problemTitle}
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {problemDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. How It Works (Dark Zig-Zag) */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Como Funciona</h2>
                        <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-12 max-w-5xl mx-auto">
                        {howItWorksSteps.map((step, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Number/Icon Box */}
                                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-4xl font-bold text-cyan-400">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`flex-1 bg-slate-800/50 p-8 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 ${index % 2 !== 0 ? 'text-right' : 'text-left'}`}>
                                    <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                                    <p className="text-gray-400">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Technical Differentiators (Grid) */}
            <section className="py-20 bg-slate-800 text-white border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Diferenciais Técnicos</h2>
                        <p className="text-gray-400">Por que somos a escolha certa para o seu cartório</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {differentiators.map((diff, index) => (
                            <div key={index} className="bg-slate-900/50 p-6 rounded-xl border border-white/5 hover:bg-slate-900 transition-colors text-center group">
                                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                                    {diff.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-white">{diff.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA Bottom */}
            <section className="py-20 bg-gradient-to-r from-cyan-900 to-slate-900 text-white relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                        {ctaTitle}
                    </h2>
                    <p className="text-xl text-cyan-100 mb-10 max-w-2xl mx-auto">
                        Fale agora com nossos especialistas e garanta a segurança e eficiência do seu cartório.
                    </p>
                    <Link
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/50"
                    >
                        <MessageCircle size={24} />
                        Solicitar Orçamento via WhatsApp
                    </Link>
                </div>
            </section>
        </div>
    );
}
