import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FormDialog from "@/components/FormDialog";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const ContactUs = () => {
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
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get in touch with our team - we're here to help you succeed
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-custom-md mb-12">
              <p className="text-lg text-foreground/90 leading-relaxed">
                Our highly trained team provide a wide range of services. We offer professional service to all students and professionals. Our main goal is to become a point of reference for our students, a safe space where they can discuss any issues or concerns they are having. We are happy to find a solution for every prospective student and professional. Using questionnaires and interviews, we analyse a range of career paths. Depending on our applicants' preferences, our staff recommends a range of study programs and career moves to suit your needs.
              </p>
            </div>

            {/* Contact Methods Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Email Card */}
              <div className="bg-card border border-border rounded-xl p-8 shadow-custom-sm hover:shadow-custom-md transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold">Email Us</h3>
                </div>
                <p className="text-foreground/80 mb-4">
                  Send us an email and we'll get back to you as soon as possible
                </p>
                <a 
                  href="mailto:info@cohbyconsult.com"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
                >
                  info@cohbyconsult.com
                </a>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-card border border-border rounded-xl p-8 shadow-custom-sm hover:shadow-custom-md transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold">WhatsApp</h3>
                </div>
                <p className="text-foreground/80 mb-4">
                  Chat with us directly on WhatsApp for quick responses
                </p>
                <a 
                  href="https://api.whatsapp.com/send/?phone=%2B447424742415&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-secondary hover:text-secondary/80 font-semibold transition-colors"
                >
                  +44 7424 742415
                </a>
              </div>

              {/* Phone Card */}
              <div className="bg-card border border-border rounded-xl p-8 shadow-custom-sm hover:shadow-custom-md transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold">Call Us</h3>
                </div>
                <p className="text-foreground/80 mb-4">
                  Speak directly with our team during business hours
                </p>
                <a 
                  href="tel:+447424742415"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
                >
                  +44 7424 742415
                </a>
              </div>

              {/* Location Card */}
              <div className="bg-card border border-border rounded-xl p-8 shadow-custom-sm hover:shadow-custom-md transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold">Visit Us</h3>
                </div>
                <p className="text-foreground/80 mb-2">
                  <strong>London & Liverpool</strong>
                </p>
                <p className="text-foreground/70">
                  Schedule an appointment to visit our offices
                </p>
              </div>
            </div>

            {/* Application Form CTA */}
            <div className="text-center py-12 px-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
              <h3 className="text-3xl font-heading font-bold mb-4">Ready to Apply?</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Fill out our application form and let us guide you towards your goals
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

export default ContactUs;
