import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowRight, Star } from "lucide-react";
import Image from "next/image";

interface FeaturedBlogProps {
  post: {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
  };
}

const FeaturedBlog = ({ post }: FeaturedBlogProps) => {
  return (
    <Card className="group relative overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all duration-700 bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur-sm shadow-2xl">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 grid md:grid-cols-2 gap-8 p-6 md:p-8">
        {/* Image Section */}
        <div className="relative overflow-hidden rounded-lg aspect-video md:aspect-auto">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={450}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          
          {/* Featured Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground backdrop-blur-sm shadow-lg animate-pulse">
              <Star className="w-3 h-3 mr-1 fill-current" />
              Featured
            </Badge>
            <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm shadow-lg">
              {post.category}
            </Badge>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold group-hover:text-primary transition-colors duration-300 leading-tight">
            {post.title}
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed">
            {post.description}
          </p>

          {/* CTA Button */}
          <div>
            <Button
              size="lg"
              className="group/btn bg-gradient-to-r from-primary to-secondary hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              Read Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FeaturedBlog;
