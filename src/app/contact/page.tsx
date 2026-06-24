import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Get in touch.</h1>
          <p className="text-muted-foreground text-lg">We're here to help with sizing, custom builds, or general inquiries.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                  <input type="text" id="firstName" className="w-full bg-accent/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                  <input type="text" id="lastName" className="w-full bg-accent/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                <input type="email" id="email" className="w-full bg-accent/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary transition-all" />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <select id="subject" className="w-full bg-accent/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary transition-all appearance-none">
                  <option>General Inquiry</option>
                  <option>Custom Build</option>
                  <option>Support & Warranty</option>
                  <option>Press</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea id="message" rows={5} className="w-full bg-accent/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-primary text-primary-foreground font-semibold rounded-lg px-4 py-4 hover:bg-primary/90 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* Info & Map */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold tracking-tighter mb-6">Our Headquarters</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-muted-foreground shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Velocraft Studios</p>
                    <p className="text-muted-foreground">1200 Innovation Drive<br/>Suite 400<br/>Portland, OR 97209</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-muted-foreground shrink-0" />
                  <p className="text-muted-foreground">hello@velocraft.cc</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-muted-foreground shrink-0" />
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-[4/3] w-full rounded-3xl bg-accent/30 border border-border/50 relative overflow-hidden flex items-center justify-center">
               <div className="text-muted-foreground text-sm tracking-widest uppercase flex flex-col items-center">
                 <MapPin className="w-8 h-8 mb-2 opacity-50" />
                 Map Integration
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
