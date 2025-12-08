"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function Hero() {

    const slides = [
        {
            id: 'provimento-74',
            type: 'video',
            videoSrc: '/hero-video.mp4',
            fallbackImg: '/hero-bg.jpg',
            title: <>Tranquilidade Jurídica e <br className="hidden md:block" /><span className="text-cyan-vibrant">Tecnologia para o seu Cartório</span></>,
            description: "Adequação completa ao Provimento 74/149 do CNJ. Proteja seus dados, garanta a continuidade do atendimento e evite sanções da Corregedoria.",
            primaryBtnText: "Quero adequar meu Cartório",
            primaryBtnLink: "/provimento-74-guia",
            secondaryBtnText: "Falar com Especialista",
            secondaryBtnLink: "#contact",
            badge: "Especialistas no Provimento 74 do CNJ"
        },
        {
            id: 'mikrotik',
            type: 'image',
            imgSrc: '/banner-mikrotik.png',
            title: "Blindagem Digital contra Invasões",
            description: "Segurança de borda com tecnologia MikroTik. Proteja sua rede contra ataques externos e garanta a integridade dos dados do seu cartório.",
            primaryBtnText: "Proteger minha Rede",
            primaryBtnLink: "/servicos/firewall-seguranca"
        },
        {
            id: 'backup',
            type: 'image',
            imgSrc: '/banner-backup.png',
            title: "Seu Acervo Salvo na Nuvem",
            description: "Cópias criptografadas e recuperação rápida. Mantenha os registros do seu cartório seguros e acessíveis mesmo em casos de desastres.",
            primaryBtnText: "Conhecer Backup",
            primaryBtnLink: "/servicos/backup-nuvem"
        },
        {
            id: 'suporte',
            type: 'image',
            imgSrc: '/banner-suporte.png',
            title: "Suporte Técnico e Monitoramento",
            description: "Atendimento especializado que não deixa seu cartório parar. Monitoramento 24/7 para identificar e resolver problemas antes que afetem sua produtividade.",
            primaryBtnText: "Falar com Suporte",
            primaryBtnLink: "/servicos/suporte-tecnico"
        }
    ];

    return (
        <section id="home" className="relative w-full h-screen bg-[#1A2B4C]">
            <Swiper
                modules={[Pagination, Navigation, Autoplay, EffectFade]}
                effect={'fade'}
                speed={1000}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                loop={true}
                className="w-full h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative w-full h-full">
                        {/* Background */}
                        <div className="absolute inset-0 z-0">
                            {slide.type === 'video' ? (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src={slide.videoSrc} type="video/mp4" />
                                    <img
                                        src={slide.fallbackImg}
                                        alt="Background"
                                        className="w-full h-full object-cover animate-slow-zoom"
                                        style={{ animationDuration: '20s' }}
                                    />
                                </video>
                            ) : (
                                <div className="w-full h-full relative">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url('${slide.imgSrc}')` }}
                                    />
                                    {/* Dark Overlay for images */}
                                    <div className="absolute inset-0 bg-black/60"></div>
                                </div>
                            )}
                        </div>

                        {/* Gradient Overlay for Video Slide (matches original) */}
                        {slide.type === 'video' && (
                            <div className="absolute inset-0 bg-gradient-to-b from-[#1A2B4C]/95 via-[#1A2B4C]/80 to-[#1A2B4C] z-10"></div>
                        )}

                        {/* Content */}
                        <div className="container mx-auto px-4 relative z-20 h-full flex flex-col justify-center items-center text-center">

                            {/* Badge (Only for Provimento 74) */}
                            {slide.badge && (
                                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-cyan-vibrant text-sm font-semibold mb-6 border border-white/20 animate-fade-in-up">
                                    <ShieldCheck size={18} />
                                    <span>{slide.badge}</span>
                                </div>
                            )}

                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-5xl animate-fade-in-up delay-100">
                                {slide.title}
                            </h1>

                            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto animate-fade-in-up delay-200">
                                {slide.description}
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                                <Link
                                    href={slide.primaryBtnLink}
                                    className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.6)] shadow-lg shadow-emerald-500/50 flex items-center justify-center gap-2"
                                >
                                    {slide.primaryBtnText}
                                    <ArrowRight size={20} />
                                </Link>

                                {slide.secondaryBtnText && slide.secondaryBtnLink && (
                                    <Link
                                        href={slide.secondaryBtnLink}
                                        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy-deep font-bold py-4 px-8 rounded-lg text-lg transition-all flex items-center justify-center"
                                    >
                                        {slide.secondaryBtnText}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Styles for Swiper Pagination/Nav */}
            <style jsx global>{`
                .swiper-pagination-bullet {
                    background: white;
                    opacity: 0.5;
                }
                .swiper-pagination-bullet-active {
                    background: #00AEEF;
                    opacity: 1;
                }
                .swiper-button-next, .swiper-button-prev {
                    color: white;
                }
                .swiper-button-next:after, .swiper-button-prev:after {
                    font-size: 24px;
                }
            `}</style>
        </section>
    );
}
