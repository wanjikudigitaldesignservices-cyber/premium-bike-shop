import React from 'react';
import BikeModelViewer from '@/components/3d/BikeModel';
import { DEFAULT_BASE_PRICE } from '@/lib/constants';
import Link from 'next/link';
import Image from 'next/image';

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

      {/* Full Width Cinematic Video Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&q=80&w=2000"
        >
          {/* High quality free stock video of a bicycle */}
          <source src="https://videos.pexels.com/video-files/3195350/3195350-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="relative z-20 text-center px-4 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">
            Forged for the Elements.
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-light">
            Every detail refined. Every component tested. Ride without limits.
          </p>
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
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 p-8 z-20 transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-2 text-white">Road</h3>
              <p className="text-white/80 max-w-sm">Aerodynamic excellence for maximum velocity on the tarmac.</p>
            </div>
            <Image src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80&w=1200" alt="Road Bike" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </Link>

          {/* Gravel */}
          <Link href="/shop?category=gravel" className="relative rounded-3xl overflow-hidden group bg-card border border-border/50 hover:border-border transition-colors">
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 p-8 z-20 transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-2 text-white">Gravel</h3>
              <p className="text-white/80 text-sm">Conquer any terrain with confidence.</p>
            </div>
            <Image src="https://images.unsplash.com/photo-1582200238384-db7cd8635848?auto=format&fit=crop&q=80&w=800" alt="Gravel Bike" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </Link>

          {/* Urban */}
          <Link href="/shop?category=urban" className="relative rounded-3xl overflow-hidden group bg-card border border-border/50 hover:border-border transition-colors">
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 p-8 z-20 transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-2 text-white">Urban</h3>
              <p className="text-white/80 text-sm">Sleek commuting for the modern city.</p>
            </div>
            <Image src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800" alt="Urban Bike" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </Link>

          {/* Accessories */}
          <Link href="/shop?category=accessories" className="md:col-span-2 relative rounded-3xl overflow-hidden group bg-card border border-border/50 hover:border-border transition-colors">
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 p-8 z-20 transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-2 text-white">Accessories</h3>
              <p className="text-white/80 max-w-sm">Premium gear to complete your ride.</p>
            </div>
            <Image src="https://images.unsplash.com/photo-1572196284554-4e321b0e7e0b?auto=format&fit=crop&q=80&w=1200" alt="Accessories" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </Link>
        </div>
      </section>
      
      {/* Editorial / Feature Section */}
      <section className="py-24 bg-card border-y border-border/50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-square rounded-full bg-accent/30 border border-border/50 relative overflow-hidden flex items-center justify-center">
              <Image src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&q=80&w=800" alt="Carbon Fiber Assembly" fill className="object-cover" />
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
