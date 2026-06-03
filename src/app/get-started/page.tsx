import GetStarted from "@/views/GetStarted";
import { publicRoutes } from "@/config/routes";
import { buildMetadata } from "@/lib/seo";

const route = publicRoutes.find((item) => item.path === "/get-started")!;

export const metadata = buildMetadata(route);

export default function GetStartedPage() {
  return <GetStarted />;
}
