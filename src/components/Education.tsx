import { motion } from 'motion/react';

export default function Education() {
  const education = [
    {
      institution: "UIN JAKARTA",
      degree: "Jurusan Jurnalistik",
      period: "2024 - Sekarang"
    },
    {
      institution: "SMK BISNIS INDONESIA",
      degree: "Jurusan Otomatisasi dan Tata Kelola Perkantoran",
      period: "2021 - 2024"
    }
  ];

  return (
    <section id="education" className="py-6 bg-[#fdfafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-white/40 backdrop-blur-md rounded-[2.5rem] p-10 md:p-16 border border-white/80 shadow-sm flex flex-col lg:flex-row gap-8 lg:gap-16 lg:items-center"
        >
          <div className="lg:w-1/3">
            <h2 className="text-[10px] uppercase tracking-widest text-[#852d36] font-bold flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-[#852d36]"></span> Education Background
            </h2>
            <p className="text-xs text-[#7a5a5d] font-medium leading-relaxed max-w-sm">
              Academic foundation focusing on communications, administration, and professional journalistic practices.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/60 p-8 rounded-[2rem] border border-white shadow-[0_4px_20px_-10px_rgba(133,45,54,0.1)] hover:bg-white/80 transition-colors"
              >
                <p className="text-sm font-bold text-[#3e1519] mb-1">{item.institution}</p>
                <p className="text-xs font-medium text-[#7a5a5d] mb-4">{item.degree}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#d48a93] inline-block bg-[#d48a93]/10 px-3 py-1 rounded-full border border-[#d48a93]/20">{item.period}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
