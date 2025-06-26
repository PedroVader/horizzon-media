import React, { useState, useEffect } from 'react';
import { 
  Quote, 
  Star, 
  TrendingUp, 
  Users, 
  Award,
  Heart,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Building2,
  Home,
  Crown
} from 'lucide-react';

const Testimonials = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

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

    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: 'María González',
      role: 'Directora Comercial',
      company: 'Constructora Elite',
      testimonial: 'Horizzon Media transformó completamente nuestra estrategia digital. En 8 meses logramos vender el 90% de nuestro desarrollo con una inversión que se pagó sola.',
      image: '/placeholder.svg',
      rating: 5,
      metric: '90% ventas en 8 meses',
      icon: Building2,
      gradient: 'from-[#222952] to-[#6D7FBE]',
      bgColor: 'from-[#EBF0CB]/20 to-[#6D7FBE]/10',
      initials: 'MG',
      industry: 'Construcción'
    },
    {
      name: 'Carlos Mendoza',
      role: 'CEO',
      company: 'Grupo Inmobiliario Sur',
      testimonial: 'Su enfoque estratégico y conocimiento profundo del sector inmobiliario nos posicionó como líderes indiscutibles en nuestra zona. Resultados excepcionales.',
      image: '/placeholder.svg',
      rating: 5,
      metric: 'Líderes de mercado',
      icon: Crown,
      gradient: 'from-[#6D7FBE] to-[#222952]',
      bgColor: 'from-[#6D7FBE]/10 to-[#EBF0CB]/20',
      initials: 'CM',
      industry: 'Inmobiliaria'
    },
    {
      name: 'Ana Rodríguez',
      role: 'Gerente de Marketing',
      company: 'Premium Properties',
      testimonial: 'El ROI que obtuvimos con sus campañas superó todas nuestras expectativas. Equipo altamente profesional con visión de negocio excepcional.',
      image: '/placeholder.svg',
      rating: 5,
      metric: '400% ROI alcanzado',
      icon: Home,
      gradient: 'from-[#222952] to-[#6D7FBE]',
      bgColor: 'from-[#EBF0CB]/20 to-[#6D7FBE]/10',
      initials: 'AR',
      industry: 'Premium'
    }
  ];

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonios" className="py-32 bg-gradient-to-br from-white via-[#EBF0CB]/2 to-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-[#EBF0CB]/8 to-[#6D7FBE]/4 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-gradient-to-br from-[#6D7FBE]/4 to-[#EBF0CB]/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header mejorado */}
        <div className="mb-24 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#EBF0CB]/80 to-[#6D7FBE]/10 px-6 py-3 rounded-full mb-8 backdrop-blur-sm border border-[#6D7FBE]/20">
            <Heart className="w-4 h-4 text-[#222952]" />
            <span className="text-[#222952] font-mont font-semibold text-sm tracking-wide">
              TESTIMONIOS
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-mont font-black leading-tight mb-8">
            <span className="text-[#222952]">Clientes que</span>
            <br />
            <span className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent relative">
              confían
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#EBF0CB] to-[#6D7FBE] rounded-full animate-pulse"></div>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 font-mont font-light max-w-2xl mx-auto leading-relaxed">
            Sus resultados hablan por nosotros. Estas son las voces de quienes 
            han transformado su <span className="text-[#222952] font-medium">negocio inmobiliario</span> con 
            nuestra <span className="text-[#6D7FBE] font-medium">metodología</span>.
          </p>
        </div>

        {/* Testimonial destacado */}
        <div className="mb-20">
          <div className="relative bg-gradient-to-br from-white to-[#EBF0CB]/10 rounded-3xl p-12 shadow-2xl border border-gray-100 max-w-5xl mx-auto">
            {/* Quote icon */}
            <div className="absolute -top-6 left-12">
              <div className="w-12 h-12 bg-gradient-to-r from-[#222952] to-[#6D7FBE] rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Contenido del testimonial activo */}
            <div className="text-center">
              <blockquote className="text-2xl md:text-3xl text-gray-700 font-mont font-light mb-8 leading-relaxed italic">
                "{testimonials[activeTestimonial].testimonial}"
              </blockquote>
              
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#EBF0CB] text-[#EBF0CB]" />
                ))}
              </div>

              {/* Author info */}
              <div className="flex items-center justify-center gap-6">
                <div className={`w-20 h-20 bg-gradient-to-r ${testimonials[activeTestimonial].gradient} rounded-2xl flex items-center justify-center`}>
                  <span className="text-white font-mont font-black text-xl">
                    {testimonials[activeTestimonial].initials}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-mont font-black text-[#222952] text-xl">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-gray-600 font-mont font-medium">
                    {testimonials[activeTestimonial].role}
                  </div>
                  <div className="text-[#6D7FBE] font-mont font-semibold text-sm">
                    {testimonials[activeTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#EBF0CB]/20 hover:border-[#6D7FBE]/30 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial 
                        ? 'bg-gradient-to-r from-[#222952] to-[#6D7FBE] w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#EBF0CB]/20 hover:border-[#6D7FBE]/30 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Grid de testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => {
            const IconComponent = testimonial.icon;
            const isVisible = visibleCards.has(index);
            const isHovered = hoveredCard === index;

            return (
              <div 
                key={testimonial.name}
                data-index={index}
                className={`testimonial-card relative cursor-pointer transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Fondo con gradiente animado */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.bgColor} rounded-2xl transition-opacity duration-500 blur-sm ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}></div>

                {/* Card */}
                <div className={`relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-500 h-full ${
                  isHovered 
                    ? 'shadow-2xl shadow-[#6D7FBE]/10 scale-105 border-[#6D7FBE]/20 transform translate-y-[-4px]' 
                    : ''
                }`}>
                  
                  {/* Header con avatar e industria */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`relative w-16 h-16 bg-gradient-to-r ${testimonial.gradient} rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isHovered ? 'scale-110' : ''
                      }`}>
                        <span className="text-white font-mont font-black text-lg">
                          {testimonial.initials}
                        </span>
                      </div>
                      <div>
                        <div className="font-mont font-black text-[#222952] text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-600 font-mont font-medium text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                    
                    <div className={`p-2 rounded-lg transition-all duration-300 ${
                      isHovered ? 'bg-[#EBF0CB]/30' : 'bg-gray-100'
                    }`}>
                      <IconComponent className={`w-5 h-5 transition-colors duration-300 ${
                        isHovered ? 'text-[#6D7FBE]' : 'text-gray-500'
                      }`} />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#EBF0CB] text-[#EBF0CB]" />
                    ))}
                  </div>
                  
                  {/* Testimonial */}
                  <blockquote className="text-gray-600 font-mont font-light mb-6 leading-relaxed italic">
                    "{testimonial.testimonial}"
                  </blockquote>

                  {/* Company y métrica */}
                  <div className="mt-auto">
                    <div className="text-[#6D7FBE] font-mont font-semibold mb-2">
                      {testimonial.company}
                    </div>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-mont font-semibold transition-all duration-300 ${
                      isHovered 
                        ? 'bg-gradient-to-r from-[#EBF0CB] to-[#6D7FBE]/20 text-[#222952]' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      <TrendingUp className="w-4 h-4" />
                      {testimonial.metric}
                    </div>
                  </div>

                  {/* Barra de progreso inferior */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100 rounded-b-2xl overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${testimonial.gradient} transition-all duration-700 ${
                      isHovered ? 'w-full' : 'w-0'
                    }`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats de testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { number: '98%', label: 'Satisfacción Cliente', icon: Award },
            { number: '150+', label: 'Proyectos Exitosos', icon: TrendingUp },
            { number: '5.0', label: 'Calificación Promedio', icon: Star }
          ].map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div 
                key={stat.label}
                className="text-center p-8 bg-gradient-to-br from-white to-[#EBF0CB]/10 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#222952] to-[#6D7FBE] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <StatIcon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-mont font-black text-[#222952] mb-2">
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
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#EBF0CB]/30 to-[#6D7FBE]/10 rounded-3xl p-12 backdrop-blur-sm border border-[#6D7FBE]/20">
            <Sparkles className="w-12 h-12 text-[#6D7FBE] mx-auto mb-6" />
            <h3 className="text-3xl font-mont font-black text-[#222952] mb-4">
              Únete a nuestros clientes satisfechos
            </h3>
            <p className="text-xl text-gray-600 font-mont font-light mb-8 max-w-2xl mx-auto">
              Descubre por qué las mejores marcas inmobiliarias eligen trabajar con nosotros
            </p>
            <button className="group relative overflow-hidden bg-gradient-to-r from-[#222952] to-[#6D7FBE] text-white px-10 py-5 font-mont font-bold rounded-full hover:shadow-2xl hover:shadow-[#6D7FBE]/30 transition-all duration-500 hover:scale-105">
              <span className="absolute inset-0 bg-gradient-to-r from-[#6D7FBE] to-[#222952] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative flex items-center gap-3">
                <Users className="w-5 h-5" />
                Comienza tu transformación
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;