import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollToTopOnMount } from "@/hooks/use-scroll-to-top";

const TermsOfService = () => {
  useScrollToTopOnMount();
  
  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-lg shadow-soft p-8">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-8">
              Terms of Service
            </h1>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-muted-foreground mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Acceptance of Terms
                </h2>
                <p className="text-muted-foreground mb-4">
                  By accessing and using Mamoe Gabhadiya's website, products, or services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Products and Services
                </h2>
                <p className="text-muted-foreground mb-4">
                  Mamoe Gabhadiya provides natural herbal products and related consultation services. All products are sold as traditional herbal supplements and are not intended to diagnose, treat, cure, or prevent any disease.
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li>Product availability may vary by location</li>
                  <li>We reserve the right to modify or discontinue products</li>
                  <li>Product descriptions are provided for informational purposes</li>
                  <li>Consultations are based on traditional herbal knowledge</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Use License
                </h2>
                <p className="text-muted-foreground mb-4">
                  Permission is granted to temporarily download one copy of the materials on Mamoe Gabhadiya's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Purchasing Terms
                </h2>
                <p className="text-muted-foreground mb-4">
                  When purchasing products from Mamoe Gabhadiya:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li>All sales are final unless otherwise specified</li>
                  <li>Prices are subject to change without notice</li>
                  <li>Payment must be received before product delivery</li>
                  <li>Delivery times are estimates and not guaranteed</li>
                  <li>Risk of loss passes to buyer upon delivery</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  User Responsibilities
                </h2>
                <p className="text-muted-foreground mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li>Provide accurate and complete information</li>
                  <li>Use products as directed and at your own risk</li>
                  <li>Consult healthcare professionals before use</li>
                  <li>Not misuse or abuse our products or services</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Disclaimer
                </h2>
                <p className="text-muted-foreground mb-4">
                  The materials on Mamoe Gabhadiya's website are provided on an 'as is' basis. Mamoe Gabhadiya makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Limitations
                </h2>
                <p className="text-muted-foreground mb-4">
                  In no event shall Mamoe Gabhadiya or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Mamoe Gabhadiya's website, even if Mamoe Gabhadiya or an authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Privacy Policy
                </h2>
                <p className="text-muted-foreground mb-4">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, to understand our practices.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Governing Law
                </h2>
                <p className="text-muted-foreground mb-4">
                  These terms and conditions are governed by and construed in accordance with the laws of South Africa and Zimbabwe, and you irrevocably submit to the exclusive jurisdiction of the courts in those jurisdictions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Changes to Terms
                </h2>
                <p className="text-muted-foreground mb-4">
                  Mamoe Gabhadiya may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms of Service, please contact us:
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

export default TermsOfService;
