import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollToTopOnMount } from "@/hooks/use-scroll-to-top";

const HealthDisclaimer = () => {
  useScrollToTopOnMount();
  
  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-lg shadow-soft p-8">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-8">
              Health Disclaimer
            </h1>
            
            <div className="prose prose-slate max-w-none">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                <p className="text-yellow-800 font-semibold">
                  Important: Please read this disclaimer carefully before using any Mamoe Gabhadiya products.
                </p>
              </div>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  General Health Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  The information provided by Mamoe Gabhadiya on our website, in our products, and through our consultations is for general informational purposes only. This information is not intended as medical advice and should not be used to diagnose, treat, cure, or prevent any disease or health condition.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Consult Healthcare Professionals
                </h2>
                <p className="text-muted-foreground mb-4">
                  Always consult with a qualified healthcare professional before:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li>Starting any new herbal supplement or treatment</li>
                  <li>Stopping or changing existing medications</li>
                  <li>If you are pregnant, nursing, or have medical conditions</li>
                  <li>If you are taking prescription medications</li>
                  <li>If you experience any adverse reactions</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Product Safety
                </h2>
                <p className="text-muted-foreground mb-4">
                  While our herbal products are made from natural ingredients, they may:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li>Interact with prescription medications</li>
                  <li>Cause allergic reactions in sensitive individuals</li>
                  <li>Have different effects on different people</li>
                  <li>Not be suitable for children, pregnant, or nursing women</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  No Medical Claims
                </h2>
                <p className="text-muted-foreground mb-4">
                  Mamoe Gabhadiya does not make any medical claims about our products. Our herbal products are not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary, and we make no guarantees about the effectiveness of our products for any specific condition.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Traditional Use vs. Scientific Evidence
                </h2>
                <p className="text-muted-foreground mb-4">
                  Many of our products are based on traditional African herbal knowledge passed down through generations. While we respect and value this traditional wisdom, we acknowledge that not all traditional uses have been scientifically validated through modern clinical trials.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Regulatory Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  Our products have not been evaluated by medical regulatory authorities for the treatment of any disease or health condition. These products are sold as traditional herbal supplements and are not intended to replace conventional medical treatment.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-muted-foreground mb-4">
                  Mamoe Gabhadiya shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our products or information. Users assume full responsibility for their use of our products and information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Emergency Situations
                </h2>
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <p className="text-red-800 font-semibold">
                    In case of medical emergency, seek immediate professional medical attention. Do not rely solely on herbal products for emergency medical situations.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HealthDisclaimer;
