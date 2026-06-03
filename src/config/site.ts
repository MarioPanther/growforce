export const siteConfig = {
  name: "Grow Force",
  title: "Grow Force | HR Consulting, Staffing, and Digital Solutions",
  description:
    "Grow Force delivers HR consulting, staffing, payroll compliance, software consulting, cloud, website, and app development services.",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  locale: "en_IN",
  twitterHandle: "@growforce",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID,
  ga4Id: process.env.NEXT_PUBLIC_GA_ID ?? process.env.NEXT_PUBLIC_GA4_ID,
  whatsappPhone:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "918692978344",
  whatsappMessage:
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
    "Hello Grow Force, I would like to know more about your services.",
  enquiryHref: process.env.NEXT_PUBLIC_ENQUIRY_HREF ?? "/contact",
};

export const getBaseUrl = () => siteConfig.baseUrl.replace(/\/$/, "");

export const absoluteUrl = (path = "/") => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getBaseUrl()}${normalizedPath}`;
};
