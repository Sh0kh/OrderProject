import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Plane, Home, ShoppingCart } from 'lucide-react';

export default function ProjectsHome() {
  const projects = [
    {
      image: "https://praelegal.uz/d/cyberpark.png",
      title: "Technological Breakthrough: Dutch Resident of Cyber Park",
      description: "PraeLegal Uzbekistan provided full legal support to the Dutch company Soteryan B.V. (created in Amsterdam) during their establishment in Uzbekistan's Cyber Park, handling all regulatory compliance and intellectual property protections.",
      icon: <Globe className="w-5 h-5" />,
      category: "Technology"
    },
    {
      image: "https://praelegal.uz/d/storie_tablet_qatar_airways_conquering_new_skies_309899.png",
      title: "Qatar Airways: Conquering New Skies",
      description: "Facilitated Qatar Airways' expansion into Uzbekistan, navigating complex bilateral air service agreements and regulatory frameworks for new routes.",
      icon: <Plane className="w-5 h-5" />,
      category: "Aviation"
    },
    {
      image: "https://praelegal.uz/d/storie_tablet_epcm_legal_support_for_an_innovative_residential_complex_project_in_uzbekistan.png",
      title: "EPCM: Legal Support for Residential Complex Project",
      description: "Served as legal partner for Tashkent's innovative residential development, ensuring compliance with urban planning laws and construction standards.",
      icon: <Home className="w-5 h-5" />,
      category: "Construction"
    },
    {
      image: "https://praelegal.uz/d/storie_tablet_a_new_era_of_shopping_malls_in_uzbekistan.png",
      title: "A New Era of Shopping Malls in Uzbekistan",
      description: "Legal support for Uzbekistan's first international-scale shopping mall, handling lease agreements, vendor contracts, and regulatory approvals.",
      icon: <ShoppingCart className="w-5 h-5" />,
      category: "Retail"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="relative bg-white py-20 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-50/30 to-white z-0"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-amber-100 blur-3xl opacity-20 z-0"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="text-left mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Projects</h1>
          <div className="w-24 h-1 bg-amber-600 mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: idx * 0.15 }}
              className="group"
            >
              <div className="h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100 flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-red-600/30 transition-opacity duration-300 group-hover:opacity-0"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <div className="p-2 bg-white rounded-lg text-amber-600">
                      {project.icon}
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold text-white bg-amber-600 rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {project.title.split(':')[0]}:
                      <span className="text-amber-600"> {project.title.split(':')[1]}</span>
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <button className="flex items-center text-amber-600 font-medium mt-auto group-hover:text-amber-700 transition-colors">
                    Read case study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            View All Case Studies
          </button>
        </motion.div>
      </div>
    </section>
  );
}