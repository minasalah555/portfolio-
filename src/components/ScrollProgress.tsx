import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(scrolled);
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showBackToTop ? "show" : ""}`}
        aria-label="Back to top"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </>
  );
}
