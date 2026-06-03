import type { LucideIcon } from "lucide-react";
import { BriefcaseBusiness, Code2, Globe2, Workflow } from "lucide-react";

export type ServiceCategory =
  | "HR & Recruitment"
  | "Software Development"
  | "Web Development"
  | "Automation Solutions";

export type Service = {
  id: string;
  slug: string;
  title: string;
  category: ServiceCategory;
  shortDescription: string;
  description: string;
  features: string[];
  benefits: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    id: "people-outsourcing",
    slug: "people-outsourcing-hr-consultancy",
    title: "People Outsourcing & HR Consultancy",
    category: "HR & Recruitment",
    shortDescription:
      "Flexible people operations, recruitment support, and HR consulting built around your business needs.",
    description:
      "Grow Force helps organizations manage people operations with practical HR consulting, recruitment support, workforce planning, and outsourced HR execution. We align people, process, and compliance so your team can focus on growth.",
    features: [
      "Workforce planning and role mapping",
      "Recruitment coordination and candidate screening",
      "HR policy and compliance support",
      "Employee onboarding workflow setup",
      "Performance and retention advisory",
      "Outsourced HR operations support",
    ],
    benefits: [
      "Reduce time spent on daily HR administration",
      "Improve hiring quality and workforce stability",
      "Strengthen compliance and internal documentation",
      "Scale HR support without building a large internal team",
    ],
    icon: BriefcaseBusiness,
  },
  {
    id: "custom-software",
    slug: "custom-software-development",
    title: "Custom Software Development",
    category: "Software Development",
    shortDescription:
      "Purpose-built applications that simplify operations, improve visibility, and support scalable growth.",
    description:
      "We design and develop custom software around your exact operational requirements. From internal dashboards to workflow platforms, Grow Force builds maintainable systems that fit the way your business works.",
    features: [
      "Requirement discovery and solution planning",
      "Custom web application development",
      "Role-based dashboards and admin panels",
      "API integration with business systems",
      "Secure database and workflow design",
      "Testing, deployment, and maintenance planning",
    ],
    benefits: [
      "Replace scattered spreadsheets and manual work",
      "Gain clearer operational visibility",
      "Improve team productivity through tailored tools",
      "Build a scalable technology foundation",
    ],
    icon: Code2,
  },
  {
    id: "website-design",
    slug: "website-design-development",
    title: "Website Design & Development",
    category: "Web Development",
    shortDescription:
      "Modern, responsive websites designed for credibility, speed, search visibility, and conversions.",
    description:
      "Grow Force creates professional websites that communicate clearly, load quickly, and guide visitors toward action. We combine brand-focused design with practical development and SEO-ready structure.",
    features: [
      "Responsive website UI design",
      "Fast Next.js website development",
      "Service and landing page creation",
      "SEO-ready structure and metadata",
      "Lead capture and contact flow setup",
      "Performance and accessibility improvements",
    ],
    benefits: [
      "Create a stronger first impression online",
      "Increase trust with professional service pages",
      "Improve lead generation from website traffic",
      "Make the site easier to maintain and expand",
    ],
    icon: Globe2,
  },
  {
    id: "business-automation",
    slug: "business-automation-solutions",
    title: "Business Automation Solutions",
    category: "Automation Solutions",
    shortDescription:
      "Automation workflows that remove repetitive tasks and connect your business processes end to end.",
    description:
      "We help businesses identify manual bottlenecks and turn them into reliable automated workflows. From approvals to reporting, Grow Force builds automation that saves time and improves consistency.",
    features: [
      "Process audit and automation mapping",
      "Workflow automation for repeated tasks",
      "CRM, form, and notification integrations",
      "Automated reporting and status tracking",
      "Approval and document workflow setup",
      "Ongoing optimization and support",
    ],
    benefits: [
      "Reduce repetitive manual work",
      "Improve turnaround time across teams",
      "Lower operational errors and missed follow-ups",
      "Create consistent, measurable business processes",
    ],
    icon: Workflow,
  },
];

export const findServiceBySlug = (slug: string) => services.find((service) => service.slug === slug);
