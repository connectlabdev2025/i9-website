import Link from "next/link";
import {
    Shield,
    Headphones,
    Cloud,
    Server,
    Network,
    FileText,
    ArrowRight,
} from "lucide-react";

export default function Services() {
    const services = [
        {
            icon: <FileText size={32} />,
            title: "Consultoria Provimento 74",
            description: "Análise completa e adequação às normas do CNJ.",
            link: "/servicos/consultoria-provimento",
        },
        {
            icon: <Headphones size={32} />,
            title: "Suporte Técnico Mensal",
            description: "Atendimento rápido para resolver problemas do dia a dia.",
            link: "/servicos/suporte-tecnico",
        },
        {
            icon: <Cloud size={32} />,
            title: "Backup em Nuvem Seguro",
            description: "Cópia de segurança automática e criptografada dos seus dados.",
            link: "/servicos/backup-nuvem",
        },
        {
            icon: <Server size={32} />,
            title: "Servidores de Alta Disponibilidade",
            description: "Equipamentos robustos para garantir que o sistema não pare.",
            link: "/servicos/servidores-alta-disponibilidade",
        },
        {
            icon: <Network size={32} />,
            title: "Firewall e Segurança",
            description: "Proteção contra invasões e controle de acesso à rede.",
            link: "/servicos/firewall-seguranca",
        },
        {
            icon: <Shield size={32} />,
            title: "LGPD para Cartórios",
            description: "Adequação à Lei Geral de Proteção de Dados.",
            link: "/servicos/lgpd-cartorios",
        },
    ];

    return (
        <section id="servicos" className="py-20 bg-slate-900 text-white border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Nossos Serviços Especializados
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Tecnologia de ponta pensada exclusivamente para a realidade dos
                        Cartórios Extrajudiciais.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-[#00AEEF] hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className="mb-6 text-[#00AEEF] group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors mb-4">
                                {service.description}
                            </p>
                            <Link href={service.link} className="inline-flex items-center text-[#00AEEF] font-semibold hover:underline">
                                Saiba mais <ArrowRight size={16} className="ml-1" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
