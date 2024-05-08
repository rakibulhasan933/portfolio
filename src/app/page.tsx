import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import ShortProject from "@/components/ShortProject";

export default function Home() {
  return (
    <main className="md:py-4 py-2">
      <Navbar />
      <div className="my-[30px] px-4  md:px-[150px]">
        <Header />
        <About />
        <Project />
        <ShortProject />
        <Contact />
      </div>
      <p className="text-center py-2 text-gray-300 text-[15px]  hover:text-emerald-400">
        {new Date().getFullYear()} &copy;  Designed & Built by Rakibul Hasan
      </p>
    </main>
  );
}
