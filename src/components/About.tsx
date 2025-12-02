import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 bg-[#F5F7FA]">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                {/* Image Column */}
                <div className="w-full md:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#00AEEF]">
                        <img
                            src="/about-consultant.jpg"
                            alt="Consultor I9 Software"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* Text Column */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C] mb-6">
                        Muito mais que Suporte Técnico: <br />
                        <span className="text-[#00AEEF]">Especialistas em Cartórios.</span>
                    </h2>

                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Sabemos que o seu dia a dia não para. Por isso, a I9 Software não é formada apenas por técnicos de informática, mas por especialistas que entendem a rotina de uma Serventia Extrajudicial. Falamos a sua língua: entendemos o que é um balcão cheio, a urgência de um selo digital e a responsabilidade de um backup seguro.
                    </p>

                    <ul className="space-y-4 mb-10">
                        {[
                            "Equipe certificada em Segurança da Informação.",
                            "Conhecimento profundo do Provimento 74 e 149 do CNJ.",
                            "Sigilo absoluto e ética profissional.",
                        ].map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <CheckCircle className="text-[#00AEEF] shrink-0" size={24} />
                                <span className="text-gray-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 border-2 border-[#00AEEF] text-[#00AEEF] font-bold py-3 px-8 rounded-lg transition-all hover:bg-[#00AEEF] hover:text-white"
                    >
                        Conhecer nossa metodologia
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
