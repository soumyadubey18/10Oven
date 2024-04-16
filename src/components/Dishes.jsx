import React from 'react'
import DishesCard from './DishesCard'
import img1 from '../assets/images/card1.jpg'
import img2 from '../assets/images/card2.avif'
import img3 from '../assets/images/card3.jpg'
import img4 from '../assets/images/card4.jpeg'
import img6 from '../assets/images/card5.jpg'
import img5 from '../assets/images/card6.webp'
function Dishes() {
  return (
    <div className='min-h-screen  flex flex-col justify-center items-center lg:px-32 pt-24'>
        <h1 className='text-5xl  font-semibold text-center pb-10'>Our Dishes</h1>
        <div className='flex flex-wrap gap-8 justify-center items-center'>
            <DishesCard img={img1} tittle='Burger' price='₹150' />
            <DishesCard img={img2} tittle='Pizza' price='₹220' />
            <DishesCard img={img3} tittle='Fries' price='₹100' />
            <DishesCard img={img4} tittle='Wings' price='₹150' />
            <DishesCard img={img5} tittle='Wraps' price='₹150' />
            <DishesCard img={img6} tittle='Mocktail' price='₹150' />
           
           
        </div>

    </div>
  )
}

export default Dishes