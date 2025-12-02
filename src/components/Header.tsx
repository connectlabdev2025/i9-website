"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
                            <Link
                                href={link.href}
                                className="text-white hover:text-cyan-vibrant transition-colors font-medium flex items-center gap-1"
                            >
                                {link.name}
                                {link.hasDropdown && <ChevronDown size={16} />}
                            </Link>
                        </div>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="#contact"
                        className="bg-cyan-vibrant hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg"
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
                <div className="md:hidden bg-[#1A2B4C] absolute top-full left-0 w-full p-4 shadow-xl border-t border-gray-700">
                    <nav className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-white hover:text-cyan-vibrant font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="bg-cyan-vibrant text-center text-white font-bold py-3 rounded-lg mt-4"
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
