import UserCreate from "@/views/admin/UserCreate";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Create User",
  description: "Create a Grow Force user.",
  path: "/admin/users/create",
  noIndex: true,
});

export default function UserCreatePage() {
  return <UserCreate />;
}
