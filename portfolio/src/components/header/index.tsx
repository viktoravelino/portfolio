import Link from "next/link";
import { NavDesktop } from "./nav-desktop";
import { NavMobile } from "./nav-mobile";

const links = [
  { name: "Home", href: "#hero" },
  { name: "Projects", href: "#projects" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
      <Link href="#hero">
        <span className="text-2xl font-extrabold">
          <strong className="text-primary">Viktor</strong> Avelino
        </span>
      </Link>

      <NavDesktop links={links} />
      <NavMobile links={links} />
    </header>
  );
}
