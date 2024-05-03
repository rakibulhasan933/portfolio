import About from "@/components/About";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="py-4">
      <Navbar />
      <div className="my-[30px] px-4  md:px-[150px]">
        <Header />
        <About />
      </div>
    </main>
  );
}
