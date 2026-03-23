"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, GraduationCap, Clock, Check } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative isolate overflow-hidden bg-slate-1500 border-b border-emerald-900/10">
      {/* GLOW EFFECTS */}
      <div className="absolute top-0 right-0 -z-10 bg-linear-to-b from-emerald-500/10 via-transparent to-transparent h-[500px] w-[500px] blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-40 left-0 -z-10 bg-linear-to-r from-blue-600/10 to-transparent h-[400px] w-[400px] blur-3xl pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative pt-14 pb-20 sm:pt-20 lg:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center text-center lg:items-start lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-emerald-400 backdrop-blur-md">
              <GraduationCap className="h-4 w-4" /> ISO 9001:2015 Certified Institute
            </div>
            
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 dark:text-slate-100 leading-[1.15] max-w-md sm:max-w-none mx-auto lg:mx-0">
              Empower Your Future <br className="hidden sm:block" />
              with <span className="text-emerald-400 italic drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]">IT Excellence</span>
            </h1>

            <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mx-auto lg:mx-0">
              Join <span className="font-bold text-slate-900 dark:text-slate-100">Icon Computer Institute</span> to master in-demand tech skills. We provide high-quality education in ADCA, DCA, Tally with GST, and modern software programming with live desk practice and 100% lab oriented training.
            </p>

            <ul className="flex flex-col sm:flex-row gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
              <li className="flex items-center gap-1"><Check className="h-4 w-4 text-emerald-400" /> Government Recognized</li>
              <li className="flex items-center gap-1"><Check className="h-4 w-4 text-emerald-400" /> 1:1 Lab Practice</li>
              <li className="flex items-center gap-1"><Check className="h-4 w-4 text-emerald-400" /> Flexi-Batches</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 dark:text-white font-bold h-12 px-6 shadow-lg shadow-emerald-500/10 rounded-xl" onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Courses <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE FRAME (THE "INSTITUTE PHOTO" FROM WIREFRAME) */}
          <div className="lg:col-span-5 relative">
            <div className="mx-auto max-w-sm lg:max-w-none relative aspect-3/4 sm:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl border border-emerald-800/30 group">
              <div className="absolute inset-0 bg-linear-to-br from-indigo-900/30 via-slate-900/10 to-transparent z-10" />
              <Image 
                src="/institute_hero.png"
                alt="Institute Lab"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover relative z-0 transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 z-20 p-4 bg-linear-to-t from-slate-950 to-transparent">
                <div className="bg-white dark:bg-slate-900/80 backdrop-blur-md rounded-xl p-3 border border-slate-200 dark:border-slate-800/50 flex gap-3 items-center">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/20">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-900 dark:text-white text-xs font-bold">New Batch: 2 PM - 4 PM</span>
                    <span className="text-[10px] text-slate-600 dark:text-slate-400">Regular Classes (Mon-Sat)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
