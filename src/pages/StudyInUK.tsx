import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FormDialog from "@/components/FormDialog";
import { Button } from "@/components/ui/button";
import { GraduationCap, Globe, Award, Building2 } from "lucide-react";

const StudyInUK = () => {
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
              Study in the <span className="text-secondary">United Kingdom</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in-up">
              Elevating Your Academic Journey - A World of Possibilities Awaits
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
                  Study in the UK with Cohby Consult
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  At Cohby Consult, we recognize that education is a passport to limitless opportunities. The United Kingdom, home to some of the world's top-ranking universities, beckons international students like you to embark on a transformative postgraduate adventure.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Let us assist you with your desired university in England, Scotland, Wales, and Northern Ireland.
                </p>
              </div>
            </div>

            {/* Statistics */}
            <div className="mb-16 animate-fade-in-up">
              <div className="bg-gradient-hero rounded-xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzMuMzEzIDAgNiAyLjY4NyA2IDZzLTIuNjg3IDYtNiA2LTYtMi42ODctNi02IDIuNjg3LTYgNi02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
                <div className="relative z-10">
                  <p className="text-primary-foreground text-lg text-center">
                    Over <span className="text-2xl font-heading font-bold text-secondary">45%</span> of international students in the UK choose to pursue postgraduate degrees. Why? Because the UK leads the way in pioneering research, academic studies, and innovation.
                  </p>
                </div>
              </div>
            </div>

            {/* Postgraduate Options */}
            <div className="mb-16 animate-scale-in">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <GraduationCap className="text-primary w-8 h-8" />
                Unveiling Postgraduate Options
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-secondary transition-all duration-300 hover:shadow-custom-md">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Master's Degree</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dive deep into your field of interest, engage in advanced research, and emerge as an expert in your chosen discipline.
                  </p>
                </div>
                <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-secondary transition-all duration-300 hover:shadow-custom-md">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">MBA Courses</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Elevate your business acumen and leadership skills with globally recognized MBA programs.
                  </p>
                </div>
                <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-secondary transition-all duration-300 hover:shadow-custom-md">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">PhDs or Doctorates</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Contribute to groundbreaking research, collaborate with renowned scholars, and make a lasting impact.
                  </p>
                </div>
                <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-secondary transition-all duration-300 hover:shadow-custom-md">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Postgraduate Diplomas</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Specialize further in areas like law, finance, or healthcare.
                  </p>
                </div>
              </div>
            </div>

            {/* UK Coverage */}
            <div className="mb-16 animate-fade-in">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <Building2 className="text-secondary w-8 h-8" />
                Universities Across the UK
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { region: "England", desc: "Historic universities and modern campuses" },
                  { region: "Scotland", desc: "World-renowned institutions in stunning settings" },
                  { region: "Wales", desc: "Quality education with rich cultural heritage" },
                  { region: "Northern Ireland", desc: "Growing academic excellence and opportunities" }
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-custom-md text-center">
                    <h4 className="text-xl font-heading font-semibold text-foreground mb-3">{item.region}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why UK */}
            <div className="mb-16 animate-scale-in">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <Globe className="text-primary w-8 h-8" />
                Why Choose the UK?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Academic Excellence", desc: "Home to Oxford, Cambridge, and many other top-ranked universities" },
                  { title: "Research Opportunities", desc: "Leading the way in pioneering research across all fields" },
                  { title: "Shorter Duration", desc: "Master's programs typically last just one year" },
                  { title: "Global Recognition", desc: "UK degrees are recognized and respected worldwide" },
                  { title: "Cultural Experience", desc: "Rich history, diverse culture, and vibrant student life" },
                  { title: "Work Opportunities", desc: "Post-study work visa allows you to work for up to 2 years" }
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-card rounded-xl p-6 border border-border hover:border-secondary transition-all duration-300 hover:shadow-custom-md hover:scale-105">
                    <Award className="text-secondary w-6 h-6 mb-3" />
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
                    Ready to Begin Your UK Journey?
                  </h3>
                  <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                    Let Cohby Consult guide you to your dream university in the United Kingdom.
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

export default StudyInUK;
