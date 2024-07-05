import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="">
      <Header />

      <main className="px-4 ">
        <Hero />

        {/* <section className="min-h-[calc(100dvh-4rem)]"></section> */}
      </main>

      <Footer />
    </div>
  );
}
