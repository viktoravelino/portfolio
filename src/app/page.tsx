import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <div className="">
      <Header />

      <main className="px-4 ">
        <Hero />

        <Projects />
      </main>

      <Footer />
    </div>
  );
}
