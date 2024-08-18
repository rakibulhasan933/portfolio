import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import SocialMedia from "@/components/SocailMedia";
import { Boxes } from "@/components/ui/background-boxes";
import { ScrollProgressBar } from "@/components/ui/scroll-progress-bar";

export default function Home() {
  return (
    <main className="md:py-4 py-2 overflow-hidden">
      <ScrollProgressBar className="top-[0px]" />
      <div className="hidden md:flex">
        <Boxes />
      </div>
      <div className=" relative">
        <SocialMedia />
        <Navbar />
        <div className="my-[30px] px-2  md:px-[150px]">
          <Header />
          <About />
          <Skills />
          <Project />
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  );
}
