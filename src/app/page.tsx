import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="w-full  min-h-screen">
      <Header />

      <main className="px-4">
        <Hero />
      </main>
    </div>
  );
}
