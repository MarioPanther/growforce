import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-hero overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-accent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Schedule a free demo today!
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8">
            See how our platform can transform your hiring process and connect you with top talent
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-card text-foreground hover:bg-card/90">
              <Phone className="mr-2 h-5 w-5" />
              Book a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
