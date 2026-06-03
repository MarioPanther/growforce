"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "@/lib/router-compat";
// import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UserHome = () => {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     const { data: { user } } = await supabase.auth.getUser();
      
  //     if (user) {
  //       const { data } = await supabase
  //         .from("profiles")
  //         .select("*")
  //         .eq("id", user.id)
  //         .single();
        
  //       setProfile(data);
  //     }
  //     setLoading(false);
  //   };

  //   fetchProfile();
  // }, []);

  // const handleLogout = async () => {
  //   await supabase.auth.signOut();
  //   toast({
  //     title: "Logged out",
  //     description: "You have been successfully logged out",
  //   });
  //   navigate("/login");
  // };

  // if (loading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-background">
  //       <div className="text-lg text-muted-foreground">Loading...</div>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">User Dashboard</h1>
          <Button variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={profile?.avatar_url} alt={profile?.full_name} />
                <AvatarFallback>
                  {profile?.full_name?.charAt(0) || profile?.email?.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-semibold text-foreground">
                  {profile?.full_name || "User"}
                </h2>
                <p className="text-muted-foreground">Member since {new Date(profile?.created_at).toLocaleDateString()}</p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                <User className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Full Name</p>
                  <p className="font-medium text-foreground">{profile?.full_name || "Not set"}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">{profile?.email}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                View your personal dashboard and statistics
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Check your messages and notifications
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Update your profile and preferences
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
