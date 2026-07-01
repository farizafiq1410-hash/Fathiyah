import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Projects() {
  const projects = [
    {
      title: "KOMPASIANA",
      description: "Publikasi artikel opini dan tulisan."
    },
    {
      title: "SITUS OFFICIAL UIN JAKARTA",
      description: "Penulisan Berita Terkini."
    },
    {
      title: "UJUNGPENA",
      description: "Penulisan Straight News."
    },
    {
      title: "MEDSOS FAKULTAS",
      description: "Pembuatan Script dan Caption."
    }
  ];

  return (
    <section id="projects" className="py-6 bg-[#fdfafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-white/60 backdrop-blur-md rounded-[2.5rem] p-10 md:p-16 border border-white shadow-sm flex flex-col"
        >
          <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h2 className="text-[10px] uppercase tracking-widest text-[#852d36] font-bold flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#852d36]"></span> Selected Publications
            </h2>
            <Link to="/publications" className="inline-block bg-[#5c2026]/90 backdrop-blur-sm text-white px-6 py-3 rounded-2xl hover:bg-[#852d36] transition-colors text-[10px] font-bold tracking-[0.2em] uppercase shadow-md shadow-[#852d36]/20 self-start md:self-auto text-center">
              View All Publications
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-white/40 border border-white/60 rounded-3xl hover:bg-white/80 hover:shadow-[0_8px_30px_-12px_rgba(133,45,54,0.15)] transition-all"
              >
                <p className="text-[10px] uppercase font-bold text-[#d48a93] mb-3">0{index + 1}.</p>
                <h4 className="text-[13px] md:text-sm font-bold text-[#3e1519] mb-2 leading-tight">{project.title}</h4>
                <p className="text-xs text-[#7a5a5d] font-medium leading-relaxed">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
