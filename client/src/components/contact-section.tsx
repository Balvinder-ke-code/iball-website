import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your message has been sent successfully. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-background" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text" data-testid="contact-title">Let's Work Together</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4" data-testid="contact-description">
            Ready to bring your vision to life? Let's discuss your next project and create something amazing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
          <div className="fade-in">
            <div className="glass-morphism p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6" data-testid="contact-form-title">Get In Touch</h3>
              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="apple-input w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg text-foreground placeholder-muted-foreground" 
                    placeholder="Your full name"
                    required 
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="apple-input w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg text-foreground placeholder-muted-foreground" 
                    placeholder="your.email@example.com"
                    required 
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5} 
                    className="apple-input w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg text-foreground placeholder-muted-foreground" 
                    placeholder="Tell me about your project..."
                    required
                    data-testid="textarea-message"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="gradient-button w-full py-3 sm:py-4 text-sm sm:text-base rounded-lg text-primary-foreground font-semibold shadow-lg disabled:opacity-50"
                  data-testid="button-submit"
                >
                  {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
          
          <div className="fade-in">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center space-x-3 sm:space-x-4" data-testid="contact-email">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-primary-foreground text-sm sm:text-base"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">Email</h4>
                  <p className="text-muted-foreground text-sm sm:text-base break-all">iball93designs@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 sm:space-x-4" data-testid="contact-location">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-primary-foreground text-sm sm:text-base"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">Location</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">India</p>
                </div>
              </div>
              
              <div className="pt-6 sm:pt-8">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Follow Me</h4>
                <div className="flex space-x-3 sm:space-x-4 flex-wrap gap-2">
                  <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-accent transition-colors" data-testid="social-behance">
                    <i className="fab fa-behance text-sm sm:text-base"></i>
                  </a>
                  <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-accent transition-colors" data-testid="social-pinterest">
                    <i className="fab fa-pinterest text-sm sm:text-base"></i>
                  </a>
                  <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-accent transition-colors" data-testid="social-instagram">
                    <i className="fab fa-instagram text-sm sm:text-base"></i>
                  </a>
                  <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-accent transition-colors" data-testid="social-linkedin">
                    <i className="fab fa-linkedin text-sm sm:text-base"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
