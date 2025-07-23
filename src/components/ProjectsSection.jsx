import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Capex Management",
    description: " A capital managment system using angular,Java,MySql in three phases to streamline budget management and secure approvals, enabling planning, budget utilization, and internal orders aligned with capital expenditures",
    image: "/shinesl-portfolio/projects/proj-cap.jpeg",
    tags: ["Angular", "Java", "MySql"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Engineering Management System",
    description: "A full-stack Engineering Management System (EMS) designed to track and manage industrial products from design to completion. This system streamlines production workflows, monitors progress, and ensures quality control across manufacturing stages",
    image: "/shinesl-portfolio/projects/proj-tag.jpeg",
    tags: ["Angular", "Java", "MySql"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Tag Portal",
    description: "Designed and implemented a robust file management system with user-friendly features like tagging and categorization, integrated with AWS for enhanced security and scalability, optimizing file organization and retrieval",
    image: "/shinesl-portfolio/projects/proj-edms.jpeg",
    tags: ["Angular", "Java", "MySql","AWS"],
    demoUrl: "#",
    githubUrl: "#",
  },
    {
    id: 4,
    title: "Aurex", 
    description: "A next-gen Governance, Risk, Compliance (GRC), and Analytics platform that integrates traditionally siloed functions into a single, AI-powered digital ecosystem. This system provides real-time risk insights, automated compliance tracking, and predictive analytics to strengthen organizational resilience.",
    image: "/shinesl-portfolio/projects/proj-aurex.png",
    tags: ["Angular","Agile"],
    demoUrl: "https://www.aurex.ai/",
    githubUrl: "#",
  },
];
export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Feautured <span className="text-primary">Projects </span>
        </h2>
        <p className="text-center text-muted-forground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.Each project was carefully
          creafted with attention to detail, performance and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 border text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              
              <h3 className="text-xl fond-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href=""
                    target="_blank"
                    className="text-forground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href=""
                    target="_blank"
                    className="text-forground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
                </div>
              </div>
            </div>
          ))}
                      {/* <div
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="/"
                  alt={project?.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 border text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              
              <h3 className="text-xl fond-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href=""
                    target="_blank"
                    className="text-forground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href=""
                    target="_blank"
                    className="text-forground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
                </div>
              </div>
            </div> */}
        </div>
        <div className="text-center mt-12">
            <a href="" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2 text-forground"> Check My Github <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  );
};
