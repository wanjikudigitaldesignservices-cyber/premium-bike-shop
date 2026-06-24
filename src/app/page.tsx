import React from 'react';
import BikeModelViewer, { DEFAULT_BASE_PRICE } from '@/components/3d/BikeModel';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex flex-col md:flex-row items-center justify-between bg-accent/30 overflow-hidden">
        {/* Background typographic watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
          <h1 className="text-[15vw] font-bold tracking-tighter">VELOCRAFT</h1>
        </div>

        <div className="container mx-auto px-4 z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
          <div className="space-y-6 max-w-xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              Engineering <br/> <span className="font-light italic text-muted-foreground">in motion.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Experience the pinnacle of bicycle design. Precision crafted for the urban landscape and the open road.
            </p>
            <div className="pt-4 flex items-center space-x-6">
              <Link href="/shop" className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105 active:scale-95">
                Explore Catalog
              </Link>
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Starting from</span>
                <span className="font-semibold text-lg">${DEFAULT_BASE_PRICE.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[600px] w-full mt-8 md:mt-0">
            {/* 3D Model Viewer embedded in Hero */}
            <BikeModelViewer autoRotate={true} />
          </div>
        </div>
      </section>

      {/* Featured Categories - Bento Grid */}
      <section className="py-24 container mx-auto px-4">
        <div className="mb-12 flex justify-between items-end">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Disciplines</h2>
          <Link href="/shop" className="text-sm font-medium hover:underline underline-offset-4 text-muted-foreground">View all</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Road - Large Span */}
          <Link href="/shop?category=road" className="md:col-span-2 relative rounded-3xl overflow-hidden group bg-card border border-border/50 hover:border-border transition-colors">
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 p-8 z-20 transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-2">Road</h3>
              <p className="text-muted-foreground max-w-sm">Aerodynamic excellence for maximum velocity on the tarmac.</p>
            </div>
            {/* Placeholder for actual image */}
            <div className="absolute inset-0 bg-accent/50 transition-transform duration-700 group-hover:scale-105" />
          </Link>

          {/* Gravel */}
          <Link href="/shop?category=gravel" className="relative rounded-3xl overflow-hidden group bg-card border border-border/50 hover:border-border transition-colors">
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 p-8 z-20 transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-2">Gravel</h3>
              <p className="text-muted-foreground text-sm">Conquer any terrain with confidence.</p>
            </div>
            <div className="absolute inset-0 bg-accent/50 transition-transform duration-700 group-hover:scale-105" />
          </Link>

          {/* Urban */}
          <Link href="/shop?category=urban" className="relative rounded-3xl overflow-hidden group bg-card border border-border/50 hover:border-border transition-colors">
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 p-8 z-20 transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-2">Urban</h3>
              <p className="text-muted-foreground text-sm">Sleek commuting for the modern city.</p>
            </div>
            <div className="absolute inset-0 bg-accent/50 transition-transform duration-700 group-hover:scale-105" />
          </Link>

          {/* Accessories */}
          <Link href="/shop?category=accessories" className="md:col-span-2 relative rounded-3xl overflow-hidden group bg-card border border-border/50 hover:border-border transition-colors">
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 p-8 z-20 transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-2">Accessories</h3>
              <p className="text-muted-foreground max-w-sm">Premium gear to complete your ride.</p>
            </div>
            <div className="absolute inset-0 bg-accent/50 transition-transform duration-700 group-hover:scale-105" />
          </Link>
        </div>
      </section>
      
      {/* Editorial / Feature Section */}
      <section className="py-24 bg-card border-y border-border/50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-square rounded-full bg-accent/30 border border-border/50 relative overflow-hidden flex items-center justify-center">
              <div className="text-muted-foreground text-sm tracking-widest uppercase">Visual Asset</div>
          </div>
          <div className="space-y-6 max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Carbon Fiber Mastery.</h2>
            <p className="text-lg text-muted-foreground">
              Every frame is meticulously laid up by hand, ensuring optimal stiffness where you need power transfer, and compliance where you need comfort.
            </p>
            <Link href="/about" className="inline-flex items-center font-medium hover:text-primary/80 transition-colors">
              Learn about our process
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
