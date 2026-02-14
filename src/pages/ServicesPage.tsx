import React from 'react';
import { motion } from 'framer-motion';
import { WireframeBlock } from '../components/WireframeBlock';
import { AnnotationNote } from '../components/AnnotationNote';
import {
  Globe,
  ShieldCheck,
  BarChart3,
  Truck,
  Users,
  Package,
  Check } from
'lucide-react';
import { Link } from 'react-router-dom';
export function ServicesPage() {
  const services = [
  {
    title: 'Market Entry & Distribution',
    icon: <Globe className="w-8 h-8" />,
    desc: 'We help brands navigate the complexities of entering new markets, from initial assessment to full-scale distribution.',
    points: [
    'Market feasibility studies',
    'Channel strategy',
    'Partner selection',
    'Launch planning']

  },
  {
    title: 'Regulatory & Compliance',
    icon: <ShieldCheck className="w-8 h-8" />,
    desc: 'Ensure your products meet all local regulations and standards with our comprehensive compliance services.',
    points: [
    'Label compliance',
    'Import registration',
    'Food safety standards',
    'Documentation management']

  },
  {
    title: 'Brand Growth & Commercial Strategy',
    icon: <BarChart3 className="w-8 h-8" />,
    desc: 'We develop and execute commercial strategies to grow your brand presence and market share.',
    points: [
    'Sales forecasting',
    'Marketing support',
    'Key account management',
    'Performance analytics']

  },
  {
    title: 'Supply Chain & Logistics',
    icon: <Truck className="w-8 h-8" />,
    desc: 'End-to-end supply chain solutions that ensure your products arrive fresh and on time.',
    points: [
    'Cold chain management',
    'Warehousing',
    'Inventory optimization',
    'Last-mile delivery']

  },
  {
    title: 'Market Intelligence & Insights',
    icon: <Users className="w-8 h-8" />,
    desc: 'Stay ahead of the competition with our deep market insights and consumer trend analysis.',
    points: [
    'Consumer research',
    'Competitor analysis',
    'Trend forecasting',
    'Category insights']

  },
  {
    title: 'Operational Support',
    icon: <Package className="w-8 h-8" />,
    desc: 'Streamline your operations with our back-office support and administrative services.',
    points: [
    'Order processing',
    'Invoicing',
    'Customer service',
    'Returns management']

  }];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            End-to-end solutions designed to simplify global distribution and
            accelerate growth.
          </p>
        </div>
      </section>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {services.map((service, index) =>
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
          className={`flex flex-col gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

            {/* Text Content */}
            <div className="flex-1 relative">
              {index === 0 &&
            <AnnotationNote
              text="Alternating layout prevents monotony — image/text swap keeps scanning engaging"
              className="hidden xl:flex -top-12"
              position="left" />

            }
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gray-100 rounded-lg text-gray-900">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {service.title}
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {service.desc}
              </p>
              <ul className="space-y-3 mb-8">
                {service.points.map((point, i) =>
              <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </li>
              )}
              </ul>
            </div>

            {/* Image Placeholder */}
            <div className="flex-1 w-full">
              <WireframeBlock
              height="h-80 md:h-96"
              label={`${service.title} Visual`}
              className="w-full rounded-xl bg-gray-50" />

            </div>
          </motion.div>
        )}
      </div>

      {/* CTA */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need a custom solution?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We understand that every business is unique. Let's discuss how we
            can tailor our services to your specific needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors">

            Discuss Your Needs
          </Link>
        </div>
      </section>
    </div>);

}