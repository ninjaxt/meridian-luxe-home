import { useState, memo } from "react";
import { Link } from "react-router-dom";
import { formatPrice, type Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = memo(function ProductCard({ product }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setCurrentImageIndex(1)}
      onMouseLeave={() => setCurrentImageIndex(0)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
        <img
          src={product.images[currentImageIndex] || product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500 flex items-center justify-center">
          <span className="px-6 py-2 bg-background text-foreground text-xs tracking-widest uppercase opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            View Details
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs tracking-wider text-muted-foreground uppercase">
            {product.category}
          </span>
        </div>

        {/* Image Dots */}
        {product.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {product.images.slice(0, 3).map((_, index) => (
              <button
                key={index}
                onMouseEnter={(e) => {
                  e.preventDefault();
                  setCurrentImageIndex(index);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  currentImageIndex === index
                    ? "bg-background"
                    : "bg-background/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-muted-foreground font-light">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
});

export default ProductCard;
