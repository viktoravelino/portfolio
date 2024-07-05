import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="leading-relaxed flex flex-col gap-10 items-center md:items-start text-center min-h-[calc(100vh-4rem)] justify-center px-10 md:px-10 md:text-left max-w-5xl mx-auto">
      <span className="font-bold text-2xl">
        Hey there!👋 Welcome to my website
      </span>

      <h1 className="text-xl">
        I&apos;m{" "}
        <span className="font-extrabold text-4xl">
          <span className="text-primary">Viktor</span> Avelino!
        </span>
      </h1>
      <p className="text-xl max-w-xl">
        I&apos;m a Full Stack Software Developer with a focus on{" "}
        <b className="text-primary"> React</b>,
        <b className="text-primary"> Angular</b>, and{" "}
        <b className="text-primary"> NodeJS</b>. I love bringing ideas to life
        by writing clean and scalable code. Feel free to check out some of my
        projects, and if you&apos;d like to chat, don&apos;t hesitate to reach
        out.
      </p>

      <div className="flex gap-4 justify-center md:justify-start">
        <Button variant="outline">View Projects</Button>
        <Button>Contact Me</Button>
      </div>
    </section>
  );
}
