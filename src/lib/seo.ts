import type { Metadata } from "next";
import { absoluteUrl, getBaseUrl, siteConfig } from "@/config/site";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export const buildMetadata = ({
  title,
  description,
  path = "/",
  image = "/growthlogo4.png",
  noIndex = false,
}: SeoInput): Metadata => {
  const fullTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;
  const url = absoluteUrl(path);
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(getBaseUrl()),
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      url,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: siteConfig.twitterHandle,
      images: [imageUrl],
    },
  };
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: getBaseUrl(),
  logo: absoluteUrl("/growthlogo4.png"),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+918692978344",
    contactType: "customer service",
    email: "info@factorhuman.in",
    areaServed: "IN",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: getBaseUrl(),
};
