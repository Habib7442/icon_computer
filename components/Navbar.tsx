"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MonitorPlay, Menu, Award, BookOpen, Clock, FileText } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ModeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 sm:px-6">
        
        {/* LOGO AREA */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="p-2 rounded-xl bg-emerald-600/10 border border-emerald-500/20 group-hover:bg-emerald-600/20 transition-all">
            <MonitorPlay className="h-6 w-6 text-emerald-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-emerald-400">
              ICON
            </span>
            <span className="text-[10px] text-slate-500 font-semibold tracking-wider -mt-1">
              COMPUTER INSTITUTE
            </span>
          </div>
        </Link>

        {/* NAVIGATION LINKS (DESKTOP) */}
        <div className="hidden md:flex items-center space-x-1">
          <NavigationMenu className="max-w-full">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 hover:text-emerald-400`}>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* COURSES DROPDOWN */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 hover:text-emerald-400">
                  Courses
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-3 w-[280px] bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl shadow-black/40 overflow-hidden">
                  <div className="grid gap-1">
                    <CourseItem title="ADCA" description="Advanced Diploma in Computer Application" short="12M" />
                    <CourseItem title="DCA" description="Diploma in Computer Application" short="6M" />
                    <CourseItem title="Tally Prime" description="Accounting with GST Certification" short="3M" />
                    <CourseItem title="Python" description="Programming & Software Development" short="4M" />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* STUDENT ZONE */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 hover:text-emerald-400">
                  Student Zone
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-3 w-[260px] bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl shadow-black/40 overflow-hidden">
                  <div className="grid gap-1">
                    <ZoneItem icon={<Award className="w-4 h-4 text-emerald-400" />} title="Verification" href="/verify" />
                    <ZoneItem icon={<BookOpen className="w-4 h-4 text-emerald-400" />} title="E-Certificates" href="/certificate" />
                    <ZoneItem icon={<Clock className="w-4 h-4 text-emerald-400" />} title="Online Exams" href="/exam" />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 hover:text-emerald-400`}>
                  <Link href="/blogs">Blogs</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 hover:text-emerald-400`}>
                  <Link href="/gallery">Gallery</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 hover:text-emerald-400`}>
                  <Link href="/about">About Us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="ml-4 border-l border-slate-200 dark:border-slate-800 h-6 pl-4 flex items-center gap-2">
            <ModeToggle />
            <Button size="sm" className="bg-emerald-500 hover:bg-emerald-400 font-bold text-slate-950 rounded-lg px-4">
              Apply Now
            </Button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-900 dark:text-slate-100 hover:bg-white dark:bg-slate-900">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white p-0">
              <SheetHeader className="p-6 border-b border-slate-200 dark:border-slate-800">
                <SheetTitle className="text-emerald-400 font-bold flex gap-2 items-center">
                  <MonitorPlay className="h-6 w-6" /> Icon Computer
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col p-4 space-y-1">
                <Link href="/" className="p-3 hover:bg-white dark:bg-slate-900 rounded-lg text-slate-900 dark:text-slate-100">Home</Link>
                <div className="p-3 font-semibold text-emerald-400 text-sm">Courses</div>
                <div className="pl-4 flex flex-col space-y-1">
                  <Link href="/courses/adca" className="p-2 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white">ADCA (12m)</Link>
                  <Link href="/courses/dca" className="p-2 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white">DCA (6m)</Link>
                </div>
                <div className="p-3 font-semibold text-emerald-400 text-sm">Student Zone</div>
                <div className="pl-4 flex flex-col space-y-1">
                  <Link href="/verify" className="p-2 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white">Verification</Link>
                  <Link href="/certificate" className="p-2 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white">Certificates</Link>
                </div>
                <Link href="/blogs" className="p-3 hover:bg-white dark:bg-slate-900 rounded-lg text-slate-900 dark:text-slate-100 border-t border-slate-900/50 mt-2">Blogs</Link>
                <Link href="/gallery" className="p-3 hover:bg-white dark:bg-slate-900 rounded-lg text-slate-900 dark:text-slate-100">Gallery</Link>
                <Link href="/about" className="p-3 hover:bg-white dark:bg-slate-900 rounded-lg text-slate-900 dark:text-slate-100">About</Link>
                <div className="pt-4">
                  <Button className="w-full bg-emerald-500 text-slate-950 font-bold">Apply Now</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function CourseItem({ title, description, short }: { title: string; description: string; short: string }) {
  return (
    <Link href={`/courses/${title.toLowerCase().replace(' ', '-')}`} className="block p-2 rounded-xl hover:bg-white dark:bg-slate-900/80 items-start transition-all">
      <div className="flex justify-between items-baseline mb-0.5">
        <span className="font-bold text-slate-900 dark:text-slate-100 text-sm group-hover:text-emerald-400">{title}</span>
        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded-full">{short}</span>
      </div>
      <p className="text-[11px] text-slate-500 leading-tight line-clamp-1">{description}</p>
    </Link>
  );
}

function ZoneItem({ icon, title, href }: { icon: React.ReactNode; title: string, href: string }) {
  return (
    <Link href={href} className="flex items-center gap-3 p-2 rounded-xl hover:bg-white dark:bg-slate-900/80 transition-all">
      <div className="p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        {icon}
      </div>
      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{title}</span>
    </Link>
  );
}
