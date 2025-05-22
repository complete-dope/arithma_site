import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

const Navbar: React.FC = () => {
  const navItems = [
    { name: 'Financial Models', path: '/' },
    { name: 'Mutual Funds Analysis', path: '/mutual-funds' },
    { name: 'Calculators', path: '/calculators' },
    { name: 'Sectoral Analysis', path: '/sectoral-analysis' },
    { name: 'Newsletters', path: '/newsletters' },
    { name: 'Video Explanations', path: '/videos' },
    { name: 'Knowledge Base', path: '/knowledge-base' },
  ];

  return (
    <nav className="bg-primary text-primary-foreground p-4"> {/* Example Tailwind classes */}
      <ul className="flex space-x-4"> {/* Example Tailwind classes */}
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={cn(
                "hover:underline", // Example Tailwind class
                // Add active link styling later if needed
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;