"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const solutionsLinks = [
        { name: "Consultoria Provimento 74", href: "#servico-1" },
        { name: "Suporte Técnico Mensal", href: "#servico-2" },
        { name: "Backup em Nuvem Seguro", href: "#servico-3" },
        { name: "Servidores de Alta Disponibilidade", href: "#servico-4" },
        { name: "Firewall e Segurança", href: "#servico-5" },
        { name: "LGPD para Cartórios", href: "#servico-6" },
    ];

    const navLinks = [
        { name: "Início", href: "#home" },
        { name: "Sobre", href: "#about" },
        { name: "Soluções", href: "#solutions", hasDropdown: true },
        { name: "Provimento 74", href: "#provimento" },
        { name: "Blog", href: "#blog" },
        { name: "Contato", href: "#contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${isScrolled ? "bg-[#1A2B4C] shadow-lg py-2" : "bg-transparent py-4"
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-white tracking-wide">
                    I9 <span className="text-cyan-vibrant">Software</span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            {link.hasDropdown ? (
                                <>
                                    <button
                                        className="text-white hover:text-cyan-vibrant transition-colors font-medium flex items-center gap-1 focus:outline-none cursor-pointer"
                                    >
                                        {link.name}
                                        <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                                    </button>
                                    {/* Dropdown Menu */}
                                    <div className="absolute left-0 mt-2 w-72 bg-[#1A2B4C]/95 backdrop-blur-sm border border-[#00AEEF] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                                        <div className="py-2">
                                            {solutionsLinks.map((subLink) => (
                                                <Link
                                                    key={subLink.name}
                                                    href={subLink.href}
                                                    className="block px-4 py-3 text-sm text-white hover:bg-[#00AEEF]/10 hover:text-[#00AEEF] transition-colors border-b border-white/5 last:border-0"
                                                >
                                                    {subLink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="text-white hover:text-cyan-vibrant transition-colors font-medium flex items-center gap-1"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="#contact"
                        className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/50"
                    >
                        Diagnóstico Gratuito
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#1A2B4C] absolute top-full left-0 w-full p-4 shadow-xl border-t border-gray-700 max-h-[80vh] overflow-y-auto">
                    <nav className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                {link.hasDropdown ? (
                                    <>
                                        <button
                                            onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                                            className="w-full text-left text-white hover:text-cyan-vibrant font-medium flex items-center justify-between"
                                        >
                                            {link.name}
                                            {isSolutionsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                        </button>
                                        {/* Mobile Dropdown (Accordion) */}
                                        {isSolutionsOpen && (
                                            <div className="pl-4 mt-2 space-y-2 border-l-2 border-[#00AEEF]/30 ml-1">
                                                {solutionsLinks.map((subLink) => (
                                                    <Link
                                                        key={subLink.name}
                                                        href={subLink.href}
                                                        className="block text-sm text-gray-300 hover:text-[#00AEEF] py-2"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {subLink.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="block text-white hover:text-cyan-vibrant font-medium"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <Link
                            href="#contact"
                            className="bg-emerald-500 text-center text-white font-bold py-3 rounded-lg mt-4 block shadow-lg shadow-emerald-500/50"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Diagnóstico Gratuito
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
