import { useEffect, useState } from "react";

export function useActiveNavSection() {
  const [activeSection, setActiveSection] = useState<string>("#hero");

  useEffect(() => {
    const heroSection = document.getElementById("hero");
    const projectsSection = document.getElementById("projects");

    const sections = [heroSection, projectsSection];

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "hero") {
            window.history.replaceState({}, "", `#hero`);
            setActiveSection("#hero");
          } else if (entry.target.id === "projects") {
            window.history.replaceState({}, "", `#projects`);
            setActiveSection("#projects");
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      section && observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return {
    activeSection,
  };
}
