import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="parallax-layer">
          <div className="particle-container">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
              <span className="gradient-text">Mina Salah</span>
            </h1>
            
            <div className="hero-subtitle text-2xl md:text-3xl font-semibold animate-fade-in delay-200">
              <span>Full Stack .NET Developer</span>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-300">
              Software Engineer with strong problem-solving skills and a solid grasp of software engineering principles. 
              Building scalable, clean, and modern web applications with passion and precision. Specialized in .NET technologies 
              and modern frontend frameworks.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center pt-4 animate-fade-in delay-400">
              <Button
                size="lg"
                className="gap-2 glow-effect hover:scale-105 transition-transform"
                asChild
              >
                <a href="#projects">
                  <Download className="h-5 w-5" />
                  View Projects
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="gap-2 hover:scale-105 transition-transform"
                asChild
              >
                <a href="#contact">
                  <Download className="h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center pt-6 animate-fade-in delay-500">
              <a
                href="https://github.com/minasalah555"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link w-12 h-12 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/mina-salah-5a52bb261/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link w-12 h-12 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              
              <a
                href="mailto:minasalah713@gmail.com"
                className="social-link w-12 h-12 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-accent hover:text-primary transition-colors">
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
}
