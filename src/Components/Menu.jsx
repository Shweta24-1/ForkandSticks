import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <>
      <div className="bg-black flex flex-col gap-4 items-center h-[250px] w-full text-white py-8">
        <h3 className="text-orange-300 text-xl">Cloud Kitchen Specials</h3>
        <h1 className="text-white font-bold text-5xl">Our Full Menu</h1>
        <span className="text-gray-400 text-center text-xl px-4 max-w-3xl">
          From bold Indian mains to quick Chinese bites — everything is crafted fresh, just for you.
        </span>
      </div>

      <div className="flex bg-black h-screen w-screen overflow-hidden">
        <div className="h-full w-1/2">
          <img
            className="h-full w-full object-cover"
            src="https://www.forkandsticks.in/TD-3792.jpg"
            alt="image loading failed"
          />
        </div>

        <div className="flex flex-col h-full w-1/2 p-8 text-white overflow-auto">
          <h1 className="font-bold text-4xl mb-6">Appetizers-Veg</h1>
          <p className="text-xl mb-8">Crispy, spicy, and fusion veg starters to kick off your meal.</p>

          <div className="flex flex-col gap-8 mt-16">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-2xl text-orange-300">Crispy Chilli Potato</p>
                <p className="text-gray-300 text-xl">Saucy / Garlic / Fried</p>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-orange-500 w-5 h-5" />
                <span className="text-xl font-semibold text-orange-300">₹169</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-2xl text-orange-300">Honey Crispy Potato</p>
                <p className="text-gray-300 text-xl">Sweet & Spicy / Sesame</p>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-orange-500 w-5 h-5" />
                <span className="text-xl font-semibold text-orange-300">₹169</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-2xl text-orange-300">Classic Paneer Tikka</p>
                <p className="text-gray-300 text-xl">Tandoori / Spiced / Capsicum</p>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-orange-500 w-5 h-5" />
                <span className="text-xl font-semibold text-orange-300">₹229</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-2xl text-orange-300">Chilli Chaap Dry</p>
                <p className="text-gray-300 text-xl">Soya / Spicy Sauce</p>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-orange-500 w-5 h-5" />
                <span className="text-xl font-semibold text-orange-300">₹229</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-2xl text-orange-300">Classic Manchurian Dry</p>
                <p className="text-gray-300 text-xl">Fried Balls / Spicy Sauce</p>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-orange-500 w-5 h-5" />
                <span className="text-xl font-semibold text-orange-300">₹199</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex bg-black h-screen w-screen overflow-hidden">
        <div className="h-full w-1/2">
          <img
            className="h-full w-full object-cover"
            src="https://www.forkandsticks.in/TD-3811.jpg"
            alt="Chilli Chicken"
          />
        </div>

        <div className="flex flex-col h-full w-1/2 p-8 text-white overflow-auto">
          <h1 className="font-bold text-4xl mb-6">Appetizers-Non-Veg</h1>
          <p className="text-xl mb-8">Bold and flavorful non-veg starters with Indo-Chinese flair.</p>

          <div className="flex flex-col gap-8 mt-16">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-2xl text-orange-300">Classic Chilli Chicken Dry</p>
                <p className="text-gray-300 text-xl">Tangy / Spicy / Bell Peppers</p>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-orange-500 w-5 h-5" />
                <span className="text-xl font-semibold text-orange-300">₹229</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-2xl text-orange-300">Chicken 65</p>
                <p className="text-gray-300 text-xl">Yogurt Marinated / Curry Leaves</p>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-orange-500 w-5 h-5" />
                <span className="text-xl font-semibold text-orange-300">₹229</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-2xl text-orange-300">Crispy Chicken Dry</p>
                <p className="text-gray-300 text-xl">Sweet / Spicy</p>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-orange-500 w-5 h-5" />
                <span className="text-xl font-semibold text-orange-300">₹309</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-2xl text-orange-300">Drums of Heaven</p>
                <p className="text-gray-300 text-xl">Soy / Schezwan / Herbs</p>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-orange-500 w-5 h-5" />
                <span className="text-xl font-semibold text-orange-300">₹309</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-2xl text-orange-300">Chicken Lollypop</p>
                <p className="text-gray-300 text-xl">Crunchy / Schezwan</p>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-orange-500 w-5 h-5" />
                <span className="text-xl font-semibold text-orange-300">₹309</span>
              </div>
            </div>
          </div>
        </div>
      </div>

     {/* Noodles Section */}
<div className="flex bg-black h-screen w-screen overflow-hidden">
  <div className="h-full w-1/2">
    <img
      className="h-full w-full object-cover"
      src="https://www.forkandsticks.in/TD-3758.jpg"
      alt="Noodles"
    />
  </div>
  <div className="flex flex-col h-full w-1/2 p-8 text-white overflow-auto">
    <h1 className="font-bold text-4xl mb-6">Noodles – Veg & Non-Veg</h1>
    <p className="text-xl mb-8">Stir-fried noodles with spicy, garlicky sauces and fresh vegetables.</p>
    <div className="flex flex-col gap-8">
      {[
        ['Vegetables Hakka Noodles', 'Veg / Garlic / Scallions', '₹179'],
        ['Chilli Garlic Noodles', 'Spicy / Aromatic / Veg', '₹199'],
        ['Schezwan Noodles', 'Spicy / Veg / Saucy', '₹199'],
        ['Hakka Noodles (Non-Veg)', 'Chicken / Garlic / Soy', '₹209'],
        ['Schezwan Noodles (Non-Veg)', 'Chicken / Egg / Spicy', '₹229'],
      ].map(([name, desc, price]) => (
        <div key={name} className="flex justify-between items-center">
          <div>
            <p className="font-bold text-2xl text-orange-300">{name}</p>
            <p className="text-gray-300 text-xl">{desc}</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="accent-orange-500 w-5 h-5" />
            <span className="text-xl font-semibold text-orange-300">{price}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

{/* Momos Section */}
<div className="flex bg-black h-screen w-screen overflow-hidden">
  <div className="h-full w-1/2">
    <img
      className="h-full w-full object-cover"
      src="https://www.forkandsticks.in/TD-3771.jpg"
      alt="Momos & Dimsums"
    />
  </div>
  <div className="flex flex-col h-full w-1/2 p-8 text-white overflow-auto">
    <h1 className="font-bold text-4xl mb-6">Momos & Dimsums</h1>
    <p className="text-xl mb-8">Steamed or fried dumplings with flavorful veg and chicken fillings.</p>
    <div className="flex flex-col gap-8">
      {[
        ['Classic Veg Momo (6 pcs)', 'Steamed / Cabbage / Soya', '₹119'],
        ['Peri Peri Momo (Veg)', 'Fried / Spicy / Sauce', '₹139'],
        ['Afghani Momo (Veg)', 'Smoky / Tandoori', '₹199'],
        ['Classic Non-Veg Momo', 'Minced Chicken / Steamed', '₹139'],
      ].map(([name, desc, price]) => (
        <div key={name} className="flex justify-between items-center">
          <div>
            <p className="font-bold text-2xl text-orange-300">{name}</p>
            <p className="text-gray-300 text-xl">{desc}</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="accent-orange-500 w-5 h-5" />
            <span className="text-xl font-semibold text-orange-300">{price}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

{/* Fried Rice Section */}
<div className="flex bg-black h-screen w-screen overflow-hidden">
  <div className="h-full w-1/2">
    <img
      className="h-full w-full object-cover"
      src="https://www.forkandsticks.in/TD-3807.jpg"
      alt="Fried Rice"
    />
  </div>
  <div className="flex flex-col h-full w-1/2 p-8 text-white overflow-auto">
    <h1 className="font-bold text-4xl mb-6">Fried Rice – Veg & Non-Veg</h1>
    <p className="text-xl mb-8">Indo-Chinese style rice tossed with sauces, veggies, and meats.</p>
    <div className="flex flex-col gap-8">
      {[
        ['Classic Fried Rice', 'Veg / Mild Soy', '₹179'],
        ['Chilli Garlic Fried Rice', 'Spicy / Garlic / Spring Onion', '₹199'],
        ['Chicken Fried Rice', 'Chicken / Savory Soy', '₹199'],
        ['Chicken Garlic Fried Rice', 'Spicy / Chilli Garlic', '₹209'],
        ['Chicken Schezwan Fried Rice', 'Schezwan / Bold / Spicy', '₹209'],
      ].map(([name, desc, price]) => (
        <div key={name} className="flex justify-between items-center">
          <div>
            <p className="font-bold text-2xl text-orange-300">{name}</p>
            <p className="text-gray-300 text-xl">{desc}</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="accent-orange-500 w-5 h-5" />
            <span className="text-xl font-semibold text-orange-300">{price}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

{/* Main Course Section */}
<div className="flex bg-black h-screen w-screen overflow-hidden">
  <div className="h-full w-1/2">
    <img
      className="h-full w-full object-cover"
      src="https://www.forkandsticks.in/TD-3829.jpg"
      alt="Main Course Gravy"
    />
  </div>
  <div className="flex flex-col h-full w-1/2 p-8 text-white overflow-auto">
    <h1 className="font-bold text-4xl mb-6">Main Course (Gravy)</h1>
    <p className="text-xl mb-8">Rich, creamy Indo-Chinese gravies perfect with rice or noodles.</p>
    <div className="flex flex-col gap-8">
      {[
        ['Chilli Paneer Gravy', 'Spicy / Bell Pepper', '₹229'],
        ['Veg Manchurian Gravy', 'Fried Balls / Tangy Sauce', '₹199'],
        ['Afghani Momo (Veg)', 'Smoky / Tandoori', '₹199'],
        ['Chilli Chicken Gravy', 'Spicy / Savory', '₹249'],
      ].map(([name, desc, price]) => (
        <div key={name} className="flex justify-between items-center">
          <div>
            <p className="font-bold text-2xl text-orange-300">{name}</p>
            <p className="text-gray-300 text-xl">{desc}</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="accent-orange-500 w-5 h-5" />
            <span className="text-xl font-semibold text-orange-300">{price}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

{/* Shakes & Beverages Section */}
<div className="flex bg-black h-screen w-screen overflow-hidden">
  <div className="h-full w-1/2">
    <img
      className="h-full w-full object-cover"
      src="https://www.forkandsticks.in/TD-3802.jpg"
      alt="Beverages & Shakes"
    />
  </div>
  <div className="flex flex-col h-full w-1/2 p-8 text-white overflow-auto">
    <h1 className="font-bold text-4xl mb-6">Beverages & Shakes</h1>
    <p className="text-xl mb-8">Cool down with creamy shakes and chilled drinks.</p>
    <div className="flex flex-col gap-8">
      {[
        ['Oreo Shake', 'Creamy / Rich', '₹189'],
        ['Cold Coffee', 'Iced / Strong', '₹199'],
        ['Soft Drink', 'Coke / Sprite / Pepsi', '₹69'],
        ['Water Bottle', 'Mineral Water', '₹29'],
      ].map(([name, desc, price]) => (
        <div key={name} className="flex justify-between items-center">
          <div>
            <p className="font-bold text-2xl text-orange-300">{name}</p>
            <p className="text-gray-300 text-xl">{desc}</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="accent-orange-500 w-5 h-5" />
            <span className="text-xl font-semibold text-orange-300">{price}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      
    </>
  );
}

export default Menu;
