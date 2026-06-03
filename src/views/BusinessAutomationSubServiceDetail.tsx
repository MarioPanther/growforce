"use client";

import Image from "next/image";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/router-compat";
import { findBusinessAutomationSubService } from "@/data/businessAutomationSubServices";

type BusinessAutomationSubServiceDetailProps = {
  slug: string;
};

const BusinessAutomationSubServiceDetail = ({ slug }: BusinessAutomationSubServiceDetailProps) => {
  const service = findBusinessAutomationSubService(slug);

  if (!service) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you are looking for does not exist.</p>
          <Button asChild>
            <Link to="/services/business-automation-solutions">Back to Business Automation</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <Link
            to="/services/business-automation-solutions"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Business Automation
          </Link>
          <div className="flex items-center gap-6 animate-fade-in-up">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center">
              <ServiceIcon className="w-10 h-10 text-white" />
            </div>
            <div>
              <span className="text-white/70 text-sm uppercase tracking-wider">Business Automation Solutions</span>
              <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
              <p className="text-muted-foreground mb-8">{service.longDescription}</p>

              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={400}
                  className="h-64 w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-6">Key Features</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-accent/5 rounded-2xl p-8 border border-accent/20">
                <h3 className="text-xl font-semibold text-foreground mb-6">Benefits</h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started with {service.title}?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to learn how our {service.title.toLowerCase()} services can help your organization
            achieve its goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services/business-automation-solutions">View Business Automation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessAutomationSubServiceDetail;
