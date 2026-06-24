import React from 'react';
import Link from 'next/link';

export default function Journal() {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tighter mb-4">The Journal.</h1>
          <p className="text-muted-foreground text-lg">Stories, guides, and technical deep dives from the Velocraft team.</p>
        </div>

        <div className="space-y-16">
          
          {/* Featured Post */}
          <article className="group cursor-pointer">
            <div className="aspect-[21/9] rounded-3xl bg-accent/30 border border-border/50 relative overflow-hidden mb-8">
               <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
               <div className="absolute bottom-0 left-0 p-8 z-20">
                 <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">Technical</span>
                 <h2 className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">The Aerodynamics of the VeloCraft Aero</h2>
                 <p className="text-muted-foreground max-w-2xl line-clamp-2">An inside look at our wind tunnel testing process and how we shaved 15 watts off the frame drag coefficient.</p>
               </div>
            </div>
          </article>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            
            {[
              { category: "Culture", title: "Riding the Alps: A 5-Day Gravel Epic", excerpt: "Discovering the hidden paths and forgotten military roads of the French Alps on the new Gravel Pro." },
              { category: "Maintenance", title: "Essential Pre-Ride Checks", excerpt: "Five things you must inspect before every ride to ensure safety and optimal performance." },
              { category: "Design", title: "Why Titanium? The Magic Metal Explained", excerpt: "Exploring the unique properties of titanium and why it remains the holy grail of frame materials for many riders." },
              { category: "Community", title: "Velocraft Club Rides: Summer Schedule", excerpt: "Join us every Saturday morning starting from the Portland studio for a no-drop 40-mile loop." }
            ].map((post, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-2xl bg-accent/30 border border-border/50 relative overflow-hidden mb-6 transition-transform duration-500 group-hover:scale-[1.02]">
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 block">{post.category}</span>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                <div className="mt-4 text-sm font-medium hover:underline">Read Article &rarr;</div>
              </article>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}
