import { useRef, useState, useEffect } from "react";

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons(); // Check initial state
      
      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollButtons);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current && canScrollLeft) {
      scrollRef.current.scrollBy({
        left: -640,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current && canScrollRight) {
      scrollRef.current.scrollBy({
        left: 640,
        behavior: 'smooth'
      });
    }
  };
  const testimonials = [
    {
      name: "Alex Martinez",
      role: "YouTuber",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      comment: "iBall transformed my channel with incredible thumbnails. My click-through rates increased by 40% within the first month!"
    },
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      comment: "Working with iBall has been amazing. The profile pictures they created perfectly captured my brand and helped me stand out."
    },
    {
      name: "Mike Thompson",
      role: "Event Organizer",
      image: "https://pixabay.com/get/g5bbd268703585f807ff48dd4607608554841d1b00877a41de64f334690e8a1a577005b697799dac4b01e2786b123f1d1865a792069b4a49a96449139bc51e5bc_1280.jpg",
      comment: "The poster designs for our events were absolutely stunning. Professional quality that made our events look premium and attracted huge crowds."
    },
    {
      name: "Emma Davis",
      role: "Influencer",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      comment: "iBall's design work is exceptional. They understood my vision perfectly and delivered designs that exceeded my expectations."
    },
    {
      name: "David Rodriguez",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      comment: "Fast turnaround, excellent communication, and outstanding results. iBall helped elevate our brand with professional graphics."
    },
    {
      name: "Lisa Chen",
      role: "Podcaster",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      comment: "Creative, professional, and reliable. iBall's designs helped my podcast gain thousands of new subscribers. Highly recommended!"
    }
  ];

  return (
    <section className="py-20 bg-background" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-5xl font-bold mb-6 gradient-text" data-testid="testimonials-title">Trusted by Top Creators</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="testimonials-description">
            See what successful creators are saying about working with iBall
          </p>
        </div>
        
        <div className="relative">
          {/* Left Arrow */}
          <button 
            onClick={scrollLeft}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg hover:bg-accent/90 transition-all duration-300 ${
              canScrollLeft ? 'opacity-100' : 'opacity-30 cursor-not-allowed'
            }`}
            data-testid="scroll-left-button"
          >
            <i className="fas fa-chevron-left text-primary-foreground"></i>
          </button>

          {/* Right Arrow */}
          <button 
            onClick={scrollRight}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg hover:bg-accent/90 transition-all duration-300 ${
              canScrollRight ? 'opacity-100' : 'opacity-30 cursor-not-allowed'
            }`}
            data-testid="scroll-right-button"
          >
            <i className="fas fa-chevron-right text-primary-foreground"></i>
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollRef}
            className="overflow-x-hidden overflow-y-visible pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex space-x-6 px-16" style={{ width: 'max-content' }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="fade-in glass-morphism rounded-2xl overflow-visible flex-shrink-0 w-80" data-testid={`testimonial-card-${index}`}>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-48 object-cover"
                    data-testid={`testimonial-image-${index}`}
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <h3 className="text-lg font-semibold mr-2" data-testid={`testimonial-name-${index}`}>{testimonial.name}</h3>
                      <span className="text-accent text-sm" data-testid={`testimonial-role-${index}`}>• {testimonial.role}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4" data-testid={`testimonial-comment-${index}`}>
                      "{testimonial.comment}"
                    </p>
                    <div className="flex">
                      {Array.from({ length: 5 }, (_, starIndex) => (
                        <i key={starIndex} className="fas fa-star text-accent text-sm"></i>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}