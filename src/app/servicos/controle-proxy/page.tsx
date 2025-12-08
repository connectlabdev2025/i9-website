import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Clock, Lock, Globe, Database } from 'lucide-react';

export default function ControleProxyPage() {
    return (
        <ServicePageTemplate
            heroTitle="Produtividade e Segurança no Acesso à Web"
            heroImage="/8 - SEÇÃO PROXY.png"
            heroSubtitle="Gerencie o que seus colaboradores acessam e evite vírus e distrações."
            problemTitle="Funcionários acessando redes sociais, vídeos ou sites perigosos diminuem a produtividade e abrem portas para vírus."
            problemDescription="O acesso irrestrito à internet pode transformar o ambiente de trabalho em um local de distrações constantes, além de expor a rede do cartório a ameaças cibernéticas camufladas em sites aparentemente inofensivos."
            howItWorksSteps={[
                {
                    title: "1. Análise de Tráfego",
                    description: "Mapeamos o comportamento de navegação atual para identificar gargalos de produtividade e riscos de segurança."
                },
                {
                    title: "2. Implementação de Filtros",
                    description: "Configuramos o Servidor Proxy para bloquear automaticamente categorias indesejadas (jogos, redes sociais, adulto) durante o horário de expediente."
                },
                {
                    title: "3. Relatórios Gerenciais",
                    description: "Entregamos relatórios periódicos detalhando quem acessou o quê, permitindo um controle transparente e eficaz."
                }
            ]}
            differentiators={[
                {
                    title: "Bloqueio por Setor",
                    icon: <Lock size={24} />
                },
                {
                    title: "Relatórios de Navegação",
                    icon: <Globe size={24} />
                },
                {
                    title: "Economia de Banda",
                    icon: <Database size={24} />
                },
                {
                    title: "Gestão de Horários",
                    icon: <Clock size={24} />
                }
            ]}
            whatsappLink="https://wa.me/557140421022?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Controle%20de%20Internet."
        />
    );
}
