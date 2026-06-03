import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CustomSoftwareSubServiceDetail from "@/views/CustomSoftwareSubServiceDetail";
import {
  customSoftwareSubServices,
  findCustomSoftwareSubService,
} from "@/data/customSoftwareSubServices";
import { buildMetadata } from "@/lib/seo";

type CustomSoftwareSubServicePageProps = {
  params: Promise<{ subSlug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return customSoftwareSubServices.map((service) => ({ subSlug: service.slug }));
}

export async function generateMetadata({
  params,
}: CustomSoftwareSubServicePageProps): Promise<Metadata> {
  const { subSlug } = await params;
  const service = findCustomSoftwareSubService(subSlug);

  return buildMetadata({
    title: service?.title ?? "Custom Software Development Service",
    description: service?.description ?? "Grow Force custom software development service details.",
    path: `/services/custom-software-development/${subSlug}`,
  });
}

export default async function CustomSoftwareSubServicePage({
  params,
}: CustomSoftwareSubServicePageProps) {
  const { subSlug } = await params;

  if (!findCustomSoftwareSubService(subSlug)) {
    notFound();
  }

  return <CustomSoftwareSubServiceDetail slug={subSlug} />;
}
