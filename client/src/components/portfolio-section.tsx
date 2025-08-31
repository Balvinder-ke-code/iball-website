import { Link } from "wouter";
import { useEffect } from "react";

export default function PortfolioSection() {
  
  // Restore scroll position when returning to this page
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('portfolioScrollPosition');
    if (savedScrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollPosition));
        sessionStorage.removeItem('portfolioScrollPosition');
      }, 100);
    }
  }, []);

  // Save scroll position when clicking on portfolio items
  const handlePortfolioClick = () => {
    sessionStorage.setItem('portfolioScrollPosition', window.scrollY.toString());
  };
  const portfolioItems = [
    {
      title: "Youtube Thumbnail",
      description: "Eye-catching thumbnails that boost click-through rates",
      category: "DIGITAL DESIGN",
      image: "https://res.cloudinary.com/durgkvgwa/image/upload/v1756611865/sunraybee_thumbnail_remake_cvvah9.png",
      link: "/youtube-thumbnails"
    },
    {
      title: "Poster",
      description: "Creative poster designs for events and promotions",
      category: "PRINT DESIGN",
      image: "https://pixabay.com/get/g5bbd268703585f807ff48dd4607608554841d1b00877a41de64f334690e8a1a577005b697799dac4b01e2786b123f1d1865a792069b4a49a96449139bc51e5bc_1280.jpg",
      link: "/posters"
    },
    {
      title: "Profile Pictures",
      description: "Professional profile pictures and avatar designs",
      category: "PORTRAIT DESIGN",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      link: "/profile-pictures"
    }
  ];

  return (
    <section id="portfolio" className="py-12 sm:py-20 bg-card" data-testid="portfolio-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text" data-testid="portfolio-title">My Work</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4" data-testid="portfolio-description">
            A curated selection of projects that showcase creativity, strategy, and results
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfolioItems.map((item, index) => (
            <Link key={index} href={item.link}>
              <div 
                className="fade-in portfolio-card glass-morphism rounded-2xl overflow-hidden group cursor-pointer" 
                data-testid={`portfolio-item-${index}`}
                onClick={handlePortfolioClick}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  data-testid={`portfolio-image-${index}`}
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2" data-testid={`portfolio-title-${index}`}>{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3 sm:mb-4" data-testid={`portfolio-description-${index}`}>{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-accent font-medium" data-testid={`portfolio-category-${index}`}>{item.category}</span>
                    <i className="fas fa-arrow-right text-accent group-hover:translate-x-2 transition-transform"></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <button className="gradient-button px-6 sm:px-8 py-3 sm:py-4 rounded-full text-primary-foreground font-semibold text-sm sm:text-base shadow-lg" data-testid="button-view-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
