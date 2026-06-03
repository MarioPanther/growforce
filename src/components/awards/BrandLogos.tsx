import { Building2 } from "lucide-react";

const BrandLogos = () => {
  const partners = [
    "Tech Excellence Awards",
    "HR Innovation Summit",
    "Startup Review",
    "Business Weekly",
    "Education Today",
    "Recruitment Insider",
    "Career Connect",
    "Talent Magazine",
  ];

  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Featured In & Recognized By
          </h2>
          <p className="text-base text-muted-foreground">
            Trusted and acknowledged by leading industry publications and organizations
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex animate-marquee gap-12 items-center">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[200px] px-6 py-4 bg-card rounded-lg border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-md grayscale hover:grayscale-0"
              >
                <Building2 className="w-6 h-6 text-muted-foreground mr-3" />
                <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default BrandLogos;
