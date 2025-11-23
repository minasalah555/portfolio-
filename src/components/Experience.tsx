import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Experience
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="glass-card hover:glow-effect transition-all duration-300 animate-fade-in">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">
                    ICPC Assiut Community Mentor
                  </CardTitle>
                  <CardDescription className="text-base">
                    2021 – 2024
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▹</span>
                  <span>
                    Mentored students in competitive programming and algorithm design
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▹</span>
                  <span>
                    Taught advanced data structures, problem-solving techniques, and optimization strategies
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▹</span>
                  <span>
                    Prepared students for ICPC competitions and online programming contests
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▹</span>
                  <span>
                    Conducted workshops on algorithms including graph theory, dynamic programming, and greedy algorithms
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
