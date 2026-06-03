import ClientDashboard from "@/views/client/Dashboard";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Client Dashboard",
  description: "Grow Force client dashboard.",
  path: "/client/dashboard",
  noIndex: true,
});

export default function ClientDashboardPage() {
  return <ClientDashboard />;
}
