import { AlertTriangle, Lock, ServerCrash } from "lucide-react";

export default function PainPoints() {
    const pains = [
        {
            icon: <AlertTriangle size={40} className="text-[#1A2B4C]" />,
            title: "Medo da Fiscalização",
            description:
                "Receio de não estar em conformidade com o Provimento 74/149 e sofrer sanções da Corregedoria.",
        },
        {
            icon: <Lock size={40} className="text-[#1A2B4C]" />,
            title: "Risco de Ataques Hacker",
            description:
                "Preocupação constante com sequestro de dados (Ransomware) e vazamento de informações sensíveis.",
        },
        {
            icon: <ServerCrash size={40} className="text-[#1A2B4C]" />,
            title: "Paralisação do Atendimento",
            description:
                "Falhas técnicas que interrompem o serviço, gerando filas, reclamações e prejuízo financeiro.",
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C] text-center mb-12">
                    O que tira o sono de um <br />
                    <span className="text-[#00AEEF]">Oficial de Cartório?</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pains.map((pain, index) => (
                        <div
                            key={index}
                            className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-b-4 border-transparent hover:border-[#00AEEF] group"
                        >
                            <div className="mb-6 p-4 bg-gray-100 rounded-full w-fit group-hover:bg-cyan-50 transition-colors">
                                {pain.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#1A2B4C] mb-4">
                                {pain.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {pain.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
