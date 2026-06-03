import { Card } from "@/components/ui/card";
import { UserPlus, Search, Calendar, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Sign up as a client, consultant, or job seeker in minutes.",
  },
  {
    icon: Search,
    title: "Find Your Match",
    description: "Browse through our curated network of experts or opportunities.",
  },
  {
    icon: Calendar,
    title: "Schedule Meeting",
    description: "Book virtual consultations or interviews at your convenience.",
  },
  {
    icon: CheckCircle,
    title: "Achieve Success",
    description: "Get solutions delivered and watch your business grow.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Get started in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-6 text-center h-full bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mb-4 mx-auto p-4 bg-gradient-accent rounded-full w-fit">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="mb-2 text-sm font-semibold text-accent">Step {index + 1}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
