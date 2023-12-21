import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <section className="h-[100px]">
        <Header />
      </section>
      <section className="h-screen">About</section>
      <section className="h-screen">Parallax</section>
      <section className="h-screen">services</section>
      <section className="h-screen">Portfolio</section>
      <section className="h-screen">contact</section>
    </main>
  )
}
