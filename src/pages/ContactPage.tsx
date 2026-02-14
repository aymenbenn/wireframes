import React from 'react';
import { WireframeBlock } from '../components/WireframeBlock';
import { AnnotationNote } from '../components/AnnotationNote';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
export function ContactPage() {
  return (
    <div className="w-full">
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-400">
            Get in touch with our team to discuss your distribution needs.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnnotationNote
            text="Form + info side-by-side reduces friction — visitor sees both options simultaneously"
            className="hidden xl:flex top-0"
            position="right" />


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Send us a message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 bg-gray-50 border-2 border-dashed border-gray-300 rounded focus:border-gray-900 focus:ring-0 outline-none transition-colors"
                      placeholder="Jane" />

                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 bg-gray-50 border-2 border-dashed border-gray-300 rounded focus:border-gray-900 focus:ring-0 outline-none transition-colors"
                      placeholder="Doe" />

                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 bg-gray-50 border-2 border-dashed border-gray-300 rounded focus:border-gray-900 focus:ring-0 outline-none transition-colors"
                    placeholder="jane@company.com" />

                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 bg-gray-50 border-2 border-dashed border-gray-300 rounded focus:border-gray-900 focus:ring-0 outline-none transition-colors"
                    placeholder="Company Ltd." />

                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full p-3 bg-gray-50 border-2 border-dashed border-gray-300 rounded focus:border-gray-900 focus:ring-0 outline-none transition-colors"
                    placeholder="How can we help you?" />

                </div>

                <button
                  type="button"
                  className="w-full py-4 bg-gray-900 text-white font-bold rounded hover:bg-gray-800 transition-colors">

                  Send Message
                </button>
              </form>
            </div>

            {/* Right: Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded text-gray-900">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Headquarters</h3>
                    <p className="text-gray-600 mt-1">
                      123 Distribution Way
                      <br />
                      Suite 400
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded text-gray-900">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Phone</h3>
                    <p className="text-gray-600 mt-1">
                      +1 (555) 123-4567
                      <br />
                      <span className="text-sm text-gray-400">
                        Mon-Fri 9am-6pm EST
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded text-gray-900">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <p className="text-gray-600 mt-1">
                      hello@globalbridge.com
                      <br />
                      support@globalbridge.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <WireframeBlock
                  height="h-64"
                  label="Map Placeholder"
                  dashed={false}
                  className="bg-gray-100 rounded-lg" />

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);

}