export default function SkillsSection() {
  const skills = [
    {
      name: "Adobe Photoshop",
      icon: "fab fa-adobe",
      level: 95,
      description: "Expert Level"
    },
    {
      name: "Adobe Illustrator", 
      icon: "fab fa-adobe",
      level: 90,
      description: "Expert Level"
    },
    {
      name: "Figma",
      icon: "fas fa-pen-nib",
      level: 88,
      description: "Advanced Level"
    },
    {
      name: "Adobe InDesign",
      icon: "fab fa-adobe", 
      level: 85,
      description: "Advanced Level"
    },
    {
      name: "Brand Identity",
      icon: "fas fa-palette",
      level: 92,
      description: "Expert Level"
    },
    {
      name: "UI/UX Design",
      icon: "fas fa-mobile-alt",
      level: 87,
      description: "Advanced Level"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background" data-testid="skills-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-5xl font-bold mb-6 gradient-text" data-testid="skills-title">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="skills-description">
            Mastering the tools and techniques that bring creative visions to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="fade-in glass-morphism p-8 rounded-2xl" data-testid={`skill-card-${index}`}>
              <div className="flex items-center mb-4">
                <i className={`${skill.icon} text-3xl text-accent mr-4`}></i>
                <h3 className="text-xl font-semibold" data-testid={`skill-name-${index}`}>{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary rounded-full h-2 mb-2">
                <div 
                  className="skill-bar h-2 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                  data-testid={`skill-progress-${index}`}
                ></div>
              </div>
              <span className="text-sm text-muted-foreground" data-testid={`skill-level-${index}`}>{skill.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
