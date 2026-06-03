import About from "@/views/About";
import { publicRoutes } from "@/config/routes";
import { buildMetadata } from "@/lib/seo";

const route = publicRoutes.find((item) => item.path === "/about")!;

export const metadata = buildMetadata(route);

export default function AboutPage() {
  return <About />;
}
