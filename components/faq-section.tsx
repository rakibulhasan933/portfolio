'use client';

import { useState } from 'react';
import { faqs, faqCategories, type FAQCategory } from '@/lib/faq-data';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<FAQCategory | 'All'>('All');

  const filteredFaqs =
    activeCategory === 'All'
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <section id="faq" className="md:py-24 py-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="max-w-3xl mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0s' }}>
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Find answers to common questions about my services, process, and expertise.
            Can't find what you're looking for? Feel free to reach out directly.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 md:mb-12 mb-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <Button
            variant={activeCategory === 'All' ? 'default' : 'outline'}
            onClick={() => setActiveCategory('All')}
            className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
          >
            All
          </Button>
          {faqCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {filteredFaqs.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-3">
              {filteredFaqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border border-border rounded-lg md:px-6 px-0.5 hover:border-primary/50 transition-all duration-300 group"
                >
                  <AccordionTrigger className="md:py-4 py-1 hover:text-primary transition-colors duration-300 flex items-center [&[data-state=open]>svg]:rotate-180">
                    <div className="flex items-center md:gap-3 gap-1 text-left">
                      <span className="text-xs text-primary font-mono uppercase tracking-wider font-medium">
                        {faq.category}
                      </span>
                      <h3 className="font-semibold text-foreground text-base md:text-lg">
                        {faq.question}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed md:pb-4 pb-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center md:py-12 py-4">
              <p className="text-muted-foreground">No FAQs found for this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
