"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    pageName: "Contact",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", phone: "", message: "", pageName: "Contact" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   toast({
  //     title: "Message Sent!",
  //     description: "We'll get back to you within 24 hours.",
  //   });
  //   setFormData({ name: "", email: "", phone: "", message: "" });
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/10 rounded-full blur-2xl animate-pulse" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-in-up">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Let's discuss how we can help transform your business
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="bg-card p-6 sm:p-8 lg:p-10 rounded-3xl border border-border shadow-xl hover:shadow-2xl transition-all duration-500">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Send us a Message</h2>
                <p className="text-muted-foreground mb-6 sm:mb-8">Fill out the form below and we'll get back to you soon</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>

                  <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>

                  <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      required
                      className="transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>

                  <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={5}
                      required
                      className="transition-all duration-300 focus:scale-[1.02] resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fade-in"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              
              {/* Contact Info Cards */}
              <div className="space-y-4">
                <div className="bg-card p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in group" style={{ animationDelay: "0.3s" }}>
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Our Office</h3>
                      <p className="text-muted-foreground">Community Hall, farm road, Sangharsh Nagar, Chandivali, Powai,<br/> Mumbai, Maharashtra 400072</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in group" style={{ animationDelay: "0.4s" }}>
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                      <p className="text-muted-foreground">team.growforce@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in group" style={{ animationDelay: "0.5s" }}>
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                      <p className="text-muted-foreground">+91 86929 78344<br />Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-card p-4 rounded-3xl border border-border shadow-xl overflow-hidden animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885.0153646738652!2d72.90156099200377!3d19.106307798758902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7de3762f4a7%3A0x3d872991d660d1b9!2sCommunity%20Hall!5e0!3m2!1sen!2sin!4v1780215490598!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
