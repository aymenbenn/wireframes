import React from 'react';
import { WireframeBlock } from '../components/WireframeBlock';
import { AnnotationNote } from '../components/AnnotationNote';
import { Map, ArrowRight } from 'lucide-react';
export function MarketsPage() {
  const regions = [
  {
    name: 'North America',
    stats: '50+ Partners • 200+ Brands'
  },
  {
    name: 'Europe',
    stats: '40+ Partners • 150+ Brands'
  },
  {
    name: 'Middle East',
    stats: '25+ Partners • 80+ Brands'
  },
  {
    name: 'Asia Pacific',
    stats: '35+ Partners • 120+ Brands'
  },
  {
    name: 'Latin America',
    stats: '20+ Partners • 60+ Brands'
  },
  {
    name: 'Africa',
    stats: '15+ Partners • 40+ Brands'
  }];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Markets We Serve
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Our global network ensures your products reach the right shelves in
            the right markets.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnnotationNote
            text="Map provides visual orientation — region cards below offer scannable detail"
            className="hidden xl:flex top-10"
            position="right" />

          <WireframeBlock
            height="h-[500px]"
            label="Interactive Map Placeholder"
            icon={<Map className="w-12 h-12 text-gray-300" />}
            className="bg-white shadow-sm rounded-xl" />

        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region, i) =>
            <div
              key={i}
              className="p-6 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors">

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {region.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{region.stats}</p>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gray-300 w-2/3"></div>
                </div>
                <div className="mt-4 flex justify-between text-xs text-gray-400">
                  <span>Market Penetration</span>
                  <span>High</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Market Entry Process
            </h2>
            <p className="text-gray-600 mt-4">
              How we take you from local to global.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-300 -z-10 transform translate-y-1/2"></div>

            {['Research', 'Strategy', 'Launch', 'Scale'].map((step, i) =>
            <div
              key={i}
              className="flex flex-col items-center text-center bg-gray-50 md:bg-transparent p-4">

                <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-900 flex items-center justify-center text-xl font-bold text-gray-900 mb-4 shadow-sm z-10">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step}</h3>
                <p className="text-sm text-gray-500">
                  Brief description of the {step.toLowerCase()} phase and
                  deliverables.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>);

}