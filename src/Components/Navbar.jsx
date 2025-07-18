import { NavLink, useLocation } from 'react-router-dom';

function Navbar() {
  const { pathname } = useLocation();

  const isHome = pathname === '/';

  return (
    <div
      className={`${
        isHome ? 'absolute bg-black bg-opacity-50' : 'sticky top-0 bg-white shadow-md'
      } left-0 z-50 p-4 w-full flex justify-between items-center transition-all duration-300`}
    >
      <p className={`font-bold text-3xl ${isHome ? 'text-white' : 'text-black'}`}>
        Fork and Sticks
      </p>
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
                isActive
                  ? isHome
                    ? 'text-yellow-400'
                    : 'text-orange-500'
                  : isHome
                  ? 'text-white'
                  : 'text-black'
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
