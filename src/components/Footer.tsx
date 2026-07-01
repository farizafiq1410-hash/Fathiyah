import { Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer id="contact" className="py-6 bg-[#fdfafb] pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="bg-[#3e1519] rounded-[3rem] p-10 md:p-16 flex flex-col justify-between text-white relative overflow-hidden shadow-xl shadow-[#3e1519]/10"
        >
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#5c2026] rounded-full mix-blend-screen filter blur-3xl opacity-50"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-widest text-[#d48a93] font-bold mb-4">Get in touch</p>
              <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-4 text-white">HIT ME UP!</h2>
              <p className="text-white/70 max-w-sm text-xs md:text-sm font-medium leading-relaxed mb-8 md:mb-0">
                Feel free to reach out for collaborations, freelance opportunities, or just a friendly chat about journalism and creative content.
              </p>
            </div>
            
            <div className="flex flex-col items-start md:items-end gap-10 w-full md:w-auto">
              <div className="flex flex-col gap-3 w-full sm:w-auto">
                <a href="https://wa.me/6281390137237" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-3.5 hover:bg-[#d48a93] hover:border-[#d48a93] transition-colors cursor-pointer group">
                  <MessageCircle size={18} className="text-white group-hover:scale-110 transition-transform shrink-0" />
                  <span className="text-xs md:text-sm font-medium text-white tracking-wide">081390137237</span>
                </a>
                <a href="mailto:dapatiyah@gmail.com" className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-3.5 hover:bg-[#d48a93] hover:border-[#d48a93] transition-colors cursor-pointer group">
                  <Mail size={18} className="text-white group-hover:scale-110 transition-transform shrink-0" />
                  <span className="text-xs md:text-sm font-medium text-white tracking-wide">dapatiyah@gmail.com</span>
                </a>
                <a href="https://instagram.com/fathiyahazh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-3.5 hover:bg-[#d48a93] hover:border-[#d48a93] transition-colors cursor-pointer group">
                  <Instagram size={18} className="text-white group-hover:scale-110 transition-transform shrink-0" />
                  <span className="text-xs md:text-sm font-medium text-white tracking-wide">@fathiyahazh</span>
                </a>
                <a href="https://linkedin.com/in/amanda-fathiyah-azizah" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-3.5 hover:bg-[#d48a93] hover:border-[#d48a93] transition-colors cursor-pointer group">
                  <Linkedin size={18} className="text-white group-hover:scale-110 transition-transform shrink-0" />
                  <span className="text-xs md:text-sm font-medium text-white tracking-wide">Amanda Fathiyah Azizah</span>
                </a>
              </div>
              <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">
                &copy; {new Date().getFullYear()} Amanda Fathiyah Azizah.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
