import type { LucideIcon } from "lucide-react";
import { Apple, Smartphone } from "lucide-react";

export type CustomSoftwareSubService = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  process: string[];
  icon: LucideIcon;
  image: string;
};

export const customSoftwareSubServices: CustomSoftwareSubService[] = [
  {
    slug: "ios-app-development",
    title: "iOS App Development",
    description:
      "Native iOS application development with Swift, UIKit, SwiftUI, integrations, deployment, and support.",
    longDescription:
      "We build reliable iOS applications for customer-facing, internal, and enterprise use cases. From planning and interface development to API integrations and App Store deployment, our iOS services are designed to deliver polished mobile experiences.",
    features: [
      "Native iOS Application Development",
      "Swift Development",
      "UIKit & SwiftUI Development",
      "App Store Deployment",
      "API Integration",
      "Payment Gateway Integration",
      "Enterprise iOS Applications",
      "App Maintenance & Support",
    ],
    benefits: [
      "High-quality native iPhone and iPad experiences",
      "Secure integrations with business systems",
      "Scalable architecture for future features",
      "Smooth App Store release support",
      "Ongoing support after launch",
    ],
    process: [
      "Discovery and feature planning",
      "UI flow and technical architecture",
      "Native iOS development and integrations",
      "Testing, deployment, and support",
    ],
    icon: Apple,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
  },
  {
    slug: "android-app-development",
    title: "Android App Development",
    description:
      "Native Android application development with Kotlin, Java, integrations, Play Store deployment, and support.",
    longDescription:
      "We develop Android applications for business operations, customer engagement, and enterprise mobility. Our Android services cover native development, integrations, payment flows, deployment, and long-term maintenance.",
    features: [
      "Native Android Development",
      "Kotlin Development",
      "Java Android Development",
      "Google Play Store Deployment",
      "API Integration",
      "Payment Gateway Integration",
      "Enterprise Android Applications",
      "App Maintenance & Support",
    ],
    benefits: [
      "Reliable Android apps tailored to business needs",
      "Broad device compatibility and performance focus",
      "Secure API and payment integrations",
      "Guided Google Play Store release support",
      "Maintainable codebase for ongoing enhancements",
    ],
    process: [
      "Discovery and platform planning",
      "Android architecture and UI implementation",
      "Native development, integrations, and testing",
      "Play Store deployment and maintenance",
    ],
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&auto=format&fit=crop",
  },
];

export const findCustomSoftwareSubService = (slug: string) =>
  customSoftwareSubServices.find((service) => service.slug === slug);
