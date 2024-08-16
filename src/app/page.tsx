import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import ShortProject from "@/components/ShortProject";
import { Boxes } from "@/components/ui/background-boxes";

export default function Home() {
  return (
    <main className="md:py-4 py-2">
      <Boxes />
      <Navbar />
      <div className="my-[30px] px-4  md:px-[150px]">
        <Header />
        <About />
        <Project />
        {/* <ShortProject /> */}
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
