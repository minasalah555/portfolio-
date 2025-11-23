import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

const certificates = [
  {
    title: "Problem Solving Intermediate",
    issuer: "HackerRank",
  },
  {
    title: "Problem Solving Basic",
    issuer: "HackerRank",
  },
  {
    title: "C++ Programming",
    issuer: "Udemy",
  },
  {
    title: "Python Programming",
    issuer: "Udemy",
  },
  {
    title: "Java Programming",
    issuer: "Udemy",
  },
  {
    title: "CSS Mastery",
    issuer: "Udemy",
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Certificates
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="glass-card hover:glow-effect hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-lg">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{cert.issuer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
