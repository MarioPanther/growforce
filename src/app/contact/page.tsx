import Contact from "@/views/Contact";
import { publicRoutes } from "@/config/routes";
import { buildMetadata } from "@/lib/seo";

const route = publicRoutes.find((item) => item.path === "/contact")!;

export const metadata = buildMetadata(route);

export default function ContactPage() {
  return <Contact />;
}
