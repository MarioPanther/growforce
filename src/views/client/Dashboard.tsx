"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Users, Briefcase, Calendar, Plus } from "lucide-react";

const ClientDashboard = () => {
  const stats = [
    { label: "Active Projects", value: "12", icon: Briefcase, color: "text-blue-500" },
    { label: "Consultants", value: "8", icon: Users, color: "text-green-500" },
    { label: "Meetings", value: "5", icon: Calendar, color: "text-purple-500" },
    { label: "Success Rate", value: "94%", icon: BarChart, color: "text-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-8 animate-fade-in-up">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">Welcome Back, Client!</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Here's what's happening with your projects.</p>
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
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Recent Projects</h2>
              <Button size="sm" className="bg-gradient-accent">
                <Plus className="h-4 w-4 mr-2" />
                New Project
              </Button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <div>
                    <h3 className="font-semibold text-foreground">Project Alpha {i}</h3>
                    <p className="text-sm text-muted-foreground">In Progress</p>
                  </div>
                  <Button variant="ghost" size="sm">View</Button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4 sm:p-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Upcoming Meetings</h2>
              <Button size="sm" variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule
              </Button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <div>
                    <h3 className="font-semibold text-foreground">Consultant Meeting {i}</h3>
                    <p className="text-sm text-muted-foreground">Tomorrow, 2:00 PM</p>
                  </div>
                  <Button variant="ghost" size="sm">Join</Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
