import { useEffect, useState } from 'react';

export const useScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return { isVisible, scrollToTop };
};

// Utility function for immediate scroll to top (for navigation links)
export const scrollToTopImmediate = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Hook for automatic scroll to top on route change
export const useScrollToTopOnMount = () => {
  useEffect(() => {
    scrollToTopImmediate();
  }, []);
};
