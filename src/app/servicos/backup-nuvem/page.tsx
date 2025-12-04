import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Lock, Cloud, History, Database } from 'lucide-react';

export default function BackupNuvemPage() {
    return (
        <ServicePageTemplate
            heroTitle="Backup em Nuvem Blindado"
            heroSubtitle="A segurança definitiva para o acervo do seu cartório. Proteção contra Ransomware e desastres."
            problemTitle="Ataques de Ransomware e Perda de Dados"
            problemDescription="O sequestro de dados (Ransomware) é a maior ameaça atual aos cartórios. Sem um backup seguro, externo e imutável, você corre o risco de perder todo o acervo digitalizado e os dados do sistema, paralisando o cartório por tempo indeterminado."
            howItWorksSteps={[
                {
                    title: "1. Cópia Automática e Agendada",
                    description: "O backup é realizado automaticamente em horários programados, sem necessidade de intervenção humana, garantindo que os dados estejam sempre atualizados."
                },
                {
                    title: "2. Criptografia Militar",
                    description: "Antes de saírem do cartório, os dados são criptografados com chaves de alta segurança. Ninguém, além de você, tem acesso ao conteúdo dos arquivos."
                },
                {
                    title: "3. Armazenamento em Datacenter Seguro",
                    description: "Os dados são enviados para datacenters de classe mundial, fora do ambiente físico do cartório, protegendo contra incêndios, roubos e falhas de hardware local."
                }
            ]}
            differentiators={[
                {
                    title: "Imutabilidade dos Dados",
                    icon: <Lock size={24} />
                },
                {
                    title: "Datacenter no Brasil",
                    icon: <Cloud size={24} />
                },
                {
                    title: "Versionamento de Arquivos",
                    icon: <History size={24} />
                },
                {
                    title: "Restauração Rápida",
                    icon: <Database size={24} />
                }
            ]}
            whatsappLink="https://wa.me/557140421022?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20Backup%20em%20Nuvem."
        />
    );
}
