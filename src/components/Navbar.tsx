import { Link } from "react-router-dom";
import { User, LogOut, ShoppingBag } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="luxury-container flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <span className="font-serif text-2xl font-light tracking-wider text-foreground">
            MERIDIAN
          </span>
          <span className="hidden md:block text-xs tracking-widest text-muted-foreground uppercase">
            Home Goods
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-12">
          <Link
            to="/"
            className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 focus:outline-none">
              Shop
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/#furniture" className="cursor-pointer">
                  Furniture
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/#bedroom" className="cursor-pointer">
                  Bedroom
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/#kitchen-dining" className="cursor-pointer">
                  Kitchen & Dining
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/#home-decor" className="cursor-pointer">
                  Home Décor
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            to="/"
            className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            About
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-3 py-2">
                  <p className="text-sm font-medium text-foreground">Account</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {user.email}
                  </p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={signOut}
                  className="cursor-pointer text-destructive focus:text-destructive"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/auth">
              <Button variant="ghost" className="text-sm tracking-wide">
                Sign In
              </Button>
            </Link>
          )}
          <Button variant="ghost" size="icon" className="rounded-full">
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
