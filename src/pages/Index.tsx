import { Link } from "react-router-dom";
import { Leaf, Heart, TrendingUp, Users, ArrowRight, Sparkles, Star, Shield, Award, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useEffect } from "react";
import { useScrollToTopOnMount, scrollToTopImmediate } from "@/hooks/use-scroll-to-top";
import heroImage from "@/assets/hero-herbs.jpg";
import healthIcon from "@/assets/health-icon.png";
import wealthIcon from "@/assets/wealth-icon.png";
import communityIcon from "@/assets/community-icon.png";

const Index = () => {
  const features = [
    {
      icon: Leaf,
      title: "100% Natural Herbs",
      description: "Safe, pure, and effective herbal solutions with no side effects",
    },
    {
      icon: Heart,
      title: "Friendly Support",
      description: "We listen, advise, and guide you with genuine care",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building healthier communities across Africa together",
    },
    {
      icon: Sparkles,
      title: "Trusted Quality",
      description: "Backed by traditional wisdom and modern understanding",
    },
  ];

  const solutions = [
    {
      image: healthIcon,
      title: "Health Solutions",
      description: "Boost immunity, energy, and overall wellness naturally",
      link: "/health",
    },
    {
      image: wealthIcon,
      title: "Wealth & Prosperity",
      description: "Herbs that support positive energy and abundance",
      link: "/wealth",
    },
    {
      image: communityIcon,
      title: "Community Support",
      description: "Join a thriving community of natural wellness",
      link: "/testimonials",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Cape Town, SA",
      text: "Mamoe Gabhadiya's herbs transformed my health naturally. I feel more energetic and balanced.",
      rating: 5,
    },
    {
      name: "David K.",
      location: "Harare, ZW",
      text: "The wealth herbs have brought positive changes to my business. Highly recommend!",
      rating: 5,
    },
    {
      name: "Grace T.",
      location: "Gaborone, BW",
      text: "Amazing quality and genuine care from the team. These herbs really work!",
      rating: 5,
    },
  ];

  const stats = [
    { number: "5000+", label: "Happy Customers" },
    { number: "50+", label: "Natural Products" },
    { number: "4", label: "Countries Served" },
    { number: "5", label: "Years Experience" },
  ];

  useScrollToTopOnMount();

  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "Mamoe Gabhadiya - Natural Herbal Solutions for Health & Prosperity | Spicing Products";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Trusted natural herbs from South Africa, Zimbabwe & Botswana. Safe, effective herbal remedies for health, wealth and wellbeing. Visit our shops in Ottawa Mall & Eeson Building. Founded 2020.');
    }
  }, []);

  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Mamoe Gabhadiya",
    "alternateName": "Mamoe Gabhadiya Herbal Products",
    "url": "https://mamoegabhadiya.com",
    "description": "Premium African herbal products for natural health, wellness, beauty, and traditional healing solutions.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://mamoegabhadiya.com/products?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "LocalBusiness",
      "@id": "https://mamoegabhadiya.com/#business",
      "name": "Mamoe Gabhadiya",
      "image": "https://mamoegabhadiya.com/images/IMG_7213.webp",
      "telephone": "+27814687186",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "ZA",
        "addressRegion": "Gauteng"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -26.2041,
        "longitude": 28.0473
      },
      "openingHours": "Mo-Su 08:00-20:00",
      "priceRange": "R200-R400",
      "servesCuisine": "Herbal Products",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "African Herbal Products",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Health & Wellness Herbs",
              "description": "Natural immune boosters, energy herbs, digestive health, sleep aids"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Product",
              "name": "Wealth & Prosperity Herbs",
              "description": "Traditional prosperity blends, success herbs, protection herbs"
            }
          }
        ]
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-earth">
      <SEO 
        title="Mamoe Gabhadiya - Premium African Herbal Products | Natural Health & Wellness Solutions"
        description="Discover authentic African herbal products for health, wealth, beauty & traditional healing. Premium natural herbs from South Africa & Zimbabwe. Order online with WhatsApp delivery. Immune boosters, energy blends, prosperity herbs & more."
        keywords="african herbal products, natural herbs south africa, traditional medicine zimbabwe, herbal remedies, immune booster herbs, energy herbs, prosperity herbs, beauty herbs, natural healing, traditional african medicine, herbal supplements, organic herbs, natural health products, wellness herbs, medicinal plants, herbal tea, detox herbs, stress relief herbs, anti-inflammatory herbs, digestive herbs, sleep herbs, memory herbs, heart health herbs, blood pressure herbs, diabetes herbs, weight loss herbs, hair growth herbs, skin care herbs, anti-aging herbs, mamoe gabhadiya, herbal products online, buy herbs online, whatsapp herbal delivery"
        schemaData={homePageSchema}
      />
      <Navigation />
      
      <main className="pt-16">
        {/* Section 1: Hero */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroImage})`,
              filter: "brightness(0.6)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60" />
          
          <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
            <div className="mb-6">
              <h1 className="font-serif text-6xl md:text-8xl font-bold text-primary-foreground mb-2">
                MAMOE GABHADIYA
              </h1>
              <p className="font-serif text-2xl md:text-4xl text-accent mb-4">
                SPICING PRODUCTS
              </p>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Spicing Life Naturally
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/95 mb-8 max-w-3xl mx-auto">
              Trusted herbal solutions for health, wealth, and wellbeing across Africa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-hover"
              >
                <Link to="/products" onClick={scrollToTopImmediate}>
                  Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground hover:bg-primary-foreground/20"
              >
                <Link to="/about" onClick={scrollToTopImmediate}>Learn Our Story</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Section 2: Why Choose Us */}
        <section className="py-20 container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Mamoe Gabhadiya?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We blend traditional African herbal wisdom with modern understanding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Section 3: Our Natural Solutions */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Natural Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover herbs crafted for your health, wealth, and lifestyle needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Link
                  key={index}
                  to={solution.link}
                  onClick={scrollToTopImmediate}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <Card className="bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-300 group-hover:-translate-y-2">
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden rounded-t-lg">
                        <img
                          src={solution.image}
                          alt={solution.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-serif text-2xl font-bold text-card-foreground mb-2">
                          {solution.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {solution.description}
                        </p>
                        <span className="text-primary font-medium inline-flex items-center group-hover:text-accent transition-colors">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Statistics */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                Trusted Across Africa
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Our commitment to quality and care has earned the trust of thousands
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl md:text-6xl font-bold mb-2 text-accent">
                    {stat.number}
                  </div>
                  <div className="text-lg text-primary-foreground/90">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Customer Testimonials */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real stories from people who have transformed their lives with our herbs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Our Locations */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Visit Our Locations
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find us across Africa for personalized herbal consultations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-2xl mr-3">🇿🇦</div>
                    <h3 className="font-serif text-2xl font-bold text-card-foreground">
                      South Africa
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">+27 81 468 7186</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="text-muted-foreground">
                        <div>Shop 327</div>
                        <div>Ottawa Mall, 3rd Floor</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-2xl mr-3">🇿🇼</div>
                    <h3 className="font-serif text-2xl font-bold text-card-foreground">
                      Zimbabwe
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">+263 718 735 172</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="text-muted-foreground">
                        <div>Shop No. 38, Eeson Building</div>
                        <div>J Nkomo & 6th Avenue</div>
                        <div>Opposite Car Sale</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12 animate-fade-in">
              <div className="bg-accent/10 rounded-lg p-6 max-w-md mx-auto">
                <h4 className="font-semibold text-lg text-foreground mb-2">
                  Also Available In
                </h4>
                <p className="text-muted-foreground font-medium">
                  Cape Town & Botswana
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Meet Our Team */}
        <section className="py-20 container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals committed to your natural wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-card-foreground mb-2">
                  Lee Gabhadiya
                </h3>
                <p className="text-primary font-medium mb-3">Founder & Chief Herbalist</p>
                <p className="text-sm text-muted-foreground">
                  With over 15 years of experience in traditional African herbal medicine, Lee founded Mamoe Gabhadiya to share ancestral healing wisdom with modern communities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-card-foreground mb-2">
                  Dr. Sarah Moyo
                </h3>
                <p className="text-primary font-medium mb-3">Head of Product Development</p>
                <p className="text-sm text-muted-foreground">
                  A qualified botanist and herbalist, Dr. Moyo ensures all our products meet the highest quality standards while preserving traditional healing properties.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-card-foreground mb-2">
                  Marcus Ndlovu
                </h3>
                <p className="text-primary font-medium mb-3">Customer Relations Manager</p>
                <p className="text-sm text-muted-foreground">
                  Marcus leads our customer support team, ensuring every client receives personalized guidance on their wellness journey with our herbal solutions.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-hover"
            >
              <Link to="/team" onClick={scrollToTopImmediate}>
                Meet the Full Team <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Section 8: Call to Action */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Wellbeing?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/95">
              Join thousands who trust Mamoe Gabhadiya for natural herbal solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-hover"
              >
                <Link to="/contact" onClick={scrollToTopImmediate}>
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground hover:bg-primary-foreground/20"
              >
                <Link to="/products" onClick={scrollToTopImmediate}>
                  View All Products
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
