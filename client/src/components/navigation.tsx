import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

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
        setIsHeaderVisible(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      {/* Mobile Header Toggle Button */}
      <button 
        className="md:hidden fixed top-4 right-4 z-50 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
        onClick={() => setIsHeaderVisible(!isHeaderVisible)}
        data-testid="mobile-header-toggle"
      >
        <i className={`fas ${isHeaderVisible ? 'fa-times' : 'fa-bars'} text-primary-foreground transition-all duration-300 ${isHeaderVisible ? 'rotate-180' : 'rotate-0'}`}></i>
      </button>
      
      <nav className={`fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-40 glass-morphism rounded-full px-4 sm:px-6 w-[95%] md:w-auto transition-all duration-500 ease-in-out ${isHeaderVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'} md:opacity-100 md:translate-y-0 md:scale-100 md:pointer-events-auto`} data-testid="navigation">
        <div className="mx-auto px-2 md:px-6">
          <div className="flex justify-center items-center h-12 sm:h-16">
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-muted-foreground hover:text-accent transition-colors duration-300" data-testid="nav-home">Home</a>
              <a href="#about" className="text-muted-foreground hover:text-accent transition-colors duration-300" data-testid="nav-about">About</a>
              <a href="#portfolio" className="text-muted-foreground hover:text-accent transition-colors duration-300" data-testid="nav-portfolio">My Work</a>
              <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors duration-300" data-testid="nav-contact">Contact</a>
            </div>
            
            {/* Mobile Menu */}
            <div className="md:hidden w-full">
              <div className={`flex flex-col space-y-4 py-4 px-2 transition-all duration-500 ${isHeaderVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2'}`}>
                <a href="#home" className={`block text-center py-3 px-4 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300 ${isHeaderVisible ? 'animate-fadeInUp delay-100' : ''}`} data-testid="mobile-nav-home">Home</a>
                <a href="#about" className={`block text-center py-3 px-4 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300 ${isHeaderVisible ? 'animate-fadeInUp delay-200' : ''}`} data-testid="mobile-nav-about">About</a>
                <a href="#portfolio" className={`block text-center py-3 px-4 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300 ${isHeaderVisible ? 'animate-fadeInUp delay-300' : ''}`} data-testid="mobile-nav-portfolio">My Work</a>
                <a href="#contact" className={`block text-center py-3 px-4 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300 ${isHeaderVisible ? 'animate-fadeInUp delay-400' : ''}`} data-testid="mobile-nav-contact">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
