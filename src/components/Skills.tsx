import { motion } from 'motion/react';

export default function Skills() {
  const skillCategories = [
    {
      title: "WRITING",
      skills: ["Berita", "Caption", "Opini", "Feature", "Script Laporan"]
    },
    {
      title: "TECHNICAL",
      skills: ["Admin", "Photography untuk Moment dan News Value", "Editing"]
    },
    {
      title: "SOFT SKILL",
      skills: [
        "Mampu berkomunikasi dengan baik",
        "Mampu bekerja sama dengan tim",
        "Mampu mengatur tugas dan prioritas"
      ]
    }
  ];

  return (
    <section id="skills" className="py-6 bg-[#fdfafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-[#d48a93]/5 backdrop-blur-sm rounded-[2.5rem] p-10 md:p-16 border border-[#d48a93]/10"
        >
          <div className="mb-10">
            <h2 className="text-[10px] uppercase tracking-widest text-[#852d36] font-bold flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#852d36]"></span> Core Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col"
              >
                <h4 className="text-[11px] font-bold text-[#3e1519] tracking-widest uppercase mb-4 pb-2 border-b border-[#852d36]/10">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, idx) => (
                    <motion.span 
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + (idx * 0.1) }}
                      className="px-4 py-2 bg-[#d48a93]/10 text-[#5c2026] rounded-xl text-[10px] md:text-xs font-semibold border border-[#d48a93]/20 shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
