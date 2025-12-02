import Link from "next/link";
import { CalendarCheck } from "lucide-react";

export default function FinalCTA() {
    return (
        <section className="relative py-20 bg-[#1A2B4C] overflow-hidden">
            {/* Subtle Tech Texture / Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B4C] via-transparent to-[#1A2B4C]/80"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Não espere a notificação chegar. <br />
                    <span className="text-[#00AEEF]">Regularize seu cartório hoje.</span>
                </h2>

                <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                    A conformidade com o CNJ é a única forma de garantir a paz do seu ofício.
                    Comece com um diagnóstico técnico sem custos.
                </p>

                <div className="flex justify-center">
                    <Link
                        href="#contact"
                        className="group bg-[#00AEEF] hover:bg-cyan-600 text-white font-bold py-6 px-10 rounded-xl text-xl md:text-2xl transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,174,239,0.6)] shadow-2xl flex items-center gap-3"
                    >
                        <CalendarCheck size={32} className="group-hover:animate-pulse" />
                        Agendar Diagnóstico Gratuito
                    </Link>
                </div>
            </div>
        </section>
    );
}
