import { useEffect, useState } from 'react'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { SliderImageArray } from '../assets/images'

export default function Slider(): JSX.Element {
    const [curent, SetCurrent] = useState(0)

    const preSlide = () => {
        SetCurrent(curent === 0 ? 4 : prev => prev - 1)
    }
    const nextSlide = () => {
        SetCurrent(curent === 4 ? 0 : prev => prev + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            curent === 0 ? SetCurrent(4) : SetCurrent(curent + 1)
            curent === 4 ? SetCurrent(0) : SetCurrent(curent + 1)
        }, 5000)

        return () => {
            clearInterval(interval)
        }
    })

    return (
        <div className="h-auto overflow-x-hidden">
            <div className="w-full relative">
                <div style={{ transform: `translateX(-${curent * 100}vw)` }} className="w-[500vw] h-[80svh]  
                flex transition-transform duration-1000 ">
                    <img className="w-screen  object-cover z-0" src={SliderImageArray[0]} alt="slider images"
                        loading="eager" />

                    <img className="w-screen h-full object-cover z-0" src={SliderImageArray[1]} alt="slider images"
                        loading="eager" />

                    <img className="w-screen h-full object-cover z-0" src={SliderImageArray[2]} alt="slider images"
                        loading="eager" />

                    <img className="w-screen h-full object-cover z-0" src={SliderImageArray[3]} alt="slider images"
                        loading="eager" />
                    <img className="w-screen h-full object-cover z-0" src={SliderImageArray[4]} alt="slider images"
                        loading="eager" />
                </div>
                <div className='absolute w-fit  left-0 right-0 mx-auto flex gap-8 bottom-8'>
                    <div className='w-12 h-12 rounded-full border-[0.1rem] border-gray-500 flex items-center 
                    justify-center hover:cursor-pointer
                    hover:bg-gray-600 
                    hover:text-white
                    active:bg-gray-900 duration-300'
                        onClick={preSlide}>
                        <BsFillArrowLeftCircleFill />
                    </div>
                    <div className='w-12 h-12 rounded-full border-[0.1rem] border-gray-500 flex items-center 
                    justify-center hover:cursor-pointer
                    hover:bg-gray-600 
                    hover:text-white
                    active:bg-gray-900 duration-300'
                        onClick={nextSlide}>
                        <BsFillArrowRightCircleFill />
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
