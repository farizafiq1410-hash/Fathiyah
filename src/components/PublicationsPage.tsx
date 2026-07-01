import { ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const publications = [
  {
    title: "UIN Jakarta Selenggarakan Konferensi Zakat Internasional ke-9 dengan Partisipasi 15 Negara",
    url: "https://www.google.com/search?q=https://www.uinjkt.ac.id/id/uin-jakarta-selenggarakan-konferensi-zakat-internasional-ke-9-dengan-partisipasi-15-negara"
  },
  {
    title: "ICONZ ke-9 UIN Jakarta: BAZNAS RI Umumkan Donasi Rp 155 Miliar untuk Korban Bencana",
    url: "https://www.uinjkt.ac.id/id/iconz-ke-9-uin-jakarta-baznas-ri-umumkan-donasi-rp-155-miliar-untuk-korban-bencana"
  },
  {
    title: "UIN Jakarta Gelar ICONZ Ke-9 Dorong Zakat dan Filantropi Global Melalui Teknologi",
    url: "https://www.uinjkt.ac.id/id/uin-jakarta-gelar-iconz-ke-9-dorong-zakat-dan-filantropi-global-melalui-teknologi"
  },
  {
    title: "DWP UIN Jakarta Gandeng Wardah untuk Wujudkan Inner dan Outer Beauty",
    url: "https://www.uinjkt.ac.id/id/dwp-uin-jakarta-gandeng-wardah-untuk-wujudkan-inner-dan-outer-beauty"
  },
  {
    title: "IM3 & Narasi Gelar Collabonation di UIN Jakarta, Hadirkan Najwa Shihab dan Bintang Emon",
    url: "https://www.uinjkt.ac.id/id/im3-narasi-gelar-collabonation-di-uin-jakarta-hadirkan-najwa-shihab-dan-bintang-emon"
  },
  {
    title: "Sapa Siswa SMAN 90 Jakarta, UIN Jakarta Gelar Sosialisasi Program Studi dan Jalur Masuk Unggulan",
    url: "https://www.uinjkt.ac.id/id/sapa-siswa-sman-90-jakarta-uin-jakarta-gelar-sosialisasi-program-studi-dan-jalur-masuk-unggulan"
  },
  {
    title: "UIN Jakarta Tawarkan 30 Prodi Unggulan di Jalur SPAN dan UM PTKIN Tahun 2026",
    url: "https://www.uinjkt.ac.id/id/uin-jakarta-tawarkan-30-prodi-unggulan-di-jalur-span-dan-um-ptkin-tahun-2026"
  },
  {
    title: "Senat UIN Jakarta Libatkan Komisi Akademik dan PPM dalam Evaluasi Mutu Riset dan Pengabdian 2025",
    url: "https://www.uinjkt.ac.id/id/senat-uin-jakarta-libatkan-komisi-akademik-dan-ppm-dalam-evaluasi-mutu-riset-dan-pengabdian-2025"
  },
  {
    title: "Perkuat Ekosistem Riset Nasional, Lima Dosen UIN Jakarta Lolos MoRA-The AIR Funds 2025",
    url: "https://www.uinjkt.ac.id/id/perkuat-ekosistem-riset-nasional-lima-dosen-uin-jakarta-lolos-mora-the-air-funds-2025"
  },
  {
    title: "#KabarFakultas: Tim Saman Kimia FST UIN Jakarta Raih Juara Harapan I FERASERI 2025",
    url: "https://www.google.com/search?q=https://www.uinjkt.ac.id/id/kabar-fakultas-tim-saman-kimia-fst-uin-jakarta-raih-juara-harapan-i-feraseri-2025"
  },
  {
    title: "UIN Jakarta Sambut Ratusan Siswa MA Plus Nururrohmah Pondok Pesantren Al-Kamal Kebumen",
    url: "https://www.google.com/search?q=https://www.uinjkt.ac.id/id/uin-jakarta-sambut-ratusan-siswa-ma-plus-nururrohmah-pondok-pesantren-al-kamal-kebumen"
  },
  {
    title: "UIN Jakarta Resmi Kukuhkan Gun Gun Heryanto sebagai Guru Besar Komunikasi Politik",
    url: "https://www.google.com/search?q=https://www.uinjkt.ac.id/id/uin-jakarta-resmi-kukuhkan-gun-gun-heryanto-sebagai-guru-besar-komunikasi-politik"
  },
  {
    title: "Kisah Inspiratif Kholid Al-Walid: Dari Penjual Es hingga Menjadi Guru Besar UIN Jakarta",
    url: "https://www.uinjkt.ac.id/id/kisah-inspiratif-kholid-al-walid-dari-penjual-es-hingga-menjadi-guru-besar-uin-jakarta"
  },
  {
    title: "#KabarFakultas: Prodi PMH FSH UIN Jakarta Gelar Seminar Nasional ADPMH Bahas Transformasi Pembelajaran Digital",
    url: "https://www.google.com/search?q=https://www.uinjkt.ac.id/id/kabar-fakultas-prodi-pmh-fsh-uin-jakarta-gelar-seminar-nasional-adpmh-bahas-transformasi-pembelajaran-digital"
  },
  {
    title: "UIN Jakarta Buka Program Pengayaan Bahasa LPDP Batch 1 Tahun 2026",
    url: "https://www.uinjkt.ac.id/id/uin-jakarta-buka-program-pengayaan-bahasa-lpdp-batch-1-tahun-2026"
  },
  {
    title: "Mengejar Mimpi ke Luar Negeri: Cerita Peserta Pengayaan Bahasa...",
    url: "https://www.uinjkt.ac.id/id/mengejar-mimpi-ke-luar-negeri-cerita-peserta-pengayaan-bahasa-lpdp-di-uin-jakarta"
  },
  {
    title: "Menilik Prospek Karier Global dan Kualitas Pendidikan di Fakultas Adab dan Humaniora",
    url: "https://www.uinjkt.ac.id/id/menilik-prospek-karier-global-dan-kualitas-pendidikan-di-fakultas-adab-dan-humaniora"
  },
  {
    title: "FISIP UIN Jakarta Siap Menyambut Diplomat Muda di PMB 2026/2027",
    url: "https://www.uinjkt.ac.id/id/fisip-uin-jakarta-siap-menyambut-diplomat-muda-di-pmb-20262027"
  },
  {
    title: "Mengenal Keunggulan dan Prospek Karier Lulusan FDIKOM UIN Jakarta pada PMB 2026/2027",
    url: "https://www.uinjkt.ac.id/id/mengenal-keunggulan-dan-prospek-karier-lulusan-fdikom-uin-jakarta-pada-pmb-20262027"
  },
  {
    title: "UIN Jakarta Resmi Lantik Pengurus Ormawa UKM Masa Bakti 2026",
    url: "https://www.uinjkt.ac.id/id/uin-jakarta-resmi-lantik-pengurus-ormawa-ukm-masa-bakti-2026"
  },
  {
    title: "Mencetak Intelektual Global: Mengenal Keunggulan Sekolah Pascasarjana UIN Jakarta pada PMB 2026/2027",
    url: "https://www.uinjkt.ac.id/id/mencetak-intelektual-global-mengenal-keunggulan-sekolah-pascasarjana-uin-jakarta-pada-pmb-20262027"
  },
  {
    title: "#KABARFAKULTAS Tingkatkan Skill Laboratorium, FIKES UIN Jakarta Gelar Workshop Hands-On Rotary Evaporator",
    url: "https://www.google.com/search?q=https://www.uinjkt.ac.id/id/kabar-fakultas-tingkatkan-skill-laboratorium-fikes-uin-jakarta-gelar-workshop-hands-on-rotary-evaporator"
  },
  {
    title: "#KABARFAKULTAS Kementerian Haji dan Umrah Gandeng UIN Jakarta dan AMPHURI Gelar Sertifikasi Pembimbing Ibadah Angkatan III 2026",
    url: "https://www.google.com/search?q=https://www.uinjkt.ac.id/id/kabar-fakultas-kementerian-haji-dan-umrah-gandeng-uin-jakarta-dan-amphuri-gelar-sertifikasi-pembimbing-ibadah-angkatan-iii-2026"
  },
  {
    title: "Pra-Rakerpim UIN Jakarta 2026 Hasilkan Rekomendasi Strategis di Enam Bidang Utama",
    url: "https://www.uinjkt.ac.id/id/pra-rakerpim-uin-jakarta-2026-hasilkan-rekomendasi-strategis-di-enam-bidang-utama"
  },
  {
    title: "#CeritaMahasiswa Perjalanan Menembus Batas Fisik dan Kepemimpinan Lola Audina",
    url: "https://www.google.com/search?q=https://www.uinjkt.ac.id/id/cerita-mahasiswa-perjalanan-menembus-batas-fisik-dan-kepemimpinan-lola-audina"
  },
  {
    title: "Membanggakan! Ini Dia Daftar Wisudawan Terbaik dan Riset Berdampak Wisuda ke-139",
    url: "https://www.google.com/search?q=https://www.uinjkt.ac.id/id/membanggakan-ini-dia-daftar-wisudawan-terbaik-dan-riset-berdampak-wisuda-ke-139"
  },
  {
    title: "Refleksi Alumni, Dr. Abdul Muid Nawawi: Integritas Spiritual Menjadi Identitas Utama Lulusan UIN Jakarta",
    url: "https://www.uinjkt.ac.id/id/refleksi-alumni-dr-abdul-muid-nawawi-integritas-spiritual-menjadi-identitas-utama-lulusan-uin-jakarta"
  },
  {
    title: "Bukan yang Tercepat, Namun yang Terbaik: Kisah Rafi Sofyan Tsauri Meraih Predikat Skripsi Terbaik di Semester 13",
    url: "https://www.google.com/search?q=https://www.uinjkt.ac.id/id/bukan-yang-tercepat-namun-yang-terbaik-kisah-rafi-sofyan-tsauri-meraih-predikat-skripsi-terbaik-di-semester-13"
  },
  {
    title: "Lawan Stigma TBC, Mahasiswa Kesmas UIN Jakarta Luncurkan Program 'KADER KECE' dan 'JUBES TBC'",
    url: "https://www.google.com/search?q=https://www.uinjkt.ac.id/id/lawan-stigma-tbc-mahasiswa-kesmas-uin-jakarta-luncurkan-program-kader-kece-dan-jubes-tbc"
  },
  {
    title: "Peserta UIN Expose 2026: Kenali Lebih Dalam Program Studi dan Budaya Kampus",
    url: "https://www.uinjkt.ac.id/id/peserta-uin-expose-2026-kenali-lebih-dalam-program-studi-dan-budaya-kampus"
  },
  {
    title: "UIN Jakarta Gelar Expose 2026, Kenalkan Ragam Jalur Masuk bagi Calon Mahasiswa",
    url: "https://www.google.com/search?q=https://www.uinjkt.ac.id/id/uin-jakarta-gelar-expose-2026-kenalkan-ragam-jalur-masuk-bagi-calon-mahasiswa"
  },
  {
    title: "Perkuat Reputasi Digital, UIN Jakarta Evaluasi Pengelolaan Informasi dan Humas",
    url: "https://www.uinjkt.ac.id/id/perkuat-reputasi-digital-uin-jakarta-evaluasi-pengelolaan-informasi-dan-humas"
  },
  {
    title: "#KABARFAKULTAS FSH UIN Jakarta Matangkan Persiapan Akreditasi Empat Program Studi",
    url: "https://www.google.com/search?q=https://www.uinjkt.ac.id/id/kabar-fakultas-fsh-uin-jakarta-matangkan-persiapan-akreditasi-empat-program-studi"
  },
  {
    title: "DWP UIN Jakarta Gelar Khotmil Qur'an dan Santunan bagi Anak Yatim serta Karyawan",
    url: "https://www.uinjkt.ac.id/id/dwp-uin-jakarta-gelar-khotmil-quran-dan-santunan-bagi-anak-yatim-serta-karyawan"
  },
  {
    title: "Peringati Nuzulul Qur'an di UIN Jakarta, Habib Geys Assegaf Bahas Pentingnya Metodologi dalam Memahami Al-Qur'an",
    url: "https://www.google.com/search?q=https://www.uinjkt.ac.id/id/peringati-nuzulul-quran-di-uin-jakarta-habib-geys-assegaf-bahas-pentingnya-metodologi-dalam-memahami-al-quran"
  },
  {
    title: "Pendaftaran UTBK SNBT 2026 UIN Jakarta Resmi Dibuka, Cek Rincian Kuota di 26 Program Studi Unggulan",
    url: "https://www.uinjkt.ac.id/id/pendaftaran-utbk-snbt-2026-uin-jakarta-resmi-dibuka-cek-rincian-kuota-di-26-program-studi-unggulan"
  }
];

export default function PublicationsPage() {
  return (
    <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/" className="inline-flex items-center gap-2 text-[#5c2026] hover:text-[#852d36] font-semibold text-sm transition-colors bg-white/40 px-5 py-2.5 rounded-xl border border-white/60 backdrop-blur-md shadow-[0_4px_20px_-10px_rgba(133,45,54,0.1)] hover:bg-white/60">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/60 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-white shadow-sm"
        >
          <div className="mb-12 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-black text-[#3e1519] tracking-tight mb-4">Arsip Publikasi</h1>
            <p className="text-[#7a5a5d] font-medium max-w-2xl text-sm md:text-base leading-relaxed">
              Arsip publikasi dan karya Amanda Fathiyah.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((pub, index) => (
              <motion.a 
                key={index} 
                href={pub.url} 
                target="_blank" 
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
                className="group p-6 md:p-8 bg-white/40 border border-white/60 rounded-3xl hover:bg-white/80 hover:shadow-[0_8px_30px_-12px_rgba(133,45,54,0.15)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <p className="text-[10px] uppercase font-bold text-[#d48a93] tracking-widest bg-[#d48a93]/10 px-3 py-1 rounded-full border border-[#d48a93]/20">
                      Article {String(index + 1).padStart(2, '0')}
                    </p>
                    <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center group-hover:bg-[#852d36] transition-colors shrink-0">
                      <ExternalLink size={14} className="text-[#852d36] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-sm md:text-[15px] font-bold text-[#3e1519] leading-snug group-hover:text-[#5c2026] transition-colors">
                    {pub.title}
                  </h3>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
