import { Link } from "wouter";
import { useEffect } from "react";

export default function YoutubeThumbnails() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Array of your thumbnails (replace with your actual image filenames)
  const thumbnails = [
    "/images/thumbnails/thumb1.webp",
    "/images/thumbnails/thumb2.webp",
    "/images/thumbnails/thumb3.webp",
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            href="/"
            className="text-accent hover:text-accent/80 mb-4 inline-flex items-center"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Portfolio
          </Link>
          <h1
            className="text-5xl font-bold gradient-text mb-4"
            data-testid="page-title"
          >
            Youtube Thumbnails
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Eye-catching thumbnails designed to boost click-through rates and
            grow your channel
          </p>
        </div>

        {/* Image Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {thumbnails.map((src, index) => (
            <div
              key={index}
              className="glass-morphism rounded-2xl overflow-hidden group"
            >
              <img
                src={src}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-auto aspect-video object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">
                  Thumbnail Design {index + 1}
                </h3>
                <p className="text-muted-foreground text-sm">
                  Custom thumbnail for YouTube video
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
