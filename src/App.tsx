import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import PublicationsPage from './components/PublicationsPage';

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans antialiased text-[#2d1a1c] bg-[#fdfafb] min-h-screen selection:bg-[#852d36]/20 selection:text-[#3e1519]">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/publications" element={<PublicationsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
