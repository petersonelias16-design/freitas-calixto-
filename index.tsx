import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Scale, Shield, ChevronRight, Gavel, Clock, MapPin, Phone, Menu, X, Briefcase, Award } from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/551151185801";

  return (
    <div className="bg-stone-50 text-graphite-900 font-sans selection:bg-gold-500 selection:text-white">
      
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-graphite-950/95 backdrop-blur-md border-white/10 py-4' 
            : 'bg-transparent border-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 border border-gold-500 flex items-center justify-center ${isScrolled ? 'text-gold-500' : 'text-white'}`}>
              <span className="font-serif font-bold text-xl">FC</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-lg tracking-widest uppercase leading-none ${isScrolled ? 'text-white' : 'text-white'}`}>
                Freitas Calixto
              </span>
              <span className={`text-[10px] tracking-[0.3em] uppercase opacity-80 ${isScrolled ? 'text-stone-400' : 'text-stone-300'}`}>
                Advocacia Trabalhista
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            {['Atuação', 'Escritório', 'Equipe', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} 
                className={`text-sm tracking-widest uppercase hover:text-gold-500 transition-colors ${
                  isScrolled ? 'text-stone-300' : 'text-stone-200'
                }`}
              >
                {item}
              </a>
            ))}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white transition-all duration-300 text-sm uppercase tracking-wider"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gold-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-graphite-950 border-t border-white/10 py-8 px-6 flex flex-col gap-6 md:hidden shadow-2xl">
             {['Atuação', 'Escritório', 'Equipe', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} 
                className="text-white text-lg font-serif"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with heavy overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2012&auto=format&fit=crop" 
            alt="Escritório Jurídico" 
            className="w-full h-full object-cover grayscale opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-graphite-950/90 via-graphite-950/70 to-graphite-950"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="inline-block py-1 px-3 border border-white/20 text-stone-300 text-xs tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
              Especialistas em Direito do Trabalho
            </span>
          </div>
          <h1 className="fade-in-up font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8" style={{ animationDelay: '0.3s' }}>
            Seus Direitos,<br/>
            <span className="italic text-gold-500">Defesa Absoluta</span>
          </h1>
          <p className="fade-in-up text-lg md:text-xl text-stone-300 max-w-2xl mx-auto font-light leading-relaxed mb-12" style={{ animationDelay: '0.5s' }}>
            Atuação intransigente na defesa de trabalhadores. Unimos conhecimento técnico profundo à combatividade necessária para garantir o que é seu por direito.
          </p>
          <div className="fade-in-up flex flex-col md:flex-row items-center justify-center gap-6" style={{ animationDelay: '0.7s' }}>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gold-500 text-graphite-950 font-medium hover:bg-white transition-colors duration-300 min-w-[200px] uppercase tracking-wide text-sm"
            >
              Falar com Advogado
            </a>
            <a href="#atuacao" className="group flex items-center gap-2 text-white hover:text-gold-500 transition-colors uppercase tracking-wide text-sm">
              Nossas Áreas <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-stone-500">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gold-500 to-transparent"></div>
        </div>
      </section>

      {/* Philosophy / Values Section (The "Respiro") */}
      <section id="escritorio" className="py-32 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-graphite-900 mb-8 leading-tight">
                Justiça não se pede.<br/>Justiça se conquista.
              </h2>
              <div className="w-24 h-[2px] bg-gold-500 mb-8"></div>
            </div>
            <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
              <p>
                No Direito do Trabalho, os detalhes definem o resultado. O escritório <strong>Freitas Calixto</strong> nasceu para equilibrar a balança, oferecendo uma representação jurídica de elite para quem teve seus direitos violados.
              </p>
              <p>
                Não tratamos processos como números. Cada caso é uma batalha pela dignidade e pelo patrimônio do trabalhador, conduzida com estratégia, transparência e vigor.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24">
            {[
              {
                icon: <Briefcase strokeWidth={1} size={40} />,
                title: "Especialização Total",
                desc: "Foco exclusivo em Direito Trabalhista. Conhecemos cada nuance da legislação e dos tribunais regionais."
              },
              {
                icon: <Shield strokeWidth={1} size={40} />,
                title: "Proteção Integral",
                desc: "Atuamos não apenas na reparação financeira, mas na preservação da honra e da carreira do cliente."
              },
              {
                icon: <Award strokeWidth={1} size={40} />,
                title: "Resultados Reais",
                desc: "Histórico comprovado de reversões complexas e indenizações significativas."
              }
            ].map((feature, idx) => (
              <div key={idx} className="group p-8 border border-stone-200 hover:border-gold-500/50 bg-white transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <div className="text-gold-600 mb-6 group-hover:scale-110 transition-transform duration-500">{feature.icon}</div>
                <h3 className="font-serif text-xl mb-4 text-graphite-900">{feature.title}</h3>
                <p className="text-stone-500 font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section (Dark Mode) */}
      <section id="atuacao" className="py-32 bg-graphite-950 text-white border-t border-gold-500/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <span className="text-gold-500 uppercase tracking-widest text-sm mb-2 block">Nossa Expertise</span>
              <h2 className="font-serif text-4xl md:text-5xl">Defesa Trabalhista</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {[
              { title: "Reversão de Justa Causa", desc: "Análise minuciosa para reverter demissões indevidas e recuperar direitos rescisórios." },
              { title: "Acidentes de Trabalho", desc: "Indenizações por danos materiais, estéticos e morais decorrentes de insegurança laboral." },
              { title: "Assédio Moral e Sexual", desc: "Atuação sigilosa e firme contra abusos de poder no ambiente corporativo." },
              { title: "Vínculo Empregatício", desc: "Reconhecimento de direitos para prestadores de serviço, 'PJ' e terceirizados irregulares." },
              { title: "Horas Extras e Adicionais", desc: "Cálculo preciso de jornadas exaustivas, insalubridade e periculosidade não pagas." },
              { title: "Rescisão Indireta", desc: "Quando a empresa falha gravemente, garantimos sua saída com todos os direitos preservados." }
            ].map((area, idx) => (
              <div key={idx} className="group cursor-pointer border-t border-white/10 pt-8 hover:border-gold-500 transition-colors duration-500">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-2xl text-stone-200 group-hover:text-white transition-colors">
                    {area.title}
                  </h3>
                  <ChevronRight className="text-gold-500 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                </div>
                <p className="text-stone-500 text-sm leading-relaxed group-hover:text-stone-400 transition-colors">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Image Break */}
      <section className="h-[50vh] relative bg-fixed bg-center bg-cover" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop")'}}>
        <div className="absolute inset-0 bg-graphite-900/70 flex items-center justify-center">
          <div className="border border-white/30 p-12 backdrop-blur-sm max-w-3xl text-center mx-4">
             <Gavel className="w-12 h-12 text-gold-500 mx-auto mb-6" strokeWidth={1} />
             <p className="font-serif text-3xl md:text-4xl text-white italic">
               "O direito não socorre aos que dormem."
             </p>
             <p className="text-stone-400 mt-4 text-sm uppercase tracking-widest">Máxima Jurídica</p>
          </div>
        </div>
      </section>

      {/* Partners / Team */}
      <section id="equipe" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <h2 className="font-serif text-4xl mb-4 text-graphite-900">Advocacia de Referência</h2>
          <div className="w-16 h-[1px] bg-gold-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
             <div className="relative overflow-hidden aspect-[3/4] bg-stone-200 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop" 
                  alt="Advogado Freitas Calixto" 
                  className="w-full h-full object-cover grayscale transition-all duration-700"
                />
              </div>
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h3 className="font-serif text-3xl text-graphite-900 mb-2">Dr. Freitas Calixto</h3>
            <p className="text-gold-600 text-sm uppercase tracking-wider font-medium mb-6">Advogado Trabalhista Especialista</p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Com sólida atuação na defesa dos direitos trabalhistas, o escritório Freitas Calixto se destaca pela combatividade processual e pelo atendimento humanizado. 
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Nossa missão é garantir que a legislação seja cumprida rigorosamente, assegurando que trabalhadores recebam o que é justo, seja em negociações extrajudiciais ou em litígios complexos.
            </p>
            
            <div className="space-y-4">
               <div className="flex items-center gap-4 p-4 border border-stone-100 bg-stone-50">
                  <Clock className="text-gold-500 w-6 h-6" />
                  <div>
                    <p className="text-xs font-bold text-graphite-900 uppercase">Horário de Atendimento</p>
                    <p className="text-sm text-stone-600">Seg - Sex: 08:30 às 18:00</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contato" className="bg-graphite-950 text-stone-400 pt-24 pb-12 border-t border-gold-500/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          <div>
             <div className="flex items-center gap-3 mb-8 text-white">
                <div className="w-8 h-8 border border-gold-500 flex items-center justify-center">
                  <span className="font-serif font-bold text-lg">FC</span>
                </div>
                <div>
                   <span className="font-serif text-lg tracking-widest uppercase block leading-none">
                    Freitas Calixto
                  </span>
                  <span className="text-[10px] text-stone-500 uppercase tracking-widest">Advocacia</span>
                </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              Escritório especializado em Direito do Trabalho. Atendimento presencial e online para Mogi das Cruzes e região.
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold-500" /> Localização
            </h4>
            <address className="not-italic text-sm space-y-2">
              <p className="font-medium text-stone-300">Rua Barão de Jaceguai, 1708 - Sala 68</p>
              <p>Centro, Mogi das Cruzes - SP</p>
              <p>CEP: 08780-100</p>
            </address>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6 flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold-500" /> Contato
            </h4>
            <p className="text-sm mb-3">
              <span className="block text-xs text-stone-500 uppercase mb-1">Telefone / WhatsApp</span>
              <a href={whatsappLink} className="text-lg text-white hover:text-gold-500 transition-colors">
                (11) 5118-5801
              </a>
            </p>
            <p className="text-sm mb-6">
              <span className="block text-xs text-stone-500 uppercase mb-1">Horário</span>
              Segunda a Sexta: 08:30 – 18:00
            </p>
            <a 
              href={whatsappLink} 
              className="inline-flex items-center gap-2 bg-gold-600 text-white py-3 px-6 text-xs uppercase tracking-widest hover:bg-gold-500 transition-colors"
            >
              Iniciar Atendimento
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600">
          <p>&copy; {new Date().getFullYear()} Freitas Calixto Advocacia Trabalhista. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <span>OAB/SP Inscrito</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);

export default App;