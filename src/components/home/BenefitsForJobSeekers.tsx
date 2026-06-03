import { Target, FileText, MessageCircle, Shield } from "lucide-react";

const BenefitsForJobSeekers = () => {
  const benefits = [
    {
      icon: Target,
      title: "Personalized Job Matching",
      description: "We match you with opportunities that align with your skills and career goals.",
    },
    {
      icon: FileText,
      title: "Resume Guidance",
      description: "Expert advice to help you create a standout resume that gets noticed.",
    },
    {
      icon: MessageCircle,
      title: "Interview Preparation",
      description: "Comprehensive interview coaching to boost your confidence and success rate.",
    },
    {
      icon: Shield,
      title: "Transparent Process",
      description: "Clear communication and honest feedback throughout your job search journey.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Benefits for Job Seekers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to helping you find the perfect career opportunity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card border border-border hover:border-accent transition-all duration-300 hover:shadow-lg group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsForJobSeekers;