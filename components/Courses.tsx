"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MonitorPlay, Database, Calculator, Code, ArrowRight, Zap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Courses() {
  const courses = [
    {
      title: "ADCA",
      fullName: "Advanced Diploma in Computer Application",
      duration: "12 Months",
      icon: <MonitorPlay className="w-8 h-8 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]" />,
      skills: ["Office Automation", "Photoshop CC", "Tally ERP 9 / Prime", "C++ / OOPs", "HTML5 & CSS3"],
      popular: true,
      color: "emerald",
      gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent shadow-emerald-500/10",
      accentBorder: "hover:border-emerald-500/30"
    },
    {
      title: "DCA",
      fullName: "Diploma in Computer Application",
      duration: "6 Months",
      icon: <Database className="w-8 h-8 text-emerald-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]" />,
      skills: ["MS Office Basics", "FoxPro & DB", "Internet & Mail", "Hardware Diagnostics"],
      popular: false,
      color: "cyan",
      gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent shadow-emerald-500/10",
      accentBorder: "hover:border-emerald-500/30"
    },
    {
      title: "Tally Prime",
      fullName: "Accounting & Financial Management with GST",
      duration: "3 Months",
      icon: <Calculator className="w-8 h-8 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]" />,
      skills: ["Financial Accounting", "Voucher Entries", "GST & TDS Filing", "Direct Tax / Payroll"],
      popular: true,
      color: "amber",
      gradient: "from-amber-500/20 via-amber-500/5 to-transparent shadow-amber-500/10",
      accentBorder: "hover:border-amber-500/30"
    },
    {
      title: "Python Core",
      fullName: "Programming & Software Fundamentals",
      duration: "4 Months",
      icon: <Code className="w-8 h-8 text-lime-400 drop-shadow-[0_0_8px_rgba(163,230,53,0.3)]" />,
      skills: ["Syntax & Structures", "Loops & Algorithms", "OOPs Fundamentals", "Modules & APIs"],
      popular: false,
      color: "lime",
      gradient: "from-lime-500/20 via-lime-500/5 to-transparent shadow-lime-500/10",
      accentBorder: "hover:border-lime-500/30"
    }
  ];

  return (
    <motion.section id="courses" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="py-24 bg-linear-to-b from-slate-50 via-slate-100 to-white dark:from-slate-950 dark:via-slate-900 dark:to-black border-b border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-400">
            <Sparkles className="h-3.5 w-3.5 animate-pulse" /> Trending Programs
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight sm:text-5xl font-outfit">
            Master the <span className="text-emerald-400">In-Demand</span> IT Skills
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base leading-relaxed font-jakarta">
            Accelerate your career with handpicked specialized training and practical-focused courses bundles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-jakarta">
          {courses.map((course, index) => (
            <Card key={index} className={`bg-white dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md rounded-2xl transition-all duration-500 ${course.accentBorder} flex flex-col relative group overflow-hidden shadow-2xl`}>
              <div className={`absolute inset-0 bg-linear-to-br ${course.gradient} -z-10 opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {course.popular && (
                <span className="absolute top-4 right-4 bg-linear-to-r from-red-500 to-amber-500 text-slate-900 dark:text-white text-[10px] uppercase font-extrabold px-2.5 py-1 rounded-full shadow-lg shadow-red-500/10 flex items-center gap-1">
                  <Zap className="w-3 h-3 text-slate-900 dark:text-white" /> Popular
                </span>
              )}

              <CardHeader className="p-6">
                <div className="p-3 mb-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 w-fit backdrop-blur-sm shadow-xl flex items-center justify-center">
                  {course.icon}
                </div>
                <CardTitle className="text-2xl font-black text-slate-900 dark:text-slate-100 font-outfit tracking-wide">{course.title}</CardTitle>
                <CardDescription className="text-slate-500 text-xs mt-1 leading-snug">{course.fullName}</CardDescription>
                <div className="mt-3">
                  <Badge className="text-[10px] font-extrabold bg-slate-800/80 hover:bg-slate-800 border-none text-slate-700 dark:text-slate-300 w-fit rounded-lg px-2.5 py-1">
                    {course.duration}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="px-6 pb-6 pt-0 flex-1 flex flex-col justify-between">
                <div>
                  <div className="border-t border-slate-200 dark:border-slate-800/50 my-4" />
                  <ul className="space-y-2.5">
                    {course.skills.map((skill, si) => (
                      <li key={si} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2 group-hover:text-slate-700 dark:text-slate-300 transition-colors">
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 transition-all duration-300 ${
                          course.color === 'emerald' ? 'bg-emerald-400 group-hover:shadow-[0_0_8px_rgba(52,211,153,0.6)]' :
                          course.color === 'cyan' ? 'bg-emerald-400 group-hover:shadow-[0_0_8px_rgba(34,211,238,0.6)]' :
                          course.color === 'amber' ? 'bg-amber-400 group-hover:shadow-[0_0_8px_rgba(245,158,11,0.6)]' : 'bg-lime-400 group-hover:shadow-[0_0_8px_rgba(163,230,53,0.6)]'
                        }`} />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="px-6 pb-6 pt-0 bg-transparent border-t-0">
                <Button className={`w-full font-bold h-11 items-center gap-1.5 rounded-xl transition-all duration-300 ${
                  course.color === 'emerald' ? 'bg-white dark:bg-slate-900/80 hover:bg-emerald-600 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:text-white' :
                  course.color === 'cyan' ? 'bg-white dark:bg-slate-900/80 hover:bg-emerald-600 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:text-white' :
                  course.color === 'amber' ? 'bg-white dark:bg-slate-900/80 hover:bg-amber-600 border border-slate-200 dark:border-slate-800 hover:border-amber-500 text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:text-white' : 'bg-white dark:bg-slate-900/80 hover:bg-lime-600 border border-slate-200 dark:border-slate-800 hover:border-lime-500 text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:text-white'
                }`}>
                  Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
