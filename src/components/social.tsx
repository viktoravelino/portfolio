"use client";

import { cn } from "@/lib/utils";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { MailIcon } from "lucide-react";
import Link from "next/link";
import { usePostHog } from "posthog-js/react";

type SocialProps = {
  iconSize?: keyof typeof sizeMap;
  className?: string;
};

const sizeMap = {
  8: "size-8",
  10: "size-10",
} as const;

export function Social({ iconSize = 8, className }: SocialProps) {
  const posthog = usePostHog();

  return (
    <div className={cn("flex gap-4", className)}>
      <Link
        href="https://github.com/viktoravelino"
        target="_blank"
        className="hover:text-primary transition-colors"
        onClick={() => posthog.capture("clicked_github")}
      >
        <GitHubLogoIcon data-attr="github" className={sizeMap[iconSize]} />
      </Link>

      <Link
        href="https://www.linkedin.com/in/viktoravelino"
        target="_blank"
        className="hover:text-primary transition-colors"
        onClick={() => posthog.capture("clicked_linkedin")}
      >
        <LinkedInLogoIcon className={sizeMap[iconSize]} />
      </Link>

      <Link
        href="mailto:viktor.avelino@gmail.com"
        className="hover:text-primary transition-colors"
        onClick={() => posthog.capture("clicked_mail")}
      >
        <MailIcon className={sizeMap[iconSize]} />
      </Link>
    </div>
  );
}
