import { Card } from "@/components/ui/card";
import { Music, Sparkles } from "lucide-react";

interface EventCardProps {
  title: string;
  description: string;
  image: string;
  gradient: string;
  icon?: "music" | "sparkles";
}

export const EventCard = ({ title, description, image, gradient, icon = "music" }: EventCardProps) => {
  const Icon = icon === "sparkles" ? Sparkles : Music;

  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow-cyan transition-all duration-500 hover:scale-[1.02]">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 ${gradient} opacity-40 group-hover:opacity-30 transition-opacity`} />
      </div>

      {/* Content */}
      <div className="p-8 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-lg bg-gradient-primary">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-3xl font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            {title}
          </h3>
        </div>
        
        <p className="text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
          {description}
        </p>

        {/* Decorative line */}
        <div className="pt-4">
          <div className="h-1 w-20 bg-gradient-primary rounded-full" />
        </div>
      </div>
    </Card>
  );
};
