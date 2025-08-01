import { ArrowDown } from "lucide-react";
import { StarBackground } from "@/components/StarBackground";

export const HeroSection = () => {
  return (
    
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <StarBackground />
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Shine
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I thrive in the entire development lifecycle whether it’s crafting
            pixel-perfect UIs with Angular/React, ' designing efficient APIs
            with Java, or wrestling with databases to keep things
            lightning-fast. My mission? Build tech that just works and delights
            users along the way.
          </p>
 
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button text-forground">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* <div class="grid-container">
        <div class="plane">
          <div class="grid"></div>
          <div class="glow"></div>
        </div>
        <div class="plane">
          <div class="grid"></div>
          <div class="glow"></div>
        </div>
      </div>

      <h1>
        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
        <span className="text-primary opacity-0 animate-fade-in-delay-1">
          {" "}
          Shine
        </span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
        I thrive in the entire development lifecycle whether it’s crafting
        pixel-perfect UIs with Angular/React, ' designing efficient APIs with
        Java, or wrestling with databases to keep things lightning-fast. My
        mission? Build tech that just works and delights users along the way.
      </p> */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scrol</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
