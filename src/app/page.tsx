import Index from "@/views/Index";
import { publicRoutes } from "@/config/routes";
import { buildMetadata } from "@/lib/seo";

const route = publicRoutes.find((item) => item.path === "/")!;

export const metadata = buildMetadata(route);

export default function HomePage() {
  return <Index />;
}
