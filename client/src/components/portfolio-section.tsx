export default function PortfolioSection() {
  const portfolioItems = [
    {
      title: "Brand Identity Design",
      description: "Complete brand identity package for a tech startup",
      category: "BRANDING",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Event Poster Design",
      description: "Creative poster series for music festival",
      category: "PRINT DESIGN",
      image: "https://pixabay.com/get/g5bbd268703585f807ff48dd4607608554841d1b00877a41de64f334690e8a1a577005b697799dac4b01e2786b123f1d1865a792069b4a49a96449139bc51e5bc_1280.jpg"
    },
    {
      title: "Mobile App UI",
      description: "User interface design for fitness tracking app",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Package Design",
      description: "Luxury packaging design for premium cosmetics",
      category: "PACKAGING",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Website Design",
      description: "Modern website design for creative agency",
      category: "WEB DESIGN",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Social Media Graphics",
      description: "Social media template series for fashion brand",
      category: "SOCIAL MEDIA",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-card" data-testid="portfolio-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-5xl font-bold mb-6 gradient-text" data-testid="portfolio-title">Featured Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="portfolio-description">
            A curated selection of projects that showcase creativity, strategy, and results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="fade-in portfolio-card glass-morphism rounded-2xl overflow-hidden group cursor-pointer" data-testid={`portfolio-item-${index}`}>
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                data-testid={`portfolio-image-${index}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" data-testid={`portfolio-title-${index}`}>{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4" data-testid={`portfolio-description-${index}`}>{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-accent font-medium" data-testid={`portfolio-category-${index}`}>{item.category}</span>
                  <i className="fas fa-arrow-right text-accent group-hover:translate-x-2 transition-transform"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="gradient-button px-8 py-4 rounded-full text-primary-foreground font-semibold shadow-lg" data-testid="button-view-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
