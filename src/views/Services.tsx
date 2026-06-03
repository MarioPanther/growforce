"use client";

import { Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Link } from "@/lib/router-compat";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Briefcase, Users, Calculator, Database, Cog, ArrowRight, Cloud, AppWindowMac, Wrench, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { businessAutomationSubServices } from "@/data/businessAutomationSubServices";
import { customSoftwareSubServices } from "@/data/customSoftwareSubServices";

const categoryQueryMap: Record<string, string> = {
  "People Outsourcing & HR Consultancy": "people-outsourcing-hr-consultancy",
  "Custom Software Development": "custom-software-development",
  "Website Design & Development": "website-design-development",
  "Business Automation Solutions": "business-automation-solutions",
};

const getCategoryFromQuery = (category: string | null, categories: string[]) => {
  const matchedCategory = Object.entries(categoryQueryMap).find(([, value]) => value === category)?.[0];
  return matchedCategory && categories.includes(matchedCategory) ? matchedCategory : "All";
};

const ServicesContent = () => {
  const services = [
    {
      slug: "hr-consulting",
      icon: Briefcase,
      title: "HR Consulting",
      category: "People Outsourcing & HR Consultancy",
      description: "Expert guidance for all your HR needs and workforce management strategies.",
    },
    {
      slug: "temporary-staffing",
      icon: Users,
      title: "Temporary Staffing",
      category: "People Outsourcing & HR Consultancy",
      description: "Flexible staffing solutions to meet your short-term business requirements.",
    },
    {
      slug: "permanent-staffing",
      icon: Users,
      title: "Permanent Staffing",
      category: "People Outsourcing & HR Consultancy",
      description: "Find the right talent for long-term success and organizational growth.",
    },
    {
      slug: "skilled-employee-services",
      icon: Calculator,
      title: "Skilled Employee Services",
      category: "People Outsourcing & HR Consultancy",
      description:
        "Access industry-ready professionals who integrate seamlessly into your team and deliver results from day one.",
    },
    {
      slug: "software-consulting-data-management",
      icon: Database,
      title: "Software Consulting & Data Management",
      category: "Custom Software Development",
      description:
        "Expert software consulting to help you select, implement, and optimize technology that drives business efficiency.",
    },
    {
      slug: "cloud-solutions",
      icon: Cog,
      title: "Cloud Solutions",
      category: "Custom Software Development",
      description:
        "End-to-end cloud solutions that enable scalability, security, and cost-effective digital transformation.",
    },
    {
      slug: "support-maintenance",
      icon: Wrench,
      title: "Support & Maintenance",
      category: "Custom Software Development",
      description:
        "Reliable technical support, updates, monitoring, and maintenance to keep your digital systems stable and secure.",
    },
    {
      slug: "custom-website-app-development",
      icon: Calculator,
      title: "Custom Website Creation & App Development",
      category: "Website Design & Development",
      description:
        "We design high-impact websites that align with your brand, engage your audience, and drive measurable results.",
    },
    {
      slug: "managed-hosting-services",
      icon: Cloud,
      title: "Managed Hosting Services",
      category: "Website Design & Development",
      description: "Secure, high-performance managed hosting that keeps your website fast, stable, and always online.",
    },
    {
      slug: "app-development",
      icon: AppWindowMac,
      title: "App Development",
      category: "Website Design & Development",
      description:
        "Powerful mobile applications built to enhance user experience, increase engagement, and simplify business operations for both iOS and Android.",
    },
    {
      slug: "business-automation-solutions",
      icon: Workflow,
      title: "Business Automation Solutions",
      category: "Business Automation Solutions",
      description:
        "Automation solutions that streamline customer-facing workflows, back-office tasks, integrations, and documents.",
    },
  ];

  const categories = [
    "All",
    "People Outsourcing & HR Consultancy",
    "Custom Software Development",
    "Website Design & Development",
    "Business Automation Solutions",
  ];

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const filter = getCategoryFromQuery(searchParams.get("category"), categories);

  const businessAutomationSubServiceCards = businessAutomationSubServices.map((service) => ({
    slug: `business-automation-solutions/${service.slug}`,
    icon: service.icon,
    title: service.title,
    category: "Business Automation Solutions",
    description: service.description,
  }));

  const customSoftwareSubServiceCards = customSoftwareSubServices.map((service) => ({
    slug: `custom-software-development/${service.slug}`,
    icon: service.icon,
    title: service.title,
    category: "Custom Software Development",
    description: service.description,
  }));

  const servicesWithSubServices = [
    ...services,
    ...businessAutomationSubServiceCards,
    ...customSoftwareSubServiceCards,
  ];

  const filteredServices =
    filter === "All"
      ? servicesWithSubServices
      : servicesWithSubServices.filter((service) => service.category === filter);

  const handleFilterChange = (category: string) => {
    if (category === "All") {
      router.push(pathname, { scroll: false });
      return;
    }

    router.push(`${pathname}?category=${categoryQueryMap[category]}`, { scroll: false });
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-white/90">Comprehensive HR solutions tailored to your business needs</p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-muted/30 sticky top-[73px] z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                size="sm"
                onClick={() => handleFilterChange(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in-up border border-border hover:border-accent"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-accent rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <span className="text-accent font-medium inline-flex items-center gap-1">
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Services = () => {
  return (
    <Suspense fallback={null}>
      <ServicesContent />
    </Suspense>
  );
};

export default Services;
