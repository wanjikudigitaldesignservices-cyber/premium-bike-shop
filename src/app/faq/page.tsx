import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-card">
      <div className="container mx-auto px-4 max-w-3xl">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Frequently Asked Questions.</h1>
          <p className="text-muted-foreground text-lg">Everything you need to know about our bicycles, process, and support.</p>
        </div>

        <div className="space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold tracking-tighter mb-6 pb-2 border-b border-border/50">Purchasing & Builds</h2>
            <Accordion className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors">How long does a custom build take?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Our standard lead time for a custom frame is 8-12 weeks. Complete builds take an additional 2-3 weeks depending on component availability. We will keep you updated throughout the process.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors">Do you offer financing?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes, we partner with select financial institutions to offer flexible payment plans. You can select the financing option during the checkout process via Stripe.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors">Can I test ride a bicycle before purchasing?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Absolutely. We have a fleet of demo bikes available at our Portland studio. We also partner with premium cycling cafes across the country for pop-up demo days.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tighter mb-6 pb-2 border-b border-border/50">Warranty & Support</h2>
            <Accordion className="w-full">
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors">What is the warranty on a Velocraft frame?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We stand by our craftsmanship. Every Velocraft frame comes with a lifetime warranty against manufacturing defects for the original owner. Paint and finish are covered for two years.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors">Where can I get my bicycle serviced?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  You can book an appointment at our headquarters, or visit any of our authorized service partners globally. Our frames use standard bottom brackets and headsets to ensure easy maintenance at any premium local bike shop.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

        </div>
      </div>
    </div>
  );
}
