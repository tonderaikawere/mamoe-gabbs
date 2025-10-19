import React, { useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useScrollToTopOnMount } from "@/hooks/use-scroll-to-top";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Sparkles, Shield, Leaf, Star, Zap, X, Plus, Minus, ShoppingCart as CartIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { additionalProducts } from "../data/additionalProducts";
import { useCart } from "@/contexts/CartContext";
import ShoppingCart from "../components/ShoppingCart";
import { toast } from "sonner";

// Product interface
interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  priceDisplay: string;
  images: string[];
  icon: any;
  inStock: boolean;
  benefits: string[];
  ingredients: string[];
  usage: string;
}

// 100+ Comprehensive Products Catalog
const allProducts: Product[] = [
  // Health & Wellness (30 products)
  {
    id: "immune-booster-blend",
    name: "Immune Booster Blend",
    category: "Health & Wellness",
    description: "Powerful blend to strengthen your natural defenses with echinacea and elderberry.",
    price: 250,
    priceDisplay: "R 250",
    images: ["/images/IMG_7214.webp", "/images/IMG_7215.webp", "/images/IMG_7216.webp"],
    icon: Heart,
    inStock: true,
    benefits: ["Strengthens immune system", "Rich in antioxidants", "Natural defense boost"],
    ingredients: ["Echinacea", "Elderberry", "Ginger Root", "Turmeric"],
    usage: "Take 1-2 teaspoons daily with warm water, preferably in the morning."
  },
  {
    id: "energy-vitality-mix",
    name: "Energy & Vitality Mix",
    category: "Health & Wellness",
    description: "Natural energy boost without caffeine jitters. Includes ginseng and rhodiola.",
    price: 280,
    priceDisplay: "R 280",
    images: ["/images/IMG_7215.webp", "/images/IMG_7218.webp", "/images/IMG_7219.webp"],
    icon: Zap,
    inStock: true,
    benefits: ["Natural energy boost", "Reduces fatigue", "Improves mental clarity"],
    ingredients: ["Ginseng", "Rhodiola", "Ashwagandha", "Green Tea Extract"],
    usage: "Mix 1 teaspoon with juice or smoothie, take in the morning."
  },
  {
    id: "digestive-health-tea",
    name: "Digestive Health Tea",
    category: "Health & Wellness",
    description: "Soothing blend for digestive comfort with peppermint and chamomile.",
    price: 220,
    priceDisplay: "R 220",
    images: ["/images/IMG_7216.webp", "/images/IMG_7220.webp"],
    icon: Leaf,
    inStock: true,
    benefits: ["Soothes digestive system", "Reduces bloating", "Calming effect"],
    ingredients: ["Peppermint", "Chamomile", "Fennel", "Ginger"],
    usage: "Steep 1 teaspoon in hot water for 5-7 minutes. Drink after meals."
  },
  {
    id: "sleep-relaxation-blend",
    name: "Sleep & Relaxation Blend",
    category: "Health & Wellness",
    description: "Calming herbs for restful sleep with lavender and valerian root.",
    price: 240,
    priceDisplay: "R 240",
    images: ["/images/IMG_7218.webp", "/images/IMG_7221.webp", "/images/IMG_7222.webp"],
    icon: Heart,
    inStock: true,
    benefits: ["Promotes deep sleep", "Reduces anxiety", "Natural relaxation"],
    ingredients: ["Lavender", "Valerian Root", "Passionflower", "Lemon Balm"],
    usage: "Take 1 teaspoon 30 minutes before bedtime with warm milk."
  },
  {
    id: "blood-pressure-balance",
    name: "Blood Pressure Balance",
    category: "Health & Wellness",
    description: "Support cardiovascular health naturally with hawthorn and hibiscus.",
    price: 290,
    priceDisplay: "R 290",
    images: ["/images/IMG_7219.webp", "/images/IMG_7223.webp"],
    icon: Heart,
    inStock: true,
    benefits: ["Supports heart health", "Lowers blood pressure", "Natural ingredients"],
    ingredients: ["Hawthorn", "Hibiscus", "Garlic", "Ginger"],
    usage: "Take 1-2 teaspoons daily with warm water in the morning."
  },
  // Continue Health & Wellness (25 more products)
  {
    id: "diabetes-support-blend",
    name: "Diabetes Support Blend",
    category: "Health & Wellness",
    description: "Help manage blood sugar levels naturally with bitter melon and fenugreek.",
    price: 310,
    priceDisplay: "R 310",
    images: ["/images/IMG_7220.webp", "/images/IMG_7225.webp"],
    icon: Heart,
    inStock: true,
    benefits: ["Helps regulate blood sugar", "Natural ingredients", "Supports metabolism"],
    ingredients: ["Bitter Melon", "Fenugreek", "Cinnamon", "Chromium"],
    usage: "Take 1 teaspoon twice daily with meals."
  },
  {
    id: "heart-health-formula",
    name: "Heart Health Formula",
    category: "Health & Wellness",
    description: "Keep your heart strong and healthy with garlic and omega-rich herbs.",
    price: 300,
    priceDisplay: "R 300",
    images: ["/images/IMG_7221.webp", "/images/IMG_7226.webp", "/images/IMG_7227.webp"],
    icon: Heart,
    inStock: true,
    benefits: ["Supports cardiovascular health", "Lowers cholesterol", "Antioxidant rich"],
    ingredients: ["Garlic", "Hawthorn", "Omega-3 herbs", "Coenzyme Q10"],
    usage: "Take 1-2 teaspoons daily with meals."
  },
  {
    id: "joint-pain-relief",
    name: "Joint Pain Relief",
    category: "Health & Wellness",
    description: "Natural anti-inflammatory for joint comfort with turmeric and ginger.",
    price: 270,
    priceDisplay: "R 270",
    images: ["/images/IMG_7222.webp", "/images/IMG_7228.webp"],
    icon: Leaf,
    inStock: true,
    benefits: ["Reduces inflammation", "Relieves joint pain", "Improves mobility"],
    ingredients: ["Turmeric", "Ginger", "Boswellia", "Black Pepper"],
    usage: "Take 1 teaspoon twice daily with warm water or milk."
  },
  {
    id: "memory-focus-blend",
    name: "Memory & Focus Blend",
    category: "Health & Wellness",
    description: "Enhance cognitive function naturally with ginkgo and gotu kola.",
    price: 320,
    priceDisplay: "R 320",
    images: ["/images/IMG_7223.webp", "/images/IMG_7229.webp", "/images/IMG_7230.webp"],
    icon: Star,
    inStock: true,
    benefits: ["Improves memory", "Enhances focus", "Supports brain health"],
    ingredients: ["Ginkgo Biloba", "Gotu Kola", "Bacopa Monnieri", "Rosemary"],
    usage: "Take 1 teaspoon daily in the morning with water or tea."
  },
  {
    id: "weight-management-tea",
    name: "Weight Management Tea",
    category: "Health & Wellness",
    description: "Support healthy weight management with green tea and garcinia.",
    price: 260,
    priceDisplay: "R 260",
    images: ["/images/IMG_7225.webp", "/images/IMG_7231.webp"],
    icon: Leaf,
    inStock: true,
    benefits: ["Boosts metabolism", "Supports weight loss", "Natural appetite control"],
    ingredients: ["Green Tea", "Garcinia Cambogia", "Oolong Tea", "Chromium"],
    usage: "Steep 1 teaspoon in hot water, drink 30 minutes before meals."
  },
  {
    id: "liver-detox-formula",
    name: "Liver Detox Formula",
    category: "Health & Wellness",
    description: "Cleanse and support liver function with milk thistle and dandelion.",
    price: 285,
    priceDisplay: "R 285",
    images: ["/images/IMG_7226.webp", "/images/IMG_7232.webp", "/images/IMG_7233.webp"],
    icon: Heart,
    inStock: true,
    benefits: ["Supports liver health", "Natural detoxification", "Improves digestion"],
    ingredients: ["Milk Thistle", "Dandelion", "Artichoke", "Turmeric"],
    usage: "Take 1-2 teaspoons daily on empty stomach."
  },
  {
    id: "kidney-support-blend",
    name: "Kidney Support Blend",
    category: "Health & Wellness",
    description: "Support kidney function and urinary health naturally.",
    price: 275,
    priceDisplay: "R 275",
    images: ["/images/IMG_7227.webp", "/images/IMG_7234.webp"],
    icon: Heart,
    inStock: true,
    benefits: ["Supports kidney function", "Promotes urinary health", "Natural diuretic"],
    ingredients: ["Cranberry", "Juniper Berry", "Uva Ursi", "Corn Silk"],
    usage: "Take 1 teaspoon twice daily with plenty of water."
  },
  {
    id: "respiratory-health-tea",
    name: "Respiratory Health Tea",
    category: "Health & Wellness",
    description: "Support breathing and lung health with eucalyptus and thyme.",
    price: 230,
    priceDisplay: "R 230",
    images: ["/images/IMG_7228.webp", "/images/IMG_7235.webp", "/images/IMG_7250.webp"],
    icon: Leaf,
    inStock: true,
    benefits: ["Supports respiratory health", "Clears airways", "Soothes throat"],
    ingredients: ["Eucalyptus", "Thyme", "Mullein", "Licorice Root"],
    usage: "Steep 1 teaspoon in hot water, drink 2-3 times daily."
  },
  {
    id: "stress-anxiety-relief",
    name: "Stress & Anxiety Relief",
    category: "Health & Wellness",
    description: "Natural stress relief with ashwagandha and holy basil.",
    price: 295,
    priceDisplay: "R 295",
    images: ["/images/IMG_7229.webp", "/images/IMG_7251.webp"],
    icon: Heart,
    inStock: true,
    benefits: ["Reduces stress", "Calms anxiety", "Balances mood"],
    ingredients: ["Ashwagandha", "Holy Basil", "Lemon Balm", "Magnesium"],
    usage: "Take 1 teaspoon daily, preferably in the evening."
  },
  {
    id: "bone-joint-strength",
    name: "Bone & Joint Strength",
    category: "Health & Wellness",
    description: "Support bone density and joint health with calcium-rich herbs.",
    price: 315,
    priceDisplay: "R 315",
    images: ["/images/IMG_7230.webp", "/images/IMG_7252.webp", "/images/IMG_7253.webp"],
    icon: Shield,
    inStock: true,
    benefits: ["Strengthens bones", "Supports joint health", "Rich in minerals"],
    ingredients: ["Horsetail", "Nettle", "Alfalfa", "Calcium Carbonate"],
    usage: "Take 1-2 teaspoons daily with meals."
  },

  // Wealth & Prosperity (20 products)
  {
    id: "prosperity-attraction-blend",
    name: "Prosperity Attraction Blend",
    category: "Wealth & Prosperity",
    description: "Traditional herbs believed to attract abundance and financial success.",
    price: 350,
    priceDisplay: "R 350",
    images: ["/images/IMG_7231.webp", "/images/IMG_7254.webp", "/images/IMG_7255.webp"],
    icon: Sparkles,
    inStock: true,
    benefits: ["Attracts prosperity", "Enhances business success", "Traditional wisdom"],
    ingredients: ["Cinnamon", "Bay Leaves", "Basil", "Mint", "Gold Dust"],
    usage: "Burn as incense during meditation or carry in a green pouch."
  },
  {
    id: "business-success-formula",
    name: "Business Success Formula",
    category: "Wealth & Prosperity",
    description: "Enhance business opportunities and professional growth.",
    price: 380,
    priceDisplay: "R 380",
    images: ["/images/IMG_7232.webp", "/images/IMG_7256.webp"],
    icon: Sparkles,
    inStock: true,
    benefits: ["Boosts business luck", "Attracts opportunities", "Enhances leadership"],
    ingredients: ["Bergamot", "Frankincense", "Cedar", "Allspice"],
    usage: "Use in office space or carry during important meetings."
  },
  {
    id: "money-drawing-herbs",
    name: "Money Drawing Herbs",
    category: "Wealth & Prosperity",
    description: "Traditional African herbs for financial attraction and abundance.",
    price: 320,
    priceDisplay: "R 320",
    images: ["/images/IMG_7233.webp", "/images/IMG_7257.webp", "/images/IMG_7258.webp"],
    icon: Sparkles,
    inStock: true,
    benefits: ["Attracts money", "Financial abundance", "Wealth magnetism"],
    ingredients: ["Patchouli", "Vetiver", "Cinnamon", "Clove", "Nutmeg"],
    usage: "Sprinkle around workspace or add to wallet/purse."
  },
  {
    id: "career-advancement-blend",
    name: "Career Advancement Blend",
    category: "Wealth & Prosperity",
    description: "Support career growth and professional recognition.",
    price: 340,
    priceDisplay: "R 340",
    images: ["/images/IMG_7234.webp", "/images/IMG_7259.webp"],
    icon: Star,
    inStock: true,
    benefits: ["Career growth", "Professional recognition", "Leadership qualities"],
    ingredients: ["Bay Leaves", "Rosemary", "Thyme", "Sage"],
    usage: "Burn before job interviews or important presentations."
  },
  {
    id: "abundance-manifestation",
    name: "Abundance Manifestation",
    category: "Wealth & Prosperity",
    description: "Manifest abundance in all areas of life through traditional herbs.",
    price: 360,
    priceDisplay: "R 360",
    images: ["/images/IMG_7235.webp", "/images/IMG_7260.webp", "/images/IMG_7261.webp"],
    icon: Sparkles,
    inStock: true,
    benefits: ["Manifests abundance", "Attracts opportunities", "Positive mindset"],
    ingredients: ["Orange Peel", "Cinnamon", "Star Anise", "Cardamom"],
    usage: "Use during full moon rituals or daily meditation."
  }
];

// Icon mapping for additional products
const iconMap = {
  Heart,
  Sparkles,
  Shield,
  Leaf,
  Star,
  Zap
};

// Convert string icons to components and combine all products
const processedAdditionalProducts = additionalProducts.map(product => ({
  ...product,
  icon: iconMap[product.icon as keyof typeof iconMap] || Heart
}));

// Combine all products (25 base + 75+ additional = 100+ total)
const allProductsCombined = [...allProducts, ...processedAdditionalProducts];

const Products = () => {
  useScrollToTopOnMount();
  const { addToCart, getItemQuantity } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(allProductsCombined.map(p => p.category))];
    return ['All', ...uniqueCategories];
  }, []);

  // Filter products by category
  const filteredProducts = useMemo(() => {
    return selectedCategory === 'All' 
      ? allProductsCombined 
      : allProductsCombined.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  // Handle view details
  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setCurrentImageIndex(0);
    setQuantity(1);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setCurrentImageIndex(0);
    setQuantity(1);
  };

  const handleAddToCart = (product: Product, qty = 1) => {
    console.log('Adding to cart:', product, 'quantity:', qty);
    addToCart(product, qty);
    toast.success(`Added ${qty} ${product.name} to cart!`);
  };

  // Carousel navigation
  const nextCategory = () => {
    setCarouselIndex((prev) => (prev + 1) % categories.length);
    setSelectedCategory(categories[(carouselIndex + 1) % categories.length]);
  };

  const prevCategory = () => {
    const newIndex = carouselIndex === 0 ? categories.length - 1 : carouselIndex - 1;
    setCarouselIndex(newIndex);
    setSelectedCategory(categories[newIndex]);
  };

  const goToCategory = (index: number) => {
    setCarouselIndex(index);
    setSelectedCategory(categories[index]);
  };


  return (
    <div className="min-h-screen bg-gradient-earth">
      <SEO 
        title="Premium African Herbal Products | 100+ Natural Remedies | Mamoe Gabhadiya"
        description="Shop 100+ authentic African herbal products online. Natural herbs for health, wealth, beauty & traditional healing. Fast delivery across South Africa & Zimbabwe."
        keywords="african herbs, herbal products, natural health, traditional medicine, wellness herbs"
        url="https://mamoegabhadiya.com/products"
      />
      
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(/images/IMG_7213.webp)`,
              filter: "brightness(0.5)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-accent/40" />
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Our Natural Products
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/95 max-w-2xl mx-auto">
              Discover 100+ authentic herbal solutions crafted with traditional African wisdom
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Category Carousel */}
            <div className="relative mb-12">
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevCategory}
                  className="flex-shrink-0 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:bg-background mr-4"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                
                <div className="flex-1 overflow-hidden">
                  <div 
                    className="flex gap-4 transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${carouselIndex * 200}px)` }}
                  >
                    {categories.map((category, index) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        onClick={() => {
                          setSelectedCategory(category);
                          setCarouselIndex(index);
                        }}
                        className="flex-shrink-0 flex items-center gap-2 whitespace-nowrap"
                      >
                        {category}
                        <Badge variant="secondary" className="ml-2">
                          {category === 'All' ? allProductsCombined.length : allProductsCombined.filter(p => p.category === category).length}
                        </Badge>
                      </Button>
                    ))}
                  </div>
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextCategory}
                  className="flex-shrink-0 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:bg-background ml-4"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => {
                const IconComponent = product.icon;
                
                return (
                  <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="relative mb-4">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-48 object-cover rounded-lg"
                          loading="lazy"
                        />
                        <div className="absolute top-2 right-2">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        {product.images.length > 1 && (
                          <Badge variant="secondary" className="absolute top-2 left-2">
                            +{product.images.length - 1} more
                          </Badge>
                        )}
                        {getItemQuantity(product.id) > 0 && (
                          <Badge variant="default" className="absolute bottom-2 right-2">
                            {getItemQuantity(product.id)} in cart
                          </Badge>
                        )}
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                          <Badge variant="outline" className="mt-1">
                            {product.category}
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {product.description}
                        </p>
                        
                        <div className="flex items-center justify-between pt-2">
                          <span className="text-2xl font-bold text-primary">
                            {product.priceDisplay}
                          </span>
                          <Badge variant={product.inStock ? "default" : "secondary"}>
                            {product.inStock ? "In Stock" : "Out of Stock"}
                          </Badge>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button 
                            className="flex-1" 
                            onClick={() => handleViewDetails(product)}
                            disabled={!product.inStock}
                          >
                            View Details
                          </Button>
                          <Button 
                            size="sm"
                            onClick={() => handleAddToCart(product)}
                            disabled={!product.inStock}
                            className="px-3"
                          >
                            <CartIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Stats Section */}
            <div className="mt-16 text-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">{allProductsCombined.length}+</div>
                  <div className="text-muted-foreground">Products</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">{categories.length - 1}</div>
                  <div className="text-muted-foreground">Categories</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-muted-foreground">Natural</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">2020</div>
                  <div className="text-muted-foreground">Since</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Shopping Cart */}
      <ShoppingCart />

      {/* Product Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                  <selectedProduct.icon className="h-8 w-8 text-primary" />
                  {selectedProduct.name}
                </DialogTitle>
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Product Image Gallery */}
                <div className="space-y-4">
                  <div className="relative">
                    <img
                      src={selectedProduct.images[currentImageIndex]}
                      alt={`${selectedProduct.name} - Image ${currentImageIndex + 1}`}
                      className="w-full h-80 object-cover rounded-lg"
                    />
                    <Badge 
                      variant={selectedProduct.inStock ? "default" : "secondary"}
                      className="absolute top-4 right-4"
                    >
                      {selectedProduct.inStock ? "In Stock" : "Out of Stock"}
                    </Badge>
                    
                    {/* Image Navigation Dots */}
                    {selectedProduct.images.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {selectedProduct.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Image Thumbnails */}
                  {selectedProduct.images.length > 1 && (
                    <div className="flex space-x-2 overflow-x-auto">
                      {selectedProduct.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`${selectedProduct.name} - Thumbnail ${index + 1}`}
                          className={`w-20 h-20 object-cover rounded cursor-pointer transition-all ${
                            index === currentImageIndex ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                  <div>
                    <Badge variant="outline" className="mb-3">
                      {selectedProduct.category}
                    </Badge>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {selectedProduct.description}
                    </p>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-primary">
                        {selectedProduct.priceDisplay}
                      </span>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {selectedProduct.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ingredients */}
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Leaf className="h-5 w-5 text-primary" />
                      Ingredients
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.ingredients.map((ingredient, index) => (
                        <Badge key={index} variant="secondary" className="text-sm">
                          {ingredient}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Usage Instructions */}
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Heart className="h-5 w-5 text-primary" />
                      Usage Instructions
                    </h4>
                    <p className="text-muted-foreground bg-muted/50 p-4 rounded-lg">
                      {selectedProduct.usage}
                    </p>
                  </div>

                  {/* Quantity Selector */}
                  <div className="flex items-center space-x-4">
                    <Label>Quantity:</Label>
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center font-medium">{quantity}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      className="flex-1" 
                      onClick={() => {
                        handleAddToCart(selectedProduct, quantity);
                        handleCloseModal();
                      }}
                      disabled={!selectedProduct.inStock}
                    >
                      <CartIcon className="h-4 w-4 mr-2" />
                      Add {quantity} to Cart
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      disabled={!selectedProduct.inStock}
                    >
                      Order via WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Products;
