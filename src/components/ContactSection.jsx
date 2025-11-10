import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 bg-white/10 border border-white/20 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-purple-100 transition-colors">
                  <Mail className="h-6 w-6 text-muted-foreground group-hover:text-purple-500 transition-colors" />{" "}
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-muted-foreground group-hover:text-purple-500 transition-colors"> Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-muted-foreground group-hover:text-purple-500 hover:text-purple-500 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 rounded-sm"
                  >
                    malavikapradeep2001@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-purple-100 transition-colors">
                  <Phone className="h-6 w-6 text-muted-foreground group-hover:text-purple-500 transition-colors" />{" "}
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-muted-foreground group-hover:text-purple-500 transition-colors"> Phone</h4>
                  <a
                    href="tel:+11234567890"
                    className="text-muted-foreground group-hover:text-purple-500 hover:text-purple-500 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 rounded-sm"
                  >
                    +91 (790) 238-3530
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-purple-100 transition-colors">
                  <MapPin className="h-6 w-6 text-muted-foreground group-hover:text-purple-500 transition-colors" />{" "}
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-muted-foreground group-hover:text-purple-500 transition-colors"> Location</h4>
                  <span tabIndex={0} className="text-muted-foreground group-hover:text-purple-500 hover:text-purple-500 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 rounded-sm">
                    Thiruvananthapuram, Kerala
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 rounded-sm">
                  <Linkedin />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 rounded-sm">
                  <Twitter />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 rounded-sm">
                  <Instagram />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitch" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 rounded-sm">
                  <Twitch />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Malavika Pradeep..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
