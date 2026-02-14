import React from 'react';
import { Navigation } from './Navigation';
import { Link } from 'react-router-dom';
import { Globe, Mail, MapPin, Phone } from 'lucide-react';
interface LayoutProps {
  children: ReactNode;
}
export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      <Navigation />

      <main className="flex-grow">{children}</main>

      <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gray-900 text-white p-1.5 rounded">
                  <Globe className="w-4 h-4" />
                </div>
                <span className="font-bold text-lg tracking-tight text-gray-900">
                  GlobalBridge
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Simplifying global food and beverage distribution through
                compliance, logistics, and market intelligence.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link to="/about" className="hover:text-gray-900">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-gray-900">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/markets" className="hover:text-gray-900">
                    Markets
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gray-900">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link to="/services" className="hover:text-gray-900">
                    Market Entry
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-gray-900">
                    Compliance
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-gray-900">
                    Logistics
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-gray-900">
                    Brand Growth
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-gray-400" />
                  <span>
                    123 Distribution Way
                    <br />
                    New York, NY 10001
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span>hello@globalbridge.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} GlobalBridge Distribution. All
              rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link to="#" className="hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-gray-900">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>);

}