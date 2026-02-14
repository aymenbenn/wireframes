import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
  {
    to: '/',
    label: 'Home'
  },
  {
    to: '/about',
    label: 'About Us'
  },
  {
    to: '/services',
    label: 'Services'
  },
  {
    to: '/markets',
    label: 'Markets'
  },
  {
    to: '/contact',
    label: 'Contact'
  }];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center gap-2">
              <div className="bg-gray-900 text-white p-1.5 rounded">
                <Globe className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg tracking-tight text-gray-900">
                GlobalBridge
              </span>
            </NavLink>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) =>
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-gray-900 ${isActive ? 'text-gray-900 border-b-2 border-gray-900 pb-1' : 'text-gray-500'}`
              }>

                {link.label}
              </NavLink>
            )}
            <NavLink
              to="/contact"
              className="bg-gray-900 text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors">

              Get Started
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-900 p-2"
              aria-label="Toggle menu">

              {isOpen ?
              <X className="w-6 h-6" /> :

              <Menu className="w-6 h-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-white border-b border-gray-200 overflow-hidden">

            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) =>
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
              `block px-3 py-3 rounded-md text-base font-medium ${isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`
              }>

                  {link.label}
                </NavLink>
            )}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

}