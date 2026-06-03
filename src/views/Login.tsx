"use client";

import { useState } from "react";
import { useNavigate } from "@/lib/router-compat";
// import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      localStorage.setItem("token", data.token);

      // if (data.user.isAdmin) {
      //   navigate("/admin/dashboard");
      // } else {
      //   navigate("/user/home");
      // }
      navigate("/admin/dashboard");
      toast({
        title: "Login successful",
        description: "Welcome back!",
      });
    } catch (err: any) {
      toast({
        title: "Login failed",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   // try {
  //   //   const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
  //   //     email,
  //   //     password,
  //   //   });

  //   //   if (authError) throw authError;

  // //     if (authData.user) {
  // //       // Check user role
  // //       const { data: roleData, error: roleError } = await supabase
  // //         .from("user_roles")
  // //         .select("role")
  // //         .eq("user_id", authData.user.id)
  // //         .single();

  // //       if (roleError) throw roleError;

  // //       // Redirect based on role
  // //       if (roleData.role === "admin") {
  // //         navigate("/admin/dashboard");
  // //       } else {
  // //         navigate("/user/home");
  // //       }

  // //       toast({
  // //         title: "Login successful",
  // //         description: `Welcome back!`,
  // //       });
  // //     }
  // //   } catch (error: any) {
  // //     toast({
  // //       title: "Login failed",
  // //       description: error.message || "Invalid credentials",
  // //       variant: "destructive",
  // //     });
  // //   } finally {
  // //     setIsLoading(false);
  // //   }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md animate-scale-in">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <Label
                  htmlFor="remember"
                  className="text-sm font-normal cursor-pointer"
                >
                  Remember me
                </Label>
              </div>
              <button
                type="button"
                className="text-sm text-primary hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
