import { Award, Calendar, Building2 } from "lucide-react";

const AwardsGrid = () => {
  const awards = [
    {
      title: "Best Tech Platform 2024",
      organization: "Tech Excellence Awards",
      year: "2024",
      description: "Recognized for outstanding innovation in recruitment technology and user experience design.",
    },
    {
      title: "Top Rated Service",
      organization: "Customer Choice Awards",
      year: "2024",
      description: "Awarded based on exceptional customer satisfaction ratings and service quality.",
    },
    {
      title: "Innovation Leader",
      organization: "HR Tech Summit",
      year: "2023",
      description: "Acknowledged for pioneering solutions in virtual campus recruitment and assessment.",
    },
    {
      title: "Startup of the Year",
      organization: "Business Excellence Awards",
      year: "2023",
      description: "Celebrated for rapid growth and significant impact in the recruitment industry.",
    },
    {
      title: "Best Employer Branding Tool",
      organization: "Recruitment Marketing Awards",
      year: "2023",
      description: "Recognized for helping companies showcase their culture and attract top talent.",
    },
    {
      title: "Excellence in Education Technology",
      organization: "EdTech Innovation Forum",
      year: "2022",
      description: "Honored for bridging the gap between academic institutions and the corporate world.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Journey of Excellence
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of achievements that showcase our commitment to innovation and quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent/50 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-accent rounded-lg group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {award.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Building2 className="w-4 h-4" />
                    <span>{award.organization}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{award.year}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsGrid;
