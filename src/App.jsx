import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About, CaseStudies, Services, Process, Testimonials, Contact } from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Multi-gradient global aura */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -inset-[20%] bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.18),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.18),transparent_40%),radial-gradient(ellipse_at_center,rgba(45,212,191,0.12),transparent_45%)]" />
        <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(1px 1px at 20px 30px, rgba(255,255,255,0.05) 0, transparent 1px), radial-gradient(1px 1px at 40px 60px, rgba(255,255,255,0.04) 0, transparent 1px)', backgroundSize:'80px 80px'}} />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <CaseStudies />
        <Services />
        <Process />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
