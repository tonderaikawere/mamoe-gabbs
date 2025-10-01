import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollToTopOnMount } from "@/hooks/use-scroll-to-top";
import { Target, Eye, CheckCircle, Heart, Users, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "@/assets/about-landscape.jpg";

const About = () => {
  useScrollToTopOnMount();
  
  const values = [
    { icon: Heart, title: "Care", description: "We put people first in everything we do" },
    { icon: CheckCircle, title: "Integrity", description: "Honesty and transparency guide us" },
    { icon: Users, title: "Community", description: "We grow together and support one another" },
    { icon: Globe, title: "Sustainability", description: "Respecting nature as the source of all healing" },
  ];

  const goals = [
    "Expand our presence across Africa",
    "Promote herbal knowledge through workshops and guidance",
    "Offer affordable herbal products for all communities",
    "Create a platform where health and wealth go hand in hand",
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
              About Mamoe Gabhadiya
            </h1>
            <p className="text-xl text-primary-foreground/95 max-w-2xl mx-auto">
              Spicing life naturally since 2020
            </p>
          </div>
        </section>

        <section className="py-20 container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Mamoe Gabhadiya was founded in 2020 out of a simple but powerful passion: to help
                people live healthier, fuller, and more meaningful lives through the power of natural
                herbs. What started as a vision by our founder, Lee, has now grown into a trusted
                herbal company with branches in South Africa, Zimbabwe, and Botswana.
              </p>
              <p>
                We believe nature provides everything we need for our health, wealth, and wellbeing.
                That's why our products are made from carefully selected herbs that are safe,
                effective, and free from harmful side effects.
              </p>
              <p>
                At Mamoe Gabhadiya, we don't just sell herbs – we guide, teach, and support you on
                your journey to better living.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <Card className="bg-gradient-card shadow-soft animate-fade-in-left">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-card-foreground mb-4">
                    Our Vision
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To be a leading herbal brand in Africa, trusted for safe and effective natural
                    remedies that empower communities to live healthier, wealthier, and more
                    fulfilling lives.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-soft animate-fade-in-right">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                    <Target className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-card-foreground mb-4">
                    Our Mission
                  </h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span>Provide high-quality natural herbs for better health</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span>Educate and support safe herbal use</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span>Expand across Africa with natural solutions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-card-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We collaborate with leading organizations to bring you the finest herbal solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-card-foreground mb-2">
                  African Botanical Society
                </h3>
                <p className="text-sm text-muted-foreground">
                  Research partnership for sustainable herb cultivation and traditional knowledge preservation across Africa.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-card-foreground mb-2">
                  Community Health Networks
                </h3>
                <p className="text-sm text-muted-foreground">
                  Collaboration with local health practitioners to provide integrated wellness solutions in rural communities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-card-foreground mb-2">
                  Quality Assurance Labs
                </h3>
                <p className="text-sm text-muted-foreground">
                  Partnership with certified laboratories to ensure product safety, purity, and potency testing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-card-foreground mb-2">
                  Traditional Healers Council
                </h3>
                <p className="text-sm text-muted-foreground">
                  Working with respected traditional healers to maintain authentic preparation methods and cultural integrity.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-card-foreground mb-2">
                  Sustainable Farming Co-ops
                </h3>
                <p className="text-sm text-muted-foreground">
                  Direct partnerships with organic farming cooperatives to ensure ethical sourcing and fair trade practices.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-card-foreground mb-2">
                  Research Universities
                </h3>
                <p className="text-sm text-muted-foreground">
                  Collaborative research with leading universities to study herbal efficacy and develop new applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h2 className="font-serif text-4xl font-bold mb-8 text-center">Our Goals</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {goals.map((goal, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 animate-fade-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5 text-accent" />
                    <p className="text-lg">{goal}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
