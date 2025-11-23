import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import aboutImage from "@/assets/mina-about.png";

export function About() {
  const [language, setLanguage] = useState<"en" | "ar">("en");

  const content = {
    en: {
      title: "About Me",
      text: "Graduated from Assiut University, Faculty of Computers and Information. I specialize in Full Stack Web Development using .NET technologies, Angular, clean architecture, SOLID principles, and scalable software design. Passionate about creating efficient, secure, and maintainable applications.",
    },
    ar: {
      title: "نبذة عني",
      text: "خريج كلية الحاسبات والمعلومات – جامعة أسيوط. متخصص في تطوير تطبيقات الويب باستخدام .NET وأطر عمل حديثة مثل Angular، ومهتم ببناء أنظمة مرنة وآمنة وسهلة الصيانة، مع تطبيق مبادئ SOLID و Clean Architecture.",
    },
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {content[language].title}
          </h2>
          <div className="flex justify-center gap-2">
            <Button
              variant={language === "en" ? "default" : "outline"}
              size="sm"
              onClick={() => setLanguage("en")}
            >
              English
            </Button>
            <Button
              variant={language === "ar" ? "default" : "outline"}
              size="sm"
              onClick={() => setLanguage("ar")}
            >
              العربية
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="p-8 glass-card animate-fade-in">
            <p
              className={`text-lg leading-relaxed ${
                language === "ar" ? "text-right" : "text-left"
              }`}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {content[language].text}
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
