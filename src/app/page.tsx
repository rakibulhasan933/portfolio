import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import ShortProject from "@/components/ShortProject";

export default function Home() {
  return (
    <main className="py-4">
      <Navbar />
      <div className="my-[30px] px-4  md:px-[150px]">
        <Header />
        <About />
        <Project />
        <ShortProject />
        <Contact />
      </div>
    </main>
  );
}
