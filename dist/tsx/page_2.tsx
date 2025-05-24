'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Trophy, Heart } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { label: 'Active Users', value: '1M+' },
  { label: 'Passwords Protected', value: '100M+' },
  { label: 'Countries', value: '190+' },
  { label: 'Customer Satisfaction', value: '99%' },
];

const values = [
  {
    title: 'Security First',
    description: 'We never compromise on security. Your data is protected with the highest standards of encryption.',
    icon: Shield,
  },
  {
    title: 'Customer Focus',
    description: 'Our customers are at the heart of everything we do. We continuously improve based on your feedback.',
    icon: Users,
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our service, from security to user experience.',
    icon: Trophy,
  },
  {
    title: 'Trust',
    description: 'We build lasting relationships with our users based on transparency and reliability.',
    icon: Heart,
  },
];

export default function AboutPage() {
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
              About SecureVault
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're on a mission to make digital security accessible to everyone.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, SecureVault was born from a simple idea: everyone deserves
                to feel secure online. We saw how difficult it was for people to manage
                their digital lives securely, and we knew there had to be a better way.
              </p>
              <p className="text-gray-600">
                Today, we're proud to protect millions of users worldwide, helping them
                safeguard their digital identities with state-of-the-art encryption and
                intuitive password management tools.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#B76E79] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="h-12 w-12 bg-[#B76E79]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-[#B76E79]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}