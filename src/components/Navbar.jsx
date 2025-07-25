import { cn } from "@/lib/utility";
import { useEffect, useState } from "react";
import { X,Menu } from "lucide-react";
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
export const Navbar = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [isMenuOpen, setisMenuOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.screenY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#hero"
          className="text-x-l font-bold text-primary flex items-center"
        >
          <span className="relative z-10">
            <span className="text-glow text-forground">Shine</span> Portfolio
          </span>
        </a>

        {/* desktop */}

        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-forground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile */}
        <button onClick={()=>setisMenuOpen((prev)=> !prev)}
        aria-label={isMenuOpen? "Close Menu":"Open Menu"}
            className="md:hidden p-2 text-forground z-50">{isMenuOpen ? <X size={24} />:<Menu />}{""}</button>

        <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
              onClick={()=>setisMenuOpen(false)}
                key={key}
                href={item.href}
                className="text-forground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
