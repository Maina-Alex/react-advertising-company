import React from 'react'
import Typed from 'react-typed'

function Hero() {
  return (
    <div>
    <div className='text-white'>
       <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify-centre'>
        <p className=' text-[#00df9a] font-bold p-2 uppercase'>Growing with data analytics</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold mx:py-6'> Grow with data</h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-3'> Fast,flexible financing for</p>
            <Typed className='md:pl-4 pl-2 md:text-5xl text-[#00df9a] sm:text-4xl text-xl font-bold' strings={['BTB','BTC','SASS']} typeSpeed={120} backSpeed={140} loop/>
        </div>
        <p className='pt-4 text-lg font-bold text-gray-400 sm:text-xl '>Monitor your data analytics to increase revenue for BTB ,BTC & SASS</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black '> Get Started</button>
       </div>
    </div>
    </div>
  )
}

export default Hero