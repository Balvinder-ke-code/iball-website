export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-20 bg-card" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          <div className="fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 gradient-text" data-testid="about-title">About Me</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed" data-testid="about-description-1">
              I am a graphic designer. With over a year of practical experience assisting creators in realizing their ideas,   I've had the honor of working with well-known YouTubers for the past year, creating high CTR Thumbnails that have improved their Channel perfomance
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed" data-testid="about-description-2">
              I believe great design is not just about aesthetics—it's about solving problems, creating connections, and driving results. Every project is an opportunity to push creative boundaries while delivering practical solutions.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start">
              <div className="text-center min-w-[80px]" data-testid="stat-projects">
                <div className="text-2xl sm:text-3xl font-bold text-accent">100+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center min-w-[80px]" data-testid="stat-clients">
                <div className="text-2xl sm:text-3xl font-bold text-accent">10+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center min-w-[80px]" data-testid="stat-experience">
                <div className="text-2xl sm:text-3xl font-bold text-accent">1+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="fade-in order-first lg:order-last">
            <img 
              src="https://ideogram.ai/g/DUgGnTw3ScymZxcGxMTtqA/3" 
              alt="iball logo" 
              className="rounded-2xl shadow-2xl w-full h-auto max-w-xs sm:max-w-md mx-auto" 
              data-testid="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
