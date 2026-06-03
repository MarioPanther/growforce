import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/index.css";
import { Gtm } from "@/components/analytics/Gtm";
import { Ga4 } from "@/components/analytics/Ga4";
import { FloatingActions } from "@/components/FloatingActions";
import { JsonLd } from "@/components/JsonLd";
import { Providers } from "@/app/providers";
import { siteConfig } from "@/config/site";
import { buildMetadata, organizationSchema, websiteSchema } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = buildMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b4f6c",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Gtm />
        <Ga4 />
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <Providers>
          {children}
          <FloatingActions />
        </Providers>
      </body>
    </html>
  );
}
