import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BusinessAutomationSubServiceDetail from "@/views/BusinessAutomationSubServiceDetail";
import {
  businessAutomationSubServices,
  findBusinessAutomationSubService,
} from "@/data/businessAutomationSubServices";
import { buildMetadata } from "@/lib/seo";

type BusinessAutomationSubServicePageProps = {
  params: Promise<{ subSlug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return businessAutomationSubServices.map((service) => ({ subSlug: service.slug }));
}

export async function generateMetadata({
  params,
}: BusinessAutomationSubServicePageProps): Promise<Metadata> {
  const { subSlug } = await params;
  const service = findBusinessAutomationSubService(subSlug);

  return buildMetadata({
    title: service?.title ?? "Business Automation Service",
    description: service?.description ?? "Grow Force business automation service details.",
    path: `/services/business-automation-solutions/${subSlug}`,
  });
}

export default async function BusinessAutomationSubServicePage({
  params,
}: BusinessAutomationSubServicePageProps) {
  const { subSlug } = await params;

  if (!findBusinessAutomationSubService(subSlug)) {
    notFound();
  }

  return <BusinessAutomationSubServiceDetail slug={subSlug} />;
}
