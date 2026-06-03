import { services } from "@/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";

const ServicesHighlight = () => {
  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center animate-fade-in-up">
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Our Services</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            Grow Force brings together people operations, custom software, modern websites, and automation
            solutions to help businesses run cleaner, faster, and with more confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;
