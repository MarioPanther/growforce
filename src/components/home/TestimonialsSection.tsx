import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, Tech Innovations Inc",
      content: "This platform transformed how we hire technical talent. The quality of consultants is exceptional, and the booking process is seamless.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "HR Director, Digital Solutions",
      content: "We've reduced our hiring time by 60% and found consultants who perfectly match our technical requirements. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, StartUp Labs",
      content: "As a startup, finding the right tech expertise was challenging. This platform connected us with amazing consultants who understood our needs.",
      rating: 5,
    },
    {
      name: "David Park",
      role: "VP Engineering, CloudTech",
      content: "The automated matching system saved us countless hours. We found the perfect consultant within days, not weeks.",
      rating: 5,
    },
    {
      name: "Lisa Anderson",
      role: "Product Manager, InnovateCo",
      content: "Exceptional service and top-tier talent. The platform makes collaboration easy and efficient.",
      rating: 5,
    },
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Auto-scroll
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-16 sm:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Client Testimonials
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear what our clients say about their experience with our platform
          </p>
        </div>

        <div className="max-w-6xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full bg-card p-6 sm:p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group">
                    <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300" />
                    
                    <div className="flex gap-1 mb-4 sm:mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300" 
                          style={{ transitionDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>

                    <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed min-h-[120px]">
                      "{testimonial.content}"
                    </p>

                    <div className="border-t border-border pt-4 sm:pt-6">
                      <h4 className="font-bold text-foreground text-sm sm:text-base">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">{testimonial.role}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-card border-border hover:bg-accent hover:text-white transition-all duration-300" />
              <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-card border-border hover:bg-accent hover:text-white transition-all duration-300" />
            </div>
          </Carousel>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index ? "bg-accent w-8" : "bg-border w-2"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
