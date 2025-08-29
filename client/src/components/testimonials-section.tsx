export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alex Martinez",
      role: "YouTuber",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      comment: "iBall transformed my channel with incredible thumbnails. My click-through rates increased by 40% within the first month!"
    },
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      comment: "Working with iBall has been amazing. The profile pictures they created perfectly captured my brand and helped me stand out."
    },
    {
      name: "Mike Thompson",
      role: "Event Organizer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      comment: "The poster designs for our events were absolutely stunning. Professional quality that made our events look premium and attracted huge crowds."
    },
    {
      name: "Emma Davis",
      role: "Influencer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      comment: "iBall's design work is exceptional. They understood my vision perfectly and delivered designs that exceeded my expectations."
    },
    {
      name: "David Rodriguez",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      comment: "Fast turnaround, excellent communication, and outstanding results. iBall helped elevate our brand with professional graphics."
    },
    {
      name: "Lisa Chen",
      role: "Podcaster",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="fade-in glass-morphism p-6 rounded-2xl" data-testid={`testimonial-card-${index}`}>
              <div className="flex flex-col items-center text-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-accent"
                  data-testid={`testimonial-image-${index}`}
                />
                <h3 className="text-lg font-semibold mb-1" data-testid={`testimonial-name-${index}`}>{testimonial.name}</h3>
                <p className="text-accent text-sm mb-4" data-testid={`testimonial-role-${index}`}>{testimonial.role}</p>
                <p className="text-muted-foreground leading-relaxed" data-testid={`testimonial-comment-${index}`}>
                  "{testimonial.comment}"
                </p>
                <div className="flex mt-4">
                  {Array.from({ length: 5 }, (_, starIndex) => (
                    <i key={starIndex} className="fas fa-star text-accent text-sm"></i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}