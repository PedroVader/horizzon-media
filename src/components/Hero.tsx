import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, TrendingUp, Users, Home, Award } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Animación de las estadísticas
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { 
      number: '+150', 
      label: 'PROPIEDADES VENDIDAS',
      icon: Home,
      color: 'from-[#222952] to-[#6D7FBE]'
    },
    { 
      number: '+50', 
      label: 'CLIENTES ACTIVOS',
      icon: Users,
      color: 'from-[#6D7FBE] to-[#222952]'
    },
    { 
      number: '300%', 
      label: 'ROI PROMEDIO',
      icon: TrendingUp,
      color: 'from-[#222952] to-[#6D7FBE]'
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-[#EBF0CB]/5 to-white flex items-center pt-20 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#EBF0CB]/20 to-[#6D7FBE]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#6D7FBE]/10 to-[#EBF0CB]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Partículas flotantes */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#EBF0CB] rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-[#6D7FBE] rounded-full animate-bounce opacity-40" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/5 w-3 h-3 bg-[#EBF0CB]/60 rounded-full animate-bounce opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-4xl">
          {/* Badge animado */}
          <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-[#EBF0CB]/80 to-[#6D7FBE]/10 px-6 py-3 rounded-full mb-8 backdrop-blur-sm border border-[#6D7FBE]/20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Award className="w-4 h-4 text-[#222952]" />
            <span className="text-[#222952] font-mont font-semibold text-sm tracking-wide">
              AGENCIA LÍDER EN MARKETING INMOBILIARIO
            </span>
          </div>

          {/* Main Headline con efectos avanzados */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-mont font-black leading-[0.9] mb-12 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="inline-block bg-gradient-to-r from-[#222952] to-[#6D7FBE] bg-clip-text text-transparent animate-pulse">
            Potenciamos
          </span>
          <br />
          <span className="inline-block text-[#222952]">marcas</span>
          <br />
          <span className="inline-block bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent">
            inmobiliarias
          </span>
        </h1>

          {/* Subtitle mejorado */}
          <div className={`mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <p className="text-xl md:text-2xl text-gray-600 font-mont font-light leading-relaxed max-w-2xl relative">
              Somos la agencia creativa que transforma promotores, 
              inmobiliarias y agentes en 
              <span className="relative inline-block mx-2">
                <span className="bg-gradient-to-r from-[#222952] to-[#6D7FBE] bg-clip-text text-transparent font-medium">
                  líderes digitales
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#EBF0CB] to-[#6D7FBE] rounded-full"></div>
              </span>
              del mercado.
            </p>
          </div>

          {/* CTAs mejorados */}
          <div className={`flex flex-col sm:flex-row gap-6 mb-24 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {/* Botón principal */}
            <button className="group relative overflow-hidden bg-gradient-to-r from-[#222952] to-[#6D7FBE] text-white px-12 py-4 font-mont font-bold text-lg tracking-wide rounded-full hover:shadow-2xl hover:shadow-[#6D7FBE]/30 transition-all duration-500 hover:scale-105">
              <span className="absolute inset-0 bg-gradient-to-r from-[#6D7FBE] to-[#222952] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative flex items-center gap-3">
                DESCUBRE CÓMO
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-[#EBF0CB]/20 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
            </button>

            {/* Botón secundario */}
            <button className="group flex items-center gap-3 text-[#222952] font-mont font-semibold text-lg hover:text-[#6D7FBE] transition-colors duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-[#EBF0CB]/60 to-[#6D7FBE]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-5 h-5 ml-0.5" />
              </div>
              Ver casos de éxito
            </button>
          </div>

          {/* Stats mejoradas con animaciones */}
          <div className={`grid grid-cols-3 gap-8 max-w-2xl transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const isActive = currentStat === index;
              
              return (
                <div 
                  key={index}
                  className={`relative group cursor-pointer transition-all duration-500 ${
                    isActive ? 'scale-105' : 'hover:scale-105'
                  }`}
                >
                  {/* Fondo animado */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-500 ${
                    isActive ? 'opacity-5' : ''
                  }`}></div>
                  
                  {/* Contenido */}
                  <div className="relative p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <IconComponent className={`w-5 h-5 transition-colors duration-300 ${
                        isActive ? 'text-[#6D7FBE]' : 'text-[#222952] group-hover:text-[#6D7FBE]'
                      }`} />
                      <div className={`text-3xl md:text-4xl font-mont font-black mb-2 transition-all duration-500 ${
                        isActive 
                          ? 'bg-gradient-to-r from-[#222952] to-[#6D7FBE] bg-clip-text text-transparent' 
                          : 'text-[#222952] group-hover:text-[#6D7FBE]'
                      }`}>
                        {stat.number}
                      </div>
                    </div>
                    <div className={`text-sm font-mont font-medium tracking-wide transition-colors duration-300 ${
                      isActive ? 'text-[#6D7FBE]' : 'text-gray-500 group-hover:text-[#222952]'
                    }`}>
                      {stat.label}
                    </div>
                    
                    {/* Indicador de progreso */}
                    <div className="mt-3 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-1000 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;