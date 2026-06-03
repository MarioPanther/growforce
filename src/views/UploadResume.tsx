"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Upload, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

const UploadResume = () => {
  const { toast } = useToast();
  const resumeRef = useRef<HTMLInputElement>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    designation: "",
    name: "",
    email: "",
    phone: "",
    currentCTC: "",
    expectedCTC: "",
    skills: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setResumeFile(file);
    }
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    // const fileInput = document.getElementById("resume") as HTMLInputElement;
    // if (fileInput?.files?.[0]) {
    //   data.append("resume", fileInput.files[0]);
    // }
    if (resumeRef.current?.files?.[0]) {
      data.append("resume", resumeRef.current.files[0]);
    }


    try {
      const response = await fetch("http://localhost:5000/api/resume", {
        method: "POST",
        body: data,
      });

      if (!response.ok) throw new Error("Submission failed");

      setIsSubmitted(true);
      toast({
        title: "Success",
        description: "Resume submitted successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
    
  //   // Basic validation
  //   if (!formData.name || !formData.email || !formData.phone) {
  //     toast({
  //       title: "Error",
  //       description: "Please fill in all required fields",
  //       variant: "destructive",
  //     });
  //     return;
  //   }

  //   setIsSubmitted(true);
  //   toast({
  //     title: "Success!",
  //     description: "Your resume has been submitted successfully. We'll contact you soon!",
  //   });

  //   // Reset form after 3 seconds
  //   setTimeout(() => {
  //     setIsSubmitted(false);
  //     setFormData({
  //       designation: "",
  //       name: "",
  //       email: "",
  //       phone: "",
  //       currentCTC: "",
  //       expectedCTC: "",
  //       skills: "",
  //     });
  //   }, 3000);
  // };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-hero text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Upload Resume</h1>
            <p className="text-lg text-white/90">
              Start your journey with us - Upload your resume and let us find the perfect match
            </p>
          </div>
        </div>
      </section>

      {/* Upload Form */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-center text-foreground mb-8">
                Upload Your Resume
              </h2>

              {isSubmitted ? (
                <div className="text-center py-12 animate-scale-in">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground">
                    Your resume has been submitted successfully. Our team will review it and contact you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="designation">Your Designation *</Label>
                    <Input
                      id="designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      placeholder="e.g., Software Engineer"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Your Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Your Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 1234567890"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="currentCTC">Current CTC</Label>
                      <Input
                        id="currentCTC"
                        name="currentCTC"
                        value={formData.currentCTC}
                        onChange={handleChange}
                        placeholder="e.g., 5 LPA"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="expectedCTC">Expected CTC</Label>
                      <Input
                        id="expectedCTC"
                        name="expectedCTC"
                        value={formData.expectedCTC}
                        onChange={handleChange}
                        placeholder="e.g., 7 LPA"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="skills">Skills / Experience</Label>
                    <Textarea
                      id="skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      placeholder="Tell us about your skills, experience, and what you're looking for..."
                      className="mt-2 min-h-[120px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="resume">Upload Your Resume (optional)</Label>
                    <div className="mt-2 border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-accent transition-colors cursor-pointer" onClick={() => resumeRef.current?.click()}>
                      <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                      {resumeFile ? (
                        <p className="text-sm text-green-600 font-medium">
                          📄 {resumeFile.name}
                        </p>
                      ) : (
                        <>
                          <p className="text-sm text-muted-foreground mb-1">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs text-muted-foreground">
                            PDF, DOC, DOCX (Max 5MB)
                          </p>
                        </>
                      )}
                      <input
                        ref={resumeRef}
                        type="file"
                        id="resume"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={handleResumeChange}
                      />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Application
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    We respect your privacy. Your information will be kept confidential and used only for recruitment purposes.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UploadResume;
