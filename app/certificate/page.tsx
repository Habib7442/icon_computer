"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Award, Download } from "lucide-react";

export default function CertificatePage() {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-sans min-h-screen">
      <section className="relative py-20 bg-linear-to-b from-slate-50 dark:from-slate-900 to-indigo-950/20 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 mb-3">E-Certificates</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900 dark:text-slate-100 font-outfit">
            Download <span className="text-emerald-400">Certificates</span>
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base max-w-md mx-auto leading-snug">
            Access, view, and print your soft copy electronic completions securely dashboards.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-md px-4 sm:px-6">
          <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 text-emerald-400">
              <Award className="w-24 h-24" />
            </div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Fetch Certificate</h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">Provide certificate ID sent over registered logins setups configs dashboards.</p>
            
            <div className="space-y-4">
              <div className="relative">
                <Input placeholder="E.g. CERT-2026-ICI-901" className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 pl-4 h-11 rounded-xl focus-visible:ring-emerald-500/50" />
              </div>
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold h-11 rounded-xl flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/10">
                <Download className="w-4 h-4" /> Download Certificate
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
