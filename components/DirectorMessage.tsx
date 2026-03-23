"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Sparkles, CheckCircle } from "lucide-react";

export default function DirectorMessage() {
  return (
    <section className="py-20 bg-linear-to-b from-indigo-950/20 to-slate-50 dark:to-slate-950 border-b border-emerald-800/10 relative">
      <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 via-transparent to-transparent -z-10" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* ABOUT INSTITUTE DETAILS (Left or Above) */}
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
              <Sparkles className="h-3.5 w-3.5" /> About Icon Institute
            </div>
            
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight sm:text-4xl">
              Leading the Way in <span className="text-emerald-400">Digital Literacy</span>
            </h2>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl text-base">
              Icon Computer Institute was established with a vision to bridge the digital divide. We don't just teach software; we build confidence and technical acumen in students for modern IT standards.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Advanced Lab & Systems</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Backup Practice Classes</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Mock Test Preparation</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Soft Skill Sessions</li>
            </ul>
          </div>

          {/* OWNER DETAILS / DIRECTOR MESSAGE (Right) */}
          <div className="md:col-span-5 relative group">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 p-6 rounded-3xl backdrop-blur-md shadow-xl transition-all duration-500 hover:border-emerald-500/20">
              <div className="absolute -top-4 -left-4 text-emerald-500/20">
                <Quote className="h-24 w-24 -rotate-12" />
              </div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 border-4 border-emerald-500/30 shadow-xl mb-4 group-hover:scale-105 transition-transform duration-300">
                  <AvatarImage src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300" alt="Director Photo" />
                  <AvatarFallback className="bg-emerald-900 text-slate-900 dark:text-white font-bold">DIR</AvatarFallback>
                </Avatar>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-0.5">Rahul Sharma</h3>
                <span className="text-xs text-emerald-400 font-medium mb-4">Founder & Director</span>

                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed italic border-t border-slate-200 dark:border-slate-800 pt-4 max-w-sm">
                  "At Icon, we believe that learning technology shouldn't just be an academic activity, it should be a gateway to independence. Our team ensures that every student gets 100% attention to crack any hurdle in their learning phase."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
