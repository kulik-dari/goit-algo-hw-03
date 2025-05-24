'use client';

import { motion } from 'framer-motion';
import { DFIRSteps } from '@/components/sections/dfir-steps';
import { DFIRTimeline } from '@/components/sections/dfir-timeline';
import { Shield, Search, FileSearch } from 'lucide-react';

export default function DFIRPage() {
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
              DFIR & Threat Hunting
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional digital forensics and incident response services
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="h-12 w-12 bg-[#B76E79]/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-[#B76E79]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Authentication</h3>
              <p className="text-gray-600">
                Secure access to our DFIR tools and services with multi-factor authentication
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="h-12 w-12 bg-[#B76E79]/10 rounded-lg flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-[#B76E79]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Artifact Collection</h3>
              <p className="text-gray-600">
                Comprehensive artifact collection and secure transfer to analysis environment
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="h-12 w-12 bg-[#B76E79]/10 rounded-lg flex items-center justify-center mb-4">
                <FileSearch className="h-6 w-6 text-[#B76E79]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Analysis Workspace</h3>
              <p className="text-gray-600">
                Advanced analysis tools in a secure virtual environment
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              DFIR Process Timeline
            </h2>
            <DFIRTimeline />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our DFIR Process
            </h2>
            <DFIRSteps />
          </motion.div>
        </div>
      </section>
    </main>
  );
}