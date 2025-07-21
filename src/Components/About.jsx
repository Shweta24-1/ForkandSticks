import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function About() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <div className="bg-black flex flex-col gap-4 items-center h-[400px] w-full text-white">
        <h3 className="text-orange-300 mt-8 text-xl">Fresh. Fast. Flavorful.</h3>
        <h1 className="text-white font-bold text-6xl">About Us</h1>
        <span className="text-white text-center text-2xl px-4">
          A bold new taste in 2025 — Fork and Sticks is Dehradun’s rising cloud<br />
          kitchen, ready to deliver happiness to your doorstep.
        </span>
      </div>

      <div className="flex flex-col md:flex-row min-h-screen bg-black items-center">
        <div className="flex flex-col w-full md:w-1/2 justify-center px-8 py-12">
          <h1 className="text-white text-3xl mb-4">Our Journey Begins</h1>

          <p className="text-white text-2xl mb-6">
            Launched in <span className="text-orange-300 font-bold">2025</span>, Fork and Sticks was born from a passion for delivering
            home-style Indian meals with modern convenience. As a full-fledged cloud kitchen, we focus entirely on crafting great food —
            no dine-in distractions, just direct-to-door deliciousness. We’re proudly available on{' '}
            <span className="text-orange-300 font-bold">Swiggy</span> and{' '}
            <span className="text-orange-300 font-bold">Zomato</span>, making it easier than ever to enjoy your favorites wherever you are
            in Dehradun.
          </p>

          <div className="flex flex-col gap-4">
            <h2 className="text-white text-2xl flex items-center">
              <span className="text-orange-300 mr-2">✔</span>
              100% Cloud-Based Kitchen for faster delivery
            </h2>
            <h2 className="text-white text-2xl flex items-center">
              <span className="text-orange-300 mr-2">✔</span>
              Listed on Swiggy & Zomato for maximum reach
            </h2>
            <h2 className="text-white text-2xl flex items-center">
              <span className="text-orange-300 mr-2">✔</span>
              Curated dishes from North Indian to Indo-Chinese
            </h2>
          </div>
        </div>

        <div className="flex justify-center items-center w-full md:w-1/2 px-4 py-8">
          <img
            className="w-[80%] object-contain rounded-lg shadow-lg"
            src="https://www.forkandsticks.in/home.jpg"
            alt="Fork and Sticks kitchen"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-black px-6 py-12 gap-6 text-center">
        <h1 className="font-bold text-white text-4xl">
          Order now & experience the buzz!
        </h1>

        <p className="text-gray-300 text-xl max-w-2xl">
          Find us on your favorite food apps — or explore our in-house menu for exclusive deals.
        </p>

        <button
          id="btn2"
          className="bg-orange-300 text-black px-6 py-2 rounded-md hover:bg-orange-400 transition"
        >
          Explore Our Menu
        </button>
      </div>

      <div className="bg-[rgb(15,26,26)] flex flex-row justify-center gap-12 px-6 py-8">
        <div className="flex items-center gap-4">
          <img className="w-16 h-16 object-contain" src="logo.webp" alt="error! image loading failed" />
          <span className="text-2xl font-bold text-orange-300">Fork and Sticks</span>
        </div>

        <div className="flex flex-col justify-center gap-2">
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
    </>
  );
}

export default About;
