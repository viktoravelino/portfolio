import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";
import { NavCore } from "./nav-core";

type NavMobileProps = {
  links: Array<{ name: string; href: string }>;
};

export function NavMobile(props: NavMobileProps) {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader className="sr-only">
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Navigation</SheetDescription>
          </SheetHeader>

          <NavCore links={props.links} mobile={true} />
        </SheetContent>
      </Sheet>
    </>
  );
}
