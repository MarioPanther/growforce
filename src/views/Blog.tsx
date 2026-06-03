"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/blog/BlogCard";
import FeaturedBlog from "@/components/blog/FeaturedBlog";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogFilters from "@/components/blog/BlogFilters";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Remote Work in Tech",
    description: "Explore how remote work is reshaping the technology industry and what it means for professionals.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    category: "Tech",
    author: "Sarah Johnson",
    date: "2024-03-15",
    readTime: "5 min read",
    featured: true
  },
  {
    id: 2,
    title: "Building a Successful Career in Consulting",
    description: "Key strategies and insights for professionals looking to excel in the consulting industry.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    category: "Business",
    author: "Michael Chen",
    date: "2024-03-12",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Top Skills Employers Look For in 2024",
    description: "Discover the most in-demand skills that can boost your career prospects this year.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    category: "Tips",
    author: "Emily Rodriguez",
    date: "2024-03-10",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "How to Ace Your Next Job Interview",
    description: "Expert tips and techniques to help you stand out and land your dream job.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
    category: "Tips",
    author: "David Park",
    date: "2024-03-08",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "The Rise of AI in Recruitment",
    description: "Understanding how artificial intelligence is transforming the hiring process.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    category: "Tech",
    author: "Lisa Anderson",
    date: "2024-03-05",
    readTime: "5 min read"
  },
  {
    id: 6,
    title: "Networking Tips for Career Growth",
    description: "Learn how to build meaningful professional connections that advance your career.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
    category: "Business",
    author: "James Wilson",
    date: "2024-03-01",
    readTime: "6 min read"
  }
];

const categories = ["All", "Tech", "Business", "Tips", "Updates"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = regularPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 md:py-32">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Latest Insights
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Stay updated with the latest trends, tips, and insights in careers, technology, and professional development
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Featured Blog */}
            {featuredPost && (
              <div className="mb-12 animate-fade-in">
                <FeaturedBlog post={featuredPost} />
              </div>
            )}

            {/* Filters and Search */}
            <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <BlogFilters
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
              
              <div className="mt-4 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <BlogSidebar posts={blogPosts} />
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
