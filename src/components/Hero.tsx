import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Eye, ChevronDown, Phone } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="hero-section"
    >
      {/* Animated Background with Glowing Blobs */}
      <div className="hero-background">
        {/* Floating Gradient Blobs */}
        <div className="glowing-blob blob-1"></div>
        <div className="glowing-blob blob-2"></div>
        <div className="glowing-blob blob-3"></div>
        
        {/* Particle Stars */}
        <div className="particles-container">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        {/* Vignette Effect */}
        <div className="vignette"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text-container">
          {/* Main Heading with Gradient */}
          <h1 className="hero-title">
            Mina Salah
          </h1>
          
          {/* Subtitle with Animated Cursor */}
          <div className="hero-subtitle">
            <span id="typed-text">Full Stack .NET Developer</span>
            <span className="typing-cursor">|</span>
          </div>
          
          {/* Description */}
          <p className="hero-description">
            Software Engineer with strong problem-solving skills and a solid grasp of software engineering principles and competitive programming. 
            Experienced in developing full-stack applications with .NET technologies, with knowledge in solving complex problems.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <Button
              size="lg"
              className="cta-primary"
              asChild
            >
              <a href="#projects">
                <Eye className="h-5 w-5" />
                View Projects
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="cta-secondary"
              asChild
            >
              <a href="#contact">
                <Download className="h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Links - Circular Icons */}
          <div className="social-links-hero">
            <a
              href="https://github.com/minasalah555"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-circle"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/mina-salah-5a52bb261/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-circle"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            
            <a
              href="mailto:minasalah713@gmail.com"
              className="social-icon-circle"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>

            <a
              href="tel:+201234567890"
              className="social-icon-circle"
              aria-label="Phone"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-down-indicator">
        <a href="#about" aria-label="Scroll to about section">
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
}
