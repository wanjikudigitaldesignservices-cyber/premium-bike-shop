import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/40 py-12 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold tracking-tighter mb-4">
            VELO<span className="font-light">CRAFT</span>
          </h3>
          <p className="text-muted-foreground text-sm max-w-xs">
            Premium bicycles crafted for the modern rider. Organic design, precision engineering.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/shop" className="hover:text-foreground">All Bicycles</Link></li>
            <li><Link href="/shop?category=road" className="hover:text-foreground">Road</Link></li>
            <li><Link href="/shop?category=gravel" className="hover:text-foreground">Gravel</Link></li>
            <li><Link href="/shop?category=urban" className="hover:text-foreground">Urban</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li>
            <li><Link href="/service" className="hover:text-foreground">Service & Repair</Link></li>
            <li><Link href="/contact" className="hover:text-foreground">Contact Us</Link></li>
            <li><Link href="/legal" className="hover:text-foreground">Legal</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Stay Connected</h4>
          <p className="text-sm text-muted-foreground mb-4">Subscribe to our journal for the latest updates.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-accent/50 border border-border rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-border/40 text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Velocraft Bicycles. All rights reserved.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <Link href="/legal" className="hover:text-foreground">Privacy Policy</Link>
          <Link href="/legal" className="hover:text-foreground">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
