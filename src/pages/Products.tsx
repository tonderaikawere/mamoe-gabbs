import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollToTopOnMount } from "@/hooks/use-scroll-to-top";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Heart, Sparkles, Shield, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import productsImage from "@/assets/products-hero.jpg";
import immuneBoosterImg from "@/assets/products/immune-booster.jpg";
import energyVitalityImg from "@/assets/products/energy-vitality.jpg";
import digestiveHealthImg from "@/assets/products/digestive-health.jpg";
import sleepRelaxationImg from "@/assets/products/sleep-relaxation.jpg";
import bloodPressureImg from "@/assets/products/blood-pressure.jpg";
import prosperityBlendImg from "@/assets/products/prosperity-blend.jpg";
import protectionHerbsImg from "@/assets/products/protection-herbs.jpg";
import beautySkincareImg from "@/assets/products/beauty-skincare.jpg";
import hairGrowthImg from "@/assets/products/hair-growth.jpg";
import detoxBlendImg from "@/assets/products/detox-blend.jpg";
import stressReliefImg from "@/assets/products/stress-relief.jpg";
import traditionalHealingImg from "@/assets/products/traditional-healing.jpg";

interface Product {
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  icon: typeof Heart;
}

const Products = () => {
  useScrollToTopOnMount();
  
  const healthProducts: Product[] = [
    // Health & Wellness
    { 
      name: "Immune Booster Blend", 
      category: "Health & Wellness", 
      description: "Powerful blend to strengthen your natural defenses. Contains echinacea and elderberry.",
      price: "R 250",
      image: immuneBoosterImg,
      icon: Heart 
    },
    { 
      name: "Energy & Vitality Mix", 
      category: "Health & Wellness", 
      description: "Natural energy boost without caffeine jitters. Includes ginseng and rhodiola.",
      price: "R 280",
      image: energyVitalityImg,
      icon: Heart 
    },
    { 
      name: "Digestive Health Herbs", 
      category: "Health & Wellness", 
      description: "Soothe your stomach naturally. Ginger, peppermint, and fennel blend.",
      price: "R 220",
      image: digestiveHealthImg,
      icon: Heart 
    },
    { 
      name: "Sleep & Relaxation Tea", 
      category: "Health & Wellness", 
      description: "Drift into peaceful sleep. Chamomile, lavender, and valerian root.",
      price: "R 240",
      image: sleepRelaxationImg,
      icon: Heart 
    },
    { 
      name: "Blood Pressure Balance", 
      category: "Health & Wellness", 
      description: "Support cardiovascular health naturally. Hawthorn and hibiscus.",
      price: "R 290",
      image: bloodPressureImg,
      icon: Heart 
    },
    { 
      name: "Diabetes Support Blend", 
      category: "Health & Wellness", 
      description: "Help manage blood sugar levels naturally. Bitter melon and fenugreek.",
      price: "R 310",
      image: immuneBoosterImg,
      icon: Heart 
    },
    { 
      name: "Heart Health Formula", 
      category: "Health & Wellness", 
      description: "Keep your heart strong and healthy. Garlic and omega-rich herbs.",
      price: "R 300",
      image: bloodPressureImg,
      icon: Heart 
    },
    { 
      name: "Joint & Bone Strength", 
      category: "Health & Wellness", 
      description: "Reduce inflammation and improve mobility. Turmeric and boswellia.",
      price: "R 320",
      image: digestiveHealthImg,
      icon: Heart 
    },
    { 
      name: "Respiratory Relief Mix", 
      category: "Health & Wellness", 
      description: "Breathe easier naturally. Eucalyptus, thyme, and mullein.",
      price: "R 260",
      image: energyVitalityImg,
      icon: Heart 
    },
    { 
      name: "Anti-Inflammatory Blend", 
      category: "Health & Wellness", 
      description: "Natural inflammation fighter. Ginger, turmeric, and black pepper.",
      price: "R 275",
      image: immuneBoosterImg,
      icon: Heart 
    },
    { 
      name: "Memory & Focus Herbs", 
      category: "Health & Wellness", 
      description: "Enhance mental clarity and concentration. Ginkgo and bacopa.",
      price: "R 295",
      image: energyVitalityImg,
      icon: Heart 
    },
    { 
      name: "Liver Detox Formula", 
      category: "Health & Wellness", 
      description: "Support your liver's natural cleansing. Milk thistle and dandelion.",
      price: "R 285",
      image: detoxBlendImg,
      icon: Heart 
    },
    { 
      name: "Kidney Support Mix", 
      category: "Health & Wellness", 
      description: "Gentle kidney cleanse and support. Cranberry and nettle leaf.",
      price: "R 270",
      image: detoxBlendImg,
      icon: Heart 
    },
    { 
      name: "Pain Relief Blend", 
      category: "Health & Wellness", 
      description: "Natural pain management. Willow bark and devil's claw.",
      price: "R 305",
      image: stressReliefImg,
      icon: Heart 
    },
    { 
      name: "Headache Relief Tea", 
      category: "Health & Wellness", 
      description: "Soothe tension headaches naturally. Peppermint and feverfew.",
      price: "R 230",
      image: sleepRelaxationImg,
      icon: Heart 
    },

    // Wealth & Prosperity
    { 
      name: "Prosperity Blend", 
      category: "Wealth & Prosperity", 
      description: "Attract abundance and financial blessings. Traditional wealth herbs.",
      price: "R 350",
      image: prosperityBlendImg,
      icon: Sparkles 
    },
    { 
      name: "Success & Abundance Mix", 
      category: "Wealth & Prosperity", 
      description: "Open doors to new opportunities. Prosperity-drawing botanicals.",
      price: "R 380",
      image: prosperityBlendImg,
      icon: Sparkles 
    },
    { 
      name: "Protection Herbs", 
      category: "Wealth & Prosperity", 
      description: "Shield against negative energy. Sage and protective plants.",
      price: "R 320",
      image: protectionHerbsImg,
      icon: Sparkles 
    },
    { 
      name: "Opportunity Attraction", 
      category: "Wealth & Prosperity", 
      description: "Draw lucky breaks and good fortune. Traditional African herbs.",
      price: "R 340",
      image: prosperityBlendImg,
      icon: Sparkles 
    },
    { 
      name: "Business Success Formula", 
      category: "Wealth & Prosperity", 
      description: "Support your entrepreneurial journey. Confidence and clarity blend.",
      price: "R 390",
      image: prosperityBlendImg,
      icon: Sparkles 
    },
    { 
      name: "Money Drawing Blend", 
      category: "Wealth & Prosperity", 
      description: "Ancient recipe for financial attraction. Time-tested formula.",
      price: "R 360",
      image: prosperityBlendImg,
      icon: Sparkles 
    },
    { 
      name: "Good Luck Herbs", 
      category: "Wealth & Prosperity", 
      description: "Enhance fortune in all areas of life. Lucky botanicals.",
      price: "R 330",
      image: protectionHerbsImg,
      icon: Sparkles 
    },
    { 
      name: "Career Advancement Mix", 
      category: "Wealth & Prosperity", 
      description: "Rise to the top naturally. Professional success herbs.",
      price: "R 370",
      image: prosperityBlendImg,
      icon: Sparkles 
    },
    { 
      name: "Financial Breakthrough", 
      category: "Wealth & Prosperity", 
      description: "Break through money blocks. Abundance consciousness herbs.",
      price: "R 400",
      image: prosperityBlendImg,
      icon: Sparkles 
    },
    { 
      name: "Debt Removal Blend", 
      category: "Wealth & Prosperity", 
      description: "Clear financial obstacles naturally. Liberation herbs.",
      price: "R 355",
      image: protectionHerbsImg,
      icon: Sparkles 
    },
    { 
      name: "Investment Success Mix", 
      category: "Wealth & Prosperity", 
      description: "Make wise financial decisions. Clarity and intuition herbs.",
      price: "R 385",
      image: prosperityBlendImg,
      icon: Sparkles 
    },
    { 
      name: "Spiritual Prosperity", 
      category: "Wealth & Prosperity", 
      description: "Align with universal abundance. Soul and wealth connection.",
      price: "R 345",
      image: protectionHerbsImg,
      icon: Sparkles 
    },

    // Lifestyle Enhancement
    { 
      name: "Beauty & Skin Care", 
      category: "Lifestyle Enhancement", 
      description: "Radiant skin from within. Rose, hibiscus, and collagen-boosting herbs.",
      price: "R 295",
      image: beautySkincareImg,
      icon: Leaf 
    },
    { 
      name: "Hair Growth Formula", 
      category: "Lifestyle Enhancement", 
      description: "Strengthen and grow luscious hair. Rosemary, nettle, and horsetail.",
      price: "R 310",
      image: hairGrowthImg,
      icon: Leaf 
    },
    { 
      name: "Natural Detox Blend", 
      category: "Lifestyle Enhancement", 
      description: "Full body cleanse and renewal. Gentle yet effective detox herbs.",
      price: "R 280",
      image: detoxBlendImg,
      icon: Leaf 
    },
    { 
      name: "Stress Relief Mix", 
      category: "Lifestyle Enhancement", 
      description: "Find your calm naturally. Adaptogenic stress-busting herbs.",
      price: "R 265",
      image: stressReliefImg,
      icon: Leaf 
    },
    { 
      name: "Weight Management Tea", 
      category: "Lifestyle Enhancement", 
      description: "Support healthy metabolism naturally. Green tea and garcinia.",
      price: "R 290",
      image: detoxBlendImg,
      icon: Leaf 
    },
    { 
      name: "Anti-Aging Blend", 
      category: "Lifestyle Enhancement", 
      description: "Turn back the clock naturally. Antioxidant-rich youth herbs.",
      price: "R 325",
      image: beautySkincareImg,
      icon: Leaf 
    },
    { 
      name: "Skin Glow Formula", 
      category: "Lifestyle Enhancement", 
      description: "Illuminate from within. Vitamin C rich botanical blend.",
      price: "R 300",
      image: beautySkincareImg,
      icon: Leaf 
    },
    { 
      name: "Acne Treatment Herbs", 
      category: "Lifestyle Enhancement", 
      description: "Clear skin naturally. Antibacterial and healing herbs.",
      price: "R 285",
      image: beautySkincareImg,
      icon: Leaf 
    },
    { 
      name: "Hair Thickness Mix", 
      category: "Lifestyle Enhancement", 
      description: "Fuller, stronger hair naturally. Biotin-rich botanical blend.",
      price: "R 305",
      image: hairGrowthImg,
      icon: Leaf 
    },
    { 
      name: "Cellulite Reduction", 
      category: "Lifestyle Enhancement", 
      description: "Smooth skin naturally. Circulation-boosting herbs.",
      price: "R 295",
      image: detoxBlendImg,
      icon: Leaf 
    },
    { 
      name: "Stretch Mark Blend", 
      category: "Lifestyle Enhancement", 
      description: "Fade marks naturally. Skin regeneration botanicals.",
      price: "R 310",
      image: beautySkincareImg,
      icon: Leaf 
    },
    { 
      name: "Natural Deodorant Mix", 
      category: "Lifestyle Enhancement", 
      description: "Stay fresh naturally. Antibacterial herb blend.",
      price: "R 220",
      image: detoxBlendImg,
      icon: Leaf 
    },
    { 
      name: "Body Cleansing Tea", 
      category: "Lifestyle Enhancement", 
      description: "Purify and refresh. Gentle internal cleanse.",
      price: "R 255",
      image: detoxBlendImg,
      icon: Leaf 
    },

    // Traditional Remedies
    { 
      name: "Traditional Healing Blend", 
      category: "Traditional Remedies", 
      description: "Ancient African healing wisdom. Multi-purpose wellness herbs.",
      price: "R 330",
      image: traditionalHealingImg,
      icon: Shield 
    },
    { 
      name: "Ancestral Wisdom Mix", 
      category: "Traditional Remedies", 
      description: "Connect with ancestral knowledge. Sacred traditional herbs.",
      price: "R 350",
      image: traditionalHealingImg,
      icon: Shield 
    },
    { 
      name: "Cultural Heritage Herbs", 
      category: "Traditional Remedies", 
      description: "Preserve cultural healing traditions. Authentic African botanicals.",
      price: "R 340",
      image: traditionalHealingImg,
      icon: Shield 
    },
    { 
      name: "Elder's Recipe", 
      category: "Traditional Remedies", 
      description: "Time-honored formula passed through generations. Traditional wisdom.",
      price: "R 365",
      image: traditionalHealingImg,
      icon: Shield 
    },
    { 
      name: "Spiritual Cleansing", 
      category: "Traditional Remedies", 
      description: "Purify your spirit and space. Sacred cleansing herbs.",
      price: "R 320",
      image: protectionHerbsImg,
      icon: Shield 
    },
    { 
      name: "Bad Luck Removal", 
      category: "Traditional Remedies", 
      description: "Clear negative patterns. Traditional blessing herbs.",
      price: "R 335",
      image: protectionHerbsImg,
      icon: Shield 
    },
    { 
      name: "Evil Eye Protection", 
      category: "Traditional Remedies", 
      description: "Shield from harmful intent. Protective botanicals.",
      price: "R 325",
      image: protectionHerbsImg,
      icon: Shield 
    },
    { 
      name: "Ancestor Connection", 
      category: "Traditional Remedies", 
      description: "Strengthen spiritual lineage bonds. Sacred connection herbs.",
      price: "R 355",
      image: traditionalHealingImg,
      icon: Shield 
    },
    { 
      name: "Dream Enhancement", 
      category: "Traditional Remedies", 
      description: "Vivid dreams and spiritual insight. Dream work herbs.",
      price: "R 310",
      image: sleepRelaxationImg,
      icon: Shield 
    },
    { 
      name: "Traditional Love Blend", 
      category: "Traditional Remedies", 
      description: "Attract and nurture love naturally. Heart-opening herbs.",
      price: "R 345",
      image: prosperityBlendImg,
      icon: Shield 
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      
      <main className="pt-16">
        <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${productsImage})`,
              filter: "brightness(0.5)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-accent/40" />
          
          <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Our Natural Products
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/95 max-w-2xl mx-auto">
              Discover 50+ authentic herbal solutions crafted with traditional wisdom
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 container mx-auto px-4">
          <div className="text-center mb-10 md:mb-14 animate-fade-in">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Our Complete Range
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Each product is carefully crafted using pure, natural herbs. Click any product to learn more and start your wellness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {healthProducts.map((product, index) => (
              <Card
                key={index}
                className="bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2 animate-fade-in group overflow-hidden flex flex-col h-full"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/90 backdrop-blur-sm">
                    <product.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                
                <CardContent className="p-5 flex flex-col h-full">
                  <div className="mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-lg font-bold text-card-foreground mb-2 line-clamp-2 min-h-[3rem]">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3 overflow-hidden">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                    <Button
                      asChild
                      size="sm"
                      className="bg-primary hover:bg-primary/90 group-hover:scale-105 transition-transform"
                    >
                      <Link to="/order" className="flex items-center gap-2">
                        <ShoppingCart className="h-4 w-4" />
                        Order Now
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-card shadow-soft animate-fade-in border-2 border-primary/20">
                <CardContent className="p-8 md:p-12">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-card-foreground mb-6 text-center">
                    Why Choose Our Herbal Products?
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                    <div className="flex items-start space-x-3">
                      <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">100% Natural</h3>
                        <p className="text-sm">No artificial additives, preservatives, or harmful chemicals</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Safe & Effective</h3>
                        <p className="text-sm">Carefully selected herbs with proven benefits and no side effects</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Sparkles className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Traditional Wisdom</h3>
                        <p className="text-sm">Ancient African knowledge combined with modern understanding</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Leaf className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Sustainable Sourcing</h3>
                        <p className="text-sm">Respecting nature while supporting local communities</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10 text-center">
                    <p className="text-lg mb-6 text-foreground">Ready to experience natural wellness?</p>
                    <Button
                      asChild
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
                    >
                      <Link to="/contact" className="flex items-center gap-2">
                        <ShoppingCart className="h-5 w-5" />
                        Place Your Order Today
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
