"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";

export default function BlogsPage() {
  const blogs = [
    {
      title: "Why ADCA is the Best Career Option in 2026",
      excerpt: "The Advanced Diploma in Computer Application is rapidly becoming the gold standard for office and IT careers globally.",
      date: "Mar 15, 2026",
      author: "Admin",
      category: "Career Guidance",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Mastering Tally Prime: A Guide for Beginners",
      excerpt: "Accounting was never this easy. Learn how Tally is changing the financial management landscape with automated GST reports.",
      date: "Mar 10, 2026",
      author: "Faculty Team",
      category: "Accounting",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "How to Build Your First Python Application",
      excerpt: "A step-by-step structural blueprint for making logic components inside Python framework models nodes configurations.",
      date: "Mar 5, 2026",
      author: "Tech Head",
      category: "Programming",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-sans min-h-screen">
      <section className="relative py-20 bg-linear-to-b from-slate-50 dark:from-slate-900 to-indigo-950/20 border-b border-white/5">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 mb-3">Resources & Insight</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900 dark:text-slate-100">
            Icon Computer <span className="text-emerald-400">Blogs</span>
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto">
            Stay updated with the latest trends in technology, courses path nodes, and career pathways.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <Card key={index} className="bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/80 backdrop-blur-md overflow-hidden rounded-2xl transition-all duration-300 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.08)] flex flex-col group">
                <div className="aspect-video w-full relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={blog.image} alt={blog.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                  <Badge className="absolute top-4 left-4 bg-white dark:bg-slate-950/80 text-emerald-400 border border-slate-200 dark:border-slate-800 backdrop-blur-md">{blog.category}</Badge>
                </div>

                <CardHeader className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {blog.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {blog.author}</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-400 transition-colors line-clamp-2">{blog.title}</h2>
                </CardHeader>

                <CardContent className="px-6 pb-6 pt-0 flex-1">
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">{blog.excerpt}</p>
                </CardContent>

                <CardFooter className="p-6 border-t border-slate-200 dark:border-slate-800/50 mt-auto bg-transparent">
                  <Button variant="link" className="text-emerald-400 hover:text-emerald-300 p-0 font-bold items-center flex gap-1 group/btn">
                    Read More <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
