"use client";

import Image from "next/image";
import {
  AppWindowMac,
  ArrowRight,
  ArrowLeft,
  Briefcase,
  Calculator,
  CheckCircle,
  Cloud,
  Cog,
  Database,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/router-compat";
import { services as landingServices } from "@/data/services";
import { businessAutomationSubServices } from "@/data/businessAutomationSubServices";

type ServiceDetailProps = {
  slug: string;
};

const legacyServicesData = [
  {
    slug: "hr-consulting",
    icon: Briefcase,
    title: "HR Consulting",
    category: "Consulting",
    description: "Expert guidance for all your HR needs and workforce management strategies.",
    longDescription:
      "Our HR Consulting services provide comprehensive support for organizations looking to optimize their human resources functions. We work closely with your team to understand your unique challenges and develop tailored solutions that drive business success.",
    features: [
      "Strategic HR planning and workforce optimization",
      "Performance management systems implementation",
      "Employee engagement and retention strategies",
      "HR policy development and compliance",
      "Organizational restructuring and change management",
    ],
    benefits: [
      "Improved employee productivity and satisfaction",
      "Reduced HR operational costs",
      "Enhanced compliance with labor regulations",
      "Better talent acquisition and retention",
      "Streamlined HR processes and workflows",
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
  },
  {
    slug: "temporary-staffing",
    icon: Users,
    title: "Temporary Staffing",
    category: "Staffing",
    description: "Flexible staffing solutions to meet your short-term business requirements.",
    longDescription:
      "Our Temporary Staffing services provide quick access to skilled professionals when you need them most. Whether it is seasonal demand, project-based work, or covering employee absences, we deliver qualified candidates ready to contribute from day one.",
    features: [
      "Rapid deployment of skilled professionals",
      "Seasonal and project-based staffing",
      "Coverage for employee absences",
      "Flexible workforce solutions",
      "Reduced hiring time and costs",
    ],
    benefits: [
      "Immediate access to qualified talent",
      "No long-term commitment required",
      "Reduced administrative burden",
      "Cost-effective workforce management",
      "Ability to scale workforce up or down",
    ],
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop",
  },
  {
    slug: "permanent-staffing",
    icon: Users,
    title: "Permanent Staffing",
    category: "Staffing",
    description: "Find the right talent for long-term success and organizational growth.",
    longDescription:
      "Our Permanent Staffing services help you find the perfect candidates for long-term positions. We handle the recruitment process from sourcing and screening to interviewing and onboarding, ensuring you get the best talent for your team.",
    features: [
      "Executive search and leadership hiring",
      "End-to-end recruitment process management",
      "Candidate screening and assessment",
      "Background verification and reference checks",
      "Onboarding support and integration",
    ],
    benefits: [
      "Access to top-tier talent pool",
      "Reduced time-to-hire",
      "Lower recruitment costs",
      "Better candidate-job fit",
      "Long-term employee retention",
    ],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop",
  },
  {
    slug: "skilled-employee-services",
    icon: Calculator,
    title: "Skilled Employee Services",
    category: "Staffing",
    description:
      "Access industry-ready professionals who integrate seamlessly into your team and deliver results from day one.",
    longDescription:
      "Our Skilled Employee Services connect your business with capable professionals who can support critical operations, projects, and growth initiatives with minimal ramp-up time.",
    features: [
      "Role-specific skilled professionals",
      "Candidate screening and fit assessment",
      "Flexible deployment models",
      "Operational onboarding support",
      "Performance-focused workforce support",
    ],
    benefits: [
      "Faster access to productive talent",
      "Reduced hiring friction",
      "Better project continuity",
      "Scalable professional support",
      "Improved delivery capacity",
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop",
  },
  {
    slug: "software-consulting-data-management",
    icon: Database,
    title: "Software Consulting & Data Management",
    category: "Custom Software Development",
    description:
      "Expert software consulting to help you select, implement, and optimize technology that drives business efficiency.",
    longDescription:
      "Our Software Consulting & Data Management services help organizations choose, implement, and improve systems that make operations clearer, faster, and easier to manage.",
    features: [
      "Software selection and implementation guidance",
      "Business data organization",
      "Data analytics and reporting",
      "Process digitization and documentation",
      "Ongoing optimization support",
    ],
    benefits: [
      "Data-driven business decisions",
      "Improved operational efficiency",
      "Secure and organized data storage",
      "Real-time insights and reporting",
      "Reduced manual data entry",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
  },
  {
    slug: "cloud-solutions",
    icon: Cloud,
    title: "Cloud Solutions",
    category: "Custom Software Development",
    description: "End-to-end cloud solutions that enable scalability, security, and cost-effective digital transformation.",
    longDescription:
      "Our Cloud Solutions help businesses modernize infrastructure, improve availability, and scale digital systems with practical, secure cloud architecture.",
    features: [
      "Cloud readiness assessment",
      "Migration planning and execution",
      "Infrastructure setup and optimization",
      "Security and backup planning",
      "Monitoring and operational support",
    ],
    benefits: [
      "Improved scalability",
      "Better system resilience",
      "Reduced infrastructure complexity",
      "Stronger security posture",
      "Cost-effective digital operations",
    ],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop",
  },
  {
    slug: "support-maintenance",
    icon: Wrench,
    title: "Support & Maintenance",
    category: "Custom Software Development",
    description:
      "Reliable technical support, updates, monitoring, and maintenance to keep your digital systems stable and secure.",
    longDescription:
      "Our Support & Maintenance services help businesses keep websites, applications, and digital workflows running smoothly after launch. We handle fixes, updates, monitoring, security checks, and improvement requests so your team can operate without unnecessary interruptions.",
    features: [
      "Ongoing website and application maintenance",
      "Bug fixing and issue resolution",
      "Security updates and dependency checks",
      "Performance monitoring and optimization",
      "Content and feature update support",
      "Backup, uptime, and health-check coordination",
    ],
    benefits: [
      "Reduced downtime and technical disruption",
      "Improved security and platform reliability",
      "Faster response to bugs and change requests",
      "Longer life for your digital products",
      "More confidence after launch",
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
  },
  {
    slug: "custom-website-app-development",
    icon: Cog,
    title: "Custom Website Creation & App Development",
    category: "Website Design & Development",
    description: "We design high-impact websites that align with your brand, engage your audience, and drive measurable results.",
    longDescription:
      "Our custom website and application development services turn business requirements into responsive, fast, and maintainable digital products.",
    features: [
      "Responsive website design and development",
      "Custom business application development",
      "Conversion-focused user journeys",
      "CMS and admin workflow planning",
      "Performance and SEO-ready implementation",
    ],
    benefits: [
      "Stronger digital presence",
      "Improved customer engagement",
      "Better lead generation",
      "Scalable product foundations",
      "Cleaner operational workflows",
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
  },
  {
    slug: "managed-hosting-services",
    icon: Cloud,
    title: "Managed Hosting Services",
    category: "Website Design & Development",
    description: "Secure, high-performance managed hosting that keeps your website fast, stable, and always online.",
    longDescription:
      "Our Managed Hosting Services provide the technical foundation your website needs, including deployment, monitoring, maintenance, and uptime support.",
    features: [
      "Managed deployment and hosting setup",
      "Performance monitoring",
      "Security updates and backups",
      "Uptime and reliability support",
      "Technical maintenance",
    ],
    benefits: [
      "Faster, more reliable websites",
      "Reduced maintenance burden",
      "Improved security",
      "Lower downtime risk",
      "Better user experience",
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
  },
  {
    slug: "app-development",
    icon: AppWindowMac,
    title: "App Development",
    category: "Website Design & Development",
    description:
      "Powerful mobile applications built to enhance user experience, increase engagement, and simplify business operations for both iOS and Android.",
    longDescription:
      "Our App Development services help businesses create user-friendly mobile products that support customers, teams, and operational workflows.",
    features: [
      "iOS and Android app planning",
      "User experience design",
      "API and backend integration",
      "Testing and release support",
      "Maintenance and enhancement planning",
    ],
    benefits: [
      "Improved customer access",
      "Higher engagement",
      "Streamlined business operations",
      "Modern mobile experience",
      "Expandable digital platform",
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
  },
  {
    slug: "business-automation-solutions",
    icon: Workflow,
    title: "Business Automation Solutions",
    category: "Custom Software Development",
    description:
      "Automation solutions that streamline customer-facing workflows, back-office tasks, integrations, and documents.",
    longDescription:
      "Our Business Automation Solutions help organizations reduce manual work, connect systems, and improve consistency across front-office, back-office, integration, data, document, and knowledge workflows.",
    features: [
      "Customer Relationship Management (CRM) Automation: Automatically tracking leads, updating customer profiles, and logging sales calls.",
      "Marketing Automation: Triggering automated email campaigns, managing social media schedules, and scoring leads based on user behavior.",
      "Conversational AI & Chatbots: Utilizing AI-driven assistants to handle Tier-1 customer support inquiries 24/7.",
      "Finance & Accounting Automation: Automatic invoice processing (OCR), payroll management, expense tracking, and financial reconciliation.",
      "Human Resources (HR) Automation: Streamlining employee onboarding, leave requests, performance management, and offboarding workflows.",
      "Supply Chain & Inventory Automation: Automating reorder points, shipment tracking, and real-time inventory updates.",
      "API Integration: Custom-coded connections between existing business software systems.",
      "IPaaS Solutions: Zapier, Make, MuleSoft, and similar middleware automation platforms.",
      "Data Extraction & Reporting: Automated analytics dashboards and reporting systems.",
      "Intelligent Document Processing (IDP): AI-powered extraction and classification of information from contracts and PDFs.",
      "E-Signature Workflows: Automated routing, signing, approval, and archiving of legal documents.",
    ],
    benefits: [
      "Front-Office & Customer-Facing Automation",
      "Back-Office & Administrative Automation",
      "Integration & Data Services",
      "Document & Knowledge Management",
      "Reduced manual effort and operational delays",
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop",
  },
];

const landingServiceDetails = landingServices.map((service) => ({
  slug: service.slug,
  icon: service.icon,
  title: service.title,
  category: service.category,
  description: service.shortDescription,
  longDescription: service.description,
  features: service.features,
  benefits: service.benefits,
  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
}));

const servicesData = [...legacyServicesData, ...landingServiceDetails];

const ServiceDetail = ({ slug }: ServiceDetailProps) => {
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you are looking for does not exist.</p>
          <Button asChild>
            <Link to="/services">Back to Services</Link>
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
            to="/services"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          <div className="flex items-center gap-6 animate-fade-in-up">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center">
              <ServiceIcon className="w-10 h-10 text-white" />
            </div>
            <div>
              <span className="text-white/70 text-sm uppercase tracking-wider">{service.category}</span>
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

      {service.slug === "business-automation-solutions" && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessAutomationSubServices.map((subService, index) => (
                <Link
                  key={subService.slug}
                  to={`/services/business-automation-solutions/${subService.slug}`}
                  className="group bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in-up border border-border hover:border-accent"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-gradient-accent rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <subService.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{subService.title}</h3>
                  <p className="text-muted-foreground mb-4">{subService.description}</p>
                  <span className="text-accent font-medium inline-flex items-center gap-1">
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
