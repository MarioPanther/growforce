import { services } from "@/data/services";

export type PublicRoute = {
  path: string;
  title: string;
  description: string;
  changeFrequency?: "daily" | "weekly" | "monthly" | "yearly";
  priority?: number;
};

export const publicRoutes: PublicRoute[] = [
  {
    path: "/",
    title: "HR Consulting, Staffing, and Digital Solutions",
    description:
      "Grow Force helps businesses scale with HR consulting, staffing, payroll compliance, software consulting, cloud, website, and app development services.",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/about",
    title: "About Grow Force",
    description: "Learn about Grow Force and the team behind our HR, staffing, and digital business services.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/services",
    title: "Services",
    description:
      "Explore Grow Force services across HR, custom software, website design, and business automation.",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/upload-resume",
    title: "Upload Resume",
    description: "Submit your resume to Grow Force for staffing and career opportunities.",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/get-started",
    title: "Get Started",
    description: "Start a conversation with Grow Force about HR, staffing, and digital growth services.",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/contact",
    title: "Contact Grow Force",
    description: "Contact Grow Force for HR consulting, staffing, payroll, cloud, website, and app development services.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/blog",
    title: "Blog",
    description: "Read Grow Force insights on HR, staffing, workforce operations, and digital transformation.",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    path: "/pricing",
    title: "Pricing",
    description: "Review Grow Force pricing options for business services and support.",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/awards",
    title: "Awards",
    description: "Explore Grow Force awards, milestones, and recognition.",
    changeFrequency: "monthly",
    priority: 0.6,
  },
];

export const privateRoutes = [
  "/login",
  "/client/dashboard",
  "/job-seeker/dashboard",
  "/consultant/dashboard",
  "/admin/dashboard",
  "/admin/users",
  "/admin/users/create",
  "/admin/contacts",
  "/admin/resumes",
  "/user/home",
];

export const serviceRoutes = [
  {
    slug: "hr-consulting",
    title: "HR Consulting",
    description: "Expert HR consulting for workforce planning, performance, compliance, and organizational growth.",
  },
  {
    slug: "temporary-staffing",
    title: "Temporary Staffing",
    description: "Flexible temporary staffing solutions for short-term projects, seasonal demand, and absence coverage.",
  },
  {
    slug: "permanent-staffing",
    title: "Permanent Staffing",
    description: "Permanent staffing support to source, screen, and hire long-term talent for your business.",
  },
  {
    slug: "skilled-employee-services",
    title: "Skilled Employee Services",
    description: "Access industry-ready professionals who integrate with your team and deliver results from day one.",
  },
  {
    slug: "software-consulting-data-management",
    title: "Software Consulting and Data Management",
    description: "Software consulting and data management services for efficient, insight-led operations.",
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Cloud solutions that improve scalability, security, resilience, and digital operating efficiency.",
  },
  {
    slug: "support-maintenance",
    title: "Support & Maintenance",
    description: "Reliable support and maintenance to keep websites, applications, and digital systems stable.",
  },
  {
    slug: "custom-website-app-development",
    title: "Custom Website Creation and App Development",
    description: "Custom websites and applications built for brand clarity, engagement, and measurable business outcomes.",
  },
  {
    slug: "managed-hosting-services",
    title: "Managed Hosting Services",
    description: "Managed hosting services that keep your website secure, fast, stable, and maintained.",
  },
  {
    slug: "app-development",
    title: "App Development",
    description: "Mobile app development for iOS and Android experiences that improve engagement and operations.",
  },
  {
    slug: "business-automation-solutions",
    title: "Business Automation Solutions",
    description: "Automation solutions for customer workflows, back-office operations, integrations, and documents.",
  },
  ...services
    .filter((service) => service.slug !== "business-automation-solutions")
    .map((service) => ({
      slug: service.slug,
      title: service.title,
      description: service.shortDescription,
    })),
];
