'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BlogModal } from '@/components/ui/blog-modal';
import { BLOG_CATEGORIES, FEATURED_POSTS } from '@/lib/constants';
import { Search } from 'lucide-react';
import Image from 'next/image';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<typeof FEATURED_POSTS[0] | null>(null);

  const filteredPosts = selectedCategory
    ? FEATURED_POSTS.filter((post) => post.category === selectedCategory)
    : FEATURED_POSTS;

  return (
    <main className="pt-16">
      <section className="min-h-screen bg-gradient-to-br from-[#F8F9FA] to-[#A9D6E5]/20">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">Security Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Latest insights, tutorials, and updates from our security experts
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search articles..."
                className="w-full pl-12"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {BLOG_CATEGORIES.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                className={selectedCategory === category ? 'bg-[#B76E79] hover:bg-[#A25964]' : ''}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => setSelectedPost(post)}
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-[#B76E79]">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="link" className="text-[#B76E79] p-0">
                    Read More →
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <BlogModal
        isOpen={!!selectedPost}
        onClose={() => setSelectedPost(null)}
      >
        {selectedPost && (
          <article className="prose prose-lg max-w-none">
            <div className="relative h-64 -mx-8 -mt-8 mb-8">
              <Image
                src={selectedPost.image}
                alt={selectedPost.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
              <span>{selectedPost.category}</span>
              <span>•</span>
              <span>{selectedPost.date}</span>
              <span>•</span>
              <span>{selectedPost.readTime} read</span>
            </div>
            <h1 className="text-3xl font-bold mb-6">{selectedPost.title}</h1>
            <p className="text-gray-600">{selectedPost.excerpt}</p>
            {/* Add more content here */}
          </article>
        )}
      </BlogModal>
    </main>
  );
}