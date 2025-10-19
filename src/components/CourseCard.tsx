import { BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CourseCardProps {
  title: string;
  imageUrl: string;
}

const CourseCard = ({ title, imageUrl }: CourseCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-custom-md hover:scale-105 bg-gradient-card cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
        <div className="absolute bottom-3 left-3 bg-secondary/90 backdrop-blur-sm p-2 rounded-full">
          <BookOpen className="w-5 h-5 text-secondary-foreground" />
        </div>
      </div>
      <div className="p-5">
        <h4 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h4>
      </div>
    </Card>
  );
};

export default CourseCard;
