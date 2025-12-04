import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Shield, Globe, Wifi, Lock } from 'lucide-react';

export default function FirewallSegurancaPage() {
    return (
        <ServicePageTemplate
            heroTitle="Firewall e Segurança de Rede"
            heroSubtitle="Proteção total contra invasões e controle de acesso à internet."
            problemTitle="Vulnerabilidade a Ataques Externos"
            problemDescription="Uma rede sem proteção adequada é uma porta aberta para hackers, malwares e vírus. Além disso, o uso indiscriminado da internet pelos funcionários pode comprometer a segurança e a produtividade."
            howItWorksSteps={[
                {
                    title: "1. Instalação de Firewall UTM",
                    description: "Instalamos um Firewall de Gerenciamento Unificado de Ameaças (UTM) que atua como uma barreira robusta entre a internet e a rede do cartório."
                },
                {
                    title: "2. Configuração de Regras de Acesso",
                    description: "Definimos regras estritas sobre o que pode entrar e sair da rede, bloqueando sites maliciosos, redes sociais ou conteúdos impróprios."
                },
                {
                    title: "3. VPN Segura para Acesso Remoto",
                    description: "Configuramos túneis de VPN criptografados para que você ou seus funcionários possam acessar o sistema do cartório de casa com total segurança."
                }
            ]}
            differentiators={[
                {
                    title: "Controle de Conteúdo Web",
                    icon: <Globe size={24} />
                },
                {
                    title: "Relatórios de Acesso",
                    icon: <Shield size={24} />
                },
                {
                    title: "Proteção Wi-Fi",
                    icon: <Wifi size={24} />
                },
                {
                    title: "VPN Criptografada",
                    icon: <Lock size={24} />
                }
            ]}
            whatsappLink="https://wa.me/557140421022?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20Firewall."
        />
    );
}
