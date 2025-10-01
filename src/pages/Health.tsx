import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Activity, Shield, Zap, Leaf, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import healthIcon from "@/assets/health-icon.png";

const Health = () => {
  const healthSolutions = [
    {
      icon: Shield,
      title: "Immune System Support",
      description: "Strengthen your body's natural defenses",
      benefits: ["Enhanced immunity", "Disease prevention", "Faster recovery", "Overall vitality"],
    },
    {
      icon: Zap,
      title: "Energy & Vitality",
      description: "Natural energy boost without side effects",
      benefits: ["Sustained energy", "Mental clarity", "Physical stamina", "Reduced fatigue"],
    },
    {
      icon: Heart,
      title: "Heart & Circulation",
      description: "Support cardiovascular health naturally",
      benefits: ["Better circulation", "Heart health", "Blood pressure support", "Vitality boost"],
    },
    {
      icon: Activity,
      title: "Digestive Wellness",
      description: "Promote healthy digestion and gut health",
      benefits: ["Better digestion", "Gut health", "Nutrient absorption", "Comfort & relief"],
    },
    {
      icon: Sun,
      title: "Mental Wellness",
      description: "Support emotional balance and clarity",
      benefits: ["Stress relief", "Mental clarity", "Emotional balance", "Better sleep"],
    },
    {
      icon: Leaf,
      title: "Detox & Cleanse",
      description: "Natural body cleansing and renewal",
      benefits: ["Body detox", "Skin health", "Energy renewal", "System reset"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      
      <main className="pt-16">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-10" />
          
          <div className="relative container mx-auto px-4 text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <img
                src={healthIcon}
                alt="Health Icon"
                className="w-24 h-24 object-contain animate-float"
              />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
              Health Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Natural herbal remedies to boost your immunity, energy, and overall wellness
            </p>
          </div>
        </section>

        <section className="py-20 container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Our Health Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Carefully crafted herbal blends to support your health journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {healthSolutions.map((solution, index) => (
              <Card
                key={index}
                className="bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <solution.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-card-foreground mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  
                  <div className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Leaf className="h-3 w-3 text-primary flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-card shadow-soft animate-fade-in">
                <CardContent className="p-8 md:p-12">
                  <h2 className="font-serif text-3xl font-bold text-card-foreground mb-6 text-center">
                    The Mamoe Gabhadiya Health Approach
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      We believe that nature has provided everything we need to maintain optimal
                      health. Our health solutions are designed to work with your body's natural
                      healing processes, not against them.
                    </p>
                    <p>
                      Each herbal blend is carefully formulated using traditional African wisdom
                      passed down through generations, combined with modern understanding of herbal
                      properties. We select only the highest quality herbs, ensuring they are safe,
                      pure, and effective.
                    </p>
                    <p>
                      Our herbs have no harmful side effects because they work in harmony with your
                      body. We also provide guidance and education on proper usage to help you get
                      the best results from our products.
                    </p>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Button
                      asChild
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Link to="/contact">Schedule a Consultation</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center animate-fade-in">
            <h2 className="font-serif text-4xl font-bold mb-6">
              Start Your Health Journey Today
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/95">
              Let nature guide you to better health with our safe and effective herbal solutions
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Health;
