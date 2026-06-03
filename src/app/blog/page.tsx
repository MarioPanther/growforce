import Blog from "@/views/Blog";
import { publicRoutes } from "@/config/routes";
import { buildMetadata } from "@/lib/seo";

const route = publicRoutes.find((item) => item.path === "/blog")!;

export const metadata = buildMetadata(route);

export default function BlogPage() {
  return <Blog />;
}
