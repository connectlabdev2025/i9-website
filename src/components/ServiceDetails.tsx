import React from 'react';
import { Check, ArrowUp } from 'lucide-react';
import Image from 'next/image';

const services = [
    {
        id: 1,
        title: "Consultoria Provimento 74",
        subtitle: "Adequação Total ao Provimento 74/149",
        description: "Não corra riscos com a Corregedoria. Realizamos o diagnóstico completo, correções de segurança e entregamos o Laudo Técnico de Conformidade assinado.",
        bullets: ["Diagnóstico de Vulnerabilidades", "Políticas de Segurança", "Emissão de Laudo Técnico"],
        image: "/1. Consultoria Provimento 74.png"
    },
    {
        id: 2,
        title: "Suporte Técnico Mensal",
        subtitle: "Suporte Especializado em Rotina Cartorária",
        description: "Esqueça técnicos genéricos. Oferecemos suporte remoto e presencial com SLA rápido para garantir que seu atendimento ao balcão nunca pare.",
        bullets: ["Atendimento Helpdesk/WhatsApp", "Manutenção preventiva", "Especialistas em sistemas de cartório"],
        image: "/2. Suporte Técnico.png"
    },
    {
        id: 3,
        title: "Backup em Nuvem Seguro",
        subtitle: "Backup Blindado contra Ransomware",
        description: "Proteja o acervo do cartório. Cópias automáticas e criptografadas para Datacenters seguros, garantindo recuperação rápida em desastres.",
        bullets: ["Criptografia de ponta a ponta", "Versionamento de arquivos", "Monitoramento diário"],
        image: "/3. Backup em Nuvem.png"
    },
    {
        id: 4,
        title: "Servidores de Alta Disponibilidade",
        subtitle: "Infraestrutura de Alta Performance",
        description: "Servidores robustos com Failover: se o principal falhar, o secundário assume automaticamente. Zero paradas no expediente.",
        bullets: ["Virtualização", "Configuração de RAID", "Cabeamento Estruturado"],
        image: "/4. Servidores.png"
    },
    {
        id: 5,
        title: "Firewall e Segurança",
        subtitle: "Segurança de Perímetro",
        description: "Bloqueie ataques antes que entrem na rede. Firewalls UTM para filtrar tráfego, bloquear sites maliciosos e gerenciar VPNs.",
        bullets: ["Bloqueio de invasões", "Controle de acesso à internet", "VPN segura para Home Office"],
        image: "/5. Firewall.png"
    },
    {
        id: 6,
        title: "LGPD para Cartórios",
        subtitle: "Adequação à LGPD",
        description: "Mapeamento de dados sensíveis e treinamento da equipe para evitar vazamentos e multas da ANPD, garantindo o sigilo necessário.",
        bullets: ["Data Mapping", "Treinamento da Equipe", "Relatório de Impacto (RIPD)"],
        image: "/6. LGPD.png"
    },
];

export default function ServiceDetails() {
    return (
        <section className="w-full">
            {services.map((service, index) => (
                <div
                    key={service.id}
                    id={`servico-${service.id}`}
                    className={`py-20 ${index % 2 === 0 ? 'bg-[#1A2B4C]' : 'bg-[#162035]'
                        }`}
                >
                    <div className="container mx-auto px-4 md:px-6">
                        <div className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'
                            }`}>
                            {/* Text Content */}
                            <div className="flex-1 space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-white">
                                    {service.subtitle}
                                </h2>
                                <h3 className="text-xl font-semibold text-[#00AEEF]">
                                    {service.title}
                                </h3>
                                <p className="text-lg text-[#E2E8F0] leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-3">
                                    {service.bullets.map((bullet, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-[#E2E8F0]">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00AEEF]/10 flex items-center justify-center">
                                                <Check className="w-4 h-4 text-[#00AEEF]" />
                                            </div>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4">
                                    <a href="#servicos" className="inline-flex items-center text-sm text-[#00AEEF] hover:underline">
                                        <ArrowUp size={16} className="mr-1" />
                                        Voltar para Serviços
                                    </a>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="flex-1 w-full">
                                <div className="relative aspect-video w-full rounded-lg shadow-2xl border border-cyan-500/30 overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
