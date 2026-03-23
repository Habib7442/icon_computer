"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Play } from "lucide-react";

export default function ExamPage() {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-sans min-h-screen">
      <section className="relative py-20 bg-linear-to-b from-slate-50 dark:from-slate-900 to-indigo-950/20 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 mb-3">Modular Exams</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900 dark:text-slate-100 font-outfit">
            Online <span className="text-emerald-400">Exam Portal</span>
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base max-w-md mx-auto leading-snug">
            Take theory and practical modular tests securely straight from your browser portal dashboards.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-md px-4 sm:px-6">
          <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 text-emerald-400">
              <FileText className="w-24 h-24" />
            </div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Portal Log-in</h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">Log in to your exam panel with seat codes sent for tests triggers.</p>
            
            <div className="space-y-4">
              <Input placeholder="Enter Student Registration ID" className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 pl-4 h-11 rounded-xl focus-visible:ring-emerald-500/50" />
              <Input type="password" placeholder="Test PIN / Password" className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 pl-4 h-11 rounded-xl focus-visible:ring-emerald-500/50" />
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold h-11 rounded-xl flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/10">
                <Play className="w-4 h-4 ml-0.5" /> Start Online Test
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
