import AdminContacts from "@/views/admin/AdminContacts";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Admin Contacts",
  description: "Manage Grow Force contact submissions.",
  path: "/admin/contacts",
  noIndex: true,
});

export default function AdminContactsPage() {
  return <AdminContacts />;
}
