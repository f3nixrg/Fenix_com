import React from 'react';

export default function App() {
  const hobbies = [
    { 
      titulo: "Ciberseguridad", 
      tipo: "imagen", 
      url: "/ciber.png" 
    },
    { 
      titulo: "Musica", 
      tipo: "imagen", 
      url: "/music.png" 
    },
    { 
      titulo: "mis perrijos <3", 
      tipo: "imagen", 
      url: "/amore.jpeg" 
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b132b] text-white flex flex-col items-center selection:bg-purple-600 selection:text-white">
      
      <header className="w-full max-w-5xl flex justify-between items-center py-6 px-4 md:px-8 border-b border-purple-900/40 sticky top-0 bg-[#0b132b]/90 backdrop-blur-md z-50">
        <span className="font-bold text-xl tracking-wider text-purple-400">:)<span className="text-white">.</span></span>
        <nav className="hidden md:flex gap-6 text-sm text-gray-200 font-medium">
          <a href="#presentacion" className="hover:text-purple-400 transition">Presentación</a>
          <a href="#formacion" className="hover:text-purple-400 transition">Formación</a>
          <a href="#hobbies" className="hover:text-purple-400 transition">Hobbies</a>
          <a href="#criptografia" className="hover:text-purple-400 transition">Criptografía</a>
          <a href="#contacto" className="hover:text-purple-400 transition">Contacto</a>
        </nav>
      </header>

      <section id="presentacion" className="w-full max-w-5xl px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping"></span>
              Lista para seguir aprendiendo
            </span>

          
            <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-white leading-tight">Hola mundo! 🖖 , Soy <br />
              <span className="text-purple-400">Fenix :)  </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl font-semibold text-purple-200 mb-5 font-serif flex items-center gap-1">
              Ingeniera en Sistemas Computacionales <span className="text-purple-400 animate-pulse font-sans">|</span>
            </h2>

            <p className="text-gray-200 text-sm sm:text-base mb-6 leading-relaxed max-w-lg">
              Creando experiencias digitales estéticas, funcionales y centradas en el usuario. Apasionada por la arquitectura de sistemas, el desarrollo web moderno y la ciberseguridad.
            </p>

  
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-300 mb-8 font-medium">
              <span className="flex items-center gap-1.5">
                📍 México - CDMX 
              </span>
              <span className="text-purple-400/50">•</span>
              <span className="flex items-center gap-1.5 text-purple-300">
                💼 Disponible
              </span>
            </div>

            <div className="flex flex-wrap gap-4 mb-8 w-full sm:w-auto">
              <a 
                href="/CV.pdf" 
                download 
                className="px-6 py-3 rounded-xl bg-[#1c2541] border border-purple-400/50 hover:bg-purple-900/40 text-purple-200 font-medium text-sm transition flex items-center gap-2">
                📄 Conoce mi CV
              </a>
              <a 
                href="/mi_llave_publica.asc" 
                download 
                className="px-6 py-3 rounded-xl bg-[#1c2541] border border-purple-400/50 hover:bg-purple-900/40 text-purple-300 font-medium text-sm transition flex items-center gap-2">
                🔑 Llave Pública
              </a>
            </div>

            <div className="w-full pt-6 border-t border-purple-900/40 flex items-center gap-4 text-sm text-gray-300">
              <span className="text-xs text-purple-300 font-semibold uppercase tracking-wider">Sígueme:</span>
              <div className="flex gap-4 text-base">
                <a href="https://github.com/f3nixrg" target="_blank" rel="noopenernoreferrer" className="inline-flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors cursor-pointer">
                <svg className="w-5 h-5 fill-current pointer-events-none" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/r3nata-resendiz" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors cursor-pointer">
                <svg className="w-5 h-5 fill-current pointer-events-none" viewBox="0 0 24 24">
                 <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
               <span>LinkedIn</span></a>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden border-2 border-purple-500/30 bg-[#1c2541] p-2 shadow-2xl shadow-purple-950/50 hover:border-purple-400/60 transition duration-300">
              <img 
                src="/memoji.png" 
                alt="Renata" 
                className="w-full h-full object-cover rounded-2xl"
    
              />
            </div>
          </div>

        </div>
      </section>

      <section id="formacion" className="w-full max-w-5xl px-4 py-16">
        <div className="bg-[#1c2541] border border-purple-500/30 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8 flex flex-col gap-4 text-left">
              <h2 className="text-3xl font-extrabold text-white tracking-tight mb-2">
              Un poquito sobre mí :b
              </h2>

              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                Estudiante de Ingeniería en Sistemas Computacionales en la Escuela Superior de Cómputo (ESCOM) del IPN. Me gusta la programación de bajo nivel, el diseño, los sistemas embebidos y la ciberseguridad.
              </p>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Me gusta aprender sobre electronica y me interesa la ciberseguridad.
                Disfruto estar en comunidades de desarrollo web y ciberseguridad 
              </p>

              <p className="text-purple-300 text-sm md:text-base font-medium leading-relaxed pt-2">
                "La tecnología es mejor cuando une a las personas" - Matt Mullenweg
              </p>
            </div>

      
            <div className="md:col-span-4 flex justify-center items-center">
              <div className="relative group p-6 rounded-2xl bg-[#0b132b]/80 border border-purple-500/20 flex flex-col items-center justify-center">
      
                <svg 
                  className="w-32 h-32 text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)] transition transform group-hover:scale-105" 
                  viewBox="0 0 24 24" 
                  fill="currentColor">
                  <path d="M20 3H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h7v2H8c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1h-3v-2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H4V5h16v10z"/>
                  <path d="M6 7h5v1.5H6zm0 3h8v1.5H6zm0 3h4v1.5H6z"/>
                </svg>
                <span className="text-xs text-purple-300/80 font-mono mt-3">✨ coding & learning</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section id="hobbies" className="w-full max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold mb-2 text-center tracking-wide text-white">Mis Hobbies</h2>
        <p className="text-purple-200 text-sm text-center mb-8">Un vistazo a mis pasatiempos</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <div key={index} className="bg-[#1c2541] border border-purple-500/30 rounded-2xl p-4 flex flex-col hover:border-purple-400/60 transition">
              <h3 className="font-semibold text-sm mb-3 text-purple-300">{hobby.titulo}</h3>
              {hobby.tipo === 'imagen' ? (
                <img src={hobby.url} alt={hobby.titulo} className="rounded-xl w-full h-40 object-cover" />
              ) : (
                <video controls className="rounded-xl w-full h-40 object-cover">
                  <source src={hobby.url} type="video/mp4" />
                  Tu navegador no soporta video.
                </video>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="criptografia" className="w-full max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold mb-2 text-center tracking-wide text-white">
          Datos de Criptografia
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
  
          <div className="bg-[#1c2541] border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400/60 transition flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-white text-base mb-2">Criptoanálisis vs. La Mafia</h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                Elizebeth Smith Friedman descifró más de 12,000 mensajes encriptados de la mafia durante la Ley Seca usando solo lápiz y papel, desmantelando redes de contrabando.
              </p>
            </div>
            <span className="text-[10px] text-purple-300/80 font-mono mt-4">#HistoriaCripto</span>
          </div>


          <div className="bg-[#1c2541] border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400/60 transition flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-white text-base mb-2">Bletchley Park & Enigma</h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                Casi el 75% del personal en Bletchley Park rompiendo los códigos nazis eran mujeres. Criptoanalistas como Joan Clarke fueron piezas clave junto a Alan Turing.
              </p>
            </div>
            <span className="text-[10px] text-purple-300/80 font-mono mt-4">#WW2 #Enigma</span>
          </div>


          <div className="bg-[#1c2541] border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400/60 transition flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-white text-base mb-2">Pruebas de Conocimiento Cero</h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                Shafi Goldwasser (Premio Turing) co-inventó la tecnología ZKP: la capacidad de demostrar que conoces una contraseña sin tener que revelarla nunca.
              </p>
            </div>
            <span className="text-[10px] text-purple-300/80 font-mono mt-4">#Ciberseguridad #ZKP</span>
          </div>

        </div>
      </section>

      <footer id="contacto" className="w-full max-w-5xl px-4 pt-16 pb-12 mt-20 border-t border-purple-900/40">
        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
         
          <div className="flex flex-col gap-1">
            <span className="text-lg font-bold tracking-wider text-purple-400">
              (:<span className="text-white">)</span>
            </span>
            <p className="text-xs text-gray-400">
              Si quieres contactarme, puedes enviarme un correo a <a href="mailto:resendizgarciarenata@gmail.com" className="text-purple-400 hover:underline">resendizgarciarenata@gmail.com</a> o contactame en redes sociales
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a 
              href="https://github.com/f3nixrg" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-gray-300 transition-all rounded-xl bg-[#1c2541]/80 border border-purple-500/30 hover:bg-purple-900/40 hover:text-purple-300 hover:border-purple-400/60"
            >
              <svg className="w-4 h-4 fill-current pointer-events-none" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/r3nata-resendiz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-gray-300 transition-all rounded-xl bg-[#1c2541]/80 border border-purple-500/30 hover:bg-purple-900/40 hover:text-purple-300 hover:border-purple-400/60"
            >
              <svg className="w-4 h-4 fill-current pointer-events-none" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>

        </div>

        <div className="pt-8 mt-8 border-t border-purple-900/20 flex flex-col sm:flex-row items-center justify-between text-[12px] text-purple-300/60 gap-2">
          <p>© 2026 - Fenix RG</p>
          <p className="font-mono text-[11px] text-gray-500">React + Vite & Tailwind</p>
        </div>
      </footer>

    </div>
  );
}