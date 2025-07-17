import React from 'react'
import { NavLink } from 'react-router-dom';

function Navhero() {
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

  <div className="absolute top-0 left-0 z-20 bg-black bg-opacity-50 p-4 w-full flex justify-between items-center">
    <p className="font-bold text-white text-3xl">Fork and Sticks</p>
    <div className="flex gap-5 text-lg">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `relative group pb-1 transition-all duration-300 ${
            isActive ? 'text-yellow-400' : 'text-white'
          }`
        }
      >
        <span className="border-b-2 border-transparent group-hover:border-yellow-400 transition-all duration-300">
          Home
        </span>
      </NavLink>
      <NavLink
        to="/About"
        className={({ isActive }) =>
          `relative group pb-1 transition-all duration-300 ${
            isActive ? 'text-yellow-400' : 'text-white'
          }`
        }
      >
        <span className="border-b-2 border-transparent group-hover:border-yellow-400 transition-all duration-300">
          About
        </span>
      </NavLink>
      <NavLink
        to="/Menu"
        className={({ isActive }) =>
          `relative group pb-1 transition-all duration-300 ${
            isActive ? 'text-yellow-400' : 'text-white'
          }`
        }
      >
        <span className="border-b-2 border-transparent group-hover:border-yellow-400 transition-all duration-300">
          Our Menus
        </span>
      </NavLink>
      <NavLink
        to="/Contacts"
        className={({ isActive }) =>
          `relative group pb-1 transition-all duration-300 ${
            isActive ? 'text-yellow-400' : 'text-white'
          }`
        }
      >
        <span className="border-b-2 border-transparent group-hover:border-yellow-400 transition-all duration-300">
          Contact
        </span>
      </NavLink>
    </div>
  </div>

  
  <div className="absolute z-30 flex items-center justify-center h-screen w-full text-white">
    <div className="text-center px-4">
      <h1 className="font-bold text-9xl">Flavours of India, Delivered</h1>
      <p className="mt-4 text-lg max-w-xl mx-auto">
        From crispy chilli potatoes to butter chicken — experience the rich taste of India,
        delivered fresh from our cloud kitchen to your doorstep.
      </p>
    </div>
  </div>
  <button
  id="orderBtn"
  className="fixed top-[80%] right-4 bg-orange text-white font-semibold px-6 py-3 rounded-full color-orange shadow-lg transition-opacity duration-500 z-40">
  Order Now
</button>


</div>


  
</>
    
  )
}

export default Navhero