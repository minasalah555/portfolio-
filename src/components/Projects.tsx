import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with ASP.NET Core backend and Angular frontend, featuring payment integration and inventory management.",
    tech: ["ASP.NET Core", "Angular", "SQL Server", "Stripe API"],
  },
  {
    title: "Task Management System",
    description: "Collaborative task management application with real-time updates, role-based access control, and analytics dashboard.",
    tech: ["C#", "Entity Framework", "Angular", "SignalR"],
  },
  {
    title: "Blog Platform",
    description: "Content management system with markdown support, SEO optimization, and social media integration.",
    tech: [".NET", "Angular", "PostgreSQL", "Azure"],
  },
  {
    title: "VS Code Extension",
    description: "Accessibility extension for visually impaired developers, providing audio feedback and screen reader optimization.",
    tech: ["TypeScript", "VS Code API", "Node.js"],
  },
  {
    title: "Recipe Sharing Platform",
    description: "Community-driven recipe sharing platform with user ratings, comments, and advanced search filters.",
    tech: ["ASP.NET", "Angular", "MongoDB", "AWS S3"],
  },
  {
    title: "Fitness Tracker API",
    description: "RESTful API for fitness tracking applications with workout plans, nutrition logs, and progress analytics.",
    tech: ["ASP.NET Core", "EF Core", "JWT", "Swagger"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card hover:glow-effect transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-xl flex items-center justify-center overflow-hidden">
                <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform">
                  💻
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs rounded border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 gap-2"
                    asChild
                  >
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-2"
                    asChild
                  >
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
