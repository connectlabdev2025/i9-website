import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { FileCheck, ShieldCheck, UserCheck, Award } from 'lucide-react';

export default function ConsultoriaProvimentoPage() {
  return (
    <ServicePageTemplate
      heroTitle="Consultoria Especializada em Provimento 74 e 149"
      heroSubtitle="Adequação total às normas do CNJ com Laudo Técnico assinado e segurança jurídica para o seu cartório."
      problemTitle="Multas e Sanções da Corregedoria"
      problemDescription="O descumprimento dos requisitos técnicos de segurança da informação estabelecidos pelo CNJ pode levar a processos administrativos disciplinares, multas pesadas e, em casos graves, até a perda da delegação. Não coloque seu cartório em risco por falhas na infraestrutura de TI."
      howItWorksSteps={[
        {
          title: "1. Diagnóstico Completo",
          description: "Realizamos uma auditoria detalhada na infraestrutura atual do cartório, identificando todas as não conformidades em relação aos Provimentos 74 e 149 do CNJ."
        },
        {
          title: "2. Plano de Ação e Correções",
          description: "Elaboramos e executamos um plano de ação para corrigir as falhas encontradas, implementando as tecnologias e processos exigidos (backup, firewall, nobreak, etc.)."
        },
        {
          title: "3. Emissão de Laudo Técnico",
          description: "Após as adequações, emitimos o Laudo Técnico de Conformidade assinado por profissionais qualificados, comprovando que o cartório atende a todos os requisitos."
        }
      ]}
      differentiators={[
        {
          title: "Especialistas em Cartórios",
          icon: <Award size={24} />
        },
        {
          title: "Laudo com ART",
          icon: <FileCheck size={24} />
        },
        {
          title: "Acompanhamento Contínuo",
          icon: <UserCheck size={24} />
        },
        {
          title: "Garantia de Aprovação",
          icon: <ShieldCheck size={24} />
        }
      ]}
      whatsappLink="https://wa.me/557140421022?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20Consultoria%20do%20Provimento%2074."
    />
  );
}
