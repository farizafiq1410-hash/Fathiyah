import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = ['Home', 'About', 'Education', 'Experience', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed w-full z-50 top-4 px-4 sm:px-6 lg:px-8 transition-all">
      <nav className={`mx-auto max-w-7xl transition-all duration-300 rounded-3xl ${scrolled ? 'backdrop-blur-md bg-white/40 border border-white/60 shadow-sm' : 'bg-transparent border border-transparent'}`}>
        <div className="flex justify-between items-center h-14 px-6 md:px-8">
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold text-[#5c2026] tracking-tight">A.F.A</a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {NAV_LINKS.map((link, index) => (
              <a 
                key={link} 
                href={link === 'Home' ? '/' : `/#${link.toLowerCase()}`}
                className={`text-[11px] font-medium uppercase tracking-widest transition-colors ${index === 0 ? 'text-[#852d36]' : 'text-[#6a4a4d] hover:text-[#852d36]'}`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#5c2026] focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mx-auto max-w-7xl mt-2 rounded-3xl backdrop-blur-md bg-white/60 border border-white/60 shadow-lg overflow-hidden">
          <div className="px-4 py-4 space-y-2">
            {NAV_LINKS.map(link => (
              <a 
                key={link}
                href={link === 'Home' ? '/' : `/#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-[11px] font-medium uppercase tracking-widest text-[#6a4a4d] hover:text-[#852d36] hover:bg-white/40 rounded-xl transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
