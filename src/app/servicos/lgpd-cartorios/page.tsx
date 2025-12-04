import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { FileText, Users, Search, BookOpen } from 'lucide-react';

export default function LgpdCartoriosPage() {
    return (
        <ServicePageTemplate
            heroTitle="Adequação à LGPD para Cartórios"
            heroSubtitle="Proteção de dados pessoais e conformidade com a Lei Geral de Proteção de Dados."
            problemTitle="Multas da ANPD e Processos Judiciais"
            problemDescription="O vazamento de dados pessoais de usuários do cartório pode gerar multas milionárias da ANPD, além de processos judiciais e danos irreparáveis à reputação da serventia."
            howItWorksSteps={[
                {
                    title: "1. Mapeamento de Dados (Data Mapping)",
                    description: "Identificamos todo o ciclo de vida dos dados pessoais dentro do cartório: como são coletados, onde são armazenados, quem tem acesso e como são descartados."
                },
                {
                    title: "2. Análise de Riscos e Relatório (RIPD)",
                    description: "Avaliamos os riscos de segurança e privacidade e elaboramos o Relatório de Impacto à Proteção de Dados Pessoais (RIPD), exigido pela lei."
                },
                {
                    title: "3. Implementação de Políticas e Treinamento",
                    description: "Criamos as políticas de privacidade e segurança da informação e treinamos toda a equipe do cartório para lidar corretamente com dados pessoais."
                }
            ]}
            differentiators={[
                {
                    title: "Foco Exclusivo em Cartórios",
                    icon: <FileText size={24} />
                },
                {
                    title: "DPO as a Service",
                    icon: <Users size={24} />
                },
                {
                    title: "Treinamento da Equipe",
                    icon: <BookOpen size={24} />
                },
                {
                    title: "Auditoria de Conformidade",
                    icon: <Search size={24} />
                }
            ]}
            whatsappLink="https://wa.me/557140421022?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20Adequação%20LGPD."
        />
    );
}
