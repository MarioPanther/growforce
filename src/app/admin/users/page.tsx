import AdminUsers from "@/views/admin/Users";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Admin Users",
  description: "Manage Grow Force users.",
  path: "/admin/users",
  noIndex: true,
});

export default function AdminUsersPage() {
  return <AdminUsers />;
}
