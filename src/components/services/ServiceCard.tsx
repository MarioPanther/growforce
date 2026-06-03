"use client";

import { ArrowRight } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
  index?: number;
};

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const ServiceIcon = service.icon;

  return (
    <Link
      to={`/services?category=${service.slug}`}
      className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-accent hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
        <ServiceIcon className="h-7 w-7" />
      </div>
      <h3 className="mb-3 text-xl font-semibold leading-snug text-foreground">{service.title}</h3>
      <p className="mb-6 flex-1 text-sm leading-6 text-muted-foreground">{service.shortDescription}</p>
      <span
        className={cn(
          buttonVariants({ size: "sm" }),
          "w-fit transition-transform duration-300 group-hover:translate-x-1",
        )}
      >
        Learn More
        <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
