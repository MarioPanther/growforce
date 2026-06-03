import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, Tag } from "lucide-react";
import Image from "next/image";

interface BlogSidebarProps {
  posts: Array<{
    id: number;
    title: string;
    image: string;
    category: string;
    date: string;
    readTime: string;
  }>;
}

const BlogSidebar = ({ posts }: BlogSidebarProps) => {
  const popularPosts = posts.slice(0, 4);
  const recentPosts = [...posts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 4);
  
  const allCategories = Array.from(new Set(posts.map(p => p.category)));

  return (
    <div className="space-y-6 sticky top-6">
      {/* Popular Posts */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <TrendingUp className="w-5 h-5 text-primary" />
            Popular Posts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {popularPosts.map((post, index) => (
            <div
              key={post.id}
              className="group flex gap-3 cursor-pointer transition-all duration-300 hover:translate-x-1"
            >
              <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={160}
                  height={160}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h4>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Clock className="w-5 h-5 text-primary" />
            Recent Posts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="group cursor-pointer pb-3 border-b border-border/50 last:border-0 transition-all duration-300 hover:translate-x-1"
            >
              <h4 className="font-medium text-sm line-clamp-2 mb-2 group-hover:text-primary transition-colors duration-300">
                {post.title}
              </h4>
              <p className="text-xs text-muted-foreground">
                {new Date(post.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Tag className="w-5 h-5 text-primary" />
            Categories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {allCategories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-105"
              >
                {category}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSidebar;
