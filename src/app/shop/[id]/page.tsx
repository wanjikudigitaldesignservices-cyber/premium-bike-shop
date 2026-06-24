"use client";

import React, { useState } from 'react';
import BikeModelViewer from '@/components/3d/BikeModel';
import { DEFAULT_BASE_PRICE } from '@/lib/constants';
import { ArrowLeft, Check, ShieldCheck, Truck } from 'lucide-react';
import Link from 'next/link';

// Mock data
const COLORS = [
  { name: 'Matte Obsidian', hex: '#1a1a1a', price: 0 },
  { name: 'Alpine White', hex: '#f0f0f0', price: 0 },
  { name: 'Cobalt Racing', hex: '#1e3a8a', price: 150 },
  { name: 'Crimson Shift', hex: '#7f1d1d', price: 150 },
];

const SIZES = ['48cm', '52cm', '56cm', '58cm', '61cm'];

export default function ProductDetails({ params }: { params: { id: string } }) {
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [selectedSize, setSelectedSize] = useState('56cm');
  const [quantity, setQuantity] = useState(1);

  const finalPrice = DEFAULT_BASE_PRICE + selectedColor.price;

  return (
    <div className="min-h-screen pt-16 flex flex-col lg:flex-row">
      {/* 3D Configurator Area - Left/Top */}
      <div className="w-full lg:w-2/3 h-[50vh] lg:h-[calc(100vh-64px)] sticky top-16 bg-accent/20 border-r border-border/50">
        <Link href="/shop" className="absolute top-6 left-6 z-10 flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Shop
        </Link>
        <div className="absolute top-6 right-6 z-10 flex gap-2">
           <span className="bg-background/80 backdrop-blur border border-border px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
             Drag to Rotate
           </span>
        </div>
        <BikeModelViewer color={selectedColor.hex} autoRotate={false} />
      </div>

      {/* Product Info & Controls - Right/Bottom */}
      <div className="w-full lg:w-1/3 p-8 lg:p-12 overflow-y-auto">
        <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Road Series</div>
        <h1 className="text-4xl font-bold tracking-tighter mb-4">VeloCraft Aero</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Precision engineered high-modulus carbon frame. Uncompromising speed and aerodynamic efficiency for the elite rider.
        </p>

        <div className="text-3xl font-light mb-8">
          ${finalPrice.toFixed(2)}
        </div>

        {/* Configuration Options */}
        <div className="space-y-8">
          {/* Colors */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">Frame Color</h3>
              <span className="text-sm text-muted-foreground">{selectedColor.name}</span>
            </div>
            <div className="flex gap-3">
              {COLORS.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center ${
                    selectedColor.name === color.name ? 'border-primary scale-110' : 'border-transparent hover:scale-105'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={color.name}
                >
                  {selectedColor.name === color.name && (
                    <Check className={`w-5 h-5 ${color.hex === '#f0f0f0' ? 'text-black' : 'text-white'}`} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">Frame Size</h3>
              <button className="text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground">Size Guide</button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {SIZES.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 text-sm font-medium border rounded-md transition-all ${
                    selectedSize === size 
                      ? 'border-primary bg-primary text-primary-foreground' 
                      : 'border-border hover:border-primary/50 hover:bg-accent/50'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-border/50">
            <button className="w-full bg-primary text-primary-foreground py-4 rounded-full font-bold text-lg hover:bg-primary/90 hover:scale-[1.02] transition-all active:scale-[0.98]">
              Add to Cart — ${finalPrice.toFixed(2)}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex items-center text-sm text-muted-foreground gap-2">
              <Truck className="w-4 h-4" /> Free global shipping
            </div>
            <div className="flex items-center text-sm text-muted-foreground gap-2">
              <ShieldCheck className="w-4 h-4" /> Lifetime frame warranty
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
