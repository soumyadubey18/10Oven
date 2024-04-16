import React, { useEffect } from 'react'
import {useState} from 'react'
import { BiChevronLeft,BiChevronRight } from 'react-icons/bi'

function Carousel( {children:slides,autoSlide=true, autoSlideInterval=5000}) {
    const[curr,setCurr] = useState(0);

    const prev = () =>{
        setCurr((curr)=>(curr===0 ? slides.length -1 : curr-1))
    }
    const next = () =>{
        setCurr((curr)=>(curr=== slides.length -1 ? 0 : curr+1))
    }
    useEffect(()=>{
        if(!autoSlide)return
        const slideInterval = setInterval(next,autoSlideInterval)
        return () => clearInterval(slideInterval)
    },[])
  return (
    <div className='overflow-hidden relative w-full bg-red-600'>
        <div className='flex transition-transform duration-500' style={{transform:`translateX(-${curr*100}%)`}}>
            {slides}
        </div>
        <div className='absolute inset-0 flex items-center justify-between p-4'>
            <button onClick={prev}>
                <BiChevronLeft size={40} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'/>
            </button>
            <button onClick={next}>
                <BiChevronRight size={40}  className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'/>
            </button>
        </div>
        <div className='absolute bottom-4 right-0 left-0'>
            <div className='flex items-center justify-center gap-2'>
                {slides.map((_,i)=>(
                    <div className={`
                        transition-all w-3 h-3 bg-white rounded-full
                        ${curr===i? "p-2" : "bg-opacity-50"}
                    `}/>

                ))}
            </div>
        </div>
    </div>
  )
}

export default Carousel