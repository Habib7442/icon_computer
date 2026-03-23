"use client";

import { Award, FileCheck, ShieldCheck, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function PortalsGrid() {
  const portalItems = [
    {
      title: "Student Verification",
      description: "Employers and students can instantly verify enrollment status and details.",
      icon: <ShieldCheck className="w-10 h-10 text-emerald-400" />,
      action: "Verify Now",
      href: "/verify",
      color: "cyan",
      gradient: "from-emerald-500/10 to-transparent shadow-emerald-500/10",
      accentBorder: "hover:border-emerald-500/40"
    },
    {
      title: "Download Certificate",
      description: "Access and print your soft copies of completion certificates securely.",
      icon: <Award className="w-10 h-10 text-emerald-400" />,
      action: "Download",
      href: "/certificate",
      color: "emerald",
      gradient: "from-emerald-500/10 to-transparent shadow-emerald-500/10",
      accentBorder: "hover:border-emerald-500/40"
    },
    {
      title: "Online Exam Portal",
      description: "Take your modular theory and practical tests directly from our portal.",
      icon: <FileCheck className="w-10 h-10 text-amber-500" />,
      action: "Start Exam",
      href: "/exam",
      color: "amber",
      gradient: "from-amber-500/10 to-transparent shadow-amber-500/10",
      accentBorder: "hover:border-amber-500/40"
    },
  ];

  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="py-20 bg-slate-1000 border-b border-emerald-800/10 relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight sm:text-4xl">
            Quick Student <span className="text-emerald-400">Portals</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base leading-snug">
            Fast, secure, and easy-to-use digital services for verifying credentials and taking exams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portalItems.map((item, index) => (
            <Card key={index} className={`bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group ${item.accentBorder}`}>
              <div className={`absolute inset-0 bg-linear-to-br ${item.gradient} -z-10 opacity-50 group-hover:opacity-100 transition-opacity`} />
              <CardHeader className="p-6">
                <div className="p-3 mb-4 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 w-fit shadow-xl">
                  {item.icon}
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">{item.title}</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400 text-sm">{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0 mt-auto">
                <Button className={`w-full bg-white dark:bg-slate-950/60 hover:bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-semibold gap-2 py-5 rounded-xl transition-all ${
                  item.color === 'cyan' ? 'group-hover:text-emerald-400 group-hover:border-emerald-500/40' :
                  item.color === 'emerald' ? 'group-hover:text-emerald-400 group-hover:border-emerald-500/40' : 'group-hover:text-amber-400 group-hover:border-amber-500/40'
                }`}>
                  {item.action} <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
