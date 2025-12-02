import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#1A2B4C] text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* About */}
                    <div>
                        <h4 className="text-2xl font-bold mb-6">
                            I9 <span className="text-[#00AEEF]">Software</span>
                        </h4>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Especialistas em tecnologia e compliance para Cartórios Extrajudiciais.
                            Garantimos a segurança jurídica e tecnológica que o seu ofício precisa.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-[#00AEEF] transition-colors"><Instagram size={24} /></Link>
                            <Link href="#" className="hover:text-[#00AEEF] transition-colors"><Facebook size={24} /></Link>
                            <Link href="#" className="hover:text-[#00AEEF] transition-colors"><Linkedin size={24} /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-6">Links Rápidos</h4>
                        <ul className="space-y-3">
                            <li><Link href="#home" className="text-gray-400 hover:text-[#00AEEF] transition-colors">Início</Link></li>
                            <li><Link href="#about" className="text-gray-400 hover:text-[#00AEEF] transition-colors">Sobre Nós</Link></li>
                            <li><Link href="#solutions" className="text-gray-400 hover:text-[#00AEEF] transition-colors">Soluções</Link></li>
                            <li><Link href="#provimento" className="text-gray-400 hover:text-[#00AEEF] transition-colors">Provimento 74</Link></li>
                            <li><Link href="#contact" className="text-gray-400 hover:text-[#00AEEF] transition-colors">Contato</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xl font-bold mb-6">Contato</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="text-[#00AEEF] shrink-0" size={20} />
                                <span>Av. ACM, 3591, Salvador - BA</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="text-[#00AEEF] shrink-0" size={20} />
                                <span>(71) 4042-1022</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="text-[#00AEEF] shrink-0" size={20} />
                                <span>contato@i9software.com.br</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-left text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} I9 Software. Todos os direitos reservados.</p>
                    <p>CNPJ: 00.000.000/0001-00</p>
                </div>
            </div>
        </footer>
    );
}
