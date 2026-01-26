'use client';

const stats = [
  { label: 'Years Experience', value: '2+' },
  { label: 'Projects Completed', value: '15+' },
  { label: 'Technologies', value: '10+' },
  { label: 'Happy Clients', value: '8+' },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="absolute top-20 right-5 sm:right-10 w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 bg-[#8A9A5B]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-5 sm:left-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-[#6b9071]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="text-[#8A9A5B] text-xs sm:text-sm font-bold tracking-wider uppercase mb-2 sm:mb-3">Get to know me</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4">
            About <span className="text-[#6b9071]">Me</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-10 sm:mb-12 md:mb-16">
          <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-[#8A9A5B]/10 border border-[#8A9A5B]/10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#6b9071] mb-4 sm:mb-5 md:mb-6">My Mission</h3>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              I'm <span className="text-[#8A9A5B] font-bold">Ingabire Sandrine</span>, a dedicated software developer with expertise in <span className="text-[#6b9071] font-semibold">React, Node.js, MySQL, and UI/UX design</span>. 
              I am passionate about creating intuitive and responsive web experiences that solve real-world problems.
            </p>
          </div>

          <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-[#6b9071]/10 border border-[#6b9071]/10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#6b9071] mb-4 sm:mb-5 md:mb-6">What I Do</h3>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              As a creative front-end developer and UI/UX designer, I focus on delivering clean, user-friendly interfaces. 
              I enjoy transforming complex challenges into elegant solutions and turning innovative ideas into impactful applications.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center hover:scale-110 transition-all duration-300 hover:bg-[#6b9071]/10 group border border-white/5"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-[#6b9071] mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-gray-400 text-xs sm:text-sm font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 text-center px-4">
          <p className="text-gray-400 text-sm sm:text-base md:text-lg">
            Currently seeking opportunities to apply my knowledge and grow professionally in a dynamic environment.
          </p>
        </div>
      </div>
    </section>
  );
}
