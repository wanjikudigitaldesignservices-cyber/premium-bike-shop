import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">
            Form, Function, & <span className="font-light italic text-muted-foreground">Flow.</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            We believe that a bicycle is more than a machine. It is an extension of the human body, a tool for exploration, and a work of art.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
          <div className="aspect-[4/5] rounded-3xl bg-accent/30 border border-border/50 relative overflow-hidden flex items-center justify-center">
            <div className="text-muted-foreground text-sm tracking-widest uppercase">Workshop Image</div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter">Born from precision.</h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2026, Velocraft started with a simple obsession: to build the perfect frame. We stripped away the unnecessary, focusing purely on materials, geometry, and the visceral feeling of the ride.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our workshop combines advanced aerospace carbon layup techniques with traditional craftsmanship. Every bicycle is assembled by hand, ensuring that no detail is overlooked.
            </p>
          </div>
        </div>

        {/* Feature Cards - 21st.dev style minimal bento */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">Our Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Minimalism", desc: "Removing the superfluous to elevate the essential. Clean lines and hidden routing." },
              { title: "Engineering", desc: "Computational fluid dynamics meet relentless real-world testing." },
              { title: "Sustainability", desc: "Built to last a lifetime, with closed-loop manufacturing processes." }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl bg-card border border-border/50 hover:border-border transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="text-primary font-bold">0{i+1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Profiles */}
        <div>
          <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">The Builders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Elena Rostova", role: "Lead Engineer" },
              { name: "Marcus Chen", role: "Design Director" },
              { name: "Sarah Jenkins", role: "Master Mechanic" },
              { name: "David Alaba", role: "Aerodynamics" }
            ].map((member, i) => (
              <div key={i} className="group text-center">
                <div className="aspect-square rounded-full bg-accent/30 border border-border/50 mb-4 mx-auto w-32 relative overflow-hidden transition-transform duration-500 group-hover:scale-105">
                </div>
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
