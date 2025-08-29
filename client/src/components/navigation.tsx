import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 glass-morphism" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold gradient-text" data-testid="logo">iBall</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-muted-foreground hover:text-accent transition-colors duration-300" data-testid="nav-home">Home</a>
            <a href="#about" className="text-muted-foreground hover:text-accent transition-colors duration-300" data-testid="nav-about">About</a>
            <a href="#skills" className="text-muted-foreground hover:text-accent transition-colors duration-300" data-testid="nav-skills">Skills</a>
            <a href="#portfolio" className="text-muted-foreground hover:text-accent transition-colors duration-300" data-testid="nav-portfolio">Portfolio</a>
            <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors duration-300" data-testid="nav-contact">Contact</a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-foreground hover:text-accent"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-button"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden mobile-menu glass-morphism absolute top-16 left-0 w-full ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="flex flex-col space-y-4 p-6">
            <a href="#home" className="text-muted-foreground hover:text-accent transition-colors duration-300" data-testid="mobile-nav-home">Home</a>
            <a href="#about" className="text-muted-foreground hover:text-accent transition-colors duration-300" data-testid="mobile-nav-about">About</a>
            <a href="#skills" className="text-muted-foreground hover:text-accent transition-colors duration-300" data-testid="mobile-nav-skills">Skills</a>
            <a href="#portfolio" className="text-muted-foreground hover:text-accent transition-colors duration-300" data-testid="mobile-nav-portfolio">Portfolio</a>
            <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors duration-300" data-testid="mobile-nav-contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
