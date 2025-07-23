import React from 'react';
import { NavLink } from 'react-router-dom';

function Contacts() {
  return (
    <div className="flex flex-col bg-black min-h-screen text-white overflow-auto">
      <div className="text-center mt-10 space-y-4">
        <p className="text-orange-300 text-2xl">Get in Touch</p>
        <h1 className="font-bold text-4xl">Contact Us</h1>
        <p className="text-gray-200 text-2xl max-w-2xl mx-auto">
          Have questions or just want to say hi? Here’s how you can reach us.
        </p>
      </div>

      <div className="flex flex-row justify-center gap-20 px-10 mt-12">
        <div className="flex flex-col space-y-6 max-w-md">
          <div>
            <h2 className="text-3xl font-bold">Address</h2>
            <p className="text-xl">
              Fork and Sticks Cloud Kitchen, Chaat Wali Gali, Near Paltan Bazar, Dehradun, Uttarakhand – 248001
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mt-4">Phone</h2>
            <button className="text-2xl hover:text-orange-400 transition">+91 6398118280</button>
          </div>

          <div>
            <h2 className="text-3xl font-bold mt-4">Email</h2>
            <button className="text-2xl hover:text-orange-400 transition">support@forkandsticks.in</button>
          </div>
        </div>

        <div className="flex flex-col space-y-6 max-w-md">
          <div>
            <h2 className="text-3xl font-bold">Business Hours</h2>
            <p className="text-xl">
              Monday – Saturday: 10:00 AM – 11:00 PM <br />
              Sunday: 12:00 PM – 9:00 PM
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mt-4">Follow Us</h2>
            <a
              href="https://www.instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition text-3xl"
            >
              <i className="ri-instagram-line"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-16 px-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6887.914485958345!2d78.03990700000001!3d30.323734!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909293b5bd4df4b%3A0xb33cce6b9e773c8!2sFork%20and%20Stick!5e0!3m2!1sen!2sin!4v1753242544685!5m2!1sen!2sin"
          width="900"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <footer className="bg-[rgb(15,26,26)] mt-16 flex flex-row justify-between items-center gap-12 px-6 py-8">
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
    </div>
  );
}

export default Contacts;
