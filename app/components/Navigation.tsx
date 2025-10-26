'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { number: '1.', label: 'Home', href: '#home' },
    { number: '2.', label: 'Projet', href: '#projet' },
    { number: '3.', label: 'Skills', href: '#skills' },
    { number: '4.', label: 'Experience', href: '#experience' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 right-0 p-6 z-50">
      <ul className="flex space-x-8 text-sm">
        {navItems.map((item) => (
          <li key={item.href}>
            <a 
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`hover:text-blue-400 transition-colors ${
                activeSection === item.href.substring(1)
                  ? 'text-blue-400 border-b border-blue-400 pb-1' 
                  : 'text-gray-300'
              }`}
            >
              <span className="text-gray-500">{item.number}</span> {item.label}
            </a>
          </li>
        ))}
        <li>
          <a 
            href="mailto:maxence.guilbot@epitech.eu" 
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            Contactez moi
          </a>
        </li>
      </ul>
    </nav>
  );
}