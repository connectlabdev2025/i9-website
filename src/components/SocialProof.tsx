import { Scale, Building2, Scroll, Gavel, Stamp, Landmark } from "lucide-react";

export default function SocialProof() {
    const clients = [
        { icon: <Scale size={48} />, name: "Registro de Imóveis" },
        { icon: <Building2 size={48} />, name: "Tabelionato de Notas" },
        { icon: <Scroll size={48} />, name: "Registro Civil" },
        { icon: <Gavel size={48} />, name: "Protesto de Títulos" },
        { icon: <Stamp size={48} />, name: "Registro de Títulos" },
        { icon: <Landmark size={48} />, name: "Registro Civil PJ" },
    ];

    return (
        <section className="py-16 bg-white border-t border-white/10 overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-10">
                <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest">
                    Quem confia na I9 Software
                </h3>
            </div>

            {/* Carousel Container */}
            <div className="relative w-full overflow-hidden">
                <div className="flex gap-16 items-center justify-center animate-scroll whitespace-nowrap">
                    {/* First set of logos */}
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center gap-2 text-gray-300 hover:text-[#1A2B4C] transition-colors duration-300 cursor-pointer group"
                        >
                            <div className="transform group-hover:scale-110 transition-transform duration-300">
                                {client.icon}
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {client.name}
                            </span>
                        </div>
                    ))}
                    {/* Duplicate set for seamless scrolling effect if we were using CSS animation, 
                        but for now a static centered grid is safer/cleaner without complex CSS. 
                        Let's stick to a nice centered flex layout as requested "Carousel-like" appearance.
                    */}
                </div>
            </div>
        </section>
    );
}
