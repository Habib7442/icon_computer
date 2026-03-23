"use client";

import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Sparkles, Award, ShieldCheck, BookOpen, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-sans min-h-screen">
      {/* Header section */}
      <section className="relative py-20 bg-linear-to-b from-slate-50 dark:from-slate-900 to-indigo-950/20 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 mb-3">About Us</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900 dark:text-slate-100 font-outfit">
            Icon Computer <span className="text-emerald-400">Institute</span>
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Empowering students with industry-standard technical skills and job-oriented certification since 2017.
          </p>
        </div>
      </section>

      {/* Main Content section */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 space-y-12">

          {/* 1. THE INSTITUTE */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 font-outfit">
              <span className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"><Award className="w-5 h-5" /></span>
              1. The Institute
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              Icon Computer Institute, an ISO Certified Institution, had felt the pulsation of various fields to be educated in most modern information technology oriented environment where they would be eligible for obtaining lucrative career opportunities in various Govt. Offices, businesses & educational organizations. 
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              The Institute was founded with the objective of developing excellence for technical training and education. Icon Computer Institute ensures that the students on completion of their courses are ready, confident to face the extremely competitive world and obtain satisfactory jobs.
            </p>
          </div>

          {/* 2. OBJECTIVES */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 font-outfit">
              <span className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"><BookOpen className="w-5 h-5" /></span>
              2. Objectives
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              We are living in an age which demands to be marked with the glory of Technological victory keeping balance with the need of the day. The burning question of the day is the un-employment problem which lies before the young generation. This challenge can, with Technical education, be countered with the promise to self-help based occupation. And here, our motto stands with its mission to co-operate the youngs.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5" /> To create awareness & understanding of latest electronic applications layout.</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5" /> To fulfill the urgent need for trained personnel in the country.</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5" /> To promote indigenous electronic articles and make the learner aware of its backends.</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5" /> To build up a mind to face any discipline with courage and skill.</li>
            </ul>
          </div>

          {/* 3. REGISTRATION */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 font-outfit mb-4">
              <span className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"><ShieldCheck className="w-5 h-5" /></span>
              3. Registration & Accreditation
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
              Icon Computer Institute is an institute which is **ISO 9001: 2015 certified**. It is registered by the Govt. of India **MSME**.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
               Since inception of this Institute, the process, principle & skill followed by us for imparting various knowledge with regard to different courses deeply invited the valuable attention of distinguished mentors with hearty progress frames options dashboards.
            </p>
          </div>

          {/* 4. CAREER IN COMPUTER EDUCATION */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 font-outfit">
              <span className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"><Sparkles className="w-5 h-5" /></span>
              4. Career in Computer Education
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              These days are COMPUTER days. Now the Computer industries are rapidly expanding in the world. The phenomenal use of computers in commercial world has created new vacancies such as computer programmer, systems analyst, computer operator, and computer service engineer. 
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              According to an estimate, thousands of computer professionals will be required in our country every year. The type of career paths opening to the one entering the computer field are quite varied and challenging. Starting as a Computer Programmer, progressing to a system analyst position is a relatively short timeframe leads to advancement node setups dashboards.
            </p>
          </div>

          {/* 5. GENERAL INFORMATION */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 font-outfit">
              <span className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"><Clock className="w-5 h-5" /></span>
              5. General Information & Enrolment
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-slate-200 dark:border-slate-800">
                <AccordionTrigger className="text-slate-900 dark:text-slate-100 hover:text-emerald-400">5A. Enrolment Procedure</AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-400 space-y-2">
                  <p>The Institute advertises in leading News Papers of Silchar about one month before every session giving details of the commencement of various courses and admission deadlines.</p>
                  <p>Interested candidates then may contact with the Institute & obtain an application form & prospectus. As per eligibility, the candidates will have to submit the application along with required documents and fees dashboards or desktop dashboards setups nodes.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-slate-200 dark:border-slate-800">
                <AccordionTrigger className="text-slate-900 dark:text-slate-100 hover:text-emerald-400">5B. Result & Certificates</AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-400 space-y-2">
                  <p>After completion of the courses, all the students will have to appear in the examination as per the structure given in the Prospectus.</p>
                  <p>The performance of students will be evaluated on the basis of examination. Average marks of several examinations will be accounted for issuing certificate framing options dashboards.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </section>
    </div>
  );
}
