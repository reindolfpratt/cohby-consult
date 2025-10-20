import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FormDialog from "@/components/FormDialog";
import { Button } from "@/components/ui/button";
import { BookOpen, Briefcase, GraduationCap } from "lucide-react";

const Programs = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const programs = [
    {
      title: "Business Administration",
      career: "A degree in Business Administration can open doors to careers in management, finance, marketing, and entrepreneurship. Graduates often become business analysts, managers, consultants, and entrepreneurs.",
      admission: "Typical requirements include a high school diploma or equivalent. For master's: transcripts, GMAT (if applicable) and letters of recommendation."
    },
    {
      title: "Engineering Programs",
      career: "Engineering graduates work in a variety of industries, from aerospace to civil engineering. Opportunities include roles as mechanical engineers, electrical engineers, and software developers.",
      admission: "High school diploma with strong math and science background. For master's: Bachelor's in engineering or related field."
    },
    {
      title: "Nursing & Midwifery",
      career: "Nursing professionals are in high demand globally. Career paths include registered nurse, nurse practitioner, midwife, healthcare administrator, and specialized clinical roles.",
      admission: "High school diploma with biology and chemistry. For advanced programs: RN license and relevant experience may be required."
    },
    {
      title: "Health and Social Care",
      career: "Graduates work in healthcare settings, social services, community health, and policy development. Roles include healthcare coordinator, social worker, and public health specialist.",
      admission: "High school diploma. For master's: Bachelor's degree in health sciences or related field."
    },
    {
      title: "Software Development, AI & Machine Learning",
      career: "Tech professionals work in software companies, startups, research institutions, and tech giants. Roles include software developer, AI engineer, data scientist, and machine learning specialist.",
      admission: "Strong background in mathematics and computer science. For master's: Bachelor's in computer science or related field."
    },
    {
      title: "Business Events Management and Project Management",
      career: "Graduates manage events, conferences, and projects across various industries. Career paths include event coordinator, project manager, operations manager, and business consultant.",
      admission: "High school diploma. For master's: Bachelor's degree and relevant work experience preferred."
    },
    {
      title: "Business Law, Paralegal, Law, Psychology and Police Studies",
      career: "Diverse career paths in legal services, law enforcement, counseling, and criminal justice. Roles include paralegal, lawyer, psychologist, law enforcement officer, and legal consultant.",
      admission: "High school diploma. Specific programs may require additional testing. For law school: Bachelor's degree and entrance exams."
    },
    {
      title: "Architecture, Building Technician and Engineers",
      career: "Professionals work in architecture firms, construction companies, and engineering consultancies. Roles include architect, building technician, structural engineer, and urban planner.",
      admission: "High school diploma with strong math and design skills. Portfolio may be required. For master's: Bachelor's in architecture or engineering."
    }
  ];

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
              Programs & <span className="text-secondary">Admission</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in-up">
              Exploring Career Prospects and Admission Requirements
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <div className="mb-16 animate-fade-in">
              <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-custom-md">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  Your Guide to Academic Programs
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  This is only a guide to help you on your journey to choose the right academic program and navigate the admission requirements for your chosen field of study. Remember this is not the actual requirements as this may differ depending on the University and the program of choice.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to our guide that will help you explore various academic programs and their corresponding career prospects, as well as the general admission requirements. Whether you are a high school graduate, a career changer, or simply considering further education in master's or doctorate, we've got you covered!
                </p>
              </div>
            </div>

            {/* Programs List */}
            <div className="space-y-8">
              {programs.map((program, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in-up bg-gradient-card rounded-xl border border-border overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-custom-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-8">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                      <BookOpen className="text-secondary w-8 h-8 flex-shrink-0" />
                      {program.title}
                    </h3>
                    
                    <div className="space-y-6">
                      {/* Career Prospects */}
                      <div className="bg-muted/30 rounded-lg p-6">
                        <h4 className="text-lg font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Briefcase className="text-primary w-5 h-5" />
                          Career Prospects
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {program.career}
                        </p>
                      </div>

                      {/* Admission Requirements */}
                      <div className="bg-muted/30 rounded-lg p-6">
                        <h4 className="text-lg font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                          <GraduationCap className="text-secondary w-5 h-5" />
                          Admission Requirements
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {program.admission}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Important Note */}
            <div className="mt-16 animate-fade-in">
              <div className="bg-gradient-hero rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzMuMzEzIDAgNiAyLjY4NyA2IDZzLTIuNjg3IDYtNiA2LTYtMi42ODctNi02IDIuNjg3LTYgNi02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-primary-foreground mb-4 text-center">
                    Important Note
                  </h3>
                  <p className="text-primary-foreground/90 text-center mb-6 max-w-3xl mx-auto">
                    Remember that specific admission requirements may vary by university and program. We recommend consulting with our advisors at Cohby Consult to get personalized guidance for your specific situation and goals.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center animate-fade-in">
              <div className="bg-gradient-card rounded-2xl p-12 border border-border">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let Cohby Consult help you find the perfect program and guide you through the admission process.
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
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
