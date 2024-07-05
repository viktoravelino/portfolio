import { NavCore } from "./nav-core";

type NavDesktopProps = {
  links: Array<{ name: string; href: string }>;
};

export function NavDesktop(props: NavDesktopProps) {
  return (
    <div className="hidden md:block">
      <NavCore links={props.links} />
    </div>
  );
}
