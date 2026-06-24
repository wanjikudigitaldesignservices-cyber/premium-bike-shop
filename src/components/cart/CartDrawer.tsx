"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart, Trash2 } from "lucide-react";
import { DEFAULT_BASE_PRICE } from "../3d/BikeModel";

export function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Mock cart state
  const cartItems = [
    {
      id: 1,
      name: "VeloCraft Aero",
      color: "Matte Obsidian",
      size: "56cm",
      price: DEFAULT_BASE_PRICE,
      quantity: 1,
    }
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    // In a real app, this would redirect to Stripe checkout session
    alert("Redirecting to Stripe checkout...");
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="p-2 hover:bg-accent rounded-full transition-colors relative" aria-label="Cart">
        <ShoppingCart className="w-5 h-5" />
        {cartItems.length > 0 && (
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
        )}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col h-full bg-background/95 backdrop-blur-xl border-l border-border/50">
        <SheetHeader className="pb-6 border-b border-border/50">
          <SheetTitle className="text-2xl font-bold tracking-tighter">Your Garage</SheetTitle>
          <SheetDescription>
            Review your configured bicycles and accessories.
          </SheetDescription>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto py-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="text-center text-muted-foreground pt-12">
              <p>Your cart is empty.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-20 h-20 bg-accent/30 rounded-xl border border-border/50 shrink-0">
                  {/* Thumbnail placeholder */}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">{item.name}</h3>
                    <button className="text-muted-foreground hover:text-destructive transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{item.color} • {item.size}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="font-medium">${item.price.toFixed(2)}</span>
                    <span className="text-sm text-muted-foreground">Qty: {item.quantity}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="pt-6 border-t border-border/50 mt-auto">
          <div className="flex justify-between items-center mb-6">
            <span className="font-semibold text-lg">Subtotal</span>
            <span className="font-bold text-xl">${total.toFixed(2)}</span>
          </div>
          <button 
            onClick={handleCheckout}
            disabled={cartItems.length === 0}
            className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-xl hover:bg-primary/90 transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
          >
            Checkout with Stripe
          </button>
          <p className="text-xs text-center text-muted-foreground mt-4">
            Shipping and taxes calculated at checkout.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
