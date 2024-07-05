import Link from "next/link";
import { Button } from "../ui/button";
import { Social } from "../social";

export function Hero() {
  return (
    <section
      id="hero"
      className="leading-relaxed flex flex-col gap-6 items-center md:items-start text-center justify-center md:px-10 md:text-left max-w-5xl mx-auto min-h-screen-header"
    >
      <span className="font-bold text-2xl">
        Hey there!👋 <br /> Welcome to my website
      </span>

      <h1 className="text-xl ">
        I&apos;m{" "}
        <span className="font-extrabold text-3xl">
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

      <Social iconSize={10} />

      <div className="flex gap-4 justify-center md:justify-start flex-col w-full md:flex-row">
        <Button variant="outline" size="lg">
          <Link href="#">View Projects</Link>
        </Button>

        <Button asChild size="lg">
          <Link href="#">Contact Me</Link>
        </Button>
      </div>
    </section>
  );
}
