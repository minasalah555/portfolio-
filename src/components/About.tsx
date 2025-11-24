import { Card } from "@/components/ui/card";
import aboutImage from "@/assets/mina-about.png";
import { FileText, Users, Brain, Zap, Target, MessageCircle } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg">
            Passionate about creating innovative solutions and solving complex problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
          <div className="relative animate-fade-in">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-3xl blur-xl opacity-20" />
              <img
                src={aboutImage}
                alt="About Mina Salah"
                className="relative rounded-3xl shadow-xl border-2 border-accent/20 w-full"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center animate-float">
                <svg className="w-10 h-10 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="animate-fade-in delay-200">
            <h3 className="text-3xl font-bold mb-4">Passionate Software Engineer</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Graduated from Assiut University, Faculty of Computers and Information. I specialize in Full Stack Web Development 
              using .NET technologies, Angular, clean architecture, SOLID principles, and scalable software design.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Passionate about creating efficient, secure, and maintainable applications. My journey in software development 
              has been driven by curiosity and a commitment to continuous learning.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Card className="p-6 text-center glass-card hover:scale-105 transition-transform">
                <h4 className="text-3xl font-bold text-primary mb-2">3500+</h4>
                <p className="text-sm text-muted-foreground">Problems Solved</p>
              </Card>
              <Card className="p-6 text-center glass-card hover:scale-105 transition-transform">
                <h4 className="text-3xl font-bold text-accent mb-2">4+ Years</h4>
                <p className="text-sm text-muted-foreground">Programming Experience</p>
              </Card>
            </div>
          </div>
        </div>

        {/* Core Strengths */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12">Core Strengths</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 glass-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h5 className="text-xl font-semibold mb-2">Technical Documentation</h5>
              <p className="text-muted-foreground">Clear, comprehensive documentation for complex systems</p>
            </Card>

            <Card className="p-6 glass-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h5 className="text-xl font-semibold mb-2">Cross-functional Collaboration</h5>
              <p className="text-muted-foreground">Effective teamwork across diverse technical teams</p>
            </Card>

            <Card className="p-6 glass-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h5 className="text-xl font-semibold mb-2">Problem Solving</h5>
              <p className="text-muted-foreground">Critical thinking and analytical reasoning for debugging</p>
            </Card>

            <Card className="p-6 glass-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h5 className="text-xl font-semibold mb-2">Adaptability</h5>
              <p className="text-muted-foreground">Quick learning of new technologies and working under pressure</p>
            </Card>

            <Card className="p-6 glass-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h5 className="text-xl font-semibold mb-2">Focus on Quality</h5>
              <p className="text-muted-foreground">Writing clean, maintainable, and scalable code</p>
            </Card>

            <Card className="p-6 glass-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h5 className="text-xl font-semibold mb-2">Communication</h5>
              <p className="text-muted-foreground">Clear communication of technical concepts to diverse audiences</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
