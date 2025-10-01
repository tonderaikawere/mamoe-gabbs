import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Health from "./pages/Health";
import Wealth from "./pages/Wealth";
import Story from "./pages/Story";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Resources from "./pages/Resources";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HealthDisclaimer from "./pages/HealthDisclaimer";
import TermsOfService from "./pages/TermsOfService";
import Order from "./pages/Order";
import Team from "./pages/Team";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/health" element={<Health />} />
          <Route path="/wealth" element={<Wealth />} />
          <Route path="/story" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/health-disclaimer" element={<HealthDisclaimer />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/order" element={<Order />} />
          <Route path="/team" element={<Team />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTopButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
