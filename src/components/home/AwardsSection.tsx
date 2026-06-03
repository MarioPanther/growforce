import { Award, Star, TrendingUp } from "lucide-react";

const AwardsSection = () => {
  const awards = [
    { name: "Best Tech Platform 2024", icon: Award },
    { name: "Top Rated Service", icon: Star },
    { name: "Industry Leader", icon: TrendingUp },
  ];

  return (
    <section className="py-12 sm:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">
            Award-winning Platform
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Recognized by industry leaders for excellence in tech consultancy and talent solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-card p-6 sm:p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in flex flex-col items-center text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-accent rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <award.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground">{award.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
