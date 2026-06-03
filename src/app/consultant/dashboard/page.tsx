import ConsultantDashboard from "@/views/consultant/Dashboard";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Consultant Dashboard",
  description: "Grow Force consultant dashboard.",
  path: "/consultant/dashboard",
  noIndex: true,
});

export default function ConsultantDashboardPage() {
  return <ConsultantDashboard />;
}
