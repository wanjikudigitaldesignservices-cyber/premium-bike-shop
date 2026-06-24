import React from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, Search } from 'lucide-react';
import { CartDrawer } from '@/components/cart/CartDrawer';

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tighter">
          VELO<span className="font-light">CRAFT</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
          <Link href="/shop" className="hover:text-foreground transition-colors">Bicycles</Link>
          <Link href="/service" className="hover:text-foreground transition-colors">Service</Link>
          <Link href="/journal" className="hover:text-foreground transition-colors">Journal</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-accent rounded-full transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <CartDrawer />
          <button className="p-2 md:hidden hover:bg-accent rounded-full transition-colors" aria-label="Menu">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
