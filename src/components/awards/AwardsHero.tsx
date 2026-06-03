import { Award } from "lucide-react";

const AwardsHero = () => {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary rounded-full blur-2xl animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-10 right-10 w-36 h-36 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Floating trophy icons */}
      <div className="absolute inset-0 opacity-5">
        <Award className="absolute top-20 left-1/4 w-12 h-12 animate-float" />
        <Award className="absolute bottom-32 right-1/3 w-16 h-16 animate-float" style={{ animationDelay: "1s" }} />
        <Award className="absolute top-1/2 right-1/4 w-10 h-10 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-1.5 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
            <span className="text-sm font-semibold text-primary-foreground">Trusted by leading organizations</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Awards & Recognitions
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Proud moments that validate our impact and innovation in transforming the hiring landscape
          </p>
        </div>
      </div>
    </section>
  );
};

export default AwardsHero;
