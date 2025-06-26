import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  TrendingUp, 
  Award, 
  Users, 
  Target,
  Sparkles,
  Building2,
  Home,
  Construction
} from 'lucide-react';

const Cases = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev =>
              new Set([...prev, parseInt((entry.target as HTMLElement).dataset.index || "0")])
            );            
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.case-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const cases = [
    {
      title: 'Torres del Parque',
      category: 'Desarrollo Residencial',
      description: 'Campaña integral que logró 85% de preventa en 6 meses mediante estrategia omnicanal y experiencias inmersivas.',
      metrics: '+150 leads calificados',
      metricNumber: '150+',
      metricLabel: 'Leads Calificados',
      icon: Building2,
      gradient: 'from-[#222952] to-[#6D7FBE]',
      bgGradient: 'from-[#EBF0CB]/20 to-[#6D7FBE]/10',
      accentColor: 'text-[#6D7FBE]',
      tags: ['Branding', 'Digital', 'Preventa']
    },
    {
      title: 'Inmobiliaria Premier',
      category: 'Agencia Boutique',
      description: 'Rebranding completo y estrategia digital que triplicó ventas a través de posicionamiento premium y automatización.',
      metrics: '300% ROI en 12 meses',
      metricNumber: '300%',
      metricLabel: 'ROI en 12 meses',
      icon: Home,
      gradient: 'from-[#6D7FBE] to-[#222952]',
      bgGradient: 'from-[#6D7FBE]/10 to-[#EBF0CB]/20',
      accentColor: 'text-[#222952]',
      tags: ['Rebranding', 'Premium', 'ROI']
    },
    {
      title: 'Grupo Constructora',
      category: 'Empresa Constructora',
      description: 'Plataforma digital y CRM personalizado que automatizó completamente el proceso comercial y de seguimiento.',
      metrics: '60% más conversiones',
      metricNumber: '60%',
      metricLabel: 'Más Conversiones',
      icon: Construction,
      gradient: 'from-[#222952] to-[#6D7FBE]',
      bgGradient: 'from-[#EBF0CB]/20 to-[#6D7FBE]/10',
      accentColor: 'text-[#6D7FBE]',
      tags: ['CRM', 'Automatización', 'B2B']
    }
  ];

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section id="casos" className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-10 w-96 h-96 bg-gradient-to-br from-[#EBF0CB]/8 to-[#6D7FBE]/4 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-[#6D7FBE]/4 to-[#EBF0CB]/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header mejorado */}
        <div className="mb-24 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#EBF0CB]/80 to-[#6D7FBE]/10 px-6 py-3 rounded-full mb-8 backdrop-blur-sm border border-[#6D7FBE]/20">
            <Award className="w-4 h-4 text-[#222952]" />
            <span className="text-[#222952] font-mont font-semibold text-sm tracking-wide">
              CASOS DE ÉXITO
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-mont font-black leading-tight mb-8">
            <span className="text-[#222952]">Casos que</span>
            <br />
            <span className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent relative">
              inspiran
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#EBF0CB] to-[#6D7FBE] rounded-full animate-pulse"></div>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 font-mont font-light max-w-2xl leading-relaxed mx-auto lg:mx-0">
            Resultados reales de marcas inmobiliarias que confiaron en 
            nuestra <span className="text-[#222952] font-medium">expertise</span> para acelerar su 
            <span className="text-[#6D7FBE] font-medium"> crecimiento digital</span>.
          </p>
        </div>

        {/* Cases Grid mejorado */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => {
            const IconComponent = caseItem.icon;
            const isVisible = visibleCards.has(index);
            const isHovered = hoveredCard === index;

            return (
              <div 
                key={caseItem.title}
                data-index={index}
                className={`case-card group relative cursor-pointer transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Fondo con gradiente animado */}
                <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.bgGradient} rounded-3xl transition-opacity duration-500 blur-sm ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}></div>

                {/* Card principal */}
                <div className={`relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-500 ${
                  isHovered 
                    ? 'shadow-2xl shadow-[#6D7FBE]/10 scale-105 border-[#6D7FBE]/20 transform translate-y-[-8px]' 
                    : ''
                }`}>
                  
                  {/* Header de la card con imagen mejorada */}
                  <div className="relative h-64 overflow-hidden">
                    {/* Fondo gradiente en lugar de imagen placeholder */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.gradient} opacity-90`}></div>
                    
                    {/* Patrón decorativo */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-32 h-32 border-2 border-white/30 rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-20 h-20 border-2 border-white/20 rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full"></div>
                    </div>

                    {/* Icono principal */}
                    <div className="absolute top-6 left-6">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Badge de categoría */}
                    <div className="absolute top-6 right-6">
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                        <span className="text-white font-mont font-semibold text-sm">
                          {caseItem.category}
                        </span>
                      </div>
                    </div>

                    {/* Título en la imagen */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl font-mont font-black text-white mb-2 leading-tight">
                        {caseItem.title}
                      </h3>
                    </div>

                    {/* Efecto de brillo */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transition-all duration-700 ${
                      isHovered ? 'translate-x-full opacity-100' : '-translate-x-full opacity-0'
                    }`}></div>
                  </div>
                  
                  {/* Contenido de la card */}
                  <div className="p-8">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {caseItem.tags.map((tag, tagIndex) => (
                        <span 
                          key={tag}
                          className={`px-3 py-1 text-xs font-mont font-semibold rounded-full transition-all duration-300 ${
                            isHovered 
                              ? 'bg-gradient-to-r from-[#EBF0CB] to-[#6D7FBE]/20 text-[#222952]' 
                              : 'bg-gray-100 text-gray-600'
                          }`}
                          style={{ transitionDelay: `${tagIndex * 50}ms` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-gray-600 font-mont font-light mb-8 leading-relaxed">
                      {caseItem.description}
                    </p>
                    
                    {/* Métrica destacada */}
                    <div className={`bg-gradient-to-r from-gray-50 to-[#EBF0CB]/20 rounded-2xl p-6 mb-6 transition-all duration-300 ${
                      isHovered ? 'from-[#EBF0CB]/30 to-[#6D7FBE]/10' : ''
                    }`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${caseItem.gradient} rounded-xl flex items-center justify-center`}>
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className={`text-2xl font-mont font-black transition-colors duration-300 ${
                            isHovered ? caseItem.accentColor : 'text-[#222952]'
                          }`}>
                            {caseItem.metricNumber}
                          </div>
                          <div className="text-sm text-gray-600 font-mont font-medium">
                            {caseItem.metricLabel}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className={`flex items-center gap-2 font-mont font-semibold transition-all duration-300 ${
                      isHovered ? `${caseItem.accentColor} translate-x-2` : 'text-[#222952]'
                    }`}>
                      <span>Ver caso completo</span>
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                        isHovered ? 'translate-x-1' : ''
                      }`} />
                    </div>
                  </div>

                  {/* Barra de progreso inferior */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100 rounded-b-3xl overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${caseItem.gradient} transition-all duration-700 ${
                      isHovered ? 'w-full' : 'w-0'
                    }`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '50+', label: 'Proyectos Exitosos', icon: Award },
            { number: '200%', label: 'ROI Promedio', icon: TrendingUp },
            { number: '95%', label: 'Satisfacción Cliente', icon: Users }
          ].map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div 
                key={stat.label}
                className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#222952] to-[#6D7FBE] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <StatIcon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-mont font-black text-[#222952] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-mont font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#EBF0CB]/30 to-[#6D7FBE]/10 rounded-3xl p-12 backdrop-blur-sm border border-[#6D7FBE]/20">
            <Sparkles className="w-12 h-12 text-[#6D7FBE] mx-auto mb-6" />
            <h3 className="text-3xl font-mont font-black text-[#222952] mb-4">
              ¿Quieres ser nuestro próximo caso de éxito?
            </h3>
            <p className="text-xl text-gray-600 font-mont font-light mb-8 max-w-2xl mx-auto">
              Descubre cómo podemos transformar tu marca inmobiliaria con resultados medibles
            </p>
            <button className="group relative overflow-hidden bg-gradient-to-r from-[#222952] to-[#6D7FBE] text-white px-10 py-5 font-mont font-bold rounded-full hover:shadow-2xl hover:shadow-[#6D7FBE]/30 transition-all duration-500 hover:scale-105">
              <span className="absolute inset-0 bg-gradient-to-r from-[#6D7FBE] to-[#222952] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative flex items-center gap-3">
                <Target className="w-5 h-5" />
                Consulta tu proyecto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;