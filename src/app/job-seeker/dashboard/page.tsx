import JobSeekerDashboard from "@/views/job-seeker/Dashboard";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Job Seeker Dashboard",
  description: "Grow Force job seeker dashboard.",
  path: "/job-seeker/dashboard",
  noIndex: true,
});

export default function JobSeekerDashboardPage() {
  return <JobSeekerDashboard />;
}
