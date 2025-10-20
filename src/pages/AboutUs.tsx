import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FormDialog from "@/components/FormDialog";
import { Button } from "@/components/ui/button";
import { Target, Heart, Zap, Shield, Award, Users } from "lucide-react";

const AboutUs = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const values = [
    {
      icon: Target,
      title: "Strive",
      description: "We deliver the best possible outcomes for our clients and take pride in our work built on quality and integrity"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We communicate openly, honestly and respectfully"
    },
    {
      icon: Zap,
      title: "Bold",
      description: "We embrace change to help our clients and colleagues"
    },
    {
      icon: Shield,
      title: "Responsibility",
      description: "We are committed to our communities"
    },
    {
      icon: Award,
      title: "Professionalism",
      description: "Pursue excellence for our clients and colleagues"
    },
    {
      icon: Users,
      title: "Team Work",
      description: "Take initiative and ownership, be ambitious, work smart, collaborate, and be part of the solution"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenForm={() => setIsFormOpen(true)} />
      <FormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your trusted partner in education and professional recruitment
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-custom-md mb-16">
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Cohby Consult is a student and professional recruitment consultancy based in London and Liverpool that offers support for those looking to get into education and the profession. We understand the difficulties that come with the admission process and aim to help every student who walks through our doors.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Whether it be choosing a course, or an institution, starting an application or simply understanding the requirements, we offer our services to simplify the process. We have been successful in recruiting home and international students and professionals from diverse backgrounds, enrolling them on suitable universities and jobs that meet their personal and individual needs.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                As a consultancy firm, we have many universities and companies across the world, especially in Europe and will find the perfect course and country that suits you. We have professionals that are willing to take their time and discuss what will suit you. We have your absolute best interest at heart.
              </p>
            </div>

            {/* Our Values Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Values</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Values help us ensure that all our employees are working towards the same goals. Our core values support the company's vision and shape its culture.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-card border border-border rounded-xl p-6 shadow-custom-sm hover:shadow-custom-md transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-14 h-14 bg-gradient-cta rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-heading font-bold mb-3">{value.title}</h3>
                      <p className="text-foreground/80 leading-relaxed">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center py-12 px-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
              <h3 className="text-3xl font-heading font-bold mb-4">Join Our Success Story</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let us help you achieve your educational and professional goals
              </p>
              <Button
                onClick={() => setIsFormOpen(true)}
                size="lg"
                className="bg-gradient-cta hover:shadow-custom-glow transition-all duration-300 font-heading font-semibold"
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
