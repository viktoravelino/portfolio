import { Hammer } from "lucide-react";

export default function Home() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mb-8 flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
          <div className="relative rounded-full bg-primary p-6">
            <Hammer className="h-12 w-12 text-primary-foreground" />
          </div>
        </div>
      </div>

      <h1 className="mb-4 max-w-4xl text-balance font-sans text-5xl font-bold tracking-tight text-foreground md:text-7xl">
        Something amazing is coming soon
      </h1>

      <p className="mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
        We&apos;re working hard to bring you an exceptional experience. Our team
        is crafting something special that we can&apos;t wait to share with you.
        
      </p>

      <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          <span>In Development</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-muted" />
          <span>Launching Soon</span>
        </div>
      </div>
    </section>
  );
}
