import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Clock, HeartHandshake, Laptop, Activity } from 'lucide-react';

export default function SuporteTecnicoPage() {
    return (
        <ServicePageTemplate
            heroTitle="Suporte Técnico Especializado para Cartórios"
            heroSubtitle="Seu cartório nunca para. Nosso suporte também não. Atendimento rápido e eficiente para garantir a continuidade do serviço."
            problemTitle="Paradas no Atendimento ao Balcão"
            problemDescription="Um sistema parado significa filas, reclamações de usuários e prejuízo financeiro imediato. Depender de técnicos que não entendem a urgência e as particularidades de um cartório é um risco que você não pode correr."
            howItWorksSteps={[
                {
                    title: "1. Abertura de Chamado Multicanal",
                    description: "Solicite suporte de forma fácil e rápida através de WhatsApp, Telefone ou Portal do Cliente. Nossa equipe está pronta para atender sua demanda imediatamente."
                },
                {
                    title: "2. Acesso Remoto Imediato",
                    description: "A maioria dos problemas é resolvida remotamente em poucos minutos. Nossos técnicos acessam sua máquina de forma segura e solucionam a falha sem você precisar esperar uma visita."
                },
                {
                    title: "3. Visita Presencial Preventiva",
                    description: "Além do suporte corretivo, realizamos visitas periódicas e monitoramento constante para prevenir problemas antes que eles parem sua operação."
                }
            ]}
            differentiators={[
                {
                    title: "SLA de Atendimento Rápido",
                    icon: <Clock size={24} />
                },
                {
                    title: "Atendimento Humanizado",
                    icon: <HeartHandshake size={24} />
                },
                {
                    title: "Experts em Sistemas Notariais",
                    icon: <Laptop size={24} />
                },
                {
                    title: "Monitoramento Proativo",
                    icon: <Activity size={24} />
                }
            ]}
            whatsappLink="https://wa.me/557140421022?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20Suporte%20Técnico."
        />
    );
}
