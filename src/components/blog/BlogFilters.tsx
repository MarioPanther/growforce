import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

interface BlogFiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const BlogFilters = ({ categories, selectedCategory, onCategoryChange }: BlogFiltersProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Filter className="w-4 h-4" />
        <span className="font-medium">Filter by category:</span>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <Button
              key={category}
              variant={isActive ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category)}
              className={`
                transition-all duration-300 hover:scale-105
                ${isActive 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30" 
                  : "hover:border-primary/50 hover:text-primary"
                }
              `}
            >
              {category}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default BlogFilters;
