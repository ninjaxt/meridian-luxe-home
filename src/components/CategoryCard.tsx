import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "@/data/products";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link
      to={`/#${category.slug}`}
      className="group relative aspect-[4/5] overflow-hidden luxury-card"
    >
      {/* Image */}
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
          <h3 className="font-serif text-2xl text-background mb-2">
            {category.name}
          </h3>
          <p className="text-sm text-background/80 font-light">
            {category.description}
          </p>
        </div>

        {/* Arrow */}
        <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <ArrowUpRight className="w-5 h-5 text-background" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
