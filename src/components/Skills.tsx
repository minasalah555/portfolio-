import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Code2, Server } from "lucide-react";
import { useEffect, useState } from "react";

const skillCategories = [
  {
    icon: Server,
    title: "Backend",
    color: "from-blue-500 to-purple-500",
    skills: [
      { name: "ASP.NET Core", level: 90 },
      { name: ".NET Framework", level: 85 },
      { name: "RESTful APIs", level: 88 },
      { name: "Entity Framework Core", level: 85 },
      { name: "SignalR", level: 80 },
      { name: "CQRS", level: 75 },
    ],
  },
  {
    icon: Code2,
    title: "Languages",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "C#", level: 95 },
      { name: "C++", level: 95 },
      { name: "Python", level: 70 },
      { name: "JavaScript", level: 75 },
      { name: "TypeScript", level: 70 },
      { name: "SQL", level: 90 },
    ],
  },
];

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  index: number;
}

function SkillBar({ name, level, color, index }: SkillBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level);
    }, 100 + index * 100);
    return () => clearTimeout(timer);
  }, [level, index]);

  return (
    <div className="mb-6 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm font-bold text-primary">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 relative bg-secondary/30">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card
                key={categoryIndex}
                className="glass-card hover:glow-effect transition-all duration-300 animate-fade-in bg-card/50 border-2"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, index) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        color={category.color}
                        index={index}
                      />
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
