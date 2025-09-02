import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#services", label: "Serviços" },
    { href: "#testimonials", label: "Depoimentos" },
    { href: "#appointment", label: "Agendamento" },
    { href: "#contact", label: "Contato" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-[#A5B68D]">Marisane Almeida</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <a key={item.href} className="text-gray-700 hover:text-[#A5B68D] transition-colors duration-200 font-medium cursor-pointer" onClick={() => scrollToSection(item.href.substring(1))}>
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="block py-2 text-gray-700 hover:text-[#A5B68D] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
