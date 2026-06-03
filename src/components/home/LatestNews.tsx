import { Link } from "@/lib/router-compat";
import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";

const LatestNews = () => {
  const news = [
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
      title: "Top 5 Interview Tips for 2024",
      excerpt: "Ace your next interview with these proven strategies from HR experts...",
      date: "March 15, 2024",
    },
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
      title: "The Future of Remote Work",
      excerpt: "How companies are adapting to the new hybrid work model...",
      date: "March 10, 2024",
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
      title: "Building High-Performance Teams",
      excerpt: "Learn the secrets to creating cohesive and productive teams...",
      date: "March 5, 2024",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Latest From Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest insights and trends in HR and recruitment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={450}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {item.excerpt}
                </p>
                <Link
                  to="/blog"
                  className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
