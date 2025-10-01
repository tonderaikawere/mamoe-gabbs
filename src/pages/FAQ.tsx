import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is Mamoe Gabhadiya?",
          a: "Mamoe Gabhadiya is a trusted herbal company founded in 2020, specializing in natural herbs for health, wealth, and wellbeing. We serve communities across South Africa, Zimbabwe, and Botswana with safe, effective, and pure herbal products.",
        },
        {
          q: "Are your products safe to use?",
          a: "Yes! All our products are made from carefully selected natural herbs with no harmful side effects. We prioritize safety and quality in every product. However, we recommend consulting with our herbalists or your healthcare provider before starting any new herbal regimen.",
        },
        {
          q: "Where are you located?",
          a: "We have branches in South Africa, Zimbabwe, and Botswana. Contact us to find the nearest branch to you and learn about our services in your area.",
        },
      ],
    },
    {
      category: "Products",
      questions: [
        {
          q: "What types of products do you offer?",
          a: "We offer a wide range of natural herbal products including: Health & Wellness herbs (immunity, energy, digestion), Wealth & Prosperity blends, Lifestyle enhancement herbs (beauty, stress relief), and Traditional African remedies.",
        },
        {
          q: "How do I know which product is right for me?",
          a: "We provide personalized guidance to help you choose the right herbs for your needs. Contact us for a consultation, and our experienced herbalists will recommend products based on your specific health goals and circumstances.",
        },
        {
          q: "Can I use multiple products together?",
          a: "In many cases, yes. However, we recommend consulting with our herbalists first to ensure the herbs complement each other and are safe to combine for your specific situation.",
        },
      ],
    },
    {
      category: "Usage & Safety",
      questions: [
        {
          q: "How should I use the herbs?",
          a: "Each product comes with detailed usage instructions. Generally, herbs can be taken as teas, tinctures, or capsules. We also provide guidance on dosage, timing, and preparation methods to ensure you get the best results.",
        },
        {
          q: "Are there any side effects?",
          a: "Our natural herbs are selected specifically because they're safe and free from harmful side effects when used correctly. However, individual reactions can vary. Start with small amounts and discontinue use if you experience any discomfort.",
        },
        {
          q: "Can pregnant or nursing women use your products?",
          a: "Some herbs are safe during pregnancy and nursing, while others are not recommended. Always consult with our herbalists and your healthcare provider before using any herbal products during pregnancy or while breastfeeding.",
        },
        {
          q: "How long does it take to see results?",
          a: "Results vary depending on the individual and the condition being addressed. Some people notice improvements within days, while others may take weeks. Consistency is key – herbs work best when used regularly as directed.",
        },
      ],
    },
    {
      category: "Ordering & Delivery",
      questions: [
        {
          q: "How can I order your products?",
          a: "You can visit our branches in person, or contact us through our website to place an order. We're happy to guide you through the ordering process and answer any questions you may have.",
        },
        {
          q: "Do you ship internationally?",
          a: "Currently, we serve South Africa, Zimbabwe, and Botswana. Please contact us for information about shipping to your specific location within these countries.",
        },
        {
          q: "What is your return policy?",
          a: "We stand behind the quality of our products. If you're not satisfied, contact us within 30 days of purchase to discuss a return or exchange. Your satisfaction is important to us.",
        },
      ],
    },
    {
      category: "Education & Support",
      questions: [
        {
          q: "Do you offer consultations?",
          a: "Yes! We offer personalized consultations to help you understand which herbs are best for your needs. Our herbalists can guide you on proper usage, answer questions, and provide ongoing support.",
        },
        {
          q: "Can you teach me about herbs?",
          a: "Absolutely! Education is at the heart of what we do. We offer workshops, resources, and one-on-one guidance to help you learn about herbs and how to use them safely and effectively.",
        },
        {
          q: "What makes Mamoe Gabhadiya different from other herbal companies?",
          a: "We don't just sell herbs – we guide, teach, and support you on your wellness journey. Our commitment to quality, education, and customer care sets us apart. We blend traditional African wisdom with modern understanding to provide the best herbal solutions.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      
      <main className="pt-16">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-10" />
          
          <div className="relative container mx-auto px-4 text-center animate-fade-in">
            <HelpCircle className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our herbs, products, and services
            </p>
          </div>
        </section>

        <section className="py-20 container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="animate-fade-in"
                style={{ animationDelay: `${sectionIndex * 0.1}s` }}
              >
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                  {section.category}
                </h2>
                
                <Card className="bg-gradient-card shadow-soft">
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {section.questions.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`item-${sectionIndex}-${faqIndex}`}>
                          <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                            {faq.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto bg-gradient-card shadow-soft animate-fade-in">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="font-serif text-3xl font-bold text-card-foreground mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We're here to help! Contact us for personalized guidance and support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                  >
                    <Link to="/resources">View Resources</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
