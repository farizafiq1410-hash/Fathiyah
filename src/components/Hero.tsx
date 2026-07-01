import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center bg-[#fdfafb] pt-28 pb-12 overflow-hidden relative">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 bg-gradient-to-br from-[#852d36]/10 to-[#d48a93]/10 rounded-[3rem] p-8 md:p-16 border border-white flex flex-col items-center justify-center text-center shadow-sm"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative mb-10 group"
          >
            <div className="absolute -inset-4 bg-[#5c2026]/10 blur-2xl rounded-full transition-all group-hover:bg-[#852d36]/20"></div>
            <img 
              src="/images/profile.jpg" 
              alt="Amanda Fathiyah Azizah" 
              className="relative w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-white shadow-lg shadow-[#852d36]/20"
            />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#d48a93] font-bold mb-4"
          >
            Hello I'm Fathiyah
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-4xl md:text-6xl lg:text-[5rem] font-black text-[#3e1519] leading-none mb-2 tracking-tight"
          >
            AMANDA FATHIYAH
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-4xl md:text-6xl lg:text-[5rem] font-black text-[#3e1519] leading-none mb-8 tracking-tight"
          >
            AZIZAH
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-xs md:text-sm text-[#7a5a5d] leading-relaxed max-w-2xl font-medium"
          >
            Journalism Student at UIN Jakarta. Content Writer & Journalist Intern passionate about impactful storytelling, meticulous writing, and creative media production.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="pt-10"
          >
            <a href="#contact" className="inline-block bg-[#5c2026]/90 backdrop-blur-sm text-white px-8 py-3.5 rounded-2xl hover:bg-[#852d36] transition-colors text-[10px] font-bold tracking-[0.2em] uppercase shadow-md shadow-[#852d36]/20">
              HIT ME UP
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
