import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/views/ServiceDetail";
import { serviceRoutes } from "@/config/routes";
import { buildMetadata } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceRoutes.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceRoutes.find((item) => item.slug === slug);

  return buildMetadata({
    title: service?.title ?? "Service",
    description: service?.description ?? "Grow Force service details.",
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  if (!serviceRoutes.some((service) => service.slug === slug)) {
    notFound();
  }

  return <ServiceDetail slug={slug} />;
}
