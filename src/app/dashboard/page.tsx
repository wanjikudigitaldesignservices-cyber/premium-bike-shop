import React from 'react';
import { Package, User, Settings, Heart } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-accent/10">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tighter mb-2">My Account</h1>
          <p className="text-muted-foreground">Welcome back, Alex. Here's an overview of your Velocraft garage.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar */}
          <aside className="w-full md:w-64 shrink-0 space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-card border border-border/50 rounded-xl font-medium text-foreground shadow-sm">
              <User className="w-5 h-5" /> Profile
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-accent/50 rounded-xl font-medium text-muted-foreground transition-colors">
              <Package className="w-5 h-5" /> Orders
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-accent/50 rounded-xl font-medium text-muted-foreground transition-colors">
              <Heart className="w-5 h-5" /> Saved Builds
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-accent/50 rounded-xl font-medium text-muted-foreground transition-colors">
              <Settings className="w-5 h-5" /> Settings
            </button>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 space-y-8">
            
            {/* Recent Orders Overview */}
            <div className="bg-card border border-border/50 rounded-3xl p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold tracking-tight">Recent Orders</h2>
                <button className="text-sm text-muted-foreground hover:text-foreground">View all</button>
              </div>
              
              <div className="space-y-4">
                {/* Order Item */}
                <div className="flex flex-col sm:flex-row items-center justify-between p-4 border border-border/50 rounded-2xl bg-accent/30">
                  <div className="flex items-center gap-4 w-full sm:w-auto mb-4 sm:mb-0">
                    <div className="w-16 h-16 bg-background rounded-xl flex items-center justify-center border border-border/50 shrink-0">
                       <span className="text-xs text-muted-foreground">IMG</span>
                    </div>
                    <div>
                      <p className="font-semibold">VeloCraft Aero - 56cm</p>
                      <p className="text-sm text-muted-foreground">Order #VC-89234 • Placed Oct 12, 2026</p>
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-2">In Production</span>
                    <button className="text-sm font-medium hover:underline">Track Status</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Saved Configurations */}
            <div className="bg-card border border-border/50 rounded-3xl p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold tracking-tight">Saved Builds</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-border/50 rounded-2xl p-4 flex gap-4 items-center group cursor-pointer hover:border-border transition-colors">
                  <div className="w-20 h-20 bg-accent/50 rounded-xl shrink-0 relative overflow-hidden">
                    {/* Tiny 3D preview thumbnail would go here */}
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">Gravel Pro Custom</h3>
                    <p className="text-sm text-muted-foreground">Crimson Shift • 54cm</p>
                    <p className="text-sm mt-1">$3,450.00</p>
                  </div>
                </div>
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
