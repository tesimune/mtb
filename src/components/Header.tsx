'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      title: 'Features',
      href: '#features',
      description: 'Explore our comprehensive pregnancy tracking features',
    },
    {
      title: 'Tracker',
      href: '#tracker',
      description: 'Track your pregnancy journey week by week',
    },
    {
      title: 'FAQ',
      href: '#faq',
      description: 'Find answers to common pregnancy questions',
    },
    {
      title: 'Chat',
      href: '#chat',
      description: 'Get instant support from our AI assistant',
    },
    {
      title: 'Emergency',
      href: '#emergency',
      description: 'Quick access to emergency services',
    },
  ];

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent text-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='container mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          <a href='#' className='flex items-center space-x-2'>
            <img
              src={isScrolled ? '/images/mtb-black.png' : '/images/mtb-white.png'}
              alt='Mommy to Be'
              className='h-10 w-auto'
            />
            {/* <span className='text-2xl font-bold text-purple-600'>
              Mommy to Be
            </span> */}
          </a>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className='p-4 w-[200px]'>
                        <NavigationMenuLink href={item.href}>
                          <div className='text-sm font-medium'>
                            {item.title}
                          </div>
                          <p className='text-sm text-muted-foreground'>
                            {item.description}
                          </p>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='bg-white p-3 rounded md:hidden mt-4'
            >
              <nav className='flex flex-col space-y-4'>
                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className='text-gray-600 hover:text-purple-600 py-2'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
