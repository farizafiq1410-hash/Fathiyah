import { motion } from 'motion/react';

export default function Experience() {
  const experiences = [
    {
      title: "TIM MEDIA FAKULTAS DAKWAH DAN ILMU KOMUNIKASI",
      role: "Content Writer",
      period: "Desember 2025 - Sekarang",
      tasks: [
        "Copywriting untuk Media Sosial Fakultas.",
        "Pembuatan Konten Edukasi dan Informasi Program Studi.",
        "Kolaborasi dengan Tim Kreatif."
      ]
    },
    {
      title: "INTERN PUSAT INFORMASI DAN HUMAS UIN JAKARTA BATCH 8",
      role: "Jurnalis",
      period: "November 2025 - April 2026",
      tasks: [
        "Wawancara Eksklusif dengan Tokoh Penting.",
        "Liputan Langsung Acara Kampus.",
        "Informasi dan Profil tentang UIN Jakarta."
      ]
    },
    {
      title: "HIMPUNAN PRODI JURNALISTIK",
      role: "Anggota Departmen PSDM",
      period: "Periode 2025",
      tasks: [
        "Memberi ide Acara.",
        "Aktif di media ig ujungpena.",
        "Membuat Flyer, Live report dan Dokumentasi.",
        "Memberikan pertolongan pertama."
      ]
    },
    {
      title: "INTERN BANK SYARIAH INDONESIA",
      role: "Praktik Lapangan SMK",
      period: "September - Desember 2022",
      tasks: [
        "Mengimput data Nasabah.",
        "Pemberkasan Nasabah.",
        "Memberikan informasi tentang produk dan layanan perbankan.",
        "Mengatur jadwal rapat cabang."
      ]
    }
  ];

  return (
    <section id="experience" className="py-6 bg-[#fdfafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-white/80 backdrop-blur-sm rounded-[2.5rem] p-10 md:p-16 border border-[#d48a93]/20 shadow-sm"
        >
          <div className="mb-10">
            <h2 className="text-[10px] uppercase tracking-widest text-[#852d36] font-bold flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#852d36]"></span> Professional Experience
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="border-l-2 border-[#d48a93]/30 pl-6 relative"
              >
                <div className="absolute w-2 h-2 rounded-full bg-[#d48a93] -left-[5px] top-1.5 shadow-sm shadow-[#d48a93]/50"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <h3 className="text-sm font-bold text-[#3e1519] leading-tight pr-4">{exp.title}</h3>
                  <span className="inline-block whitespace-nowrap text-[9px] font-bold tracking-widest uppercase text-[#d48a93] bg-[#d48a93]/10 px-3 py-1 rounded-full border border-[#d48a93]/20 mt-1 sm:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-[10px] uppercase font-bold text-[#5c2026] mb-3">{exp.role}</p>
                
                <ul className="space-y-2">
                  {exp.tasks.map((task, idx) => (
                    <li key={idx} className="text-[11px] md:text-xs text-[#7a5a5d] font-medium leading-relaxed italic relative pl-4">
                      <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-[#d48a93]/40"></span>
                      {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
