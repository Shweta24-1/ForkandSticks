import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return; // Only add scroll listener on home page

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const navbarClasses = `
    w-full z-50 p-4 flex justify-between items-center transition-all duration-300
    ${isHome && !scrolled ? 'absolute top-0 left-0' : 'sticky top-0'}
    bg-black bg-opacity-80 backdrop-blur-sm
  `;

  return (
    <div className={navbarClasses}>
      <p className="font-bold text-3xl text-white">Fork and Sticks</p>
      <div className="flex gap-5 text-lg">
        {[
          { to: '/', label: 'Home' },
          { to: '/about', label: 'About' },
          { to: '/menu', label: 'Our Menus' },
          { to: '/contacts', label: 'Contact' },
        ].map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `relative group pb-1 transition-all duration-300 ${
                isActive ? 'text-yellow-400' : 'text-white'
              }`
            }
          >
            <span className="border-b-2 border-transparent group-hover:border-yellow-400 transition-all duration-300">
              {label}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
