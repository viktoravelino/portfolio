"use client";

import { cn } from "@/lib/utils";
import { useActiveNavSection } from "@/providers/nav-provider";
import Link from "next/link";
import posthog from "posthog-js";
import { PropsWithChildren } from "react";

type NavLinkProps = {
  href: string;
  className?: string;
  active?: boolean;
};

function NavLink(props: PropsWithChildren<NavLinkProps>) {
  return (
    <Link
      href={props.href}
      className={cn(
        "text-muted-foreground transition-colors hover:text-foreground",
        props.active && "text-primary",
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
  const { activeSection } = useActiveNavSection();

  return (
    <nav className="grid gap-6 text-lg font-medium md:flex">
      {props.links.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          active={activeSection === link.href}
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
}
