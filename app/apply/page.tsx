"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { FileText, Send } from "lucide-react";

export default function ApplyPage() {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-sans min-h-screen">
      <section className="relative py-20 bg-linear-to-b from-slate-50 dark:from-slate-900 to-indigo-950/20 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 mb-3">Admission 2026</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900 dark:text-slate-100 font-outfit">
            Apply For <span className="text-emerald-400">Admission</span>
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base max-w-md mx-auto leading-snug">
            Take the first step towards a better career in IT by registering for our upcoming batches today dashboards.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-md px-4 sm:px-6">
          <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 text-emerald-400">
              <FileText className="w-24 h-24" />
            </div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Student Registration</h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">Fill out the quick inquiry form with basic criteria details.</p>
            
            <div className="space-y-4">
              <Input placeholder="Full Name" className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 pl-4 h-11 rounded-xl focus-visible:ring-emerald-500/50" />
              <Input placeholder="Phone / WhatsApp Number" className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 pl-4 h-11 rounded-xl focus-visible:ring-emerald-500/50" />
              
              <Select>
                <SelectTrigger className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 h-11 rounded-xl focus:ring-emerald-500/50">
                  <SelectValue placeholder="Select Course" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100">
                  <SelectItem value="adca">ADCA</SelectItem>
                  <SelectItem value="dca">DCA</SelectItem>
                  <SelectItem value="tally">Tally Prime</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                </SelectContent>
              </Select>

              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold h-11 rounded-xl flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/10">
                <Send className="w-4 h-4" /> Submit Application
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
