import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingCards = () => {
  const plans = [
    {
      name: "Get Started",
      price: "$49",
      originalPrice: "$99",
      period: "/month",
      recommended: false,
      features: [
        "5 Job Posts per month",
        "Up to 50 Invitations",
        "100 Applications per job",
        "2 Team Members",
        "Basic ATS Features",
        "Email Support",
      ],
      cta: "Purchase",
    },
    {
      name: "Growth Plan",
      price: "$149",
      originalPrice: "$249",
      period: "/month",
      recommended: true,
      features: [
        "25 Job Posts per month",
        "Up to 500 Invitations",
        "Unlimited Applications",
        "10 Team Members",
        "Advanced ATS & Analytics",
        "Bulk Email Campaigns",
        "Priority Support",
        "Custom Branding",
      ],
      cta: "Purchase",
    },
    {
      name: "Enterprise",
      price: null,
      originalPrice: null,
      period: "",
      recommended: false,
      features: [
        "Unlimited Job Posts",
        "Unlimited Invitations",
        "Unlimited Applications",
        "Unlimited Team Members",
        "Full ATS Suite",
        "Advanced Analytics & Reports",
        "Dedicated Account Manager",
        "Custom Integration",
        "SLA & Premium Support",
      ],
      cta: "Call for Pricing",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl border-2 p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up ${
                plan.recommended
                  ? "border-accent shadow-glow scale-105"
                  : "border-border hover:border-accent/50"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Recommended
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">{plan.name}</h3>
                {plan.price ? (
                  <div className="flex items-baseline gap-2">
                    <span className="text-muted-foreground line-through text-lg">
                      {plan.originalPrice}
                    </span>
                    <span className="text-4xl sm:text-5xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                ) : (
                  <div className="text-2xl font-semibold text-foreground">Custom Pricing</div>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.recommended
                    ? "bg-gradient-accent hover:opacity-90"
                    : ""
                }`}
                variant={plan.recommended ? "default" : "outline"}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
