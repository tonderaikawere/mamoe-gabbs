import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf, MessageCircle, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { scrollToTopImmediate } from "@/hooks/use-scroll-to-top";
import { useCart } from "@/contexts/CartContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { toggleCart, getTotalItems } = useCart();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Team", path: "/team" },
    { name: "Our Story", path: "/story" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLinkClick = () => {
    setIsOpen(false);
    scrollToTopImmediate();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-soft border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center group" onClick={scrollToTopImmediate}>
            <img 
              src="/mamoe-logo.svg" 
              alt="Mamoe Gabhadiya Logo" 
              className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={scrollToTopImmediate}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Shopping Cart */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleCart}
              className="ml-4 relative"
              title="Shopping Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {getTotalItems()}
                </Badge>
              )}
            </Button>

            {/* WhatsApp Quick Contact */}
            <a
              href="https://wa.me/27814687186"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 p-2 rounded-full bg-green-600 hover:bg-green-700 text-white transition-colors group"
              title="Chat with us on WhatsApp"
            >
              <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile Cart Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleCart}
              className="relative p-2"
              title="Shopping Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 text-xs"
                >
                  {getTotalItems()}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-muted transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleLinkClick}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Cart Link */}
              <Button
                variant="ghost"
                onClick={() => {
                  toggleCart();
                  setIsOpen(false);
                }}
                className="flex items-center justify-start px-4 py-2 rounded-md text-sm font-medium hover:bg-muted transition-colors"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Shopping Cart
                {getTotalItems() > 0 && (
                  <Badge variant="destructive" className="ml-2">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
              
              {/* Mobile WhatsApp Contact */}
              <a
                href="https://wa.me/27814687186"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center px-4 py-2 rounded-md text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Chat
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
