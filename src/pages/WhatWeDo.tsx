import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FormDialog from "@/components/FormDialog";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Globe, Users } from "lucide-react";

const WhatWeDo = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenForm={() => setIsFormOpen(true)} />
      <FormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              What We Do
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our highly trained team provide a wide range of services. We offer professional service to all students and professionals. Our main goal is to become a point of reference for our students, a safe space where they can discuss any issues or concerns they are having.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none mb-16">
              <p className="text-lg text-foreground/90 leading-relaxed">
                We are happy to find a solution for every prospective student and professional. Using questionnaires and interviews, we analyse a range of career paths. Depending on our applicants' preferences, our staff recommends a range of study programs and career moves to suit your needs.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Students Section */}
              <div className="bg-card border border-border rounded-xl p-8 shadow-custom-sm hover:shadow-custom-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-foreground">Students</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Are you ready to jumpstart your future? Be part of our education community and get access to top-notch universities, expert instructors, and a supportive network of students. Our platform offers a wide range of courses designed to help you achieve your goals, no matter where you are in your education journey.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  From high-quality process to interactive customer experiences, we provide the tools and resources you need to succeed. With varieties of universities across North America, Europe and Asia, you can study at your dream country. Whether you are looking to start a new career or enhance your skills, our education platform is here to help.
                </p>
              </div>

              {/* Professionals Section */}
              <div className="bg-card border border-border rounded-xl p-8 shadow-custom-sm hover:shadow-custom-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Briefcase className="w-8 h-8 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-foreground">Professionals</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Looking to take your career to the next level? Join our professional network and unlock a world of opportunities. Our platform connects you with top companies, industry leaders, and fellow professionals who share your passion for success.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  We offer personalized career guidance, professional development resources, and access to exclusive job opportunities across various industries. Whether you're seeking career advancement, a career change, or professional growth, we're here to support your journey every step of the way.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">Global Network</h3>
                <p className="text-sm text-muted-foreground">
                  Access to universities and opportunities across North America, Europe, and Asia
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">Expert Guidance</h3>
                <p className="text-sm text-muted-foreground">
                  Professional consultants ready to help you make informed decisions
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/10 rounded-xl">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">Tailored Solutions</h3>
                <p className="text-sm text-muted-foreground">
                  Personalized recommendations based on your goals and preferences
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center py-12 px-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
              <h3 className="text-3xl font-heading font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let us help you find the perfect educational path or career opportunity
              </p>
              <Button
                onClick={() => setIsFormOpen(true)}
                size="lg"
                className="bg-gradient-cta hover:shadow-custom-glow transition-all duration-300 font-heading font-semibold"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatWeDo;
