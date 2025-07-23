import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About<span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3>Passionate Full Stack developer</h3>
            <p className="text-muted-forground">
              Passionate about crafting seamless digital experiences from
              frontend to backend, I specialize in designing and deploying
              full-stack applications using modern technologies like React,
              Node.js, Python, and cloud platforms. With expertise in both UI/UX
              design and server-side architecture, I bridge the gap between
              elegant interfaces and robust systems—delivering high-performance,
              scalable solutions.
            </p>
            <div className="text-start">
              🔹 Frontend: Angular, React, Tailwind CSS, Bootstrap <br />
              🔹 Backend: JAVA, Express, <br />
              🔹 Databases: MySql, MongoDB, Firebase <br />
              🔹 DevOps & Cloud: AWS, Docker, CI/CD, Serverless
            </div>
            <p className="text-muted-forground">
              {" "}
              Whether it’s optimizing APIs, refining user interactions, or
              automating deployments, I thrive on turning ideas into fast,
              secure, and maintainable applications. Let’s build something
              amazing! 🚀
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button text-forground">
                Get In Touch
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 round-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="tex-left">
                  <h4 className="font-semibold text-lg">Web Application</h4>
                  <p className="text-muted-foreground">
                    Frontend: Angular, React, Tailwind CSS, Bootstrap
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 round-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="grid justify-center w-full">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="">
                    Figma,Adobe XD
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 round-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="grid justify-center w-full">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p >
                    Client Interation, Jira, Management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
