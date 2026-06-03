import Awards from "@/views/Awards";
import { publicRoutes } from "@/config/routes";
import { buildMetadata } from "@/lib/seo";

const route = publicRoutes.find((item) => item.path === "/awards")!;

export const metadata = buildMetadata(route);

export default function AwardsPage() {
  return <Awards />;
}
