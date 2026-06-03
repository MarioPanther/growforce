"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Users, Star, TrendingUp } from "lucide-react";

const ConsultantDashboard = () => {
  const stats = [
    { label: "Active Clients", value: "6", icon: Users, color: "text-blue-500" },
    { label: "Monthly Revenue", value: "$8,500", icon: DollarSign, color: "text-green-500" },
    { label: "Rating", value: "4.9", icon: Star, color: "text-yellow-500" },
    { label: "Growth", value: "+23%", icon: TrendingUp, color: "text-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-8 animate-fade-in-up">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">Welcome Back, Consultant!</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Manage your clients and grow your consultancy business.</p>
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
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Active Projects</h2>
              <Button size="sm" className="bg-gradient-accent">View All</Button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">Project Beta {i}</h3>
                    <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded-full">Active</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Client Company {i}</p>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-accent h-2 rounded-full" style={{ width: "65%" }} />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">65% Complete</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4 sm:p-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Recent Reviews</h2>
              <Button size="sm" variant="outline">View All</Button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">Client {i}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <span className="text-sm font-medium">5.0</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">"Excellent work! Highly recommended."</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ConsultantDashboard;
