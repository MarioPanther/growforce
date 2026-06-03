import { Suspense } from "react";
import AdminContactEdit from "@/views/admin/AdminContactEdit";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Detail",
  description: "View a Grow Force contact submission.",
  path: "/admin/contacts/detail",
  noIndex: true,
});

export default function AdminContactEditPage() {
  return (
    <Suspense fallback={null}>
      <AdminContactEdit />
    </Suspense>
  );
}
