"use client";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-[1440px] mx-auto px-8 md:px-20 lg:px-32 py-10 flex justify-between items-center">
        <div className="w-10 h-10 bg-[#3B44FB] flex items-center justify-center text-white font-bold text-xs">
          AR
        </div>
        <div className="flex gap-10 text-[11px] uppercase tracking-[0.3em] font-mono text-white/40">
          <a href="#visual" className="hover:text-white transition-colors">Visual</a>
          <a href="#motion" className="hover:text-white transition-colors">Motion</a>
          <a href="#about" className="hover:text-white transition-colors underline underline-offset-8 decoration-[#3B44FB]">About</a>
        </div>
      </div>
    </nav>
  );
}