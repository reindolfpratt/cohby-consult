import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

interface DestinationCardProps {
  country: string;
  description: string;
  imageUrl: string;
}

const DestinationCard = ({ country, description, imageUrl }: DestinationCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:border-secondary transition-all duration-300 hover:shadow-custom-lg hover:-translate-y-1 bg-gradient-card">
      <div className="relative h-56 overflow-hidden">
        <img
          src={imageUrl}
          alt={`Study in ${country}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-2xl md:text-3xl font-heading font-bold text-primary-foreground">
          {country}
        </h3>
      </div>
      <div className="p-6">
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        <button className="inline-flex items-center text-secondary font-heading font-semibold group/btn hover:gap-2 transition-all duration-300">
          Learn More
          <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </Card>
  );
};

export default DestinationCard;
