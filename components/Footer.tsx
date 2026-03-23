"use client";

import Link from "next/link";
import { MonitorPlay, Facebook, Instagram, Twitter, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Admission", href: "/admission" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
  ];

  const courses = [
    { name: "ADCA (12 Months)", href: "/courses/adca" },
    { name: "DCA (6 Months)", href: "/courses/dca" },
    { name: "Tally Prime", href: "/courses/tally-prime" },
    { name: "Python Core", href: "/courses/python-core" },
  ];

  return (
    <footer className="w-full bg-white dark:bg-slate-950 border-t border-indigo-950/40 text-slate-600 dark:text-slate-400">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="p-2 rounded-xl bg-emerald-600/10 border border-emerald-500/30">
                <MonitorPlay className="h-6 w-6 text-emerald-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold bg-linear-to-r from-emerald-400 to-indigo-500 bg-clip-text text-transparent">
                  ICON
                </span>
                <span className="text-[10px] text-slate-500 font-semibold tracking-wider -mt-1">
                  COMPUTER INSTITUTE
                </span>
              </div>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed">
              ISO 9001:2015 Certified & Regd. Govt. of India (MSME). Empowering students with industry-standard IT training and certified credentials to build successful careers.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-emerald-400 transition-colors"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-emerald-400 transition-colors"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-emerald-400 transition-colors"><Twitter className="h-5 w-5" /></Link>
            </div>
          </div>

          <div className="col-span-1 space-y-3">
            <h3 className="text-slate-900 dark:text-slate-100 font-bold text-sm tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-2 flex flex-col">
              {links.map((link, index) => (
                <Link key={index} href={link.href} className="text-sm hover:text-emerald-400 transition-colors w-fit">
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>

          <div className="col-span-1 space-y-3">
            <h3 className="text-slate-900 dark:text-slate-100 font-bold text-sm tracking-wider uppercase">Our Courses</h3>
            <ul className="space-y-2 flex flex-col">
              {courses.map((course, index) => (
                <Link key={index} href={course.href} className="text-sm hover:text-emerald-400 transition-colors w-fit">
                  {course.name}
                </Link>
              ))}
            </ul>
          </div>

          <div className="col-span-1 space-y-3">
            <h3 className="text-slate-900 dark:text-slate-100 font-bold text-sm tracking-wider uppercase">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Meherpur, Opposite Nightingale Hospital, Silchar - 15</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                <Phone className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>+91 9101814225</span>
                  <span>+91 8486691289</span>
                </div>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>info@iconcomputerinstitute.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-900 mt-10 pt-6 flex flex-col sm:row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Icon Computer Institute. All rights reserved.
          </p>
          <p className="text-xs text-slate-600 flex gap-2">
            <span>Privacy Policy</span> | <span>Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
