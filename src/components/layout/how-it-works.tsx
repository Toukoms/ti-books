import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { FaBookOpen, FaHeadphones, FaGlobe } from 'react-icons/fa';
import { buttonVariants } from '../ui/button';

const HowItWorks = () => {
  return (
    <section className="max-w-screen-lg mx-auto py-16">
      <div className="container mx-auto px-4">
        
        {/* Introduction Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800">How It Works</h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Discover how Ti-Books brings Malagasy Angano to life through interactive and engaging digital storybooks.
          </p>
        </div>

        {/* Step-by-Step Guide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <FaBookOpen className="text-6xl text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">1. Choose a Story</h3>
            <p className="mt-2 text-gray-600">
              Browse our collection of translated Malagasy Angano and choose a story that intrigues you.
            </p>
          </div>

          <div className="text-center">
            <FaHeadphones className="text-6xl text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">2. Read or Listen</h3>
            <p className="mt-2 text-gray-600">
              Enjoy the story by reading it yourself or listening to the narrated version.
            </p>
          </div>

          <div className="text-center">
            <FaGlobe className="text-6xl text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">3. Explore More</h3>
            <p className="mt-2 text-gray-600">
              Continue exploring other stories and dive deeper into Malagasy culture.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link href="/explore" className={cn(buttonVariants({size: "lg"}))}>
            Start Exploring Stories
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
