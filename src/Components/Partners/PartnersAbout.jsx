'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function PartnersAbout() {
  const partners = [
    {
      name: 'Google',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      description:
        'Leading technology company providing innovative solutions and cloud services for businesses worldwide.',
      category: 'Technology',
      partnership: 'Strategic Technology Partner',
      since: '2020',
      services: ['Cloud Infrastructure', 'AI Solutions', 'Data Analytics', 'Workspace Solutions'],
    },
    {
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
      description:
        'Global technology leader providing comprehensive business solutions and cloud services.',
      category: 'Technology',
      partnership: 'Enterprise Solutions Partner',
      since: '2020',
      services: ['Cloud Services', 'Enterprise Software', 'Security Solutions', 'Productivity Tools'],
    },
    {
      name: 'Uzbekistan Digital Technologies',
      logo: '🇺🇿',
      description:
        'Government agency promoting digital transformation and technology adoption across Uzbekistan.',
      category: 'Government',
      partnership: 'Digital Policy Partner',
      since: '2022',
      services: [
        'Digital Policy',
        'Technology Standards',
        'Innovation Programs',
        'Regulatory Support',
      ],
    },
  ];

  const categories = [...new Set(partners.map((p) => p.category))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Strategic <span className="text-amber-600">Partnerships</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our carefully selected partnerships enable us to provide comprehensive legal services 
              backed by cutting-edge technology and industry expertise. Together, we drive innovation 
              and deliver exceptional value to our clients.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6, ease: 'easeOut' },
              },
            }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
          >
            <StatCard value={`${partners.length}+`} label="Strategic Partners" />
            <StatCard value={categories.length} label="Industry Sectors" />
            <StatCard value="50+" label="Joint Projects" />
            <StatCard value="5+" label="Years Experience" />
          </motion.div>
        </div>
      </div>

      {/* Partners Cards */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Partners</h3>
            <div className="w-16 h-1 bg-amber-600"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center justify-center h-16 mb-6">
                    {partner.logo.startsWith('http') ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-12 max-w-full object-contain"
                      />
                    ) : (
                      <div className="text-4xl">{partner.logo}</div>
                    )}
                  </div>

                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h4>
                    <span className="inline-block bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {partner.category}
                    </span>
                    <p className="text-gray-600 text-sm leading-relaxed">{partner.description}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="border-t pt-4">
                      <InfoRow label="Partnership Type" value={partner.partnership} />
                      <InfoRow label="Since" value={partner.since} />
                    </div>

                    <div>
                      <h5 className="text-sm font-medium text-gray-500 mb-3">Key Services:</h5>
                      <div className="flex flex-wrap gap-2">
                        {partner.services.map((s, si) => (
                          <span
                            key={si}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component: Stats Card
function StatCard({ value, label }) {
  return (
    <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
      <div className="text-3xl font-bold text-amber-600 mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

// Helper component: Info Row
function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-gray-500">{label}:</span>
      <span className="text-sm text-gray-900">{value}</span>
    </div>
  );
}
