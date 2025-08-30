export default function Footer() {
  return (
    <footer className="bg-card py-12 border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4" data-testid="footer-logo">iBall</h3>
            <p className="text-muted-foreground" data-testid="footer-tagline">Creating visual experiences that inspire, engage, and deliver results.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-links-title">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-accent transition-colors" data-testid="footer-link-home">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-accent transition-colors" data-testid="footer-link-about">About</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-accent transition-colors" data-testid="footer-link-portfolio">Portfolio</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-accent transition-colors" data-testid="footer-link-contact">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-services-title">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-muted-foreground" data-testid="service-thumbnail">Thumbnail Design</span></li>
              <li><span className="text-muted-foreground" data-testid="service-poster">Digital Poster</span></li>
              <li><span className="text-muted-foreground" data-testid="service-pfp">PFP Design</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground" data-testid="footer-copyright">© 2024 iBall. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
