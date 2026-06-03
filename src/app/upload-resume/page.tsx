import UploadResume from "@/views/UploadResume";
import { publicRoutes } from "@/config/routes";
import { buildMetadata } from "@/lib/seo";

const route = publicRoutes.find((item) => item.path === "/upload-resume")!;

export const metadata = buildMetadata(route);

export default function UploadResumePage() {
  return <UploadResume />;
}
