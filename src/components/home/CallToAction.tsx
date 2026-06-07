import { Button } from "@/components/ui/button";
import { Link } from "@/lib/router-compat";
import { Phone, Upload } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="relative py-20 bg-gradient-accent overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Looking for a Job or Hiring Talent?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Let's connect and find the perfect match for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-accent hover:bg-white/90 shadow-lg"
            >
              <Link to="/upload-resume">
                <Upload className="mr-2 h-5 w-5" />
                Upload Resume
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-accent hover:bg-white/10 shadow-lg"
            >
              <Link to="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;