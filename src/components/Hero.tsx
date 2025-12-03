import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#1A2B4C]"
        >
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                    {/* Fallback image */}
                    <img
                        src="/hero-bg.jpg"
                        alt="Background"
                        className="w-full h-full object-cover animate-slow-zoom"
                        style={{ animationDuration: '20s' }}
                    />
                </video>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1A2B4C]/95 via-[#1A2B4C]/80 to-[#1A2B4C] z-0"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-cyan-vibrant text-sm font-semibold mb-6 border border-white/20">
                    <ShieldCheck size={18} />
                    <span>Especialistas no Provimento 74 do CNJ</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Tranquilidade Jurídica e <br className="hidden md:block" />
                    <span className="text-cyan-vibrant">Tecnologia para o seu Cartório</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                    Adequação completa ao Provimento 74/149 do CNJ. Proteja seus dados,
                    garanta a continuidade do atendimento e evite sanções da Corregedoria.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <Link
                        href="#contact"
                        className="bg-[#00AEEF] hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(0,174,239,0.6)] shadow-lg flex items-center justify-center gap-2"
                    >
                        Quero adequar meu Cartório
                        <ArrowRight size={20} />
                    </Link>
                    <Link
                        href="#contact"
                        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy-deep font-bold py-4 px-8 rounded-lg text-lg transition-all flex items-center justify-center"
                    >
                        Falar com Especialista
                    </Link>
                </div>
            </div>
        </section>
    );
}
