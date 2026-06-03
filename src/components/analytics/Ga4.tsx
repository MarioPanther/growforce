import Script from "next/script";
import { siteConfig } from "@/config/site";

export function Ga4() {
  if (!siteConfig.ga4Id) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.ga4Id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${siteConfig.ga4Id}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
