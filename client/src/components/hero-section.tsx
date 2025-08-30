export default function HeroSection() {
  const handleViewWork = () => {
    const portfolioSection = document.querySelector('#portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" data-testid="hero-section">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="fade-in">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-4 sm:mb-6" data-testid="hero-title">
            <span className="gradient-text">iBall</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-3 sm:mb-4 font-light" data-testid="hero-subtitle">
            Graphics Designer
          </p>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4" data-testid="hero-description">
            Crafting visually stunning designs that tell stories, build brands, and create memorable experiences through the power of visual communication.
          </p>
          <button 
            className="gradient-button px-6 sm:px-8 py-3 sm:py-4 rounded-full text-primary-foreground font-semibold text-base sm:text-lg shadow-lg"
            onClick={handleViewWork}
            data-testid="button-view-work"
          >
            View My Work
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-testid="scroll-indicator">
        <i className="fas fa-chevron-down text-accent text-2xl"></i>
      </div>
    </section>
  );
}
