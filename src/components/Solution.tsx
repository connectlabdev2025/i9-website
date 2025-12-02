import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function Solution() {
    return (
        <section id="solutions" className="py-20 bg-white">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                {/* Text Content */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-6">
                        A Solução Definitiva: <br />
                        <span className="text-cyan-vibrant">
                            Laudo de Conformidade Técnica
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Não basta apenas instalar equipamentos. A I9 Software prepara toda a
                        sua infraestrutura (Servidores, Firewall, Backup) e entrega o
                        documento que comprova a adequação do seu cartório às normas do CNJ.
                    </p>
                    <ul className="space-y-4 mb-8">
                        {[
                            "Infraestrutura certificada por especialistas.",
                            "Documentação completa para auditorias.",
                            "Tranquilidade para focar no atendimento ao público.",
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="text-cyan-vibrant shrink-0" />
                                <span className="text-gray-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Image Content */}
                <div className="w-full md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    {/* Placeholder for illustration/image */}
                    <div className="absolute inset-0 bg-navy-deep/10"></div>
                    <img
                        src="/solution-img.jpg"
                        alt="Servidores e Tecnologia"
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>
        </section>
    );
}
