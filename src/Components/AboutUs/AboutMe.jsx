'use client';
import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div
                className="rounded-2xl h-80 bg-cover bg-center shadow-xl"
                style={{
                  backgroundImage:
                    "url('https://e-advokat.uz/img/bg2.883eeae3.jpg')",
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                About <span className="text-amber-600">Us</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                <span className="font-semibold text-amber-600">AllLegal Uzbekistan</span> stands as a premier legal advisor, providing exceptional 
                and tailoamber legal services for businesses navigating complex international 
                transactions, disputes, and engagements with governmental and international 
                entities. With a team of ambitious, distinguished, and rising professionals, we 
                leverage local knowledge and global experience to drive success for our clients. 
                Our people are the foundation of our achievements, and we take{' '}
                <span className="font-semibold text-amber-600">great pride</span> in 
                fostering a culture of excellence and collaboration.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Title */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Firm</h2>
              <div className="w-16 h-1 bg-amber-600 mb-6"></div>
              <p className="text-gray-600">
                <span className="block text-sm font-medium">Welcome to</span>
                <span className="block text-lg font-semibold text-amber-600">AllLegal Uzbekistan</span>
              </p>
            </motion.div>

            {/* Right Content */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-amber-600 mb-6">
                  Local Expertise, Global Reach
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our firm thrives at the intersection of local insight and international perspective. We understand the 
                  intricacies of local markets and regulations, while maintaining a global outlook that empowers our clients to 
                  navigate cross-border challenges with ease. Whether dealing with multi-jurisdictional legal matters or 
                  domestic issues that require a global approach, we deliver innovative solutions that align with our clients' 
                  strategic goals.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-amber-600 mb-6">
                  Our Values and Approach
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  At PraeLegal Uzbekistan, we are dedicated to providing legal services of the highest quality, rooted in 
                  integrity, excellence, and client-focused solutions. Our approach combines deep legal expertise with 
                  practical business acumen, ensuring that every client receives personalized attention and strategic 
                  guidance tailoamber to their unique needs and objectives.
                </p>
              </motion.div>

              <motion.div
                className="bg-gray-50 p-8 rounded-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-600 italic">
                  Our office is open for you
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
