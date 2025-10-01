import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollToTopOnMount } from "@/hooks/use-scroll-to-top";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, TrendingUp, Leaf, Shield, Award, Mail, Phone } from "lucide-react";
import teamHeroImage from "@/assets/about-landscape.jpg";

const Team = () => {
  useScrollToTopOnMount();

  const teamMembers = [
    {
      name: "Lee Gabhadiya",
      position: "Founder & Chief Herbalist",
      icon: Users,
      bio: "Lee is the visionary founder of Mamoe Gabhadiya, with over 15 years of experience in traditional African herbal medicine. Growing up surrounded by the rich botanical traditions of Africa, Lee learned from elders who possessed generations of wisdom. This deep knowledge, combined with a passion for helping others, led to the creation of Mamoe Gabhadiya in 2020. Lee's expertise spans across traditional healing practices, product formulation, and business leadership.",
      specialties: ["Traditional African Medicine", "Product Formulation", "Business Strategy", "Community Outreach"],
      email: "lee@mamoegabhadiya.com",
      phone: "+27 81 468 7186"
    },
    {
      name: "Dr. Sarah Moyo",
      position: "Head of Product Development",
      icon: Heart,
      bio: "Dr. Sarah Moyo brings scientific rigor to traditional herbal medicine. With a PhD in Botany and specialized training in phytochemistry, she ensures that all Mamoe Gabhadiya products meet the highest quality standards while preserving their traditional healing properties. Dr. Moyo oversees product research, quality control, and the development of new herbal formulations.",
      specialties: ["Botanical Research", "Quality Control", "Phytochemistry", "Product Development"],
      email: "sarah@mamoegabhadiya.com",
      phone: "+27 81 468 7187"
    },
    {
      name: "Marcus Ndlovu",
      position: "Customer Relations Manager",
      icon: TrendingUp,
      bio: "Marcus leads our customer support team with a focus on personalized service and education. With extensive knowledge of herbal applications and excellent communication skills, Marcus ensures every client receives proper guidance on their wellness journey. He manages customer inquiries, provides product consultations, and maintains strong relationships with our community.",
      specialties: ["Customer Service", "Product Consultation", "Community Relations", "Sales Management"],
      email: "marcus@mamoegabhadiya.com",
      phone: "+263 718 735 172"
    },
    {
      name: "Nomsa Khumalo",
      position: "Quality Assurance Specialist",
      icon: Shield,
      bio: "Nomsa ensures that every product leaving our facilities meets our strict quality standards. With a background in food science and quality management, she oversees our quality assurance processes, supplier relationships, and compliance with health regulations. Nomsa's attention to detail guarantees that customers receive safe, effective, and consistent products.",
      specialties: ["Quality Assurance", "Regulatory Compliance", "Supplier Management", "Process Optimization"],
      email: "nomsa@mamoegabhadiya.com",
      phone: "+27 81 468 7188"
    },
    {
      name: "Tendai Mutasa",
      position: "Traditional Medicine Consultant",
      icon: Leaf,
      bio: "Tendai brings deep traditional knowledge passed down through generations of healers. As our Traditional Medicine Consultant, he works closely with local communities to source authentic herbs and preserve traditional preparation methods. Tendai's expertise ensures our products maintain their cultural authenticity and traditional effectiveness.",
      specialties: ["Traditional Healing", "Herb Sourcing", "Cultural Preservation", "Community Partnerships"],
      email: "tendai@mamoegabhadiya.com",
      phone: "+263 718 735 173"
    },
    {
      name: "Grace Mthembu",
      position: "Operations Manager",
      icon: Award,
      bio: "Grace oversees the day-to-day operations of Mamoe Gabhadiya, ensuring smooth business processes across all locations. With experience in logistics, inventory management, and team coordination, she keeps our operations running efficiently. Grace manages our supply chain, coordinates between different branches, and ensures timely delivery of products to customers.",
      specialties: ["Operations Management", "Logistics", "Inventory Control", "Team Coordination"],
      email: "grace@mamoegabhadiya.com",
      phone: "+27 81 468 7189"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${teamHeroImage})`,
              filter: "brightness(0.5)",
            }}
          />
          <div className="absolute inset-0 bg-primary/40" />
          
          <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
              Our Expert Team
            </h1>
            <p className="text-xl text-primary-foreground/95 max-w-2xl mx-auto">
              Meet the dedicated professionals behind Mamoe Gabhadiya's natural healing solutions
            </p>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-20 container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Passionate Experts in Natural Wellness
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our team combines traditional African healing wisdom with modern expertise to bring you the finest herbal solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <member.icon className="h-10 w-10 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-serif text-2xl font-bold text-card-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary font-semibold mb-4">{member.position}</p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {member.bio}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Specialties:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4" />
                          <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors">
                            {member.email}
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4" />
                          <a href={`tel:${member.phone}`} className="hover:text-primary transition-colors">
                            {member.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center animate-fade-in">
            <h2 className="font-serif text-4xl font-bold mb-6">
              Our Team Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-foreground/10 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Compassionate Care</h3>
                <p className="text-primary-foreground/90">
                  We treat every customer with empathy and understanding, recognizing their unique wellness journey.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-foreground/10 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Quality Excellence</h3>
                <p className="text-primary-foreground/90">
                  We maintain the highest standards in everything we do, from sourcing to customer service.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-foreground/10 mx-auto mb-4 flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Traditional Wisdom</h3>
                <p className="text-primary-foreground/90">
                  We honor and preserve ancestral knowledge while embracing modern scientific understanding.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
