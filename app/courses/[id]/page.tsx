"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useParams } from "next/navigation";
import { ArrowRight, BookMarked, Clock, Laptop } from "lucide-react";
import Link from "next/link";

export default function CourseDetailPage() {
  const params = useParams();
  const idStr = typeof params.id === 'string' ? params.id.toUpperCase() : "COURSE";

  // Dummy content based on course id structure to prevent 404s cleanly
  const titleMap: Record<string, string> = {
    "ADCA": "Advanced Diploma in Computer Application",
    "DCA": "Diploma in Computer Application",
    "TALLY-PRIME": "Accounting & Financial Management with GST",
    "PYTHON": "Programming & Software Fundamentals"
  };

  const durationMap: Record<string, string> = {
    "ADCA": "12 Months",
    "DCA": "6 Months",
    "TALLY-PRIME": "3 Months",
    "PYTHON": "4 Months"
  };

  const title = titleMap[idStr] || `${idStr} Certification`;
  const duration = durationMap[idStr] || "Flexible Duration";

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-sans min-h-screen">
      <section className="relative py-20 bg-linear-to-b from-slate-50 dark:from-slate-900 to-indigo-950/20 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 mb-3">Professional Program</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900 dark:text-slate-100 font-outfit">
            {idStr} <span className="text-emerald-400">Course</span>
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm max-w-lg mx-auto leading-snug">
            {title}
          </p>
          <div className="flex justify-center gap-3 mt-6">
            <Badge className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-emerald-400" /> {duration}</Badge>
            <Badge className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1"><Laptop className="w-3.5 h-3.5 text-emerald-400" /> 100% Lab Sessions</Badge>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 space-y-8">
          <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl relative">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-4">
              <BookMarked className="w-5 h-5 text-emerald-400" /> Course Syllabus & Modules
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="module-1" className="border-slate-200 dark:border-slate-800">
                <AccordionTrigger className="text-slate-900 dark:text-slate-100 hover:text-emerald-400">Core Fundamentals & Basics</AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-400 space-y-2">
                   Computer fundamentals, MS-DOS, Windows shortcuts, and keyboard speed drills dashboards setting.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="module-2" className="border-slate-200 dark:border-slate-800">
                <AccordionTrigger className="text-slate-900 dark:text-slate-100 hover:text-emerald-400">Office Automation & Management</AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-400 space-y-2">
                   Microsoft Word, Excel Spreadsheets formulas, PowerPoint presenters configs dashboards.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 font-bold text-slate-950 rounded-xl px-8 items-center gap-2" asChild>
              <Link href="/apply">Apply For Admission <ArrowRight className="w-4 h-4 ml-0.5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
