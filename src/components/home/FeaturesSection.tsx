import { CheckCircle, Code, FileText, MessageSquare, Calendar, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Simplified booking process",
      description: "Book consultations and meetings with ease through our intuitive scheduling system.",
    },
    {
      icon: Code,
      title: "Technical expertise matching",
      description: "Get matched with consultants who have the exact technical skills you need.",
    },
    {
      icon: FileText,
      title: "Comprehensive documentation",
      description: "Access detailed project documentation and progress reports in real-time.",
    },
    {
      icon: MessageSquare,
      title: "Seamless communication",
      description: "Stay connected with built-in messaging and video conferencing capabilities.",
    },
    {
      icon: Calendar,
      title: "Smart scheduling",
      description: "Automated calendar management ensures no conflicts or missed meetings.",
    },
    {
      icon: Users,
      title: "Team collaboration",
      description: "Enable multiple stakeholders to collaborate effectively on projects.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            What Problems We Solve
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Our platform addresses the key challenges businesses face in tech consultancy and talent acquisition
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div className="space-y-6 sm:space-y-8">
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 sm:gap-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-accent rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6 sm:space-y-8">
            {features.slice(3).map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 sm:gap-6 animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-accent rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
            Ready to streamline your tech operations?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-accent text-white rounded-full font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base">
              Get Started Today
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-colors text-sm sm:text-base">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
