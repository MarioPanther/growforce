import AdminResumes from "@/views/admin/AdminResumes";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Admin Resumes",
  description: "Manage Grow Force resume submissions.",
  path: "/admin/resumes",
  noIndex: true,
});

export default function AdminResumesPage() {
  return <AdminResumes />;
}
