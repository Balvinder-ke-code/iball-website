import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(target.getAttribute('href')!);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
        setIsMobileMenuOpen(false);
      }
    };

    // Handle scroll detection
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    document.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 glass-morphism rounded-full px-4 sm:px-6 w-[95%] max-w-4xl" data-testid="navigation">
      <div className="mx-auto px-2 lg:px-4">
        <div className="flex justify-center items-center h-12 sm:h-16">
          {/* Desktop Menu - Hidden when scrolled */}
          <div className={`hidden md:flex space-x-8 transition-opacity duration-300 ${
            isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}>
            <a href="#home" className="text-muted-foreground hover:text-accent transition-colors duration-300" data-testid="nav-home">Home</a>
            <a href="#about" className="text-muted-foreground hover:text-accent transition-colors duration-300" data-testid="nav-about">About</a>
            <a href="#portfolio" className="text-muted-foreground hover:text-accent transition-colors duration-300" data-testid="nav-portfolio">My Work</a>
            <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors duration-300" data-testid="nav-contact">Contact</a>
          </div>
          
          {/* Mobile Menu Button - Always visible on mobile */}
          <div className="md:hidden">
            <button 
              className="text-foreground hover:text-accent transition-transform duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-button"
            >
              <i className={`fas text-xl transition-transform duration-200 ${
                isMobileMenuOpen ? 'fa-times rotate-90' : 'fa-bars'
              }`}></i>
            </button>
          </div>
          
          {/* Desktop Logo/Brand when scrolled */}
          <div className={`hidden md:block transition-opacity duration-300 ${
            isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
            <span className="text-xl font-bold gradient-text">iBall</span>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden mobile-menu glass-morphism absolute top-14 sm:top-20 left-1/2 transform -translate-x-1/2 w-[90vw] max-w-80 rounded-2xl ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="flex flex-col space-y-3 p-4 sm:p-6">
            <a href="#home" className="text-muted-foreground hover:text-accent transition-colors duration-300" data-testid="mobile-nav-home">Home</a>
            <a href="#about" className="text-muted-foreground hover:text-accent transition-colors duration-300" data-testid="mobile-nav-about">About</a>
            <a href="#portfolio" className="text-muted-foreground hover:text-accent transition-colors duration-300" data-testid="mobile-nav-portfolio">My Work</a>
            <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors duration-300" data-testid="mobile-nav-contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
