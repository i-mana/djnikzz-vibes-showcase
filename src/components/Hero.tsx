import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import djHeroImage from "@/assets/dj-hero.jpg";

interface HeroProps {
  onBookEvent: () => void;
}

export const Hero = ({ onBookEvent }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${djHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8 animate-fade-in-up">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              DJNIKZZ
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-light tracking-wide text-muted-foreground max-w-3xl mx-auto" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Elevate Your Events with Unforgettable Beats
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              variant="neon"
              size="lg"
              onClick={onBookEvent}
              className="text-lg px-10 py-7"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              <Calendar className="mr-3 h-6 w-6" />
              Book an Event
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-secondary bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                100%
              </div>
              <div className="text-muted-foreground font-medium" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Client Satisfaction
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-secondary bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                5★
              </div>
              <div className="text-muted-foreground font-medium" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Rated Experience
              </div>
            </div>
            <div className="space-y-2 col-span-2 md:col-span-1">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-secondary bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                1K+
              </div>
              <div className="text-muted-foreground font-medium" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Happy Guests
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
