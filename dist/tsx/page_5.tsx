'use client';

import { motion } from 'framer-motion';
import { PricingSection } from '@/components/sections/pricing-section';
import { PricingTable } from '@/components/sections/pricing-table';
import { FAQ } from '@/components/sections/faq';

export default function PricingPage() {
  return (
    <main className="pt-16">
      <section className="min-h-screen bg-gradient-to-br from-[#F8F9FA] to-[#A9D6E5]/20">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for you or your team. All plans include a 30-day
              free trial.
            </p>
          </motion.div>

          <PricingSection />
          <PricingTable />
          <FAQ />
        </div>
      </section>
    </main>
  );
}