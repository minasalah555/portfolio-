import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Palette, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Backend Development",
    skills: [
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "RESTful APIs",
      "Clean Architecture",
      "SOLID Principles",
    ],
  },
  {
    icon: Palette,
    title: "Frontend Development",
    skills: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Skills",
    skills: [
      "Git & GitHub",
      "Postman",
      "Design Patterns",
      "OOP",
      "Problem Solving",
      "Data Structures",
      "Algorithms",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="glass-card hover:glow-effect transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-accent/10 text-accent text-sm rounded-lg border border-accent/20 hover:bg-accent/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
