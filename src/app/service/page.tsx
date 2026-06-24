import React from 'react';
import { Calendar as CalendarIcon, Clock, Wrench } from 'lucide-react';

export default function Service() {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-card">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Service & Repair.</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Keep your Velocraft performing at its peak. Book a session with our master mechanics at the Portland studio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Booking Form (Left/Center) */}
          <div className="lg:col-span-2 bg-background border border-border/50 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-8">Schedule an Appointment</h2>
            
            <form className="space-y-8">
              {/* Service Type */}
              <div className="space-y-4">
                <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Select Service</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex items-start gap-3 p-4 border border-primary/50 bg-primary/5 rounded-xl cursor-pointer">
                    <input type="radio" name="service" defaultChecked className="mt-1 accent-primary" />
                    <div>
                      <h4 className="font-semibold">Comprehensive Tune-up</h4>
                      <p className="text-sm text-muted-foreground mt-1">Full drivetrain cleaning, brake bleed, shifting adjustment, and safety check. (2 hrs)</p>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 p-4 border border-border/50 rounded-xl cursor-pointer hover:border-border">
                    <input type="radio" name="service" className="mt-1 accent-primary" />
                    <div>
                      <h4 className="font-semibold">Custom Build</h4>
                      <p className="text-sm text-muted-foreground mt-1">Bring your parts or order through us. Frame up assembly and fitting. (4 hrs)</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" /> Date
                  </label>
                  <input type="date" className="w-full bg-accent/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Time
                  </label>
                  <select className="w-full bg-accent/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary appearance-none">
                    <option>10:00 AM</option>
                    <option>1:00 PM</option>
                    <option>3:30 PM</option>
                  </select>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Bike Details & Notes</label>
                <textarea rows={3} placeholder="Tell us about your bike and any specific issues..." className="w-full bg-accent/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary resize-none"></textarea>
              </div>

              <button type="button" className="w-full bg-primary text-primary-foreground font-semibold rounded-xl px-4 py-4 hover:bg-primary/90 transition-colors">
                Confirm Booking
              </button>
            </form>
          </div>

          {/* Info Panel (Right) */}
          <div className="space-y-6">
            <div className="bg-background border border-border/50 rounded-3xl p-8">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <Wrench className="w-5 h-5 text-primary" /> What to expect
               </h3>
               <ul className="space-y-4 text-sm text-muted-foreground">
                 <li className="flex gap-2"><span className="text-primary">•</span> Drop off your bike 15 mins prior to the scheduled time.</li>
                 <li className="flex gap-2"><span className="text-primary">•</span> A master mechanic will review the scope of work with you.</li>
                 <li className="flex gap-2"><span className="text-primary">•</span> Enjoy complementary espresso in our lounge while you wait.</li>
               </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
