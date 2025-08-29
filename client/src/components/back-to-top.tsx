import { useState, useEffect } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`fixed bottom-8 right-8 gradient-button text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer z-50 transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      } hover:transform hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(255,95,31,0.4)]`}
      onClick={scrollToTop}
      data-testid="button-back-to-top"
    >
      <i className="fas fa-arrow-up"></i>
    </div>
  );
}
