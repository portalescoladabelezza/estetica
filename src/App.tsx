import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  MapPin, 
  Clock, 
  Phone, 
  Instagram, 
  Facebook, 
  Check, 
  Calendar, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronRight, 
  ShieldCheck,
  Award,
  Heart,
  Droplet
} from "lucide-react";
import { clinicConfig, procedures, packages, galleryImages } from "./data.ts";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);

  // Helper to generate custom WhatsApp links
  const getWhatsAppLink = (messageText: string) => {
    return `https://wa.me/${clinicConfig.whatsappNumber}?text=${encodeURIComponent(messageText)}`;
  };

  const defaultWAUrl = getWhatsAppLink("Olá! Vi o site da Essenza Clínica Estética e gostaria de agendar uma avaliação.");
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${clinicConfig.address}, ${clinicConfig.city}`)}`;

  // Navigation menu items
  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Procedimentos", href: "#procedimentos" },
    { label: "Pacotes", href: "#pacotes" },
    { label: "Galeria", href: "#galeria" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <div className="min-h-screen bg-nude-50 font-sans text-neutral-800 selection:bg-rose-200 selection:text-rose-700 antialiased overflow-x-hidden">
      
      {/* HEADER */}
      <header id="header" className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-nude-100 shadow-xs transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo area */}
            <div className="flex flex-col">
              <a href="#inicio" className="flex items-baseline gap-1" id="logo-link">
                <span className="font-serif text-2xl font-semibold tracking-wide text-neutral-900">
                  Essenza
                </span>
                <span className="font-sans text-xs uppercase tracking-widest text-[#829281] font-medium hidden sm:inline">
                  Estética
                </span>
              </a>
              <span className="text-[10px] uppercase tracking-widest text-[#829281] font-semibold mt-0.5 leading-none block">
                Estética • Beleza • Bem-estar
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8" aria-label="Menu Principal">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  id={`nav-desktop-${item.label.toLowerCase()}`}
                  className="font-medium text-[#7A7A7A] hover:text-[#3D3D3D] text-[11px] uppercase tracking-widest transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop Call To Action */}
            <div className="hidden md:flex items-center">
              <a
                href={getWhatsAppLink("Olá! Gostaria de agendar uma avaliação na Essenza Clínica Estética. Tem horário disponível?")}
                target="_blank"
                rel="no-referrer"
                id="btn-nav-desktop-agendar"
                className="inline-flex items-center justify-center border card-border hover:bg-nude-100 text-neutral-800 text-[11px] uppercase tracking-widest font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
              >
                Agendar avaliação
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-3 md:hidden">
              <a
                href={defaultWAUrl}
                target="_blank"
                rel="no-referrer"
                id="btn-nav-mobile-wa"
                className="inline-flex items-center justify-center p-2 bg-sage-50 text-sage-600 hover:text-sage-800 rounded-full border border-sage-200/50"
                aria-label="Agendar via WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                id="btn-mobile-menu-toggle"
                className="p-2 text-neutral-700 hover:text-neutral-900 rounded-lg focus:outline-hidden"
                aria-label="Alternar menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-white border-b border-nude-200 overflow-hidden"
              id="mobile-nav-panel"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    id={`nav-mobile-${item.label.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-neutral-700 hover:text-gold-dark hover:bg-nude-50 px-3 py-3 rounded-md text-base font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 px-3">
                  <a
                    href={getWhatsAppLink("Olá! Gostaria de agendar uma avaliação na Essenza Clínica Estética. Tem horário disponível?")}
                    target="_blank"
                    rel="no-referrer"
                    id="btn-nav-mobile-agendar"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex w-full items-center justify-center bg-gold-medium text-white px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider"
                  >
                    Agendar avaliação
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="relative bg-[#FAF9F6] overflow-hidden pt-8 pb-16 lg:py-20">
        
        {/* Soft elegant backing shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-12 left-0 w-80 h-80 bg-sage-100/20 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center bg-nude-200/40 rounded-[2.5rem] p-8 lg:p-16 border border-nude-300/30 shadow-xs relative overflow-hidden">
            
            {/* Left Column Text Content */}
            <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center lg:justify-start gap-2 bg-[#829281]/15 text-[#829281] px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 w-fit self-center lg:self-start border border-[#829281]/20"
              >
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                Cuidado estético altamente especializado
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="font-serif text-4xl sm:text-5xl lg:text-5.5xl font-semibold tracking-tight text-[#3D3D3D] leading-[1.08]"
                id="hero-title"
              >
                Cuide da sua beleza com conforto, segurança e autoestima.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-6 text-base sm:text-lg text-[#7A7A7A] font-light max-w-xl mx-auto lg:mx-0 leading-relaxed"
                id="hero-subtitle"
              >
                Procedimentos estéticos faciais e corporais para quem busca bem-estar, cuidado e atendimento profissional. 
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
              >
                <a
                  href="#procedimentos"
                  id="btn-hero-procedimentos"
                  className="w-full sm:w-auto inline-flex items-center justify-center border border-white/60 bg-white/70 hover:bg-white text-neutral-800 font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-sm hover:scale-[1.01] hover:shadow-md cursor-pointer text-xs uppercase tracking-widest"
                >
                  Ver procedimentos
                  <ArrowRight className="w-4 h-4 ml-2 text-[#D4AF37]" />
                </a>
                <a
                  href={getWhatsAppLink("Olá! Gostaria de agendar uma avaliação na Essenza Clínica Estética. Tem horário disponível?")}
                  target="_blank"
                  rel="no-referrer"
                  id="btn-hero-agendar"
                  className="w-full sm:w-auto inline-flex items-center justify-center btn-gradient text-neutral-800 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:scale-[1.01] hover:shadow-xl cursor-pointer text-xs uppercase tracking-widest"
                >
                  Agendar avaliação
                </a>
              </motion.div>
            </div>

            {/* Right Column Image Representation */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative max-w-md lg:max-w-full w-full"
              >
                {/* Visual backframe for the photo */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-gold-light/40 to-rose-100/40 rounded-3xl transform rotate-2 pointer-events-none" />
                <div className="absolute inset-0 border border-nude-300/40 rounded-3xl transform -rotate-1 pointer-events-none" />
                
                {/* Hero image item */}
                <img
                  src="/src/assets/images/hero_clinic_aesthetic_1781150238794.png"
                  alt="Tratamento estético premium na Essenza Clínica Estética"
                  className="w-full h-auto max-h-[440px] object-cover rounded-3xl shadow-xl border border-white"
                  referrerPolicy="no-referrer"
                  id="hero-img"
                />

                {/* Aesthetic stamp on top of photo */}
                <div className="absolute -bottom-4 -left-4 bg-white border card-border p-4 rounded-2xl shadow-lg flex items-center gap-3 max-w-xs hidden sm:flex">
                  <div className="p-2 bg-[#829281]/10 rounded-xl text-sage-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-neutral-800 uppercase tracking-widest">Ambiente Selecionado</h4>
                    <p className="text-[10px] text-neutral-500 font-light mt-0.5">Segurança, assepsia rigorosa e bem-estar.</p>
                  </div>
                </div>

              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* FAIXA DE DESTAQUE */}
      <div className="bg-sage-600 text-white/95 py-4 overflow-hidden relative border-y border-sage-800/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs sm:text-sm uppercase tracking-widest font-medium text-center">
            <span className="flex items-center gap-2">Limpeza de pele <span className="text-gold-light/60">•</span></span>
            <span className="flex items-center gap-2">Skincare <span className="text-gold-light/60">•</span></span>
            <span className="flex items-center gap-2">Drenagem <span className="text-gold-light/60">•</span></span>
            <span className="flex items-center gap-2">Massagem <span className="text-gold-light/60">•</span></span>
            <span className="flex items-center gap-2">Estética corporal <span className="text-gold-light/60">•</span></span>
            <span className="flex items-center gap-2 text-gold-light font-semibold">Atendimento pelo WhatsApp</span>
          </div>
        </div>
      </div>

      {/* PROCEDIMENTOS SECTION */}
      <section id="procedimentos" className="py-20 lg:py-28 bg-white scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-widest text-gold-dark uppercase block mb-3">Tabela de Serviços</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900" id="services-title">
              Procedimentos estéticos
            </h2>
            <div className="w-16 h-0.5 bg-gold-medium mx-auto my-5" />
            <p className="text-neutral-600 text-base font-light leading-relaxed" id="services-subtitle">
              Escolha o cuidado ideal e agende sua avaliação pelo WhatsApp.
            </p>
          </div>

          {/* Procedures Grid (8 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="procedures-grid">
            {procedures.map((proc) => {
              const procWAUrl = getWhatsAppLink(`Olá! Gostaria de agendar ${proc.name} na Essenza Clínica Estética. Tem horário disponível?`);
              return (
                <article
                  key={proc.id}
                  id={`card-procedure-${proc.id}`}
                  className="flex flex-col bg-white rounded-3xl card-border gold-glow hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1 relative"
                >
                  {/* Card Badge tag */}
                  <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-xs text-[#829281] border border-nude-100 text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-2xs">
                    {proc.tag}
                  </div>

                  {/* Card Image */}
                  <div className="h-52 w-full overflow-hidden relative bg-nude-100">
                    <img
                      src={proc.image}
                      alt={proc.name}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="font-serif text-xl font-medium text-[#3D3D3D] mb-2">
                      {proc.name}
                    </h3>
                    <p className="text-xs text-[#7A7A7A] font-light leading-relaxed mb-6 flex-1">
                      {proc.description}
                    </p>

                    {/* Price and Action Button Section */}
                    <div className="mt-auto space-y-4 pt-4 border-t border-nude-100">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">Investimento</span>
                        <span className="text-base font-semibold text-[#D4AF37]">
                          {proc.price}
                        </span>
                      </div>
                      
                      <a
                        href={procWAUrl}
                        target="_blank"
                        rel="no-referrer"
                        id={`btn-wa-proc-${proc.id}`}
                        className="w-full flex items-center justify-center text-center bg-[#829281] hover:bg-[#576556] text-white text-[11px] font-bold uppercase tracking-widest py-3.5 px-4 rounded-xl transition-all duration-300 shadow-2xs hover:shadow-xs cursor-pointer whitespace-nowrap block"
                      >
                        Agendar pelo WhatsApp
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* PACOTES SECTION */}
      <section id="pacotes" className="py-20 lg:py-28 bg-nude-100 scroll-mt-10 overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-widest text-gold-dark uppercase block mb-3">Rotina & Tratamentos</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900" id="packages-title">
              Pacotes de cuidado
            </h2>
            <div className="w-16 h-0.5 bg-gold-medium mx-auto my-5" />
            <p className="text-neutral-600 text-base font-light leading-relaxed" id="packages-subtitle">
              Opções pensadas para quem quer manter uma rotina de beleza e bem-estar.
            </p>
          </div>

          {/* Packages Grid (3 Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto" id="packages-grid">
            {packages.map((pack) => {
              const packWAUrl = getWhatsAppLink(`Olá! Gostaria de agendar o ${pack.name} na Essenza Clínica Estética. Tem horário disponível?`);
              return (
                <div
                  key={pack.id}
                  id={`card-package-${pack.id}`}
                  className="bg-white rounded-3xl border border-nude-200/80 hover:border-[#D4AF37]/50 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1"
                >
                  {/* Package Thumbnail */}
                  <div className="h-48 w-full overflow-hidden bg-nude-200 relative">
                    <img
                      src={pack.image}
                      alt={pack.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent flex items-end p-5">
                      <span className="text-white text-[10px] uppercase tracking-widest font-bold bg-[#D4AF37]/90 px-3 py-1 rounded-full">
                        Valor Especial
                      </span>
                    </div>
                  </div>

                  {/* Package Details */}
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="font-serif text-2xl font-medium text-[#3D3D3D] mb-3">
                      {pack.name}
                    </h3>
                    <p className="text-sm text-[#7A7A7A] font-light mb-6 flex-1 leading-relaxed">
                      {pack.description}
                    </p>

                    <div className="pt-6 border-t border-nude-100 flex flex-col gap-4">
                      <div className="flex items-baseline justify-between">
                        <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold">Pacote fechado</span>
                        <span className="text-2xl font-serif font-bold text-[#D4AF37]">
                          {pack.price}
                        </span>
                      </div>

                      <a
                        href={packWAUrl}
                        target="_blank"
                        rel="no-referrer"
                        id={`btn-wa-pack-${pack.id}`}
                        className="w-full flex items-center justify-center text-center bg-[#D4AF37] hover:bg-gold-dark text-white text-[11px] font-bold uppercase tracking-widest py-4 px-6 rounded-xl transition-all duration-300 shadow-2xs hover:shadow-xs cursor-pointer"
                      >
                        Agendar pacote
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* AMBIENTE / GALERIA */}
      <section id="galeria" className="py-20 lg:py-28 bg-white scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-widest text-gold-dark uppercase block mb-3">Tour Visceral</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900" id="gallery-title">
              Ambiente e cuidados
            </h2>
            <div className="w-16 h-0.5 bg-gold-medium mx-auto my-5" />
            <p className="text-neutral-600 text-base font-light leading-relaxed" id="gallery-subtitle">
              Um espaço pensado para cuidar de você com conforto e atenção.
            </p>
          </div>

          {/* Grid Layout (6 items) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="gallery-grid">
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedGalleryImage(image.src)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-neutral-100 aspect-4/3 border border-nude-200/50 shadow-2xs"
                id={`gallery-item-${image.id}`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] text-rose-200 uppercase tracking-widest font-bold mb-1">
                    {image.category}
                  </span>
                  <h4 className="text-white font-serif text-lg font-medium tracking-wide">
                    {image.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* COMO AGENDAR SECTION */}
      <section className="py-20 bg-nude-100 border-y border-nude-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-gold-dark uppercase">Processo Simples</span>
            <h2 className="font-serif text-3xl font-semibold text-neutral-900 mt-2">Como agendar seu atendimento</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative" id="steps-grid">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 bg-white border border-nude-300/40 rounded-full flex items-center justify-center font-serif text-lg font-bold text-gold-dark shadow-sm mb-6 relative">
                1
                <div className="hidden md:block absolute top-1/2 left-14 w-full h-[1px] bg-nude-300/60 z-0" />
              </div>
              <h3 className="text-base font-semibold text-neutral-900 mb-2">Escolha o procedimento</h3>
              <p className="text-xs text-neutral-500 font-light leading-relaxed max-w-xs">
                Veja as opções de estética facial, corporal e bem-estar.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 bg-white border border-nude-300/40 rounded-full flex items-center justify-center font-serif text-lg font-bold text-gold-dark shadow-sm mb-6 relative">
                2
                <div className="hidden md:block absolute top-1/2 left-14 w-full h-[1px] bg-nude-300/60 z-0" />
              </div>
              <h3 className="text-base font-semibold text-neutral-900 mb-2">Clique no WhatsApp</h3>
              <p className="text-xs text-neutral-500 font-light leading-relaxed max-w-xs">
                Envie sua mensagem diretamente para a clínica.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 bg-white border border-nude-300/40 rounded-full flex items-center justify-center font-serif text-lg font-bold text-gold-dark shadow-sm mb-6 relative">
                3
                <div className="hidden md:block absolute top-1/2 left-14 w-full h-[1px] bg-nude-300/60 z-0" />
              </div>
              <h3 className="text-base font-semibold text-neutral-900 mb-2">Combine sua avaliação</h3>
              <p className="text-xs text-neutral-500 font-light leading-relaxed max-w-xs">
                Consulte horários e receba orientação sobre o melhor atendimento.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 bg-white border border-nude-300/40 rounded-full flex items-center justify-center font-serif text-lg font-bold text-gold-dark shadow-sm mb-6">
                4
              </div>
              <h3 className="text-base font-semibold text-neutral-900 mb-2">Venha se cuidar</h3>
              <p className="text-xs text-neutral-500 font-light leading-relaxed max-w-xs">
                Compareça no horário combinado e aproveite seu momento de autocuidado.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SOBRE A CLINICA SECTION */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image Pillar */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-sage-50/70 rounded-3xl transform -rotate-1 pointer-events-none" />
              
              <img
                src="/src/assets/images/clinic_interior_1781150253912.png"
                alt="Ambiente calmo e moderno da Essenza Clínica Estética"
                className="w-full h-auto object-cover rounded-2xl shadow-xl relative z-10 border border-white"
                referrerPolicy="no-referrer"
                id="about-img"
              />

              {/* Float medal */}
              <div className="absolute -top-6 -right-6 bg-white border border-nude-200/80 shadow-lg rounded-2xl p-4 flex items-center gap-3 z-20">
                <div className="p-2 bg-gold-light/40 rounded-lg text-gold-dark">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-neutral-800 uppercase tracking-wider block">Estilo Premium</h4>
                  <span className="text-[10px] text-neutral-400 block">Diferenciado em saúde da pele</span>
                </div>
              </div>
            </div>

            {/* Right Text Pillar */}
            <div className="lg:col-span-7" id="about-info">
              <span className="text-xs font-semibold tracking-widest text-gold-dark uppercase block mb-3">Quem somos</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">
                Sobre a Essenza Clínica Estética
              </h2>
              
              <p className="text-neutral-600 text-sm sm:text-base font-light leading-relaxed mb-8">
                A Essenza Clínica Estética é um espaço criado para quem busca cuidado, autoestima e bem-estar. Trabalhamos com procedimentos faciais, corporais e atendimentos personalizados em um ambiente limpo, acolhedor e profissional.
              </p>

              {/* Differentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="flex items-start gap-3">
                  <div className="p-1 h-6 w-6 rounded-full bg-rose-50 border border-rose-200/50 flex items-center justify-center text-rose-700 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-800">Atendimento humanizado</h4>
                    <p className="text-xs text-neutral-400 font-light mt-0.5">Cuidado dedicado e sob medida.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 h-6 w-6 rounded-full bg-rose-50 border border-rose-200/50 flex items-center justify-center text-rose-700 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-800">Ambiente limpo e acolhedor</h4>
                    <p className="text-xs text-neutral-400 font-light mt-0.5">Segurança sanitária impecável.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 h-6 w-6 rounded-full bg-rose-50 border border-rose-200/50 flex items-center justify-center text-rose-700 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-800">Procedimentos faciais e corporais</h4>
                    <p className="text-xs text-neutral-400 font-light mt-0.5">Portfólio amplo e qualificado.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 h-6 w-6 rounded-full bg-rose-50 border border-rose-200/50 flex items-center justify-center text-rose-700 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-800">Avaliação pelo WhatsApp</h4>
                    <p className="text-xs text-neutral-400 font-light mt-0.5 font-medium">Conversa ágil para planejar.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 h-6 w-6 rounded-full bg-rose-50 border border-rose-200/50 flex items-center justify-center text-rose-700 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-800">Profissionais cuidadosas</h4>
                    <p className="text-xs text-neutral-400 font-light mt-0.5">Acolhimento de alta excelência.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 h-6 w-6 rounded-full bg-rose-50 border border-rose-200/50 flex items-center justify-center text-rose-700 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-800">Localização fácil</h4>
                    <p className="text-xs text-neutral-400 font-light mt-0.5">Fácil acesso no centro de Nova Iguaçu.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CHAMADA PARA WHATSAPP */}
      <section className="py-20 lg:py-24 bg-sage-50 relative overflow-hidden text-center border-t border-sage-100">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
          <Droplet className="w-96 h-96 text-sage-300" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-sage-800" id="cta-title">
            Pronta para cuidar de você?
          </h2>
          <p className="text-neutral-600 mt-4 text-base sm:text-lg font-light max-w-xl mx-auto leading-relaxed" id="cta-subtitle">
            Fale agora pelo WhatsApp e agende sua avaliação na Essenza Clínica Estética.
          </p>
          <div className="mt-8">
            <a
              href={getWhatsAppLink("Olá! Vi o site da Essenza Clínica Estética e gostaria de agendar uma avaliação.")}
              target="_blank"
              rel="no-referrer"
              id="btn-cta-wa"
              className="inline-flex items-center justify-center bg-sage-600 hover:bg-sage-800 text-white font-semibold text-sm uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              <Phone className="w-4 h-4 mr-2" />
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CONTATO, LOCALIZACAO E FUNCIONAMENTO */}
      <section id="contato" className="py-20 lg:py-24 bg-nude-50 scroll-mt-10 border-t border-nude-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Hours and description pillar */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-widest text-gold-dark uppercase block mb-3">Atendimento</span>
              <h2 className="font-serif text-3xl font-semibold text-neutral-900 mb-6">
                Horário e localização
              </h2>

              <div className="space-y-6">
                
                {/* Location item */}
                <div className="flex gap-4">
                  <div className="p-3 bg-white border border-nude-200/80 rounded-xl text-gold-dark shrink-0 h-12 w-12 flex items-center justify-center shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-neutral-400 uppercase tracking-widest font-semibold">Endereço</h4>
                    <p className="text-base text-neutral-800 font-medium mt-1">
                      {clinicConfig.address}
                    </p>
                    <p className="text-sm text-neutral-500 font-light mt-0.5">
                      {clinicConfig.city}
                    </p>
                  </div>
                </div>

                {/* Clock item */}
                <div className="flex gap-4">
                  <div className="p-3 bg-white border border-nude-200/80 rounded-xl text-gold-dark shrink-0 h-12 w-12 flex items-center justify-center shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-neutral-400 uppercase tracking-widest font-semibold">Funcionamento</h4>
                    <div className="mt-1 space-y-1 text-sm text-neutral-700">
                      <p>{clinicConfig.workingHours.weekdays}</p>
                      <p>{clinicConfig.workingHours.saturdays}</p>
                      <p className="text-neutral-400">{clinicConfig.workingHours.sundays}</p>
                    </div>
                  </div>
                </div>

                {/* Appointment warning */}
                <div className="flex gap-4">
                  <div className="p-3 bg-white border border-nude-200/80 rounded-xl text-rose-700 shrink-0 h-12 w-12 flex items-center justify-center shadow-xs">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-neutral-400 uppercase tracking-widest font-semibold">Agendamentos</h4>
                    <p className="text-sm text-neutral-600 font-light mt-1">
                      Com agendamento pelo WhatsApp
                    </p>
                  </div>
                </div>

              </div>

              <div className="mt-8 flex">
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="no-referrer"
                  id="btn-location-map"
                  className="inline-flex items-center justify-center bg-white hover:bg-nude-100 text-gold-dark border border-gold-medium/60 font-semibold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all duration-300 shadow-2xs hover:shadow-sm cursor-pointer"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Como chegar
                </a>
              </div>
            </div>

            {/* Interactive embedded-like simulated map viewport */}
            <div className="lg:col-span-7 flex items-center justify-center">
              <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden relative shadow-md border border-nude-200 bg-neutral-200">
                {/* Simulated stylized clean street map graphic or background mockup of beautiful map representation */}
                <div className="absolute inset-0 bg-neutral-100 flex flex-col items-center justify-center p-8 text-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
                  <div className="w-16 h-16 bg-white border border-nude-200 rounded-full flex items-center justify-center text-gold-dark shadow-md mb-4 animate-bounce">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-xl font-medium text-neutral-800">Essenza Clínica Estética</h4>
                  <p className="text-xs text-neutral-500 font-light mt-2 max-w-sm">
                    {clinicConfig.address} — Centro, {clinicConfig.city}
                  </p>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold mt-1">Próximo aos principais acessos</span>
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="no-referrer"
                    id="btn-map-mock-link"
                    className="mt-6 inline-flex items-center text-xs text-gold-dark font-semibold tracking-wider hover:underline"
                  >
                    Ver no Google Maps Oficial <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-900 text-white/90 pt-16 pb-12 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-neutral-800">
            
            {/* Clinic Column */}
            <div className="md:col-span-5 space-y-4">
              <span className="font-serif text-2xl font-bold tracking-wide text-white block">
                Essenza
              </span>
              <p className="text-neutral-400 text-sm font-light max-w-md leading-relaxed">
                Estética, beleza, bem-estar e atendimento pelo WhatsApp. Um espaço acolhedor dedicado ao autocuidado refinado, com técnicas inovadoras e de alto aconchego.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={`https://instagram.com/${clinicConfig.instagramUsername}`}
                  className="p-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-neutral-400 hover:text-white transition-all shadow-xs"
                  aria-label="Siga no Instagram"
                  target="_blank"
                  rel="no-referrer"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={clinicConfig.facebookUrl}
                  className="p-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-neutral-400 hover:text-white transition-all shadow-xs"
                  aria-label="Siga no Facebook"
                  target="_blank"
                  rel="no-referrer"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={defaultWAUrl}
                  className="p-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-neutral-400 hover:text-white transition-all shadow-xs"
                  aria-label="Agende pelo WhatsApp"
                  target="_blank"
                  rel="no-referrer"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Links Column */}
            <div className="md:col-span-3 space-y-4 md:pl-8">
              <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Navegação</h4>
              <ul className="space-y-2.5">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-neutral-400 hover:text-white text-sm font-light transition-colors"
                      id={`footer-link-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services/Hours Column */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Contato Direto</h4>
              <p className="text-xs text-neutral-400 font-light flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" /> (21) 96906-0505
              </p>
              <p className="text-xs text-neutral-400 font-light flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> {clinicConfig.address}, {clinicConfig.city}
              </p>
              
              {/* Automated Pulse indicator directly integrated from the Sleek Design Guidelines */}
              <div className="flex items-center gap-2 mt-4 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full w-fit">
                <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#25D366]">Atendimento Online Agora</span>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-neutral-500 text-xs gap-4">
            <p>© {new Date().getFullYear()} Essenza Clínica Estética. Todos os direitos reservados.</p>
            <p className="font-light">Estética • Beleza • Bem-estar</p>
          </div>
        </div>
      </footer>

      {/* FLOAT WHATSAPP */}
      <a
        href={defaultWAUrl}
        target="_blank"
        rel="no-referrer"
        id="btn-whatsapp-bubble-fixed"
        className="fixed bottom-6 right-6 z-50 p-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center cursor-pointer group"
        aria-label="Fale Conosco pelo WhatsApp"
      >
        <Phone className="w-6 h-6 animate-pulse" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-xs font-bold uppercase tracking-widest whitespace-nowrap">
          Falar no WhatsApp
        </span>
      </a>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedGalleryImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedGalleryImage(null)}
            className="fixed inset-0 z-50 bg-neutral-950/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
            id="gallery-lightbox"
          >
            <button
              onClick={() => setSelectedGalleryImage(null)}
              className="absolute top-4 right-4 p-3 bg-neutral-900/50 hover:bg-neutral-800 text-white rounded-full transition-colors"
              aria-label="Fechar galeria"
              id="btn-lightbox-close"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedGalleryImage}
              alt="Ambiente Ampliado"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-neutral-800"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
