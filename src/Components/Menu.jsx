import React from 'react';

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
            alt="Crispy Chilli Potato"
          />
        </div>

        <div className="flex flex-col h-full w-1/2 p-8 text-white overflow-auto">
          <h1 className="font-bold text-4xl mb-6">Appetizers-Veg</h1>
          <p className="text-xl mb-8">
            Crispy, spicy, and fusion veg starters to kick off your meal.
          </p>

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

        {/*non-veg */}
        <div className="flex flex-col h-full w-1/2 p-8 text-white overflow-auto">
          <h1 className="font-bold text-4xl mb-6">Appetizers-Non-Veg</h1>
          <p className="text-xl mb-8">
           Bold and flavorful non-veg starters with Indo-Chinese flair.
          </p>

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
    </>
  );
}

export default Menu;
