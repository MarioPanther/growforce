import { Suspense } from "react";
import UserEdit from "@/views/admin/UserEdit";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Edit User",
  description: "Edit a Grow Force user.",
  path: "/admin/users/edit",
  noIndex: true,
});

export default function UserEditPage() {
  return (
    <Suspense fallback={null}>
      <UserEdit />
    </Suspense>
  );
}
