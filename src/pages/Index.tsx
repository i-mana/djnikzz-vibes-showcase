import { useState } from "react";
import { Hero } from "@/components/Hero";
import { EventCard } from "@/components/EventCard";
import { CalendlyModal } from "@/components/CalendlyModal";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, Phone, Calendar } from "lucide-react";
import indianEventsImage from "@/assets/indian-events.jpg";
import edmEventsImage from "@/assets/edm-events.jpg";
import customEventsImage from "@/assets/custom-events.jpg";

const Index = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  
  const calendlyUrl = "https://calendly.com/djnikzz25/30min";

  const events = [
    {
      title: "Indian Celebrations",
      description: "From Sangeet to Garba, we bring authentic Indian music mixed with modern beats. Traditional meets contemporary for an unforgettable cultural celebration.",
      image: indianEventsImage,
      gradient: "bg-gradient-to-br from-orange-500/50 to-pink-500/50",
      icon: "sparkles" as const,
    },
    {
      title: "EDM & Electronic",
      description: "High-energy electronic dance music with cutting-edge production. Perfect for clubs, festivals, and parties that demand non-stop energy.",
      image: edmEventsImage,
      gradient: "bg-gradient-to-br from-blue-500/50 to-purple-500/50",
      icon: "music" as const,
    },
    {
      title: "Custom Events",
      description: "Weddings, corporate events, private parties - we customize our setlist to match your vision. Your event, your vibe, our expertise.",
      image: customEventsImage,
      gradient: "bg-gradient-to-br from-purple-500/50 to-pink-500/50",
      icon: "sparkles" as const,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero onBookEvent={() => setIsCalendlyOpen(true)} />

      {/* About Section */}
      <section className="py-20 md:py-24 px-6 md:px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 md:space-y-6 mb-16 md:mb-16">
            <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-secondary bg-clip-text text-transparent leading-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              About DJNikzz
            </h2>
            <p className="text-lg sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              DJNikzz brings fresh energy and passion to every event. Specializing in Indian celebrations and EDM parties, 
              we create personalized musical experiences that make your guests talk about your event for months. 
              Every party is treated like our own - with attention to detail, crowd reading, and seamless mixing that keeps the dance floor packed.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-48 h-48 md:w-64 md:h-64 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-56 h-56 md:w-80 md:h-80 bg-neon-cyan/10 rounded-full blur-3xl" />
      </section>

      {/* Events Section */}
      <section className="py-20 md:py-24 px-6 md:px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 md:space-y-6 mb-16 md:mb-16">
            <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-accent bg-clip-text text-transparent leading-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Our Specialties
            </h2>
            <p className="text-lg sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Every event is unique. We tailor our music to create the perfect atmosphere for your celebration.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {events.map((event) => (
              <EventCard key={event.title} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 px-6 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8 md:space-y-8">
          <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Ready to Make
            </span>
            <br />
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Your Event Epic?
            </span>
          </h2>
          
          <p className="text-lg sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Let's discuss your vision and create an unforgettable experience together.
          </p>

          <Button 
            variant="neonPink"
            size="lg"
            onClick={() => setIsCalendlyOpen(true)}
            className="text-lg md:text-lg lg:text-xl px-10 md:px-12 py-7 md:py-8 w-full sm:w-auto max-w-md"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            <Calendar className="mr-3 md:mr-3 h-6 w-6 md:h-6 md:w-6 lg:h-7 lg:w-7" />
            Schedule a Consultation
          </Button>
        </div>

        {/* Decorative glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 md:w-96 md:h-96 bg-neon-pink/20 rounded-full blur-3xl" />
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 md:py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                DJNIKZZ
              </h3>
              <p className="text-sm md:text-base text-muted-foreground" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Elevating events since 2025
              </p>
            </div>

            <div className="flex gap-4 md:gap-6">
              {/* <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-gradient-primary hover:shadow-glow-cyan"
              >
                <a 
                  href="https://instagram.com/djnikzz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </Button> */}
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-gradient-primary hover:shadow-glow-cyan"
              >
                <a 
                  href="mailto:contact@djnikzz.com"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 md:h-6 md:w-6" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-gradient-primary hover:shadow-glow-cyan"
              >
                <a 
                  href="tel:+1234567890"
                  aria-label="Phone"
                >
                  <Phone className="h-5 w-5 md:h-6 md:w-6" />
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border/50 text-center text-muted-foreground text-xs md:text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            <p>© {new Date().getFullYear()} DJNikzz. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Calendly Modal */}
      <CalendlyModal 
        open={isCalendlyOpen}
        onOpenChange={setIsCalendlyOpen}
        calendlyUrl={calendlyUrl}
      />
    </div>
  );
};

export default Index;
