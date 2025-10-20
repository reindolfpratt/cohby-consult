import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FormDialog from "@/components/FormDialog";
import { Button } from "@/components/ui/button";
import { GraduationCap, Globe, CheckCircle2, Clock } from "lucide-react";

const StudyInDenmark = () => {
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
              Study in <span className="text-secondary">Denmark</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in-up">
              Your Gateway to Academic Excellence and European Adventure
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
                  Study in Denmark with Cohby Consult
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At Cohby Consult, we believe that education transcends borders, and Denmark offers an exceptional opportunity for international students to thrive academically and personally. As your trusted educational partner, we are thrilled to guide you through every step of your journey toward a postgraduate degree in Denmark.
                </p>
              </div>
            </div>

            {/* Explore Programs */}
            <div className="mb-16 animate-fade-in-up">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <GraduationCap className="text-primary w-8 h-8" />
                Explore Postgraduate Programs
              </h2>
              <div className="bg-muted/30 rounded-xl p-8">
                <p className="text-foreground leading-relaxed mb-6">
                  Our approach ensures that you find the perfect postgraduate program to match your aspirations. Whether you're interested in business, engineering, social sciences, or any other field, our selected universities in Denmark offer a diverse range of Master's degree programs. At Cohby Consult, we'll sit down with you, evaluate your credentials and navigate through suited options together, ensuring you make an informed choice.
                </p>
              </div>
            </div>

            {/* Admission Made Simple */}
            <div className="mb-16 animate-scale-in">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <CheckCircle2 className="text-secondary w-8 h-8" />
                Admission Made Simple
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-custom-md">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Education System</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Denmark boasts a world-class education system known for its innovative teaching methods, research excellence, and student-centered approach.
                  </p>
                </div>
                <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-custom-md">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Work Opportunities</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    International students can work part-time during studies and full-time during holidays, gaining valuable experience in Denmark's thriving job market.
                  </p>
                </div>
              </div>
            </div>

            {/* Application Timeline */}
            <div className="mb-16 animate-fade-in">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <Clock className="text-primary w-8 h-8" />
                Application Timeline
              </h2>
              <div className="bg-gradient-card rounded-xl p-8 border border-border">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">Application Opens</h4>
                      <p className="text-muted-foreground">Applications typically open in early February for September intake</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">Deadline</h4>
                      <p className="text-muted-foreground">Most programs have deadlines in March</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">Start Date</h4>
                      <p className="text-muted-foreground">Academic year begins in September</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Denmark */}
            <div className="mb-16 animate-scale-in">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <Globe className="text-secondary w-8 h-8" />
                Why Choose Denmark?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "High Quality of Life", desc: "Denmark consistently ranks among the happiest countries in the world" },
                  { title: "English-Friendly", desc: "Most Danes speak excellent English, making daily life easy for international students" },
                  { title: "Innovation Hub", desc: "Home to leading companies and startups in sustainability, tech, and design" }
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
                    Ready to Start Your Danish Adventure?
                  </h3>
                  <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                    Let Cohby Consult guide you through every step of your journey to studying in Denmark.
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

export default StudyInDenmark;
