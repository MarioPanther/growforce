import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import Image from "next/image";

interface BlogCardProps {
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

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
      {/* Image Container with Zoom Effect */}
      <div className="relative overflow-hidden aspect-video">
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={450}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm shadow-lg">
            {post.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground line-clamp-3">
          {post.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="group/btn hover:text-primary transition-all duration-300"
          >
            Read More
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;
