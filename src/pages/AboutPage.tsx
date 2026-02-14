import React from 'react';
import { motion } from 'framer-motion';
import { WireframeBlock } from '../components/WireframeBlock';
import { AnnotationNote } from '../components/AnnotationNote';
import { Heart, Users, Lightbulb, Shield } from 'lucide-react';
export function AboutPage() {
  const values = [
  {
    title: 'Integrity',
    icon: <Shield className="w-8 h-8" />,
    desc: 'We operate with transparency and honesty in every transaction.'
  },
  {
    title: 'Partnership',
    icon: <Users className="w-8 h-8" />,
    desc: 'We build long-term relationships, not just transactions.'
  },
  {
    title: 'Excellence',
    icon: <Heart className="w-8 h-8" />,
    desc: 'We strive for the highest quality in service and execution.'
  },
  {
    title: 'Innovation',
    icon: <Lightbulb className="w-8 h-8" />,
    desc: 'We constantly adapt to changing market dynamics.'
  }];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">

            About GlobalBridge
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
            className="text-xl text-gray-600 max-w-3xl mx-auto">

            Founded in 2005, we have grown from a local distributor to a global
            partner for the world's leading food and beverage brands.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnnotationNote
            text="Mission statement given visual prominence — large type, centered, creates emotional anchor"
            className="hidden xl:flex"
            position="right" />

          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
            Our Mission
          </h2>
          <blockquote className="text-3xl md:text-4xl font-serif italic text-gray-900 leading-relaxed">
            "To connect the world through exceptional food and beverage
            experiences, ensuring quality, compliance, and sustainable growth
            for every partner we serve."
          </blockquote>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnnotationNote
            text="Values in grid format for quick scanning — icons aid recognition"
            className="hidden xl:flex top-0"
            position="left" />

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) =>
            <div
              key={i}
              className="bg-white p-8 rounded-lg border border-gray-200 text-center">

                <div className="inline-flex items-center justify-center p-3 bg-gray-100 rounded-full mb-6 text-gray-700">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Journey</h2>
          </div>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gray-200">
            {[2005, 2010, 2015, 2020, 2024].map((year, i) =>
            <div
              key={year}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-200 group-hover:bg-gray-900 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow text-xs font-bold text-gray-500 group-hover:text-white">
                  {year}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-gray-200 bg-white shadow-sm">
                  <div className="font-bold text-gray-900 mb-1">
                    Milestone Title
                  </div>
                  <div className="text-gray-500 text-sm">
                    Brief description of what happened this year.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Leadership Team
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) =>
            <div key={i} className="text-center">
                <WireframeBlock
                height="h-64"
                label="Headshot"
                dashed={false}
                className="mb-4 bg-white rounded-lg" />

                <h3 className="font-bold text-gray-900">Name Surname</h3>
                <p className="text-sm text-gray-500">Job Title</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>);

}