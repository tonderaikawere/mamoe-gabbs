import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useScrollToTopOnMount } from "@/hooks/use-scroll-to-top";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react";
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
    
    // SA WhatsApp number
    const whatsappNumber = "+27814687186";
    const message = `Hello Mamoe Gabhadiya!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nLocation: ${formData.location}\n\nMessage: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success("Redirecting to WhatsApp to send your message!");
    setFormData({ name: "", email: "", phone: "", location: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Mamoe Gabhadiya",
      "image": "https://mamoegabhadiya.com/images/IMG_7213.webp",
      "telephone": ["+27814687186", "+263718735172"],
      "email": "info@mamoegabhadiya.com",
      "address": [
        {
          "@type": "PostalAddress",
          "addressCountry": "ZA",
          "addressRegion": "Gauteng",
          "addressLocality": "Johannesburg"
        },
        {
          "@type": "PostalAddress",
          "addressCountry": "ZW",
          "addressLocality": "Harare"
        }
      ],
      "openingHours": "Mo-Su 08:00-20:00",
      "sameAs": [
        "https://wa.me/27814687186",
        "https://wa.me/263718735172"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-earth">
      <SEO 
        title="Contact Mamoe Gabhadiya | WhatsApp Orders & Herbal Product Inquiries"
        description="Contact Mamoe Gabhadiya for herbal product orders and inquiries. WhatsApp: +27 81 468 7186 (SA) | +263 718 735 172 (ZW). Fast response, expert advice, secure ordering. Get in touch today!"
        keywords="contact mamoe gabhadiya, whatsapp herbal orders, herbal product inquiries, african herbs contact, natural health consultation, herbal product support, mamoe gabhadiya phone, mamoe gabhadiya whatsapp, herbal products south africa contact, zimbabwe herbal products contact, order herbs whatsapp, herbal consultation, natural medicine advice"
        url="https://mamoegabhadiya.com/contact"
        schemaData={contactPageSchema}
      />
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
                      className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Send via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6 animate-fade-in-right">
              <Card className="bg-gradient-card shadow-soft">
                <CardContent className="p-8">
                  <h2 className="font-serif text-3xl font-bold text-card-foreground mb-6">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-6">
                    {/* WhatsApp Contact */}
                    {/* SA WhatsApp Contact */}
                    <a 
                      href="https://wa.me/27814687186" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-start space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-primary/10 transition-colors group cursor-pointer"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                          <MessageCircle className="h-6 w-6 text-green-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                          WhatsApp (South Africa)
                        </h3>
                        <p className="text-muted-foreground text-sm">+27 81 468 7186</p>
                        <p className="text-xs text-green-600 mt-1">Click to chat with us instantly!</p>
                      </div>
                    </a>

                    {/* ZW WhatsApp Contact */}
                    <a 
                      href="https://wa.me/263718735172" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-start space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-primary/10 transition-colors group cursor-pointer"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                          <MessageCircle className="h-6 w-6 text-green-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                          WhatsApp (Zimbabwe)
                        </h3>
                        <p className="text-muted-foreground text-sm">+263 718 735 172</p>
                        <p className="text-xs text-green-600 mt-1">Click to chat with us instantly!</p>
                      </div>
                    </a>

                    {/* Phone Contact */}
                    {/* SA Phone Contact */}
                    <a 
                      href="tel:+27814687186" 
                      className="flex items-start space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-primary/10 transition-colors group cursor-pointer"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                          Phone (South Africa)
                        </h3>
                        <p className="text-muted-foreground text-sm">+27 81 468 7186</p>
                        <p className="text-xs text-primary mt-1">Click to call us directly</p>
                      </div>
                    </a>

                    {/* ZW Phone Contact */}
                    <a 
                      href="tel:+263718735172" 
                      className="flex items-start space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-primary/10 transition-colors group cursor-pointer"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                          Phone (Zimbabwe)
                        </h3>
                        <p className="text-muted-foreground text-sm">+263 718 735 172</p>
                        <p className="text-xs text-primary mt-1">Click to call us directly</p>
                      </div>
                    </a>

                    {/* Email Contact */}
                    <a 
                      href="mailto:info@mamoegabhadiya.com" 
                      className="flex items-start space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-primary/10 transition-colors group cursor-pointer"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                          Email
                        </h3>
                        <p className="text-muted-foreground text-sm">info@mamoegabhadiya.com</p>
                        <p className="text-xs text-primary mt-1">Click to send us an email</p>
                      </div>
                    </a>

                    {/* Physical Locations */}
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
