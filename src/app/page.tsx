import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="my-[30px]">
        <Header />
      </div>
    </main>
  );
}
