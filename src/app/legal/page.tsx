import React from 'react';

export default function Legal() {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tighter mb-12">Legal Information</h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2>Terms of Service</h2>
          <p className="text-sm text-muted-foreground mb-4">Last Updated: October 2026</p>
          <p>
            Welcome to Velocraft. By accessing our website and purchasing our products, you agree to be bound by these Terms of Service. Please read them carefully.
          </p>
          <h3>1. Custom Builds and Deposits</h3>
          <p>
            All custom bicycle builds require a non-refundable 50% deposit before production begins. Lead times are estimates and may vary based on component availability and paint queue.
          </p>
          <h3>2. Lifetime Frame Warranty</h3>
          <p>
            Velocraft warrants each new frame and rigid fork against defects in workmanship and materials for the lifetime of the original owner. This warranty does not cover damage caused by crashes, misuse, or improper maintenance.
          </p>
          <h3>3. Returns and Exchanges</h3>
          <p>
            Standard stock items and apparel can be returned within 30 days of purchase in unworn, unmounted condition. Custom builds and configured bicycles are non-returnable.
          </p>

          <hr className="my-12" />

          <h2>Privacy Policy</h2>
          <p className="text-sm text-muted-foreground mb-4">Last Updated: October 2026</p>
          <p>
            Velocraft respects your privacy and is committed to protecting your personal data.
          </p>
          <h3>Information We Collect</h3>
          <p>
            We collect information you provide directly to us, such as when you create an account, purchase a bicycle, subscribe to our journal, or communicate with us. This includes contact details, payment information (processed securely via Stripe), and your physical measurements if submitted for a custom build.
          </p>
          <h3>How We Use Your Information</h3>
          <p>
            Your information is used solely to fulfill orders, communicate regarding your build or service appointments, and, with your consent, send updates about new products and events.
          </p>
          <h3>Data Security</h3>
          <p>
            We implement robust security measures to protect your data, utilizing modern encryption and secure server architecture.
          </p>
        </div>
      </div>
    </div>
  );
}
