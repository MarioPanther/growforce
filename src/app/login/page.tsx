import Login from "@/views/Login";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Login",
  description: "Login to Grow Force.",
  path: "/login",
  noIndex: true,
});

export default function LoginPage() {
  return <Login />;
}
