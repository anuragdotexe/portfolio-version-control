import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-[#E0E0E0]">
      <Navigation />
      
      {/* max-w-[1440px]: Centers the content on large screens
          px-8 md:px-20 lg:px-32: The exact 'Middle Alignment' gaps 
      */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-20 lg:px-32">
        <Hero />
        <ProjectGrid />
        
        <footer className="py-20 border-t border-white/5 mt-20">
          <p className="text-[10px] uppercase tracking-[0.5em] opacity-30 font-mono">
            Anurag Roy // 2026 // Digital Architect
          </p>
        </footer>
      </div>
    </main>
  );
}