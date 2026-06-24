import React from 'react';
import Link from 'next/link';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

export default function Shop() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">Bicycles</h1>
          <p className="text-muted-foreground">Find the perfect ride for your discipline.</p>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-9 pr-4 py-2 bg-accent/50 border border-border rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-primary w-full md:w-64 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-full text-sm font-medium hover:bg-accent transition-colors md:hidden">
            <Filter className="w-4 h-4" /> Filters
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="hidden md:block w-64 shrink-0 space-y-8 pr-8 border-r border-border/50">
          <div className="flex items-center gap-2 mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Terrain</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <label className="flex items-center gap-2 cursor-pointer hover:text-foreground"><input type="checkbox" className="rounded border-border accent-primary" /> Road</label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-foreground"><input type="checkbox" className="rounded border-border accent-primary" /> Gravel</label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-foreground"><input type="checkbox" className="rounded border-border accent-primary" /> Urban</label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-foreground"><input type="checkbox" className="rounded border-border accent-primary" /> Mountain</label>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Frame Material</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <label className="flex items-center gap-2 cursor-pointer hover:text-foreground"><input type="checkbox" className="rounded border-border accent-primary" /> Carbon Fiber</label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-foreground"><input type="checkbox" className="rounded border-border accent-primary" /> Aluminum</label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-foreground"><input type="checkbox" className="rounded border-border accent-primary" /> Titanium</label>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Size</h3>
            <div className="grid grid-cols-3 gap-2">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button key={size} className="py-2 border border-border rounded hover:border-primary hover:bg-accent/50 transition-colors text-sm text-center">
                  {size}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Mock Product Card */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Link href={`/shop/model-00${i}`} key={i} className="group flex flex-col group border border-border/50 rounded-2xl overflow-hidden hover:border-border bg-card transition-all">
              <div className="aspect-[4/3] bg-accent/30 relative flex items-center justify-center overflow-hidden">
                <div className="text-muted-foreground/50 font-mono text-xs z-10">IMAGE PLACEHOLDER</div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-muted-foreground mb-1 font-medium tracking-wider uppercase">Road</div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">VeloCraft Aero {i}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">High-modulus carbon frame designed for aggressive aerodynamics and speed.</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-semibold">${(1200 + i * 500).toFixed(2)}</span>
                  <span className="text-xs bg-accent px-2 py-1 rounded-full text-foreground">In Stock</span>
                </div>
              </div>
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
}
