'use client';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiCompass, FiMonitor, FiAlignRight, FiWind } from 'react-icons/fi';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const OurServices = () => {
  const superbSignsServices = [
    {
      title: 'Wayfinding Solutions',
      icon: <FiCompass className="w-8 h-8" />,
      description: 'Strategic directional systems that enhance navigation experiences'
    },
    {
      title: 'Digital Signage',
      icon: <FiMonitor className="w-8 h-8" />,
      description: 'Dynamic digital displays for impactful visual communication'
    },
    {
      title: 'Custom Signages',
      icon: <FiAlignRight className="w-8 h-8" />,
      description: 'Bespoke signage solutions for brand identity and visibility'
    }
  ];

  const nexCoolServices = [
    {
      title: 'HVAC Components Supply',
      icon: <FiWind className="w-8 h-8" />,
      description: 'Premium quality HVAC components and system solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      {/* Parent Company Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center mb-20"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Al Nourain Group Services
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          As a diversified holding company, Al Nourain delivers excellence through
          its specialized subsidiaries, offering comprehensive solutions across
          multiple industries.
        </p>
      </motion.div>

      {/* Superb Signs Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto mb-32"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Superb Signs</h2>
          <p className="text-gray-600">Innovative signage solutions for modern businesses</p>
        </div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {superbSignsServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-indigo-600 mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-6 flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
                Learn More <FiArrowUpRight className="ml-2" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* NexCool Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">NexCool</h2>
          <p className="text-gray-600">Advanced HVAC solutions for optimal climate control</p>
        </div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-1 max-w-2xl mx-auto"
        >
          {nexCoolServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-indigo-600 mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-6 flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
                Learn More <FiArrowUpRight className="ml-2" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Unified Excellence Across Industries
        </h3>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover how Al Nourain's diversified expertise can elevate your business
        </p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
          Contact Us
        </button>
      </motion.div>
    </div>
  );
};

export default OurServices;