import UserHome from "@/views/user/Home";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "User Home",
  description: "Grow Force user home.",
  path: "/user/home",
  noIndex: true,
});

export default function UserHomePage() {
  return <UserHome />;
}
