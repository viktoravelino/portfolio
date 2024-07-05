import { cn } from "@/lib/utils";
import Link from "next/link";
import { PropsWithChildren } from "react";

type NavLinkProps = {
  href: string;
  className?: string;
};

function NavLink(props: PropsWithChildren<NavLinkProps>) {
  return (
    <Link
      href={props.href}
      className={cn(
        "text-muted-foreground transition-colors hover:text-foreground",
        props.className
      )}
    >
      {props.children}
    </Link>
  );
}

type NavCoreProps = {
  links: Array<{ name: string; href: string }>;
};

export function NavCore(props: NavCoreProps) {
  return (
    <nav className="grid gap-6 text-lg font-medium md:flex">
      {props.links.map((link) => (
        <NavLink key={link.href} href={link.href}>
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
}
