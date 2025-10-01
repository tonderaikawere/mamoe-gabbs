import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import communityIcon from "@/assets/community-icon.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Thabo M.",
      location: "Johannesburg, South Africa",
      rating: 5,
      text: "I was struggling with low energy for months. After using Mamoe Gabhadiya's Energy & Vitality blend, I feel like a new person. The team also took time to guide me on proper usage. Highly recommend!",
    },
    {
      name: "Chipo T.",
      location: "Harare, Zimbabwe",
      rating: 5,
      text: "The Prosperity Blend has been amazing for my business. I've noticed more opportunities coming my way, and my confidence has grown. Thank you, Mamoe Gabhadiya!",
    },
    {
      name: "Kefilwe D.",
      location: "Gaborone, Botswana",
      rating: 5,
      text: "As someone who prefers natural remedies, I'm so grateful to have found Mamoe Gabhadiya. The products are pure, effective, and the customer service is exceptional.",
    },
    {
      name: "Nomsa K.",
      location: "Cape Town, South Africa",
      rating: 5,
      text: "I suffered from digestive issues for years. The Digestive Wellness herbs changed my life. No side effects, just natural healing. This company truly cares about people.",
    },
    {
      name: "Tendai R.",
      location: "Bulawayo, Zimbabwe",
      rating: 5,
      text: "The Sleep & Relaxation tea has helped me overcome insomnia naturally. I wake up refreshed and energized. The education they provide about herb usage is also very helpful.",
    },
    {
      name: "Lesedi S.",
      location: "Francistown, Botswana",
      rating: 5,
      text: "I was skeptical at first, but the Health & Wellness herbs truly work. My immunity has improved, and I rarely get sick now. Mamoe Gabhadiya has earned my trust and loyalty.",
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
                src={communityIcon}
                alt="Community Icon"
                className="w-24 h-24 object-contain animate-float"
              />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
              Customer Testimonials
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from people whose lives have been transformed by natural herbs
            </p>
          </div>
        </section>

        <section className="py-20 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="h-8 w-8 text-primary/20" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-accent text-accent"
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                Join Our Growing Community
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Thousands of people across South Africa, Zimbabwe, and Botswana trust Mamoe
                Gabhadiya for their natural wellness needs. Experience the difference that pure,
                effective herbs can make in your life.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <p className="text-muted-foreground">Happy Customers</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">3</div>
                  <p className="text-muted-foreground">Countries Served</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">4+</div>
                  <p className="text-muted-foreground">Years of Trust</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center animate-fade-in">
            <h2 className="font-serif text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/95">
              Start your journey to better health, wealth, and wellbeing today
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;
