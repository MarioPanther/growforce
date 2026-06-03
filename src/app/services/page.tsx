import Services from "@/views/Services";
import { publicRoutes } from "@/config/routes";
import { buildMetadata } from "@/lib/seo";

const route = publicRoutes.find((item) => item.path === "/services")!;

export const metadata = buildMetadata(route);

export default function ServicesPage() {
  return <Services />;
}
