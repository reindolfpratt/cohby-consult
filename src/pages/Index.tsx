import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DestinationCard from "@/components/DestinationCard";
import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  const destinations = [
    {
      country: "USA",
      description: "We Work With Universities Across 17 States",
      imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80"
    },
    {
      country: "Austria",
      description: "Unlocking World-Class Education and Cultural Exploration",
      imageUrl: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&q=80"
    },
    {
      country: "United Kingdom",
      description: "Let Us Assist You With Your Desired University in England, Scotland, Wales and Northern Ireland",
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80"
    },
    {
      country: "Denmark",
      description: "Your Gateway to Academic Excellence and European Adventure",
      imageUrl: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&q=80"
    },
    {
      country: "Canada",
      description: "With Over 20 Top Universities, We Are Delighted To Make Your Canadian Dream A Reality",
      imageUrl: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=80"
    },
    {
      country: "Finland",
      description: "Home to Prestigious Universities, We're Here to Transform Your Aspirations into Reality",
      imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80"
    }
  ];

  const courses = [
    {
      title: "Business Administration and Management",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
    },
    {
      title: "Nursing, Midwifery",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80"
    },
    {
      title: "Health and Social Care",
      imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80"
    },
    {
      title: "Software Development, AI & Machine Learning",
      imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80"
    },
    {
      title: "Business Events Management and Project Management",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80"
    },
    {
      title: "Business Law, Paralegal, Law, Psychology and Police Studies",
      imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80"
    },
    {
      title: "Architecture, Building Technician and Engineers",
      imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Destinations Section */}
      <section id="destinations" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Study <span className="text-primary">Destinations</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our extensive network of partner universities across the globe
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div 
                key={destination.country} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <DestinationCard {...destination} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-secondary/10 border border-secondary rounded-full text-secondary font-heading font-semibold text-sm mb-4">
              Most Popular
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Featured <span className="text-secondary">Programs</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our wide range of programs designed to match your career aspirations
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div 
                key={course.title} 
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzMuMzEzIDAgNiAyLjY4NyA2IDZzLTIuNjg3IDYtNiA2LTYtMi42ODctNi02IDIuNjg3LTYgNi02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto animate-fade-in-up">
            Join thousands of students who have successfully pursued their dreams abroad. Your future starts here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-scale-in">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-cta hover:shadow-custom-glow transition-all duration-300 font-heading font-bold text-base md:text-lg px-10 py-6"
            >
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfmG24HFqsX_i7AmRblzZukkupGTxxpGYei833-BYmOvxYnlA/viewform" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 font-heading font-semibold text-base md:text-lg px-10 py-6"
            >
              <a href="#contact">
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
