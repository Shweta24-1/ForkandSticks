import React from 'react'

function About() {
  return (
    <>
    <div className="bg-black flex flex-col gap-[1rem] items-center  h-[400px] w-full text-white">
      <h3 className='text-orange-300 mt-[2rem] text-xl'>Fresh. Fast. Flavorful.</h3>
      <h1 className='text-white font-bold text-6xl'>About Us</h1>
      <p className='text-white text-center text-2xl'>A bold new taste in 2025 — Fork and Sticks is Dehradun’s rising cloud<br/> kitchen, ready to deliver happiness to your doorstep.</p>
    </div>

    <div className='flex flex-row min-h-screen bg-black items-center relative overflow-hidden'>
  <div className='ml-8 flex flex-col min-h-screen w-full md:w-1/2 justify-center px-4'>
    <h1 className='text-white text-3xl mb-4'>Our Journey Begins</h1>

    <p className='text-white text-2xl flex flex-row flex-wrap mb-6'>
      Launched in <span className='text-orange-300 font-bold ml-1'>2025</span>, Fork and Sticks was born from a passion for delivering home-style Indian meals with modern convenience.
      As a full-fledged cloud kitchen, we focus entirely on crafting great food — no dine-in distractions, just direct-to-door deliciousness.
      We’re proudly available on <span className='text-orange-300 font-bold mx-1'>Swiggy</span> and 
      <span className='text-orange-300 font-bold ml-1'>Zomato</span>, making it easier than ever to enjoy your favorites wherever you are in Dehradun.
    </p>

    <div className='flex flex-col gap-4'>
      <h2 className='text-white text-2xl flex items-center'>
        <span className='text-orange-300 mr-2'>✔</span>
        100% Cloud-Based Kitchen for faster delivery
      </h2>
      <h2 className='text-white text-2xl flex items-center'>
        <span className='text-orange-300 mr-2'>✔</span>
        Listed on Swiggy & Zomato for maximum reach
      </h2>
      <h2 className='text-white text-2xl flex items-center'>
        <span className='text-orange-300 mr-2'>✔</span>
        Curated dishes from North Indian to Indo-Chinese
      </h2>
    </div>
  </div>

  <div className='ml-8 flex justify-center items-center min-h-screen w-full md:w-1/2'>
    <img className='w-[80%] object-contain' src='https://www.forkandsticks.in/home.jpg' alt='Error! Image loading failed' />
  </div>
</div>

    </>
  )
}

export default About