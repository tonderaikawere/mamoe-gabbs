import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Book, Lightbulb, Users, Video, FileText, Calendar } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      icon: Book,
      title: "Herbal Knowledge Base",
      description: "Comprehensive guides on African herbs and their traditional uses",
      topics: ["Herb identification", "Traditional uses", "Safety guidelines", "Storage tips"],
    },
    {
      icon: Lightbulb,
      title: "Health & Wellness Tips",
      description: "Practical advice for natural living and holistic wellbeing",
      topics: ["Daily wellness routines", "Natural remedies", "Nutrition guidance", "Lifestyle tips"],
    },
    {
      icon: Video,
      title: "Educational Videos",
      description: "Watch and learn about herbs, their preparation, and usage",
      topics: ["How-to guides", "Product demonstrations", "Expert interviews", "Success stories"],
    },
    {
      icon: Users,
      title: "Community Workshops",
      description: "Join our educational sessions and connect with fellow herb enthusiasts",
      topics: ["Monthly workshops", "Q&A sessions", "Group consultations", "Cultural events"],
    },
    {
      icon: FileText,
      title: "Research & Articles",
      description: "Stay informed with the latest in herbal medicine and natural health",
      topics: ["Scientific studies", "Case studies", "Expert articles", "Health trends"],
    },
    {
      icon: Calendar,
      title: "Seasonal Herb Guide",
      description: "Learn which herbs work best for different seasons and conditions",
      topics: ["Spring herbs", "Summer wellness", "Autumn preparation", "Winter immunity"],
    },
  ];

  const articles = [
    {
      category: "Health",
      title: "5 Natural Ways to Boost Your Immune System",
      excerpt: "Discover powerful African herbs that strengthen your body's natural defenses...",
    },
    {
      category: "Wealth",
      title: "The Connection Between Health and Prosperity",
      excerpt: "Understanding how physical wellbeing influences success and abundance...",
    },
    {
      category: "Lifestyle",
      title: "Starting Your Day with Natural Wellness",
      excerpt: "Create a morning routine that incorporates herbal teas and natural remedies...",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      
      <main className="pt-16">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-10" />
          
          <div className="relative container mx-auto px-4 text-center animate-fade-in">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
              Learning Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expand your knowledge of natural herbs and holistic wellness
            </p>
          </div>
        </section>

        <section className="py-20 container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Our Educational Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in empowering through education. Learn how to use herbs safely and effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <resource.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-card-foreground mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  
                  <div className="space-y-2">
                    {resource.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{topic}</span>
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
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
                Featured Articles
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Learn from our experts about natural health and wellness
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {articles.map((article, index) => (
                <Card
                  key={index}
                  className="bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-6">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                      {article.category}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-card-foreground mb-3">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{article.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card shadow-soft animate-fade-in">
              <CardContent className="p-8 md:p-12">
                <h2 className="font-serif text-3xl font-bold text-card-foreground mb-6 text-center">
                  Safe Herbal Use Guidelines
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Consult Before Use</h3>
                    <p>
                      Always consult with our herbalists or your healthcare provider before starting
                      any new herbal regimen, especially if you're pregnant, nursing, or taking
                      medications.
                    </p>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Start Slowly</h3>
                    <p>
                      Begin with small amounts to see how your body responds. Every person is
                      unique, and what works for others may need adjustment for you.
                    </p>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Quality Matters</h3>
                    <p>
                      Always source herbs from trusted suppliers like Mamoe Gabhadiya. Quality and
                      purity are essential for safety and effectiveness.
                    </p>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Storage & Preparation</h3>
                    <p>
                      Store herbs properly in cool, dry places. Follow preparation instructions
                      carefully to ensure you get the full benefits.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center animate-fade-in">
            <h2 className="font-serif text-4xl font-bold mb-6">
              Want to Learn More?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/95">
              Subscribe to our newsletter for regular tips, guides, and herbal wisdom
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
