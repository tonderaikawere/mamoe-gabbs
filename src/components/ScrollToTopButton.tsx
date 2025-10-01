import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

const ScrollToTopButton = () => {
  const { isVisible, scrollToTop } = useScrollToTop();

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
      size="icon"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
};

export default ScrollToTopButton;
