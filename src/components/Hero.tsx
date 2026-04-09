"use client";

export default function Hero() {
  return (
    <section className="pt-48 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16">
        
        {/* Left Branding Box */}
        <div className="md:col-span-5 lg:col-span-4">
          <div className="aspect-[4/5] bg-[#111] border border-white/5 relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3B44FB]/10 to-transparent opacity-50" />
            <div className="absolute bottom-4 left-4 text-[10px] font-mono opacity-20">IMG_PROT_01</div>
          </div>
        </div>

        {/* Right Content Column */}
        <div className="md:col-span-6 md:col-start-7 lg:col-start-6 flex flex-col justify-between py-2">
          <h1 className="text-xl md:text-2xl font-light leading-relaxed text-white">
            Engineering is not just about logic. It is both <span className="italic text-gray-400">structural and emotional</span>. It carries systems no single line of code can hold.
          </h1>
          
          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 font-mono text-[10px] tracking-widest">
            <div>
              <p className="text-[#3B44FB] mb-6 font-bold uppercase">System Anatomy</p>
              <div className="space-y-2 opacity-50">
                <p>ANALYTICS : INSIGHT</p>
                <p>PRODUCT : PURPOSE</p>
                <p>AI ENGINE : STRUCTURE</p>
              </div>
            </div>
            <div>
              <p className="text-[#3B44FB] mb-6 font-bold uppercase">Dev Philosophy</p>
              <div className="space-y-2 opacity-50 italic">
                <p>• PURPOSEFUL / QUIET</p>
                <p>• ESSENTIAL / ENDURING</p>
                <p>• LOGIC / FORM</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}