import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
          alt="Luxury living room"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="luxury-container relative z-20">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-block text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6">
            Premium Home Goods
          </span>
          <h1 className="luxury-heading text-5xl lg:text-7xl text-foreground mb-6 leading-tight">
            Redefine Your
            <br />
            <span className="italic">Living Space</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg font-light leading-relaxed">
            Discover our curated collection of luxury home furnishings, crafted
            with precision and designed to elevate every corner of your home.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/#products">
              <Button className="luxury-button group">
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link
              to="/"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 underline underline-offset-4"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs tracking-widest text-muted-foreground uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
