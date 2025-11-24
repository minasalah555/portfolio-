import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import heroImage from "@/assets/mina-hero.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow-pulse delay-1000" />
        
        {/* Floating Shapes */}
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium animate-fade-in delay-100">
              👋 Welcome to my portfolio
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in delay-200">
              Hi, I'm{" "}
              <span className="gradient-text">Mina Salah</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground animate-fade-in delay-300">
              Full Stack .NET Developer & Angular Developer
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-xl animate-fade-in delay-400">
              Building scalable, clean, and modern web applications with passion
              and precision. Specialized in .NET technologies and modern frontend frameworks.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in delay-500">
              <Button
                size="lg"
                className="gap-2 glow-effect hover:scale-105 transition-transform"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/mina-salah-5a52bb261/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 hover:scale-105 transition-transform"
                asChild
              >
                <a
                  href="https://github.com/minasalah555"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="gap-2 hover:scale-105 transition-transform"
                asChild
              >
                <a href="mailto:minasalah713@gmail.com">
                  <Mail className="h-5 w-5" />
                  Email
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
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in delay-200">
            <div className="relative w-full max-w-md mx-auto animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl blur-2xl opacity-30 animate-glow-pulse" />
              <img
                src={heroImage}
                alt="Mina Salah"
                className="relative rounded-3xl shadow-2xl border-4 border-accent/20 w-full object-cover aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <a href="#about" className="text-accent hover:text-primary transition-colors">
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
}
