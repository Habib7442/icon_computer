"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function GalleryPage() {
  const images = [
    {
      src: "/institute_hero.png",
      title: "Computer Lab Setup",
      category: "Infrastructure"
    },
    {
      src: "/WhatsApp Image 2026-03-23 at 1.22.38 PM (1).jpeg",
      title: "Institute Awareness Campaign",
      category: "Events"
    },
    {
      src: "/WhatsApp Image 2026-03-23 at 1.22.38 PM.jpeg",
      title: "Official Affiliation Card",
      category: "Accreditation"
    },
    {
      src: "/WhatsApp Image 2026-03-23 at 1.22.39 PM (1).jpeg",
      title: "Admission Banner",
      category: "Admissions"
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-sans min-h-screen">
      <section className="relative py-20 bg-linear-to-b from-slate-50 dark:from-slate-900 to-indigo-950/20 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 mb-3">Moments & Clicks</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900 dark:text-slate-100 font-outfit">
            Photo <span className="text-emerald-400">Gallery</span>
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto">
            Glimpses of our infrastructure, events, and academic drives across Silchar.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 backdrop-blur-md bg-white dark:bg-slate-900 shadow-xl transition-all duration-500 hover:border-emerald-500/40">
                <div className="relative aspect-video w-full">
                  <Image 
                    src={image.src} 
                    alt={image.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>
                
                <div className="p-4 absolute bottom-0 inset-x-0 z-10 bg-linear-to-t from-slate-950 via-slate-950/90 to-transparent pt-10">
                  <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-1">{image.category}</Badge>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-400 transition-colors">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
