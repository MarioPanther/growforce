import type { LucideIcon } from "lucide-react";
import { Bot, ClipboardCheck, FileText, Share2 } from "lucide-react";

export type BusinessAutomationSubService = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  icon: LucideIcon;
  image: string;
};

export const businessAutomationSubServices: BusinessAutomationSubService[] = [
  {
    slug: "front-office-customer-facing-automation",
    title: "Front-Office & Customer-Facing Automation",
    description:
      "Automation for lead handling, customer engagement, marketing workflows, and first-line support interactions.",
    longDescription:
      "Front-office automation helps customer-facing teams respond faster, capture better context, and keep every interaction moving without repetitive manual follow-up.",
    features: [
      "Customer Relationship Management (CRM) Automation: Automatically tracking leads, updating customer profiles, and logging sales calls.",
      "Marketing Automation: Triggering automated email campaigns, managing social media schedules, and scoring leads based on user behavior.",
      "Conversational AI & Chatbots: Utilizing AI-driven assistants to handle Tier-1 customer support inquiries 24/7.",
    ],
    benefits: [
      "Faster response to new leads and customer inquiries",
      "More consistent follow-up across sales and marketing",
      "Improved customer visibility for front-office teams",
      "Reduced repetitive support and data-entry work",
      "Better lead prioritization and engagement tracking",
    ],
    icon: Bot,
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=800&auto=format&fit=crop",
  },
  {
    slug: "back-office-administrative-automation",
    title: "Back-Office & Administrative Automation",
    description:
      "Automation for finance, HR, administrative approvals, inventory updates, and internal operational workflows.",
    longDescription:
      "Back-office automation reduces administrative delays by connecting routine finance, HR, and operations tasks into consistent digital workflows.",
    features: [
      "Finance & Accounting Automation: Automatic invoice processing (OCR), payroll management, expense tracking, and financial reconciliation.",
      "Human Resources (HR) Automation: Streamlining employee onboarding, leave requests, performance management, and offboarding workflows.",
      "Supply Chain & Inventory Automation: Automating reorder points, shipment tracking, and real-time inventory updates.",
    ],
    benefits: [
      "Less manual administration across internal teams",
      "Faster approvals, reconciliations, and employee workflows",
      "Improved accuracy in finance and inventory processes",
      "Better visibility into operational status",
      "More predictable internal service delivery",
    ],
    icon: ClipboardCheck,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop",
  },
  {
    slug: "integration-data-services",
    title: "Integration & Data Services",
    description:
      "Custom integrations, middleware automation, data extraction, analytics dashboards, and reporting workflows.",
    longDescription:
      "Integration and data automation connects the tools your business already uses, helping data move cleanly between systems and into reports your team can act on.",
    features: [
      "API Integration: Custom-coded connections between existing business software systems.",
      "IPaaS Solutions: Zapier, Make, MuleSoft, and similar middleware automation platforms.",
      "Data Extraction & Reporting: Automated analytics dashboards and reporting systems.",
    ],
    benefits: [
      "Connected systems with fewer manual exports",
      "Cleaner reporting across departments",
      "Reduced duplicate data entry",
      "Faster access to operational metrics",
      "More reliable data movement between platforms",
    ],
    icon: Share2,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
  },
  {
    slug: "document-knowledge-management",
    title: "Document & Knowledge Management",
    description:
      "Automation for document extraction, classification, signing, approval routing, archiving, and knowledge workflows.",
    longDescription:
      "Document and knowledge automation makes contracts, PDFs, approvals, signatures, and internal records easier to process, route, and retrieve.",
    features: [
      "Intelligent Document Processing (IDP): AI-powered extraction and classification of information from contracts and PDFs.",
      "E-Signature Workflows: Automated routing, signing, approval, and archiving of legal documents.",
    ],
    benefits: [
      "Faster document review and approval cycles",
      "Less manual contract and PDF processing",
      "Improved document consistency and traceability",
      "Simpler signing, routing, and archiving",
      "Better access to structured business knowledge",
    ],
    icon: FileText,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop",
  },
];

export const findBusinessAutomationSubService = (slug: string) =>
  businessAutomationSubServices.find((service) => service.slug === slug);
