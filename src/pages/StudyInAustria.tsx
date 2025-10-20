import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FormDialog from "@/components/FormDialog";
import { Button } from "@/components/ui/button";
import { GraduationCap, Globe, CheckCircle2, Star } from "lucide-react";

const StudyInAustria = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  return (
    <div className="min-h-screen">
      <Navbar onOpenForm={() => setIsFormOpen(true)} />
      <FormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzMuMzEzIDAgNiAyLjY4NyA2IDZzLTIuNjg3IDYtNiA2LTYtMi42ODctNi02IDIuNjg3LTYgNi02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in">
              Study in <span className="text-secondary">Austria</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in-up">
              Unlocking World-Class Education and Cultural Exploration
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
                  Unveiling Opportunities in the Heart of Europe
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At Cohby Consult, we believe that education transcends borders, and Austria offers a remarkable platform for international students to thrive academically and personally. As your dedicated educational partner, we are thrilled to guide you through each stage of your journey toward a postgraduate degree in Austria.
                </p>
              </div>
            </div>

            {/* Austrian Programs */}
            <div className="mb-16 animate-fade-in-up">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <GraduationCap className="text-primary w-8 h-8" />
                Exploring Austrian Postgraduate Programs
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-secondary transition-all duration-300 hover:shadow-custom-md">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Master's Degrees</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dive deep into your field of interest, engage in advanced research, and emerge as an expert.
                  </p>
                </div>
                <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-secondary transition-all duration-300 hover:shadow-custom-md">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Postgraduate Certificates</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Enhance specific skills within a shorter timeframe.
                  </p>
                </div>
                <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-secondary transition-all duration-300 hover:shadow-custom-md">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Postgraduate Diplomas</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Delve deeper into specialized fields.
                  </p>
                </div>
                <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-secondary transition-all duration-300 hover:shadow-custom-md">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Research Opportunities</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Contribute to groundbreaking research and make a lasting impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Application Process */}
            <div className="mb-16 animate-scale-in">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <CheckCircle2 className="text-secondary w-8 h-8" />
                Navigating the Application Process
              </h2>
              <div className="bg-muted/30 rounded-xl p-8">
                <p className="text-foreground leading-relaxed mb-6">
                  Applying to Austrian universities can seem daunting, but fear not! Cohby Consult simplifies the process. From selecting the right program to submitting your application, we'll be with you at every turn. We'll help you compile necessary documents, meet deadlines, and present your best self to admissions committees.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background rounded-lg p-6 border border-border">
                    <h4 className="font-heading font-semibold text-foreground mb-3">Admission Requirements</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Bachelor's degree or equivalent</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Language proficiency (English or German)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Academic transcripts</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-background rounded-lg p-6 border border-border">
                    <h4 className="font-heading font-semibold text-foreground mb-3">Application Process</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Online application submission</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Document verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Visa application support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Austria */}
            <div className="mb-16 animate-fade-in">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <Globe className="text-primary w-8 h-8" />
                Why Choose Austria?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Rich Cultural Heritage", desc: "Experience a blend of classical music, art, and architecture in the heart of Europe" },
                  { title: "High-Quality Education", desc: "Austrian universities are known for academic excellence and innovative research" },
                  { title: "Central European Location", desc: "Perfect base for exploring neighboring countries and cultures" },
                  { title: "Affordable Living", desc: "Lower cost of living compared to other Western European countries" },
                  { title: "Work Opportunities", desc: "International students can work part-time during studies" },
                  { title: "Post-Study Options", desc: "Opportunities to stay and work in Austria after graduation" }
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-custom-md hover:scale-105">
                    <Star className="text-secondary w-6 h-6 mb-3" />
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
                    Ready to Explore Austria?
                  </h3>
                  <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                    Begin your Austrian educational journey with Cohby Consult today.
                  </p>
                  <Button 
                    onClick={() => setIsFormOpen(true)}
                    size="lg" 
                    className="bg-gradient-cta hover:shadow-custom-glow transition-all duration-300 font-heading font-bold text-base md:text-lg px-10 py-6"
                  >
                    Apply Now
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

export default StudyInAustria;
