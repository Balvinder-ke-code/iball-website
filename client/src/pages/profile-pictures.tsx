import { Link } from "wouter";

export default function ProfilePictures() {
  
  // Handle back navigation with scroll restoration
  const handleBackClick = () => {
    // Let the navigation happen naturally, scroll position will be restored by PortfolioSection
  };
  return (
    <div className="min-h-screen pt-24 pb-12 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="text-accent hover:text-accent/80 mb-4 inline-flex items-center" onClick={handleBackClick}>
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Portfolio
          </Link>
          <h1 className="text-5xl font-bold gradient-text mb-4" data-testid="page-title">Profile Pictures</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional profile pictures and avatar designs for personal branding
          </p>
        </div>

        {/* Image Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {Array.from({ length: 12 }, (_, index) => (
            <div key={index} className="glass-morphism rounded-2xl overflow-hidden group" data-testid={`profile-placeholder-${index}`}>
              <div className="aspect-square bg-secondary flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
                <div className="text-center">
                  <i className="fas fa-user text-3xl text-muted-foreground mb-2"></i>
                  <p className="text-muted-foreground text-sm">Profile {index + 1}</p>
                  <p className="text-xs text-muted-foreground/70">Click to upload</p>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-base mb-1">Profile Picture {index + 1}</h3>
                <p className="text-muted-foreground text-xs">Professional avatar design</p>
              </div>
            </div>
          ))}
        </div>

        {/* Upload Section */}
        <div className="glass-morphism rounded-2xl p-8 text-center">
          <div className="max-w-md mx-auto">
            <i className="fas fa-cloud-upload-alt text-5xl text-accent mb-4"></i>
            <h3 className="text-2xl font-semibold mb-4">Upload New Profile Pictures</h3>
            <p className="text-muted-foreground mb-6">
              Drag and drop your profile picture designs here or click to browse
            </p>
            <button className="gradient-button px-8 py-4 rounded-full text-primary-foreground font-semibold shadow-lg" data-testid="button-upload">
              Choose Files
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}