import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { GraduationCap, Globe, MapPin, Heart } from "lucide-react";

const StudyInCanada = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzMuMzEzIDAgNiAyLjY4NyA2IDZzLTIuNjg3IDYtNiA2LTYtMi42ODctNi02IDIuNjg3LTYgNi02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in">
              Study in <span className="text-secondary">Canada</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in-up">
              Your Path to Excellence - Make Your Canadian Dream A Reality
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <div className="mb-16 animate-fade-in">
              <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-custom-md">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Study in Canada with Cohby Consult
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  As Cohby Consult, your dedicated educational partner, we are thrilled to guide you through each stage of your journey toward a postgraduate degree in Canada.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  With over 20 top universities, we are delighted to make your Canadian dream a reality.
                </p>
              </div>
            </div>

            {/* Partner Universities */}
            <div className="mb-16 animate-fade-in-up">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <MapPin className="text-primary w-8 h-8" />
                Over 20 Top Universities
              </h2>
              <div className="bg-muted/30 rounded-xl p-8">
                <p className="text-foreground leading-relaxed mb-6">
                  Our extensive network includes partnerships with over 20 of Canada's leading universities across the country. From coast to coast, we help you access world-class education in diverse and welcoming communities.
                </p>
              </div>
            </div>

            {/* Postgraduate Options */}
            <div className="mb-16 animate-scale-in">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <GraduationCap className="text-secondary w-8 h-8" />
                Exploring Canadian Postgraduate Options
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-custom-md">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Postgraduate Certificate</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A short-term course typically completed within a year, expanding upon skills acquired during your bachelor's degree.
                  </p>
                </div>
                <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-custom-md">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Postgraduate Diploma</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Delve deeper into specialized fields with comprehensive diploma programs.
                  </p>
                </div>
                <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-custom-md">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Post-Baccalaureate Diploma</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Enhance your expertise beyond your undergraduate studies.
                  </p>
                </div>
                <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-custom-md">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Master's Degree</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Engage in advanced research or coursework-based study (thesis/non-thesis options).
                  </p>
                </div>
                <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-custom-md">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Research/PhD</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Contribute to groundbreaking research and make a lasting impact.
                  </p>
                </div>
              </div>
            </div>

            {/* The Canadian Advantage */}
            <div className="mb-16 animate-fade-in">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <Heart className="text-secondary w-8 h-8" />
                The Canadian Advantage
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-secondary transition-all duration-300 hover:shadow-custom-md">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Welcoming & Diverse</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Canada is known for its multicultural society and welcoming attitude toward international students.
                  </p>
                </div>
                <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-secondary transition-all duration-300 hover:shadow-custom-md">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">High Quality Education</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Canadian universities consistently rank among the best in the world for quality and innovation.
                  </p>
                </div>
                <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-secondary transition-all duration-300 hover:shadow-custom-md">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Work While Studying</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    International students can work part-time during studies and full-time during breaks.
                  </p>
                </div>
                <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-secondary transition-all duration-300 hover:shadow-custom-md">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Post-Graduation Work Permit</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Eligible graduates can work in Canada for up to three years after completing their studies.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Canada */}
            <div className="mb-16 animate-scale-in">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <Globe className="text-primary w-8 h-8" />
                Why Choose Canada?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Affordable Education", desc: "Competitive tuition fees compared to other English-speaking countries" },
                  { title: "Safe & Peaceful", desc: "One of the safest countries in the world for students" },
                  { title: "Natural Beauty", desc: "Stunning landscapes from coast to coast" },
                  { title: "Immigration Pathways", desc: "Clear pathways to permanent residency for graduates" },
                  { title: "Bilingual Advantage", desc: "Learn or improve your French alongside English" },
                  { title: "Innovation & Research", desc: "Leading research opportunities across all fields" }
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-custom-md hover:scale-105">
                    <h4 className="text-lg font-heading font-semibold text-foreground mb-3">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center animate-fade-in">
              <div className="bg-gradient-hero rounded-2xl p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzMuMzEzIDAgNiAyLjY4NyA2IDZzLTIuNjg3IDYtNiA2LTYtMi42ODctNi02IDIuNjg3LTYgNi02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
                    Ready to Make Your Canadian Dream Reality?
                  </h3>
                  <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                    Join thousands of international students who have chosen Canada with Cohby Consult.
                  </p>
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-gradient-cta hover:shadow-custom-glow transition-all duration-300 font-heading font-bold text-base md:text-lg px-10 py-6"
                  >
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfmG24HFqsX_i7AmRblzZukkupGTxxpGYei833-BYmOvxYnlA/viewform" target="_blank" rel="noopener noreferrer">
                      Apply Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudyInCanada;
