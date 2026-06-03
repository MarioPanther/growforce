import { Shield, Users, Clock, Target, Zap, HeadphonesIcon } from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Shield,
      title: "One unified tool for teams",
      description: "Streamline your workflow with our all-in-one platform that brings teams together for seamless collaboration.",
    },
    {
      icon: Users,
      title: "Optimize your tech stack",
      description: "Reduce complexity and costs by consolidating your tools into one powerful solution.",
    },
    {
      icon: Clock,
      title: "Everything under one roof",
      description: "Access all features you need in a single platform, saving time and improving efficiency.",
    },
    {
      icon: Target,
      title: "Our system enhances team performance",
      description: "Boost productivity with intelligent tools designed to help your team achieve more.",
    },
    {
      icon: Zap,
      title: "Save time on your team",
      description: "Automate routine tasks and focus on what matters most - growing your business.",
    },
    {
      icon: HeadphonesIcon,
      title: "We provide 24/7 support",
      description: "Get help whenever you need it with our dedicated support team available around the clock.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the advantages that make us the preferred choice for tech consultancy and talent solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-card p-6 sm:p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <reason.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
                {reason.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
