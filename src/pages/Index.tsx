import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { categories, products } from "@/data/products";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Meridian Home Goods | Premium Home Furnishings</title>
        <meta
          name="description"
          content="Discover our curated collection of luxury home furnishings. Premium quality furniture, bedroom, kitchen & dining, and home décor pieces."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />

        {/* Categories Section */}
        <section className="py-24 bg-background">
          <div className="luxury-container">
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
                Explore
              </span>
              <h2 className="luxury-heading text-4xl lg:text-5xl text-foreground mt-4">
                Shop by Category
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div
                  key={category.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CategoryCard category={category} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section id="products" className="py-24 bg-muted/30">
          <div className="luxury-container">
            <div className="flex items-end justify-between mb-16">
              <div>
                <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
                  Our Collection
                </span>
                <h2 className="luxury-heading text-4xl lg:text-5xl text-foreground mt-4">
                  Featured Products
                </h2>
              </div>
              <p className="hidden lg:block text-muted-foreground max-w-md text-right font-light">
                Each piece is selected for its exceptional craftsmanship,
                timeless design, and enduring quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Story Section */}
        <section className="py-24 bg-background">
          <div className="luxury-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80"
                  alt="Meridian craftsmanship"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/5 -z-10" />
              </div>
              <div>
                <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
                  Our Story
                </span>
                <h2 className="luxury-heading text-4xl lg:text-5xl text-foreground mt-4 mb-8">
                  Crafting
                  <br />
                  <span className="italic">Timeless Elegance</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Since our founding, Meridian has been dedicated to bringing
                  exceptional home goods to discerning customers across India.
                  With over 600 stores nationwide and a growing digital
                  presence, we've built our reputation on quality, craftsmanship,
                  and an unwavering commitment to customer satisfaction.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Every piece in our collection is carefully curated or crafted
                  in collaboration with skilled artisans, ensuring that your home
                  reflects the same attention to detail that defines our brand.
                </p>
                <div className="flex items-center gap-12">
                  <div>
                    <span className="block font-serif text-4xl text-foreground">
                      600+
                    </span>
                    <span className="text-xs tracking-widest text-muted-foreground uppercase">
                      Stores
                    </span>
                  </div>
                  <div>
                    <span className="block font-serif text-4xl text-foreground">
                      25+
                    </span>
                    <span className="text-xs tracking-widest text-muted-foreground uppercase">
                      Years
                    </span>
                  </div>
                  <div>
                    <span className="block font-serif text-4xl text-foreground">
                      1M+
                    </span>
                    <span className="text-xs tracking-widest text-muted-foreground uppercase">
                      Customers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
