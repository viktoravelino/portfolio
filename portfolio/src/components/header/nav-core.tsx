"use client";

import { cn } from "@/lib/utils";
import { useActiveNavSection } from "@/hooks/use-active-nav-section";
import Link from "next/link";
import { cloneElement, Fragment, PropsWithChildren, ReactNode } from "react";
import { SheetClose } from "../ui/sheet";

type NavLinkProps = {
  href: string;
  className?: string;
  active?: boolean;
  mobile?: boolean;
};

function NavLink(props: PropsWithChildren<NavLinkProps>) {
  const Wrapper = props.mobile
    ? (props: { children: ReactNode }) => (
        <SheetClose asChild>{props.children}</SheetClose>
      )
    : Fragment;

  return (
    <Wrapper>
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
    </Wrapper>
  );
}

type NavCoreProps = {
  links: Array<{ name: string; href: string }>;
  mobile?: boolean;
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
          mobile={props.mobile}
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
}
