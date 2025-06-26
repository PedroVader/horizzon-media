import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Casos', href: '#casos' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-xl shadow-[#6D7FBE]/10' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${
          scrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo con efecto brillante */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#222952] via-[#6D7FBE] to-[#222952] rounded-lg opacity-0 group-hover:opacity-20 blur transition-all duration-500"></div>
            <h1 className="relative text-2xl font-mont font-black bg-gradient-to-r from-[#222952] via-[#6D7FBE] to-[#222952] bg-clip-text text-transparent tracking-tight hover:scale-105 transition-transform duration-300 cursor-pointer">
              HORIZZON MEDIA
              <Sparkles className="absolute -top-1 -right-6 w-4 h-4 text-[#EBF0CB] animate-pulse opacity-70" />
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-[#222952] transition-all duration-300 font-mont font-medium text-sm tracking-wide group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#222952] to-[#6D7FBE] group-hover:w-full transition-all duration-500"></span>
              </a>
            ))}
            
            {/* Botón con efectos avanzados */}
            <button className="relative overflow-hidden bg-gradient-to-r from-[#222952] to-[#6D7FBE] text-white px-8 py-3 font-mont font-bold text-sm tracking-wide rounded-full hover:shadow-2xl hover:shadow-[#6D7FBE]/25 transition-all duration-500 hover:scale-105 group">
              <span className="absolute inset-0 bg-gradient-to-r from-[#6D7FBE] to-[#222952] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative flex items-center gap-2">
                CONSULTA GRATUITA
                <div className="w-2 h-2 bg-[#EBF0CB] rounded-full animate-pulse"></div>
              </span>
              <div className="absolute inset-0 bg-[#EBF0CB]/20 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
            </button>
          </nav>

          {/* Mobile menu button con animación */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 text-gray-700 hover:text-[#222952] transition-all duration-300 hover:bg-[#EBF0CB]/30 rounded-full"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'rotate-180 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'
                  }`} 
                />
                <X 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'rotate-0 opacity-100 scale-100' : 'rotate-180 opacity-0 scale-75'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation con animaciones fluidas */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-[#6D7FBE]/20">
            <div className="px-2 pt-6 pb-8 space-y-2 bg-gradient-to-br from-white to-[#EBF0CB]/20">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-6 py-4 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-[#222952] hover:to-[#6D7FBE] font-mont font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg transform ${
                    isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: isMenuOpen ? `${index * 100 + 200}ms` : '0ms' 
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <button 
                className={`w-full mt-6 bg-gradient-to-r from-[#222952] to-[#6D7FBE] text-white px-8 py-4 font-mont font-bold text-sm tracking-wide rounded-xl hover:shadow-2xl hover:shadow-[#6D7FBE]/25 transition-all duration-500 hover:scale-105 ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isMenuOpen ? `${navItems.length * 100 + 300}ms` : '0ms' 
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  CONSULTA GRATUITA
                  <div className="w-2 h-2 bg-[#EBF0CB] rounded-full animate-pulse"></div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;