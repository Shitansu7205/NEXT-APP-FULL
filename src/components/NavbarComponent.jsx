'use client'
import Link from 'next/link';
import { useState } from 'react';
import { UserIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);
  const toggleServicesMenu = () => setServicesOpen(!servicesOpen);

  return (
    <nav className="bg-white dark:bg-gray-900 sticky top-0 z-20 shadow-lg">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Brand</span>
        </Link>
        <div className="flex items-center space-x-3">
          <button onClick={toggleUserMenu} className="relative">
            <UserIcon className="h-6 w-6 text-gray-800 dark:text-white" />
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md z-10">
                <Link href="/login" className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Login</Link>
                <Link href="/logout" className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Logout</Link>
                <Link href="/profile" className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Profile</Link>
              </div>
            )}
          </button>
          <button className="md:hidden" onClick={toggleServicesMenu}>
            <span className="text-gray-900 dark:text-white">Services</span>
          </button>
          <div className="hidden md:flex md:order-1">
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">About</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">About</Link>
              </li>
              <li className="relative" onMouseEnter={toggleServicesMenu} onMouseLeave={toggleServicesMenu}>
                <button className="text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  Services
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md z-10">
                    <Link href="/service1" className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Weather App</Link>
                    <Link href="/service2" className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Food Recipe App</Link>
                  </div>
                )}
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
