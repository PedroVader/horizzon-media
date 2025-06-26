import React, { useState, useEffect } from 'react';
import {
  Palette,
  Globe,
  Search,
  Target,
  Camera,
  ArrowRight,
  CheckCircle,
  Sparkles,
  MousePointer
} from 'lucide-react';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState(new Set<number>());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) =>
              new Set([...prev, parseInt((entry.target as HTMLElement).dataset.index || '0')])
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: 'Branding',
      description: 'Identidad visual que distingue tu marca inmobiliaria en el mercado.',
      features: ['Identidad corporativa', 'Manual de marca', 'Aplicaciones digitales'],
      icon: Palette,
      gradient: 'from-[#222952] to-[#6D7FBE]',
      bgGradient: 'from-[#EBF0CB]/20 to-[#6D7FBE]/10'
    },
    {
      title: 'Web',
      description: 'Sitios web optimizados que convierten visitantes en clientes potenciales.',
      features: ['Diseño responsive', 'CRM integrado', 'Tours virtuales'],
      icon: Globe,
      gradient: 'from-[#6D7FBE] to-[#222952]',
      bgGradient: 'from-[#6D7FBE]/10 to-[#EBF0CB]/20'
    },
    {
      title: 'SEO Local',
      description: 'Posicionamiento estratégico para aparecer en búsquedas locales.',
      features: ['Optimización técnica', 'Google My Business', 'Contenido localizado'],
      icon: Search,
      gradient: 'from-[#222952] to-[#6D7FBE]',
      bgGradient: 'from-[#EBF0CB]/20 to-[#6D7FBE]/10'
    },
    {
      title: 'Paid Media',
      description: 'Campañas precisas en Facebook, Instagram y Google Ads.',
      features: ['Meta Ads', 'Google Ads', 'Remarketing avanzado'],
      icon: Target,
      gradient: 'from-[#6D7FBE] to-[#222952]',
      bgGradient: 'from-[#6D7FBE]/10 to-[#EBF0CB]/20'
    },
    {
      title: 'Contenido',
      description: 'Gestión profesional de redes sociales y creación de contenido.',
      features: ['Social media', 'Fotografía profesional', 'Video marketing'],
      icon: Camera,
      gradient: 'from-[#222952] to-[#6D7FBE]',
      bgGradient: 'from-[#EBF0CB]/20 to-[#6D7FBE]/10'
    }
  ];

  return (
    <section id="servicios" className="py-32 bg-gradient-to-br from-white via-[#EBF0CB]/3 to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[#EBF0CB]/10 to-[#6D7FBE]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-br from-[#6D7FBE]/5 to-[#EBF0CB]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-24 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#EBF0CB]/80 to-[#6D7FBE]/10 px-6 py-3 rounded-full mb-8 backdrop-blur-sm border border-[#6D7FBE]/20">
            <Sparkles className="w-4 h-4 text-[#222952]" />
            <span className="text-[#222952] font-mont font-semibold text-sm tracking-wide">
              NUESTROS SERVICIOS
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-mont font-black leading-tight mb-8">
            <span className="text-[#222952]">Servicios que</span>
            <br />
            <span className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent relative">
              transforman
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#EBF0CB] to-[#6D7FBE] rounded-full animate-pulse"></div>
            </span>
          </h2>

          <p className="text-xl text-gray-600 font-mont font-light max-w-2xl leading-relaxed mx-auto lg:mx-0">
            Cada servicio está diseñado específicamente para el sector inmobiliario,
            combinando <span className="text-[#222952] font-medium">creatividad estratégica</span> con
            <span className="text-[#6D7FBE] font-medium"> tecnología de vanguardia</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isVisible = visibleCards.has(index);

            return (
              <div
                key={service.title}
                data-index={index}
                className={`service-card group relative cursor-pointer transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-2xl transition-opacity duration-500 blur-sm opacity-0 group-hover:opacity-100`}></div>

                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#6D7FBE]/10 group-hover:scale-105 group-hover:border-[#6D7FBE]/20">
                  <div className="relative mb-6 transition-all duration-500 group-hover:scale-110">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-xl transition-opacity duration-500 opacity-10 group-hover:opacity-20`}></div>
                    <div className="relative w-16 h-16 bg-gradient-to-r from-[#EBF0CB]/60 to-[#6D7FBE]/20 rounded-xl flex items-center justify-center group-hover:from-[#6D7FBE]/20 group-hover:to-[#EBF0CB]/60 transition-all duration-500">
                      <IconComponent className={`w-8 h-8 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-mont font-black mb-4 tracking-tight transition-all duration-300 text-[#222952] group-hover:bg-gradient-to-r group-hover:from-[#222952] group-hover:to-[#6D7FBE] group-hover:bg-clip-text group-hover:text-transparent">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 font-mont font-light mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm font-mont font-medium text-gray-500 group-hover:text-[#222952] transition-all duration-300"
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        <CheckCircle className="w-4 h-4 text-[#EBF0CB] group-hover:text-[#6D7FBE] transition-colors duration-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-[#222952] font-mont font-semibold transition-all duration-300 group-hover:text-[#6D7FBE] group-hover:translate-x-2">
                    <MousePointer className="w-4 h-4" />
                    <span>Explorar servicio</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100 rounded-b-2xl overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${service.gradient} transition-all duration-700 w-0 group-hover:w-full`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
