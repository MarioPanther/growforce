"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Send, Calendar, Award } from "lucide-react";

const JobSeekerDashboard = () => {
  const stats = [
    { label: "Applications Sent", value: "15", icon: Send, color: "text-blue-500" },
    { label: "Interviews Scheduled", value: "3", icon: Calendar, color: "text-green-500" },
    { label: "Job Matches", value: "28", icon: Briefcase, color: "text-purple-500" },
    { label: "Profile Score", value: "85%", icon: Award, color: "text-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-8 animate-fade-in-up">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">Welcome Back, Job Seeker!</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Find your next opportunity and grow your career.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <Card className="p-4 sm:p-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Recommended Jobs</h2>
              <Button size="sm" className="bg-gradient-accent">View All</Button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">Senior Developer</h3>
                    <span className="text-sm text-accent font-medium">New</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Tech Company Inc. • Remote</p>
                  <Button variant="outline" size="sm" className="w-full">Apply Now</Button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4 sm:p-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Career Guidance Sessions</h2>
              <Button size="sm" variant="outline">Book Session</Button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">Resume Review</h3>
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">With Senior Career Coach</p>
                  <Button variant="ghost" size="sm" className="w-full">Join Meeting</Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerDashboard;
