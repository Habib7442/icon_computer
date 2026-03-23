import NewsBanner from "@/components/NewsBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PortalsGrid from "@/components/PortalsGrid";
import Courses from "@/components/Courses";
import DirectorMessage from "@/components/DirectorMessage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-sans overflow-x-hidden">
      <NewsBanner />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PortalsGrid />
        <Courses />
        <DirectorMessage />
      </main>
      <Footer />
    </div>
  );
}
