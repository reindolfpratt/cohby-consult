import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FormDialog from "@/components/FormDialog";
import { Button } from "@/components/ui/button";
import { GraduationCap, Globe, MapPin, Briefcase } from "lucide-react";

const StudyInUSA = () => {
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
              Study in the <span className="text-secondary">USA</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in-up">
              Your Gateway to Excellence - Unlocking Opportunities Across the Atlantic
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
                  Study in the USA with Cohby Consult
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At Cohby Consult, we believe that education transcends borders, and the United States presents an extraordinary canvas for international students to flourish academically and personally. As your dedicated educational partner, we are thrilled to guide you through each stage of your journey toward a postgraduate degree in the USA.
                </p>
              </div>
            </div>

            {/* Partner Universities */}
            <div className="mb-16 animate-fade-in-up">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <MapPin className="text-primary w-8 h-8" />
                We Work With Universities Across 17 States
              </h2>
              <div className="bg-muted/30 rounded-xl p-8">
                <p className="text-foreground leading-relaxed mb-6">
                  Our extensive network spans across the United States, giving you access to top-tier universities in diverse locations. From bustling coastal cities to serene college towns, we help you find the perfect academic home that matches your goals and preferences.
                </p>
              </div>
            </div>

            {/* Programs */}
            <div className="mb-16 animate-scale-in">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <GraduationCap className="text-secondary w-8 h-8" />
                Exploring the American Academic Landscape
              </h2>
              <div className="bg-gradient-card rounded-xl p-8 border border-border">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                  Discover Tailored Postgraduate Programs
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our approach ensures that you discover the ideal postgraduate program aligned with your aspirations. Whether your interests lie in business, engineering, social sciences, or any other field, American universities offer a diverse array of Master's degree programs. At Cohby Consult, we'll collaborate with you, evaluate your qualifications, and explore suitable options together, ensuring an informed decision.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-background rounded-lg p-6 border border-border">
                    <h4 className="font-heading font-semibold text-foreground mb-3">Master's Programs</h4>
                    <p className="text-muted-foreground">Advanced degrees across all disciplines with flexible specializations</p>
                  </div>
                  <div className="bg-background rounded-lg p-6 border border-border">
                    <h4 className="font-heading font-semibold text-foreground mb-3">MBA Programs</h4>
                    <p className="text-muted-foreground">World-renowned business schools with global networking opportunities</p>
                  </div>
                  <div className="bg-background rounded-lg p-6 border border-border">
                    <h4 className="font-heading font-semibold text-foreground mb-3">PhD Programs</h4>
                    <p className="text-muted-foreground">Research-intensive doctoral programs with leading faculty</p>
                  </div>
                  <div className="bg-background rounded-lg p-6 border border-border">
                    <h4 className="font-heading font-semibold text-foreground mb-3">Graduate Certificates</h4>
                    <p className="text-muted-foreground">Specialized programs for career advancement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Opportunities */}
            <div className="mb-16 animate-fade-in">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <Briefcase className="text-primary w-8 h-8" />
                Work and Career Opportunities
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-secondary transition-all duration-300 hover:shadow-custom-md">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">On-Campus Employment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    International students can work up to 20 hours per week on campus, gaining valuable work experience while studying.
                  </p>
                </div>
                <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-secondary transition-all duration-300 hover:shadow-custom-md">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">OPT Program</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Optional Practical Training allows you to work in your field of study for up to 12-36 months after graduation.
                  </p>
                </div>
              </div>
            </div>

            {/* Why USA */}
            <div className="mb-16 animate-scale-in">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <Globe className="text-secondary w-8 h-8" />
                Why Choose the USA?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "World-Class Universities", desc: "Home to many of the world's top-ranked universities and research institutions" },
                  { title: "Diverse Academic Options", desc: "Thousands of programs across hundreds of specializations" },
                  { title: "Innovation Hub", desc: "Leading in technology, research, and entrepreneurship" },
                  { title: "Cultural Diversity", desc: "Experience a melting pot of cultures and perspectives" },
                  { title: "Career Opportunities", desc: "Access to global companies and thriving job markets" },
                  { title: "Flexible Education", desc: "Customize your degree with various electives and concentrations" }
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
                    Ready to Pursue Your American Dream?
                  </h3>
                  <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                    Let Cohby Consult be your partner in achieving academic excellence in the USA.
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

export default StudyInUSA;
