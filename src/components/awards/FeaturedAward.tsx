import { Award, Sparkles } from "lucide-react";

const FeaturedAward = () => {
  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-card rounded-3xl border-2 border-accent p-8 sm:p-12 overflow-hidden shadow-glow animate-fade-in-up">
            {/* Animated glow effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/30 rounded-full blur-3xl animate-pulse-glow" />
            
            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 bg-gradient-accent rounded-2xl shadow-lg">
                  <Award className="w-12 h-12 sm:w-16 sm:h-16 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-accent" />
                    <span className="text-sm font-semibold text-accent">Featured Recognition</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                    Best Campus Hiring Platform 2024
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    Awarded by Tech Innovation Council
                  </p>
                </div>
              </div>
              
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Recognized for revolutionizing the campus recruitment process through innovative technology, 
                seamless user experience, and measurable impact on connecting top talent with leading organizations. 
                This prestigious award acknowledges our commitment to making hiring accessible, efficient, and effective 
                for both recruiters and job seekers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAward;
