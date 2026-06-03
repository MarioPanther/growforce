import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/router-compat";
import { Building2, User, Briefcase } from "lucide-react";

const roles = [
  {
    icon: Building2,
    title: "I'm a Client",
    description: "Looking for expert consultancy or technical talent to grow my business.",
    path: "/client/dashboard",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: User,
    title: "I'm a Job Seeker",
    description: "Seeking opportunities and career guidance in the tech industry.",
    path: "/job-seeker/dashboard",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Briefcase,
    title: "I'm a Consultant",
    description: "Ready to offer my expertise and connect with clients.",
    path: "/consultant/dashboard",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];

const RoleSelectorSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Choose Your Path
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Select your role to get started with personalized features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {roles.map((role, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`mb-6 mx-auto p-6 ${role.bgColor} rounded-2xl w-fit group-hover:scale-110 transition-transform`}>
                <role.icon className={`h-12 w-12 ${role.color}`} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                {role.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {role.description}
              </p>
              <Button asChild className="w-full bg-gradient-accent hover:opacity-90">
                <Link to={role.path}>Get Started</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleSelectorSection;
