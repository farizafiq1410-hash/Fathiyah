import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-6 bg-[#fdfafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-white/60 backdrop-blur-md rounded-[2.5rem] p-10 md:p-16 border border-white shadow-sm"
        >
          <div className="mb-8">
            <h2 className="text-[10px] uppercase tracking-widest text-[#852d36] font-bold flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#852d36]"></span> Profile Details
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="text-[#6a4a4d] text-xs md:text-sm leading-relaxed space-y-4 font-medium">
              <p>
                Perkenalkan, saya <strong className="text-[#3e1519]">Amanda Fathiyah Azizah</strong>, berusia 20 tahun, dan saat ini sedang menempuh pendidikan sebagai mahasiswi Jurnalistik di UIN Jakarta, berada di semester 4. Saya memiliki minat yang mendalam dalam dunia kepenulisan dan media kreatif, yang meliputi penulisan berita, wawancara, pembuatan caption informatif, hingga memproduksi konten video.
              </p>
              <p>
                Saat ini, saya aktif berkontribusi sebagai <strong className="text-[#3e1519]">Content Writer</strong> di Humas Fakultas Dakwah dan Ilmu Komunikasi, di mana saya bertanggung jawab atas copywriting media sosial dan pembuatan konten edukasi. Selain itu, saya juga aktif berorganisasi di Himpunan Mahasiswa Program Studi (HMPS) Jurnalistik pada Departemen PSDM.
              </p>
            </div>
            <div className="text-[#6a4a4d] text-xs md:text-sm leading-relaxed space-y-4 font-medium">
              <p>
                Pengalaman profesional saya juga meliputi program <strong className="text-[#3e1519]">Internship di Pusat Informasi dan Humas UIN Jakarta Batch 8</strong>, di mana saya berperan sebagai Jurnalis yang melakukan wawancara eksklusif dengan tokoh penting dan meliput langsung acara kampus. Sebelumnya, saya juga pernah menimba pengalaman sebagai <strong className="text-[#3e1519]">Administrasi di Bank Syariah Indonesia (BSI)</strong> selama 3 bulan pada tahun 2022.
              </p>
              <p>
                Saya adalah individu yang senantiasa antusias untuk belajar, berkolaborasi, dan berkomitmen untuk memberikan dampak positif melalui karya-karya jurnalistik dan kreatif yang saya hasilkan.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
