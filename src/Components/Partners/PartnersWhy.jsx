'use client';
import { motion } from 'framer-motion';

export default function PartnersWhy() {
  return (
    <div className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <div className="w-16 h-1 bg-amber-600"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              className="rounded-2xl h-80 bg-cover bg-center shadow-xl"
              style={{
                backgroundImage:
                  "url('https://storage.kun.uz/source/4/sa25DRRpC7eTGjhWJZ-X7deJ0cB9BTyB.jpg')",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-amber-600 mb-6">
              Your Vision, Our Responsibility —<br />
              Your Success, Our Mission.
            </h3>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                At <span className="font-semibold text-amber-600">AllLegal Uzbekistan</span>, we are more than a law firm — we are a partner in your 
                business's success. Our mission is to provide unparalleled legal expertise while 
                cultivating lasting relationships built on trust, dedication, and shaamber goals. We 
                help our clients navigate an increasingly interconnected world, providing 
                guidance and innovative solutions in every jurisdiction we serve.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We don't just provide legal advice; we offer strategic insights, solutions, and 
                partnerships that drive success. <span className="font-semibold text-amber-600">Local Stand, Global Presence</span> — this is our 
                guiding principle, ensuring that we meet your legal needs with precision and 
                expertise, no matter where in the world you operate.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
