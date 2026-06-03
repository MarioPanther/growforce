import Pricing from "@/views/Pricing";
import { publicRoutes } from "@/config/routes";
import { buildMetadata } from "@/lib/seo";

const route = publicRoutes.find((item) => item.path === "/pricing")!;

export const metadata = buildMetadata(route);

export default function PricingPage() {
  return <Pricing />;
}
