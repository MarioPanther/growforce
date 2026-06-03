"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
const About = () => {
   const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const strengths = [
    {
      title: "Strong Employer Attitude",
      description: "We maintain a healthy relationship with our clients through dedicated support and commitment.",
    },
    {
      title: "Centralized Operation",
      description: "Our centralized structure ensures consistent quality of manpower as per industry standards.",
    },
    {
      title: "Well-Trained Service",
      description: "Complete information about clients and stakeholders with trained staff delivering exceptional services.",
    },
    {
      title: "Excellent Customer Support",
      description: "We have excellent customer service support for hire.",
    },
    {
      title: "Experienced Staff",
      description: "We have experienced and trained staffs for each industry segment.",
    },
    {
      title: "Well-Trained Manpower",
      description: "Professional staffing delivering exceptional results and consistency across all industry sectors.",
    },
  ];
  const our_values = [
    {
      title: "Customer-Centric",
      description: "Everything we do is driven by the needs and aspirations of our clients. We put your business first and work alongside you to understand your objectives and challenges.",
    },
    {
      title: "Innovation",
      description: "We continuously seek out new ways to improve our services and solutions. By leveraging the latest technology and industry best practices, we bring forward-thinking, cutting-edge solutions.",
    },
    {
      title: "Integrity",
      description: "We believe in building lasting relationships through honesty, transparency, and accountability. Our clients can always count on us to be a trusted partner.",
    },
    {
      title: "Excellence",
      description: "We are committed to delivering the highest standards of quality in everything we do, ensuring that our solutions are not just effective, but also sustainable and impactful.",
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
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-white/90">
              {/* MS staffing solutions is a division of Factor Human Resources Private Limited */}
              Welcome to Grow Force HR Solutions, your trusted partner in comprehensive human resource services.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop"
                alt="About Factor Human"
                width={800}
                height={534}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Optimal Performance, Leading to Customer Satisfaction
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At Grow Force, we specialize in providing comprehensive business solutions that drive growth, enhance efficiency, and foster long-term success. 
                  We are a dynamic company that blends expertise in people outsourcing, technology development, and professional consulting, delivering high-impact services that help businesses excel.
                </p>
                <p>
                 Our core philosophy is simple: We empower businesses by providing customized, salable solutions that meet the unique needs of each client. 
                 We believe that by optimizing both human and technological resources, companies can accelerate their growth and unlock new opportunities. 
                 Whether you're a startup looking for innovative solutions or an established enterprise aiming for efficiency, Grow Force is your trusted partner in success.                
                </p>
                {/* <p>
                  FHR is also trusted by many renowned and leading companies situated in the FMCG Logistics, KPOs, Manufacturing, Healthcare, Hospitality, Education etc.
                </p>
                <p>
                  We maintain the highest of ethical standards and pride dedication in all stakeholders we co-believes closely in the parts of creating E-Solutions evolving to create E-Solutions in all aspects of Human Resources Consulting to deliver expectations.
                </p> */}
              </div>
            </div>   
          </div>
          <br/><br/> 
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-6">Our Mission</h3>
                {/* <ul className="space-y-4">
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">beg test</span>
                    </li>
                </ul> */}
                <p className="text-muted-foreground">
                  Our mission at Grow Force is to provide businesses with tailored, results-driven solutions across three key areas: Human resources, Technology development, and Professional consulting. 
                  We aim to empower companies to grow smarter, work more efficiently, and make data-driven decisions. By delivering high-quality services that meet the unique challenges of every business, we help our clients achieve lasting success.
                </p>
              </div>

              {/* Benefits */}
              <div className="bg-accent/5 rounded-2xl p-8 border border-accent/20">
                <h3 className="text-xl font-semibold text-foreground mb-6">Our Vision</h3>
                {/* <ul className="space-y-4">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul> */}
                <p className="text-muted-foreground">
                  We aspire to be the go-to partner for businesses in need of innovative staffing, technology, and consulting solutions.
                   Our vision is to become a trusted, long-term partner for companies worldwide, offering expertise that propels them toward growth and excellence.
                </p>
              </div>
             </div>
        </div>
      </section>

       {/* Our our_values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Value
            </h2>
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
              {our_values.map((our_values, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-card p-6 rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* <div className="h-full bg-card p-6 sm:p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group"> */}
                  
                    {/* <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300" /> */}
                    
                      {/* <div className="flex gap-1 mb-4 sm:mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300" 
                            style={{ transitionDelay: `${i * 50}ms` }}
                          />
                        ))}
                      </div> */}

                      <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {our_values.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {our_values.description}
                    </p>
                  </div>
                </div>

                    {/* <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed min-h-[120px]">
                      "{our_values.description}"
                    </p> */}

                    {/* <div className="border-t border-border pt-4 sm:pt-6">
                      <h4 className="font-bold text-foreground text-sm sm:text-base">{our_values.name}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">{our_values.role}</p>
                    </div> */}
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
            {our_values.map((_, index) => (
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

      {/* Our Strength */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Strength
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {strength.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have you got an Enquiry? Call: +91 8692978344
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Let's discuss how we can help your business grow
            </p>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground">
            <p>
              HR Consulting Services of Factor Human Resources (MS) Staffing Solutions is a part of 12-month management consultants PVt, Ltd. Kochi, Kerala. We have been assisting businesses with end-to-end HR solutions since 2011.
            </p>
            <p>
              We have full confidence with our organization in distinctive. So, we do call it one-stop-all all stakeholders we co believes closely with the parts of creating E-Solutions evolving to create E-Solutions where goal or company is large or small, the service we are designed to get you timely.
            </p>
            <p>
              We understand each organizations is distinctive. So we do call it one-stop call solutions we co believes closely with the parts of creating E-Solutions evolving to create E-Solutions. Whether your goal or company is large or small, the service we are designed to get you quality.
            </p>
            <p>
              Our services span all major HR disciplines, they consist of staffing solutions, HR consultancy, payroll processing, statutory compliance, Expat employment. Opportunity (FTP) management, and HES class services. We provide these solutions as per our clients need, helping them to stay organized best of our talent to become of help as one of the teams of build a people that dreams and a high-performing workforce.
            </p>
            <p>
              We fully understand our staff that dealing as offensive provider - we work for your trusted HR partner. We are in the business of help by your trusted HR partner Experts. We are full ready available let you Build people and sustain high-performing workforce.
            </p>
            <p>
              Besides, let our HR Consulting Services case on trial you should you a head-ons as well remain competitive.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
