import { Link } from "react-router-dom";
import { Leaf, MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { scrollToTopImmediate } from "@/hooks/use-scroll-to-top";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8" />
              <span className="font-serif text-xl font-bold">
                Mamoe Gabhadiya
              </span>
            </div>
            <p className="text-sm text-primary-foreground/90">
              Natural herbal solutions for health, wealth, and wellbeing across Africa.
              Founded in 2020.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/mamoegabhadiya" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/mamoegabhadiya" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/mamoegabhadiya" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/@mamoegabhadiya" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" onClick={scrollToTopImmediate} className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" onClick={scrollToTopImmediate} className="hover:text-accent transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/story" onClick={scrollToTopImmediate} className="hover:text-accent transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={scrollToTopImmediate} className="hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/health" onClick={scrollToTopImmediate} className="hover:text-accent transition-colors">
                  Health Solutions
                </Link>
              </li>
              <li>
                <Link to="/wealth" onClick={scrollToTopImmediate} className="hover:text-accent transition-colors">
                  Wealth & Prosperity
                </Link>
              </li>
              <li>
                <Link to="/resources" onClick={scrollToTopImmediate} className="hover:text-accent transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/testimonials" onClick={scrollToTopImmediate} className="hover:text-accent transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <div className="font-semibold mb-2">🇿🇦 South Africa</div>
                <div className="flex items-start space-x-2 mb-1">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>+27 81 468 7186</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <div>Shop 327</div>
                    <div>Ottawa Mall, 3rd Floor</div>
                  </div>
                </div>
              </li>
              <li>
                <div className="font-semibold mb-2">🇿🇼 Zimbabwe</div>
                <div className="flex items-start space-x-2 mb-1">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>+263 718 735 172</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <div>Shop No. 38, Eeson Building</div>
                    <div>J Nkomo & 6th Avenue</div>
                    <div>Opposite Car Sale</div>
                  </div>
                </div>
              </li>
              <li>
                <div className="font-semibold mb-2">Also Available In</div>
                <div className="text-primary-foreground/80">
                  Cape Town & Botswana
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Mamoe Gabhadiya. All rights reserved.</p>
          <p className="mt-2 text-primary-foreground/80">
            Spicing life naturally since 2020
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs">
            <Link to="/privacy-policy" onClick={scrollToTopImmediate} className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/health-disclaimer" onClick={scrollToTopImmediate} className="hover:text-accent transition-colors">
              Health Disclaimer
            </Link>
            <Link to="/terms-of-service" onClick={scrollToTopImmediate} className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
          <p className="mt-4 text-primary-foreground/70 text-xs">
            Website developed by <a href="https://kawerifytech.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-accent transition-colors">Kawerify Tech</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
