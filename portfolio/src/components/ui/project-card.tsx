"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { PropsWithChildren } from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { LucideAppWindowMac } from "lucide-react";
import posthog from "posthog-js";

type ProjectLinkProps = {
  href: string;
  onClick?: () => void;
};

export function ProjectLink({
  children,
  href,
  onClick,
}: PropsWithChildren<ProjectLinkProps>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 hover:text-primary transition-colors font-bold text-sm"
      onClick={onClick}
    >
      {children}
    </a>
  );
}

type ProjectCardProps = {
  project: {
    name: string;
    img: string;
    desc: string;
    liveUrl?: string;
    github: string;
  };
};
//md:col-span-6 xl:col-span-3
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card key={project.name} className="overflow-hidden md:col-span-2 lg:col-span-4 xl:col-span-3 flex flex-col">
      <div className="p-1">
        <div className="relative w-full aspect-video overflow-hidden rounded-lg">
          <Image src={project.img} alt={project.name} fill priority />
        </div>
      </div>

      <CardHeader>
        <h2 className="text-2xl font-bold">{project.name}</h2>
      </CardHeader>
      <CardContent className="flex-1">
        <p>{project.desc}</p>
      </CardContent>
      <CardFooter className="gap-2">
        <ProjectLink
          href={project.github}
          onClick={() =>
            posthog.capture("clicked_project_github", {
              project: project.name,
              project_url: project.github,
            })
          }
        >
          <GitHubLogoIcon className="size-5 " /> Github
        </ProjectLink>

        {!!project.liveUrl && (
          <ProjectLink
            href={project.liveUrl}
            onClick={() =>
              posthog.capture("clicked_project_live", {
                project: project.name,
                project_url: project.liveUrl,
              })
            }
          >
            <LucideAppWindowMac className="size-5" />
            Live
          </ProjectLink>
        )}
      </CardFooter>
    </Card>
  );
}
