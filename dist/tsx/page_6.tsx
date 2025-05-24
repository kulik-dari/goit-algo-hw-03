'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Terminal, Cpu, Monitor, Database } from 'lucide-react';

export default function CLIToolPage() {
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
              Advanced CLI Security Tool
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful command-line interface for security analysis and threat detection
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-[#B76E79]/10 p-3 rounded-lg">
                  <Cpu className="h-6 w-6 text-[#B76E79]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Architecture Detection</h3>
                  <p className="text-gray-600">
                    Automatic detection of system architecture (x86/ARM) for optimal performance
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#B76E79]/10 p-3 rounded-lg">
                  <Monitor className="h-6 w-6 text-[#B76E79]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Multi-OS Support</h3>
                  <p className="text-gray-600">
                    Compatible with Windows, Linux, and MacOS platforms
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#B76E79]/10 p-3 rounded-lg">
                  <Database className="h-6 w-6 text-[#B76E79]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">File Analysis</h3>
                  <p className="text-gray-600">
                    Process multiple file formats including CSV, TOML, JSON, and TXT
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-black/90 rounded-lg p-6 text-green-400 font-mono text-sm"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Terminal className="h-4 w-4" />
                <span>Terminal</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p>$ securetool scan --arch detect</p>
                <p className="opacity-80 mt-2">Detecting system architecture...</p>
                <p className="text-blue-400 mt-1">✓ Architecture: x86_64</p>
                <p className="mt-4">$ securetool analyze sample.json</p>
                <p className="opacity-80 mt-2">Analyzing file contents...</p>
                <div className="h-2 w-full bg-gray-800 rounded mt-2">
                  <motion.div
                    className="h-full bg-green-400 rounded"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}