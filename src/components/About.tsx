import { Card } from "@/components/ui/card";
import aboutImage from "@/assets/mina-about.png";

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
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="p-8 glass-card animate-fade-in">
            <p className="text-lg leading-relaxed">
              Graduated from Assiut University, Faculty of Computers and Information. I specialize in Full Stack Web Development using .NET technologies, Angular, clean architecture, SOLID principles, and scalable software design. Passionate about creating efficient, secure, and maintainable applications.
            </p>
          </Card>

          <div className="relative animate-fade-in delay-200">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-3xl blur-xl opacity-20" />
              <img
                src={aboutImage}
                alt="About Mina Salah"
                className="relative rounded-3xl shadow-xl border-2 border-accent/20 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
