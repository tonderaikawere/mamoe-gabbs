import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollToTopOnMount } from "@/hooks/use-scroll-to-top";

const PrivacyPolicy = () => {
  useScrollToTopOnMount();
  
  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-lg shadow-soft p-8">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-muted-foreground mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Information We Collect
                </h2>
                <p className="text-muted-foreground mb-4">
                  At Mamoe Gabhadiya, we collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li>Contact us for product inquiries or consultations</li>
                  <li>Subscribe to our newsletter or updates</li>
                  <li>Visit our physical locations</li>
                  <li>Provide feedback or testimonials</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li>Provide personalized herbal consultations and recommendations</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you information about our products and services</li>
                  <li>Improve our products and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Information Sharing
                </h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Data Security
                </h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Your Rights
                </h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request information about how we use your data</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="text-muted-foreground">
                    <strong>South Africa:</strong> +27 81 468 7186<br />
                    <strong>Zimbabwe:</strong> +263 718 735 172
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

export default PrivacyPolicy;
