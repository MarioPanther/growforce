import AdminDashboard from "@/views/admin/Dashboard";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Admin Dashboard",
  description: "Grow Force admin dashboard.",
  path: "/admin/dashboard",
  noIndex: true,
});

export default function AdminDashboardPage() {
  return <AdminDashboard />;
}
