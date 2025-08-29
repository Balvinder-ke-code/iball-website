export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in">
            <h2 className="text-5xl font-bold mb-8 gradient-text" data-testid="about-title">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="about-description-1">
              With over 5 years of experience in graphic design, I specialize in creating compelling visual narratives that resonate with audiences. My passion lies in transforming complex ideas into simple, elegant designs that communicate effectively.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="about-description-2">
              I believe great design is not just about aesthetics—it's about solving problems, creating connections, and driving results. Every project is an opportunity to push creative boundaries while delivering practical solutions.
            </p>
            <div className="flex space-x-6">
              <div className="text-center" data-testid="stat-projects">
                <div className="text-3xl font-bold text-accent">150+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center" data-testid="stat-clients">
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center" data-testid="stat-experience">
                <div className="text-3xl font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="fade-in">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
              alt="Professional headshot" 
              className="rounded-2xl shadow-2xl w-full h-auto max-w-md mx-auto" 
              data-testid="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
