import { GraduationCap, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero -z-10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzMuMzEzIDAgNiAyLjY4NyA2IDZzLTIuNjg3IDYtNiA2LTYtMi42ODctNi02IDIuNjg3LTYgNi02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary px-6 py-2 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-secondary font-heading font-semibold text-sm md:text-base">
              2025 INTAKE OPEN
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up">
            Your Gateway to
            <span className="block text-secondary mt-2">Global Education Excellence</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Transform your academic dreams into reality with expert guidance. We help students secure admissions to top universities across USA, UK, Austria, Denmark, Canada, and Finland.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-cta hover:shadow-custom-glow transition-all duration-300 font-heading font-bold text-base md:text-lg px-8 py-6 animate-glow"
            >
              <a href="https://forms.gle/k4AKCwGpcQhsrxae8" target="_blank" rel="noopener noreferrer">
                Register Online
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 font-heading font-semibold text-base md:text-lg px-8 py-6"
            >
              <a href="#destinations">
                Explore Destinations
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <GraduationCap className="w-10 h-10 text-secondary mx-auto mb-3" />
              <div className="text-3xl font-heading font-bold text-primary-foreground mb-1">100+</div>
              <div className="text-sm text-primary-foreground/80">Partner Universities</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <Globe className="w-10 h-10 text-secondary mx-auto mb-3" />
              <div className="text-3xl font-heading font-bold text-primary-foreground mb-1">6</div>
              <div className="text-sm text-primary-foreground/80">Countries</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <Award className="w-10 h-10 text-secondary mx-auto mb-3" />
              <div className="text-3xl font-heading font-bold text-primary-foreground mb-1">1000+</div>
              <div className="text-sm text-primary-foreground/80">Successful Placements</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
