import { Award, Star, TrendingUp, Users } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Award,
      value: "10+",
      label: "Industry Awards",
      description: "Recognized for excellence",
    },
    {
      icon: Star,
      value: "4.8/5",
      label: "Customer Rating",
      description: "Based on 500+ reviews",
    },
    {
      icon: Users,
      value: "50+",
      label: "Partner Universities",
      description: "Trusted by top institutions",
    },
    {
      icon: TrendingUp,
      value: "150%",
      label: "Year-over-Year Growth",
      description: "Continuous innovation",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Impact by Numbers
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Our achievements translated into measurable results and recognition
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative bg-gradient-card rounded-2xl border border-border p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-accent/50 animate-fade-in-up group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="inline-flex p-4 bg-gradient-accent rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {stat.value}
                </div>
                <div className="text-base sm:text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
