"use client";

import { motion } from 'framer-motion';

const projects = [
  {
    id: "01",
    title: "Aegis System",
    category: "Autonomous Intelligence",
    year: "2026",
    size: "md:col-span-7", // Larger card
  },
  {
    id: "02",
    title: "Nutritional Yapper",
    category: "Computer Vision",
    year: "2026",
    size: "md:col-span-4 md:col-start-9", // Smaller, offset card
  }
];

export default function ProjectGrid() {
  return (
    <section id="work" className="px-6 md:px-12 py-24 border-t border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32">
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`${project.size} group cursor-crosshair`}
          >
            <div className="relative aspect-[16/10] bg-[#F5F5F5] overflow-hidden">
              {/* This is the hover 'zoom' effect seen on high-end sites */}
              <div className="absolute inset-0 bg-gray-200 transition-transform duration-1000 ease-out group-hover:scale-105" />
            </div>
            
            <div className="mt-8 flex justify-between items-start">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                  {project.id} / {project.category}
                </span>
                <h2 className="text-3xl font-light italic mt-2 uppercase tracking-tighter transition-all duration-300 group-hover:pl-2">
                  {project.title}
                </h2>
              </div>
              <span className="text-[10px] uppercase tracking-widest pt-4">{project.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}