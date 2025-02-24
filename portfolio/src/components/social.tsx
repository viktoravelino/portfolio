"use client";

import { cn } from "@/lib/utils";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { MailIcon } from "lucide-react";
import Link from "next/link";

type SocialProps = {
  iconSize?: keyof typeof sizeMap;
  className?: string;
};

const sizeMap = {
  8: "size-8",
  10: "size-10",
} as const;

export function Social({ iconSize = 8, className }: SocialProps) {
  return (
    <div className={cn("flex gap-4", className)}>
      <Link
        href="https://github.com/viktoravelino"
        target="_blank"
        className="hover:text-primary transition-colors"
        data-umami-event="Github clicked"
      >
        <GitHubLogoIcon data-attr="github" className={sizeMap[iconSize]} />
      </Link>

      <Link
        href="https://www.linkedin.com/in/viktoravelino"
        target="_blank"
        className="hover:text-primary transition-colors"
        data-umami-event="LinkedIn clicked"
      >
        <LinkedInLogoIcon className={sizeMap[iconSize]} />
      </Link>

      <Link
        href="mailto:viktor.avelino@gmail.com"
        className="hover:text-primary transition-colors"
        data-umami-event="Mail clicked"
      >
        <MailIcon className={sizeMap[iconSize]} />
      </Link>
    </div>
  );
}
