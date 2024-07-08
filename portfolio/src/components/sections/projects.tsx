import { ProjectCard } from "../ui/project-card";

const projects: Array<{
  name: string;
  img: string;
  desc: string;
  liveUrl?: string;
  github: string;
}> = [
  // {
  //   name: "Messenger",
  //   img: "https://talentclick.com/wp-content/uploads/2021/08/placeholder-image.png",
  //   desc: "This is project of a live messenger using SocketIO and React.",
  //   // liveUrl: "",
  //   github: "https://github.com/viktoravelino/messenger",
  // },
  // {
  //   name: "Feed",
  //   img: "https://raw.githubusercontent.com/viktoravelino/feed-layout/main/src/assets/screenShot.png",
  //   desc: "This project is a simple feed layout.",
  //   // liveUrl: "https://viktoravelino.com/feed-layout/",
  //   github: "https://github.com/viktoravelino/feed-layout",
  // },
  // {
  //   name: "Shopping Cart",
  //   img: "https://raw.githubusercontent.com/viktoravelino/shopping-cart/main/screenShot.png",
  //   desc: "This project exemplifies a shopping cart using React and persisting data into localStorage.",
  //   // liveUrl: "https://shopping-cart.viktoravelino.com/",
  //   github: "https://github.com/viktoravelino/shopping-cart",
  // },
  {
    name: "API Client",
    img: "https://raw.githubusercontent.com/viktoravelino/postman-clone/main/src/ScreenShot.png",
    desc: "API Client is a simple API client built with React and Axios.",
    liveUrl: "https://api-client.viktoravelino.com/",
    github: "https://github.com/viktoravelino/portfolio/tree/dev/api-client",
  },
  {
    name: "Budget Tracker",
    img: "https://raw.githubusercontent.com/viktoravelino/budget-tracker/main/Screenshot.png",
    desc: "The purpose of this app is to track your expenses with budget control.",
    // liveUrl: "https://viktoravelino.com/budget-tracker/",
    github: "https://github.com/viktoravelino/budget-tracker",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen-header bg-background py-20 max-w-screen-2xl  mx-auto flex items-center justify-center"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-12">
        {projects.map((project) => {
          return <ProjectCard key={project.name} project={project} />;
        })}
      </div>
    </section>
  );
}
