import React from 'react';
import { Users, Package, ShoppingCart, Calendar, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-accent/20 pt-16 flex">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-card border-r border-border/50 hidden md:block">
        <div className="p-6">
          <h2 className="text-xl font-bold tracking-tighter">Velocraft <span className="text-primary text-sm uppercase tracking-widest font-semibold ml-2">Admin</span></h2>
        </div>
        <nav className="space-y-1 px-4">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-accent/50 rounded-lg text-sm font-medium">
            <TrendingUp className="w-4 h-4" /> Overview
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-accent/30 rounded-lg text-sm font-medium text-muted-foreground transition-colors">
            <ShoppingCart className="w-4 h-4" /> Orders
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-accent/30 rounded-lg text-sm font-medium text-muted-foreground transition-colors">
            <Package className="w-4 h-4" /> Inventory
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-accent/30 rounded-lg text-sm font-medium text-muted-foreground transition-colors">
            <Calendar className="w-4 h-4" /> Appointments
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-accent/30 rounded-lg text-sm font-medium text-muted-foreground transition-colors">
            <Users className="w-4 h-4" /> Customers
          </button>
        </nav>
      </aside>

      {/* Admin Main */}
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
          <p className="text-muted-foreground">Store performance and pending actions.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Total Revenue", value: "$124,500.00", change: "+12.5%" },
            { label: "Orders (30d)", value: "42", change: "+8.1%" },
            { label: "Pending Service", value: "14", change: "-2" },
            { label: "Low Inventory", value: "3 Items", change: "Action needed", alert: true }
          ].map((stat, i) => (
            <div key={i} className={`p-6 rounded-2xl bg-card border ${stat.alert ? 'border-destructive/50' : 'border-border/50'}`}>
              <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
              <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
              <p className={`text-xs ${stat.alert ? 'text-destructive' : 'text-primary'}`}>{stat.change}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders Table */}
          <div className="lg:col-span-2 bg-card border border-border/50 rounded-3xl p-6">
            <h2 className="text-xl font-bold mb-6">Recent Orders</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-accent/30">
                  <tr>
                    <th className="px-4 py-3 rounded-tl-lg">Order ID</th>
                    <th className="px-4 py-3">Customer</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3 rounded-tr-lg">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((row) => (
                    <tr key={row} className="border-b border-border/50 last:border-0 hover:bg-accent/10">
                      <td className="px-4 py-4 font-medium">#VC-{8920 + row}</td>
                      <td className="px-4 py-4">J. Doe</td>
                      <td className="px-4 py-4">Oct 1{row}, 2026</td>
                      <td className="px-4 py-4">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold">Processing</span>
                      </td>
                      <td className="px-4 py-4">${(1200 + row * 250).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Upcoming Appointments */}
          <div className="bg-card border border-border/50 rounded-3xl p-6">
            <h2 className="text-xl font-bold mb-6">Service Queue</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((apt) => (
                <div key={apt} className="p-4 border border-border/50 rounded-xl bg-accent/20">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">Tune-up</h4>
                    <span className="text-xs text-muted-foreground">Today, {2 + apt}:00 PM</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Alex Smith • VeloCraft Aero</p>
                </div>
              ))}
              <button className="w-full text-sm text-primary font-medium mt-4 hover:underline">View all appointments</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
