import { memo } from "react";
import { Link } from "react-router-dom";

const Footer = memo(function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="luxury-container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl font-light tracking-wider">
                MERIDIAN
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
              Premium home goods crafted with precision and designed to elevate
              every corner of your living space.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6">Shop</h4>
            <ul className="space-y-3">
              {["Furniture", "Bedroom", "Kitchen & Dining", "Home Décor"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Our Story", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6">Support</h4>
            <ul className="space-y-3">
              {["Contact Us", "FAQs", "Shipping", "Returns"].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/50">
            © 2024 Meridian Retail Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
