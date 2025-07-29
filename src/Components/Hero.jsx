import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

function Hero() {
  const [showButton, setShowButton] = useState(true);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(false);

      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setShowButton(true);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="https://forkandsticks.in/mobilehero.mp4" type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

        <div className="absolute z-30 flex items-center justify-center h-screen w-full text-white">
          <div className="text-center px-4">
            <h1 className="font-bold text-6xl md:text-8xl">Flavours of India, Delivered</h1>
            <p className="mt-4 text-lg max-w-xl mx-auto">
              From crispy chilli potatoes to butter chicken — experience the rich taste of India,
              delivered fresh from our cloud kitchen to your doorstep.
            </p>
            {showButton && (
              <button className="bg-orange-500 text-white font-semibold px-6 py-3 mt-10 rounded-full shadow-lg hover:bg-orange-600 transition duration-300 fixed right-6">
                Order Now
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="bg-black flex pt-10 flex-col md:flex-row min-h-screen relative overflow-hidden">
        <div className="min-h-screen w-full md:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="./TD-3829.webp"
            alt="error:loading image failed!"
          />
        </div>
        <div className="w-full md:w-1/2 min-h-screen flex flex-col justify-center px-6 py-10 z-10">
          <p className="text-white text-3xl mb-6">Your go-to kitchen for every craving</p>
          <h1 className="text-orange-300 font-bold text-4xl leading-relaxed">
            Bold Indian flavours — crafted with care,<br />
            sealed fresh, and delivered right to your doorstep.
          </h1>
        </div>
      </div>

      <div className="bg-black flex pt-10 flex-col mt-0 md:flex-row min-h-screen relative overflow-hidden">
        <div className="w-full md:basis-[55%] min-h-screen flex flex-col justify-center px-6 py-10 z-10">
          <p className="text-white text-2xl">FRESH. FLAVORFUL. FAST.</p>
          <h1 className="font-bold text-4xl leading-relaxed mt-2 text-white">Chef’s Cloud Picks</h1>
          <p className="text-white text-3xl mt-2 mb-6">
            Dive into the best of Indian-Chinese fusion, fast food favorites, and mouthwatering vegetarian & chicken dishes. Cooked fresh in our cloud kitchen and delivered hot to your doorstep — this is comfort food, redefined.
          </p>
        </div>
        <div className="w-full md:basis-[45%] min-h-screen mt-10 md:mt-0 flex items-center justify-center">
          <img
            className="w-full max-w-[80%] h-auto object-contain"
            src="./ourchef.webp"
            alt="error:loading image failed!"
          />
        </div>
      </div>

      <div className="bg-black flex flex-col items-center justify-center min-h-screen py-12 px-4 space-y-10 overflow-hidden">
        <div className="text-center w-full max-w-4xl">
          <h1 className="text-4xl font-bold text-orange-300 mb-4">Our Achievements 🏆</h1>
          <p className="text-gray-300 text-2xl mb-2">
            Recognized for outstanding quality, hygiene, and taste across the city.
          </p>
          <h3 className="text-orange-300 text-xl">
            Proud winner of Best Cloud Kitchen Award 2025.
          </h3>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <img
            className="rounded-md border border-gray-200 h-[350px] w-[300px] object-cover"
            src="https://forkandsticks.in/Award2.jpeg"
            alt="Award 2"
          />
          <img
            className="rounded-md border border-gray-200 h-[350px] w-[300px] object-cover"
            src="https://forkandsticks.in/Award1.jpg"
            alt="Award 1"
          />
          <img
            className="rounded-md border border-gray-200 h-[350px] w-[300px] object-cover"
            src="https://forkandsticks.in/award3.jpeg"
            alt="Award 3"
          />
        </div>
        <p className="text-gray-400 text-sm italic">More milestones to come... 🚀</p>
      </div>

      <footer className="bg-[rgb(15,26,26)] flex flex-row justify-between items-center gap-12 px-6 py-8">
        <div className="flex items-center gap-4">
          <img className="w-16 h-16 object-contain" src="logo.webp" alt="Logo" />
          <span className="text-2xl font-bold text-orange-300">Fork and Sticks</span>
        </div>

        <div className="flex flex-col items-center gap-6">
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
                    ? location.pathname === '/' ? 'text-yellow-400' : 'text-orange-300'
                    : 'text-white'
                }`
              }
            >
              <span className="border-b-2 border-transparent group-hover:border-yellow-400 transition-all duration-300">
                {label}
              </span>
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4 text-orange-300">
          <a
            href="https://www.instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition text-3xl"
          >
            <i className="ri-instagram-line"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Hero;
