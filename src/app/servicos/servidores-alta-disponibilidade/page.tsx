import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Server, Cpu, HardDrive, Wrench } from 'lucide-react';

export default function ServidoresAltaDisponibilidadePage() {
    return (
        <ServicePageTemplate
            heroTitle="Servidores de Alta Disponibilidade"
            heroSubtitle="Performance e estabilidade para o sistema do seu cartório. Chega de lentidão."
            problemTitle="Lentidão e Travamentos do Sistema"
            problemDescription="Servidores obsoletos, mal dimensionados ou sem redundância causam lentidão no atendimento, travamentos constantes e risco de parada total do cartório em caso de falha de hardware."
            howItWorksSteps={[
                {
                    title: "1. Dimensionamento Correto",
                    description: "Analisamos a demanda do seu cartório para especificar o hardware ideal (processamento, memória, armazenamento), garantindo performance sem desperdício."
                },
                {
                    title: "2. Virtualização e Redundância",
                    description: "Implementamos servidores virtualizados com Failover. Se um servidor físico falhar, o outro assume automaticamente, sem parar o atendimento."
                },
                {
                    title: "3. Configuração de RAID",
                    description: "Configuramos os discos em RAID para garantir que, se um HD queimar, seus dados continuem acessíveis e o sistema continue rodando."
                }
            ]}
            differentiators={[
                {
                    title: "Hardware Enterprise (Dell/HP)",
                    icon: <Server size={24} />
                },
                {
                    title: "Garantia On-Site",
                    icon: <Wrench size={24} />
                },
                {
                    title: "Configuração Otimizada",
                    icon: <Cpu size={24} />
                },
                {
                    title: "Proteção de Dados (RAID)",
                    icon: <HardDrive size={24} />
                }
            ]}
            whatsappLink="https://wa.me/557140421022?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20Servidores."
        />
    );
}
