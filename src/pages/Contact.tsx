import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollToTopOnMount } from "@/hooks/use-scroll-to-top";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  useScrollToTopOnMount();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const branches = [
    {
      country: "South Africa",
      icon: MapPin,
      details: "Serving communities across South Africa",
    },
    {
      country: "Zimbabwe",
      icon: MapPin,
      details: "Bringing natural wellness to Zimbabwe",
    },
    {
      country: "Botswana",
      icon: MapPin,
      details: "Empowering Botswana with herbal solutions",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", location: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      
      <main className="pt-16">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-10" />
          
          <div className="relative container mx-auto px-4 text-center animate-fade-in">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to guide you on your journey to natural wellness
            </p>
          </div>
        </section>

        <section className="py-20 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="animate-fade-in-left">
              <Card className="bg-gradient-card shadow-soft">
                <CardContent className="p-8">
                  <h2 className="font-serif text-3xl font-bold text-card-foreground mb-6">
                    Send Us a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+27 XXX XXXX"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Location *
                      </label>
                      <Input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        placeholder="South Africa / Zimbabwe / Botswana"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us how we can help you..."
                        className="w-full min-h-[120px]"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Send Message <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6 animate-fade-in-right">
              <Card className="bg-gradient-card shadow-soft">
                <CardContent className="p-8">
                  <h2 className="font-serif text-3xl font-bold text-card-foreground mb-6">
                    Our Branches
                  </h2>
                  
                  <div className="space-y-6">
                    {branches.map((branch, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <branch.icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-foreground mb-1">
                            {branch.country}
                          </h3>
                          <p className="text-muted-foreground text-sm">{branch.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-soft">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-card-foreground mb-4">
                    Why Contact Us?
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Get personalized herbal recommendations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Schedule a consultation with our herbalists</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Find your nearest Mamoe Gabhadiya branch</span>
                    </li>
                  </ul>
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

export default Contact;
