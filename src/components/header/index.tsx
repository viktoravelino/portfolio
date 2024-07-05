import Link from "next/link";
import { NavDesktop } from "./nav-desktop";
import { NavMobile } from "./nav-mobile";

const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

export function Header() {
  return (
    <header className="flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
      <Link href="#">
        <span className="text-2xl font-extrabold">
          <strong className="text-primary">Viktor</strong> Avelino
        </span>
      </Link>

      <NavDesktop links={links} />
      <NavMobile links={links} />
    </header>
  );
}
