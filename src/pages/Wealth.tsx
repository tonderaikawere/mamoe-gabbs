import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Sparkles, DollarSign, Target, Gem, Star } from "lucide-react";
import { Link } from "react-router-dom";
import wealthIcon from "@/assets/wealth-icon.png";

const Wealth = () => {
  const wealthSolutions = [
    {
      icon: TrendingUp,
      title: "Prosperity Herbs",
      description: "Attract abundance and financial success",
      benefits: ["Financial growth", "Business success", "Opportunity attraction", "Wealth mindset"],
    },
    {
      icon: Sparkles,
      title: "Success Blend",
      description: "Support your path to achievement",
      benefits: ["Career advancement", "Goal achievement", "Confidence boost", "Recognition"],
    },
    {
      icon: Gem,
      title: "Abundance Mixture",
      description: "Open doors to new opportunities",
      benefits: ["New opportunities", "Resource flow", "Network expansion", "Growth"],
    },
    {
      icon: Star,
      title: "Good Fortune Mix",
      description: "Enhance positive energy and luck",
      benefits: ["Good luck", "Positive energy", "Favorable outcomes", "Timing"],
    },
    {
      icon: Target,
      title: "Vision & Focus",
      description: "Clarity for your financial goals",
      benefits: ["Mental clarity", "Strategic thinking", "Decision making", "Focus"],
    },
    {
      icon: DollarSign,
      title: "Money Magnet",
      description: "Attract financial opportunities",
      benefits: ["Money flow", "Investment success", "Debt reduction", "Savings growth"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      
      <main className="pt-16">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10" />
          
          <div className="relative container mx-auto px-4 text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <img
                src={wealthIcon}
                alt="Wealth Icon"
                className="w-24 h-24 object-contain animate-float"
              />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
              Wealth & Prosperity
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Natural herbs to support prosperity, abundance, and positive energy
            </p>
          </div>
        </section>

        <section className="py-20 container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Our Prosperity Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ancient herbal wisdom to enhance your path to abundance and success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {wealthSolutions.map((solution, index) => (
              <Card
                key={index}
                className="bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                    <solution.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-card-foreground mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  
                  <div className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Sparkles className="h-3 w-3 text-accent flex-shrink-0" />
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
                    Understanding Prosperity Herbs
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      In African tradition, certain herbs have long been used to attract positive
                      energy, remove obstacles, and create favorable conditions for prosperity and
                      success. These are not magic potions, but natural elements that work with your
                      energy and intentions.
                    </p>
                    <p>
                      Our prosperity herbs are designed to support your efforts by enhancing
                      positive thinking, boosting confidence, and creating an environment conducive
                      to success. They work best when combined with hard work, clear goals, and
                      positive action.
                    </p>
                    <p>
                      We believe that true wealth comes from balance – health, relationships,
                      purpose, and financial security. Our herbs support this holistic approach to
                      abundance, helping you create prosperity in all areas of life.
                    </p>
                  </div>
                  
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      asChild
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      <Link to="/contact">Request Consultation</Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                    >
                      <Link to="/products">View All Products</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-accent to-secondary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <Sparkles className="h-16 w-16 mx-auto mb-6 text-primary-foreground" />
              <h2 className="font-serif text-4xl font-bold mb-6">
                Your Prosperity Journey Starts Here
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/95">
                Combine the power of natural herbs with your dedication and watch your life transform
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-accent hover:bg-primary-foreground/90"
              >
                <Link to="/story">Read Our Success Stories</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Wealth;
