import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollToTopOnMount } from "@/hooks/use-scroll-to-top";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, MapPin, Users, TrendingUp } from "lucide-react";
import aboutImage from "@/assets/about-landscape.jpg";

const Story = () => {
  useScrollToTopOnMount();
  
  const timeline = [
    {
      year: "2020",
      icon: Lightbulb,
      title: "The Vision Begins",
      description: "Lee founded Mamoe Gabhadiya with a simple but powerful vision: to help people live healthier, fuller lives through natural herbs.",
    },
    {
      year: "2021",
      icon: MapPin,
      title: "First Branch Opens",
      description: "Our first official branch opened in South Africa, serving our initial community with carefully selected herbal products.",
    },
    {
      year: "2022",
      icon: Users,
      title: "Growing Community",
      description: "Word spread about our effective herbal solutions, and we expanded to Zimbabwe, touching more lives with natural remedies.",
    },
    {
      year: "2023",
      icon: TrendingUp,
      title: "Regional Expansion",
      description: "Mamoe Gabhadiya opened in Botswana, establishing ourselves as a trusted herbal brand across three African nations.",
    },
    {
      year: "2024",
      icon: TrendingUp,
      title: "Digital Transformation",
      description: "We launched our comprehensive online presence, making our herbal solutions accessible to more communities across Africa.",
    },
    {
      year: "2025",
      icon: TrendingUp,
      title: "Future Vision",
      description: "Looking ahead, we continue to expand our reach, educate communities, and empower lives with natural herbal solutions for health, wealth, and wellbeing.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      
      <main className="pt-16">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${aboutImage})`,
              filter: "brightness(0.5)",
            }}
          />
          <div className="absolute inset-0 bg-primary/40" />
          
          <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
              Our Story
            </h1>
            <p className="text-xl text-primary-foreground/95 max-w-2xl mx-auto">
              From a simple vision to a regional herbal movement
            </p>
          </div>
        </section>

        <section className="py-20 container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
            <Card className="bg-gradient-card shadow-soft">
              <CardContent className="p-8 md:p-12">
                <h2 className="font-serif text-3xl font-bold text-card-foreground mb-6">
                  The Founder's Journey
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    Lee's journey began with a personal experience that changed everything. Having
                    witnessed the powerful healing properties of natural herbs firsthand, Lee
                    realized that many people were suffering from ailments that could be helped by
                    nature's pharmacy – if only they knew about it.
                  </p>
                  <p>
                    Growing up surrounded by the rich herbal traditions of Africa, Lee learned from
                    elders who possessed generations of botanical wisdom. This knowledge, passed down
                    through centuries, held the keys to health and wellbeing that modern medicine
                    often overlooked.
                  </p>
                  <p>
                    In 2020, despite the challenges of a global pandemic, Lee took a leap of faith
                    and founded Mamoe Gabhadiya. The name itself reflects the mission: bringing the
                    "spice" of life back to people through natural, safe, and effective herbal
                    solutions.
                  </p>
                  <p>
                    What started as a small operation has blossomed into a trusted brand across
                    South Africa, Zimbabwe, and Botswana, touching thousands of lives with the
                    healing power of herbs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Our Journey Through Time
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a single vision to serving communities across three nations
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border hidden md:block" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative animate-fade-in ${
                    index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:text-right"
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto"}`}>
                    <Card className="bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="font-bold text-2xl text-accent mb-2">{item.year}</div>
                        <h3 className="font-serif text-xl font-bold text-card-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center animate-fade-in">
            <h2 className="font-serif text-4xl font-bold mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/95">
              Join thousands who have transformed their lives with Mamoe Gabhadiya's natural herbal
              solutions
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Story;
