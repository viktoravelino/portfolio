import { Coffee } from "lucide-react";
import { Social } from "../social";

export function Footer() {
  return (
    <footer className="flex text-sm py-4 pb-6 md:pb-4 border-t bg-background flex-col items-center justify-center gap-4">
      <Social iconSize={8} />

      <span className="flex gap-2 items-end">
        Built with
        <Coffee className="text-primary" /> by Viktor Avelino ©{" "}
        {new Date().getFullYear()}
      </span>
    </footer>
  );
}
