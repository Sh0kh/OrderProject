'use client';
import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import logo from './logo.jpg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', hasDropdown: false, path: 'aboutus' },
    { name: 'Partners', hasDropdown: false, path: 'partners' },
    { name: 'Projects', hasDropdown: false, path: 'projects' },
    { name: 'People', hasDropdown: false, path: 'people' },
    { name: 'Contact', hasDropdown: false, path: 'contact' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-[900] w-full px-4">
        <div className="flex justify-center">
          <header className="bg-white rounded-xl shadow-xl border border-gray-200 w-full max-w-7xl">
            <div className="px-6 lg:px-10">
              <div className="flex justify-between items-center h-20">
                <NavLink to="/">
                  <div className="flex items-center space-x-4">
                    <motion.img
                      src={logo}
                      alt="Logo"
                      className="w-10 h-auto rounded-lg"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    />
                    <div className="flex items-center space-x-3">
                      <div className="w-1 h-10 bg-amber-600"></div>
                      <div className='medik435'>
                        <div className="text-xl font-semibold text-gray-900">AllLegal</div>
                        <div className="text-sm text-gray-600 -mt-1">Uzbekistan</div>
                      </div>
                    </div>
                  </div>
                </NavLink>

                <nav className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-8">
                    {navItems.map((item) => (
                      <NavLink key={item.name} to={`/${item.path}`}>
                        <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 text-base font-normal">
                          <span>{item.name}</span>
                          {item.hasDropdown && <ChevronDown className="w-4 h-4 text-gray-500" />}
                        </button>
                      </NavLink>
                    ))}
                  </div>
                </nav>

                <div className="flex items-center space-x-6">
                  <div className="hidden lg:flex items-center space-x-1 cursor-pointer">
                    <span className="text-gray-700 text-base">Eng</span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </div>

                  <button className="medik435 bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-md text-base font-medium">
                    Contacts
                  </button>

                  <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(true)}>
                    <Menu className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 z-[999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.div
              className="fixed top-0 left-0 h-full w-1/2 bg-white shadow-2xl z-[1000] flex flex-col p-6"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.4 }}
            >
              <div className="flex justify-between items-center mb-6">
                <motion.img
                  src={logo}
                  alt="Logo"
                  className="w-10 h-auto rounded-lg"
                  whileHover={{ rotate: 15, scale: 1.15 }}
                />
                <button onClick={closeMenu}>
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={`/${item.path}`}
                    className="text-gray-800 text-lg hover:text-amber-700 transition"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-700">Language</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-gray-700">Eng</span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
                <button className="w-full bg-amber-700 hover:bg-amber-800 text-white py-2 rounded-md text-base font-medium transition">
                  Contacts
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
