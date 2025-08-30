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
      
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-40 glass-morphism rounded-full px-4 sm:px-6 w-auto" data-testid="navigation">
        <div className="mx-auto px-6">
          <div className="flex justify-center items-center h-16">
            <div className="flex space-x-6">
              <a href="#home" className="text-muted-foreground hover:text-accent transition-colors duration-300" data-testid="nav-home">Home</a>
              <a href="#about" className="text-muted-foreground hover:text-accent transition-colors duration-300" data-testid="nav-about">About</a>
              <a href="#portfolio" className="text-muted-foreground hover:text-accent transition-colors duration-300" data-testid="nav-portfolio">My Work</a>
              <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors duration-300" data-testid="nav-contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Side Menu */}
      <div className={`md:hidden fixed inset-0 z-30 transition-all duration-500 ease-in-out ${isHeaderVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsHeaderVisible(false)}></div>
        
        {/* Menu Panel */}
        <div className={`absolute top-0 left-0 h-full w-80 max-w-[85vw] glass-morphism transition-transform duration-500 ease-out ${isHeaderVisible ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/20">
              <h2 className="text-2xl font-bold gradient-text">iBall</h2>
            </div>
            
            {/* Menu Items */}
            <div className="flex-1 px-6 py-8">
              <nav className="space-y-2">
                <a href="#home" className={`block py-4 px-4 text-left text-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300 ${isHeaderVisible ? 'animate-slideInLeft delay-100' : ''}`} data-testid="mobile-nav-home">
                  <i className="fas fa-home w-6 mr-3"></i>
                  Home
                </a>
                <a href="#about" className={`block py-4 px-4 text-left text-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300 ${isHeaderVisible ? 'animate-slideInLeft delay-200' : ''}`} data-testid="mobile-nav-about">
                  <i className="fas fa-user w-6 mr-3"></i>
                  About
                </a>
                <a href="#portfolio" className={`block py-4 px-4 text-left text-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300 ${isHeaderVisible ? 'animate-slideInLeft delay-300' : ''}`} data-testid="mobile-nav-portfolio">
                  <i className="fas fa-briefcase w-6 mr-3"></i>
                  My Work
                </a>
                <a href="#contact" className={`block py-4 px-4 text-left text-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300 ${isHeaderVisible ? 'animate-slideInLeft delay-400' : ''}`} data-testid="mobile-nav-contact">
                  <i className="fas fa-envelope w-6 mr-3"></i>
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
