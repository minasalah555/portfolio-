import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Code } from "lucide-react";

const educationData = [
  {
    icon: Code,
    title: "ITI Assiut — Full Stack .NET",
    period: "July – November 2025",
    description: "Intensive training program in full stack development",
    skills: [
      "C# & ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "Angular & TypeScript",
      "HTML, CSS, JavaScript",
      "RESTful API Design",
    ],
  },
  {
    icon: GraduationCap,
    title: "Assiut University",
    period: "2020 – 2024",
    description: "B.Sc in Computer Science, Faculty of Computers and Information",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Systems",
      "Software Engineering",
      "Web Development",
      "Graduation Project: VS Code Extension for the Visually Impaired",
    ],
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Education
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <Card
                key={index}
                className="glass-card hover:glow-effect transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{edu.title}</CardTitle>
                      <CardDescription className="text-base">
                        {edu.period}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
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
