import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-secondary to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Let's Work Together
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Have a project in mind? Let's discuss how I can help bring your ideas to life.
        </p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary transition">
                <Mail className="text-primary group-hover:text-white transition" size={24} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-primary transition">
                  your.email@example.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary transition">
                <Phone className="text-primary group-hover:text-white transition" size={24} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Phone</h4>
                <a href="tel:+15551234567" className="text-gray-300 hover:text-primary transition">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary transition">
                <MapPin className="text-primary group-hover:text-white transition" size={24} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Location</h4>
                <p className="text-gray-300">San Francisco, CA</p>
              </div>
            </div>
          </div>

          {/* Simple Contact Form */}
          <div className="bg-slate-800/50 p-8 rounded-2xl backdrop-blur">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-primary focus:outline-none transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-primary focus:outline-none transition"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-primary focus:outline-none transition resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-700 text-center text-gray-400">
          <p>© 2025 John Doe. Built with React, Tailwind CSS & Framer Motion.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;