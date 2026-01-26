'use client';

import { useState } from 'react';

const contactInfo = [
  { 
    label: 'Email', 
    value: 'ingasandrine031@gmail.com', 
    link: 'mailto:ingasandrine031@gmail.com',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  { 
    label: 'Phone', 
    value: '+250 783 827 849', 
    link: 'tel:+250783827849',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  },
  { 
    label: 'Location', 
    value: 'KG 577 Street, Kigali', 
    link: '#',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
];



export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('❌ Failed to send message');
      }
    } catch (error) {
      alert('❌ Error sending message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="absolute top-20 right-5 sm:right-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-[#8A9A5B]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-5 sm:left-10 w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 bg-[#6b9071]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <p className="text-[#8A9A5B] text-xs sm:text-sm font-bold tracking-wider uppercase mb-2 sm:mb-3">LET'S CONNECT</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4">
            Get In <span className="text-[#6b9071]">Touch</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl font-light">Have a project in mind? Let's talk!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 md:mb-16">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="group sm:col-span-1">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 md:py-5 glass-effect rounded-xl sm:rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6b9071] transition-all border border-white/5 text-sm sm:text-base"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="group sm:col-span-1">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 md:py-5 glass-effect rounded-xl sm:rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6b9071] transition-all border border-white/5 text-sm sm:text-base"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div className="group">
              <textarea
                placeholder="Your Message"
                rows={6}
                required
                value={formData.message}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 md:py-5 glass-effect rounded-xl sm:rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6b9071] transition-all resize-none border border-white/5 text-sm sm:text-base"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 sm:px-8 py-3 sm:py-4 md:py-5 bg-[#6b9071] text-white rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-[#6b9071]/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="space-y-4 sm:space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="group block glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#8A9A5B]/10 border border-white/5"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-[#6b9071] flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 flex-shrink-0">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                      {info.icon}
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-gray-400 text-xs sm:text-sm font-semibold mb-0.5 sm:mb-1">{info.label}</h3>
                    <p className="text-white text-sm sm:text-base md:text-lg font-bold break-words">{info.value}</p>
                  </div>
                </div>
              </a>
            ))}

            <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/5">
              <h3 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-[#6b9071] hover:scale-110 transition-all duration-300 hover:shadow-lg"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-white font-bold text-sm sm:text-base">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ingabire-sandrine-443321381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-[#6b9071] hover:scale-110 transition-all duration-300 hover:shadow-lg"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-white font-bold text-sm sm:text-base">LinkedIn</span>
                </a>
                <a
                  href="https://www.instagram.com/____1ngabire?igsh=MXJ1ZGE0a2g1bmJsMg%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-[#6b9071] hover:scale-110 transition-all duration-300 hover:shadow-lg"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-white font-bold text-sm sm:text-base">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center glass-effect rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/5">
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
            Designed & Built with <span className="text-red-500 animate-pulse">❤️</span> by <span className="text-[#6b9071] font-bold">Sandrine Ingabire</span>
          </p>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base">&copy; 2025 All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
