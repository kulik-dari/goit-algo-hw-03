'use client';

import { motion } from 'framer-motion';
import { Shield, Key, Lock, Smartphone, Users, Cloud, Bell, Settings, Monitor, Cpu, Globe } from 'lucide-react';
import { PlatformSupport } from '@/components/sections/platform-support';
import { FeatureGrid } from '@/components/sections/feature-grid';

export default function FeaturesPage() {
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
              Powerful Features for Your Security
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover all the ways SecureVault helps protect your digital life with
              advanced security features and seamless password management.
            </p>
          </motion.div>

          <FeatureGrid />

          <PlatformSupport />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust SecureVault to protect their digital lives.
            </p>
            <button className="bg-[#B76E79] hover:bg-[#A25964] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Try SecureVault Free
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}