"use client";

import { Badge } from "@/components/ui/badge";
import { Bell } from "lucide-react";

export default function NewsBanner() {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-2 border-b border-slate-200 dark:border-emerald-900/40 overflow-hidden relative">
      <div className="container mx-auto px-4 flex items-center h-full max-w-7xl">
        <div className="flex gap-1.5 items-center bg-red-500/10 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 px-2.5 py-1 rounded-full text-xs font-bold mr-4 shrink-0 shadow-sm">
          <Bell className="w-3.5 h-3.5" /> Announcement
        </div>
        <div className="overflow-hidden flex-1 relative">
          <div className="animate-marquee-scroll whitespace-nowrap text-sm font-semibold text-slate-700 dark:text-emerald-100 flex gap-12">
            <span>🚀 Admissions Open for ADCA, DCA, Tally & Python Core batches! Get 20% Discount on Spot Admissions.</span>
            <span>✅ Certificate Verification Portal is now Active. Students can download e-certificates instantly.</span>
            <span>📅 Next Batch Starts from 1st April. limited seats available!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
