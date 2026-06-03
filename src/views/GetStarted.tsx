"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, User, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "@/lib/router-compat";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const GetStarted = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    {
      id: "client",
      icon: Building2,
      title: "Client",
      description: "Looking for consultancy or talent",
      path: "/client/dashboard",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      id: "job-seeker",
      icon: User,
      title: "Job Seeker",
      description: "Seeking opportunities and guidance",
      path: "/job-seeker/dashboard",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      id: "consultant",
      icon: Briefcase,
      title: "Consultant",
      description: "Offering expertise to clients",
      path: "/consultant/dashboard",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Get Started with TechConsult Pro
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Choose your role to create your personalized account
            </p>
          </div>

          {!selectedRole ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
              {roles.map((role, index) => (
                <Card
                  key={role.id}
                  className="p-6 sm:p-8 cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedRole(role.id)}
                >
                  <div className={`mb-4 sm:mb-6 mx-auto p-4 sm:p-6 ${role.bgColor} rounded-2xl w-fit`}>
                    <role.icon className={`h-10 w-10 sm:h-12 sm:w-12 ${role.color}`} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2 sm:mb-3 text-center">
                    {role.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground text-center">
                    {role.description}
                  </p>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="max-w-2xl mx-auto p-6 sm:p-8 lg:p-10 animate-fade-in">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Create Your Account
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedRole(null)}
                  className="text-sm"
                >
                  Change Role
                </Button>
              </div>

              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-sm sm:text-base">First Name</Label>
                    <Input id="firstName" placeholder="John" className="mt-1.5 sm:mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm sm:text-base">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="mt-1.5 sm:mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="mt-1.5 sm:mt-2" />
                </div>

                <div>
                  <Label htmlFor="password" className="text-sm sm:text-base">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" className="mt-1.5 sm:mt-2" />
                </div>

                {selectedRole === "client" && (
                  <div>
                    <Label htmlFor="company" className="text-sm sm:text-base">Company Name</Label>
                    <Input id="company" placeholder="Acme Inc." className="mt-1.5 sm:mt-2" />
                  </div>
                )}

                {selectedRole === "consultant" && (
                  <div>
                    <Label htmlFor="expertise" className="text-sm sm:text-base">Area of Expertise</Label>
                    <Input id="expertise" placeholder="Cloud Architecture, DevOps..." className="mt-1.5 sm:mt-2" />
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-accent hover:opacity-90 text-base sm:text-lg py-5 sm:py-6"
                  asChild
                >
                  <Link
                    to={roles.find((r) => r.id === selectedRole)?.path || "/"}
                    className="flex items-center justify-center gap-2"
                  >
                    Create Account
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/login" className="text-accent hover:underline font-medium">
                    Sign in
                  </Link>
                </p>
              </form>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GetStarted;
