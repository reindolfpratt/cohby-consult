import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { GraduationCap, Globe, Lightbulb, Calendar } from "lucide-react";

const StudyInFinland = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzMuMzEzIDAgNiAyLjY4NyA2IDZzLTIuNjg3IDYtNiA2LTYtMi42ODctNi02IDIuNjg3LTYgNi02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in">
              Study in <span className="text-secondary">Finland</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in-up">
              Home to Prestigious Universities - Transform Your Aspirations into Reality
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
                  Your Guide to Finnish Education
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Finland is a land of innovation, natural beauty, and world-class education! Whether you want to pursue a master's degree or a doctoral program, Finland offers a unique and enriching experience and Cohby Consult is here to assist you.
                </p>
              </div>
            </div>

            {/* Programs */}
            <div className="mb-16 animate-fade-in-up">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <GraduationCap className="text-primary w-8 h-8" />
                Programs
              </h2>
              <div className="bg-gradient-card rounded-xl p-8 border border-border">
                <p className="text-foreground leading-relaxed mb-6">
                  Our selected educational institutions in Finland provide over <span className="font-heading font-bold text-secondary">250 bachelor's and master's degree programs</span> taught in English. Additionally, there are opportunities for doctoral study and research. Cohby Consult will explore the diverse range of programs with you and find the one that aligns with your interests and career goals.
                </p>
              </div>
            </div>

            {/* Admission Terms */}
            <div className="mb-16 animate-scale-in">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <Lightbulb className="text-secondary w-8 h-8" />
                Admission Terms
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-custom-md">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Bachelor's Degrees</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    To apply for a bachelor's program, you'll need a senior high school certificate or its equivalent.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <p>• University: 3 years</p>
                    <p>• UAS: 3.5-4.5 years</p>
                  </div>
                </div>
                <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-custom-md">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Master's Degrees</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For master's programs, you'll need a bachelor's degree or its equivalent.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <p>• Duration: 2 years full-time study</p>
                  </div>
                </div>
                <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-custom-md">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Doctoral (PhD) Degrees</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Doctoral education in Finland is research-intensive and world-renowned.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <p>• Duration: Typically 4 years</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Timeline */}
            <div className="mb-16 animate-fade-in">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <Calendar className="text-primary w-8 h-8" />
                Application Timeline
              </h2>
              <div className="bg-muted/30 rounded-xl p-8">
                <div className="space-y-6">
                  <div className="bg-background rounded-lg p-6 border border-border">
                    <h4 className="font-heading font-semibold text-foreground mb-3">Application Period</h4>
                    <p className="text-muted-foreground">
                      Most programs open applications in early January for autumn intake. Some programs may have additional spring intakes.
                    </p>
                  </div>
                  <div className="bg-background rounded-lg p-6 border border-border">
                    <h4 className="font-heading font-semibold text-foreground mb-3">Academic Year</h4>
                    <p className="text-muted-foreground">
                      The academic year typically begins in August/September and runs through May.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Finland */}
            <div className="mb-16 animate-scale-in">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <Globe className="text-secondary w-8 h-8" />
                Why Choose Finland?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Innovation Leader", desc: "Finland ranks among the most innovative countries in the world" },
                  { title: "High-Quality Education", desc: "Finnish education system is globally recognized for excellence" },
                  { title: "Nature & Sustainability", desc: "Experience pristine natural beauty and commitment to sustainability" },
                  { title: "Safe & Peaceful", desc: "One of the safest and happiest countries in the world" },
                  { title: "English-Friendly", desc: "Over 250 programs taught in English, and most Finns speak excellent English" },
                  { title: "Work Opportunities", desc: "Students can work while studying and explore post-graduation options" }
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
                    Ready to Experience Finland?
                  </h3>
                  <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                    Let Cohby Consult help you transform your aspirations into reality in Finland.
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

export default StudyInFinland;
