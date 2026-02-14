import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Globe,
  Truck,
  ShieldCheck,
  BarChart3,
  Package,
  Users } from
'lucide-react';
import { WireframeBlock } from '../components/WireframeBlock';
import { AnnotationNote } from '../components/AnnotationNote';
import { ServiceCard } from '../components/ServiceCard';
export function HomePage() {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  const services = [
  {
    title: 'Market Entry',
    icon: <Globe className="w-6 h-6" />,
    desc: 'Strategic entry into new territories with full regulatory support.'
  },
  {
    title: 'Compliance',
    icon: <ShieldCheck className="w-6 h-6" />,
    desc: 'Navigating complex import/export regulations seamlessly.'
  },
  {
    title: 'Brand Growth',
    icon: <BarChart3 className="w-6 h-6" />,
    desc: 'Commercial strategy to scale your brand presence.'
  },
  {
    title: 'Logistics',
    icon: <Truck className="w-6 h-6" />,
    desc: 'End-to-end supply chain management and distribution.'
  },
  {
    title: 'Market Intel',
    icon: <Users className="w-6 h-6" />,
    desc: 'Deep insights into consumer trends and market dynamics.'
  },
  {
    title: 'Operations',
    icon: <Package className="w-6 h-6" />,
    desc: 'Operational support to streamline your distribution.'
  }];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gray-50 border-b border-gray-200 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl relative">
            <AnnotationNote
              text="Hero establishes company positioning immediately — overview + value prop above fold"
              className="hidden xl:flex"
              position="right" />

            <motion.h1
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">

              Global Food & Beverage Distribution,{' '}
              <span className="text-gray-500">Simplified.</span>
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.1
              }}
              className="text-xl text-gray-600 mb-8 leading-relaxed">

              We bridge the gap between premium brands and global markets
              through expert compliance, logistics, and strategic growth
              management.
            </motion.p>
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.2
              }}
              className="flex flex-wrap gap-4">

              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors">

                Learn More
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">

                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnnotationNote
            text="6 services displayed in scannable grid — each card is an entry point to detailed service page"
            className="hidden xl:flex top-20"
            position="left" />

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for brands looking to expand their global
              footprint.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) =>
            <motion.div key={index} variants={itemVariants}>
                <ServiceCard
                title={service.title}
                description={service.desc}
                icon={service.icon} />

              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why GlobalBridge?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <WireframeBlock
              label="Years in Business"
              height="h-40"
              dashed={false}
              className="bg-white" />

            <WireframeBlock
              label="Markets Served"
              height="h-40"
              dashed={false}
              className="bg-white" />

            <WireframeBlock
              label="Brands Managed"
              height="h-40"
              dashed={false}
              className="bg-white" />

          </div>
        </div>
      </section>

      {/* Markets Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Global Reach
              </h2>
              <p className="text-gray-600">
                Connecting brands to opportunities worldwide.
              </p>
            </div>
            <Link
              to="/markets"
              className="hidden md:flex items-center text-gray-900 font-medium hover:underline">

              View all markets <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <WireframeBlock label="North America" height="h-32" />
            <WireframeBlock label="Europe" height="h-32" />
            <WireframeBlock label="Asia Pacific" height="h-32" />
            <WireframeBlock label="Middle East" height="h-32" />
          </div>

          <div className="mt-8 md:hidden">
            <Link
              to="/markets"
              className="flex items-center text-gray-900 font-medium hover:underline">

              View all markets <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to expand your brand?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you navigate new markets and grow your
            business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-colors">

            Get in Touch
          </Link>
        </div>
      </section>
    </div>);

}