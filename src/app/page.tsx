import Encryption from "@/components/Encryption";
import Hero from "@/components/Hero";
import Projects from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  )
}
