'use client'
import React, { useState } from 'react';
import  {  BsChevronCompactLeft , BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled , RxDot } from 'react-icons/rx';
import Image from 'next/image';
import { HomePic } from './Images/Design';
import { full } from '@/public/foodItems';

function Header() {

    const slides = [
        {
          name : 'Fast food',
          url : {full}
        },
        { 
          name : 'Food Image',
          url:"",
        },
        {
          name : 'Product Image',
          url: "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
        },
        
      ];
      const [currentIndex, setCurrentIndex] = useState(0);
      const [dotFilled, setDotFilled] = useState(false);

      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
      const goToSlide = (slideIndex: any) => {
        setCurrentIndex(slideIndex);
      };
      const slideMove = (i : number) => {
        const slideImg = slides[i];
        const index = currentIndex 
      }
      const handleFill = () => {
        setDotFilled(!dotFilled)
      }

  return (
    <div className='relative min-h-[380px] max-w-[1300px]'>
    <div  className=' px-6 m-auto text-center items-center  justify-items-center '>
         <Image  src={full} alt='main home img' fill className=' z-[-1]  relative object-cover  rounded-xl ' />
         <div className=" mt-[380px] justify-items-center mx-auto  text-center items-center justify-center  ">
            {
              !dotFilled ? (
                <div onClick={handleFill} > <RxDot className=' cursor-pointer h-20 w-20 mx-auto ml-[500px] text-[#978484] text-center mt-[-60px]  absolute'/> </div>
              ) : (
                <div onClick={handleFill} ><RxDotFilled className=' cursor-pointer h-20 w-20 mx-auto ml-[500px] text-[#978484] text-center mt-[-60px]  absolute'/></div>
              )
            }
            {/* {
              slides.map((item , index)=> (
                <div className="" key={index}>
                    <Image src={item.url} alt={item.name} height={50} width={50} />
                </div>
              ))
            } */}
        </div>
    </div>
    
    </div>
  )
}

export default Header;

/**
 <div
        //style={{ backgroundImage: `url(${slides[currentIndex].url}) ` }}
        className="w-full h-full  rounded-2xl bg-center bg-cover duration-500   "

      >
        
        <div className="pl-30 text-center  py-20 text-semibold lg:text-5xl md:text-2xl  gap-2   ">
//              {/* Left Arrow *///}
//              <div className="hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//              <BsChevronCompactLeft onClick={prevSlide} />
//          </div>
//          {/* Right Arrow */}
//          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//              <BsChevronCompactRight onClick={nextSlide} />
//          </div>
//          <div className="flex top-4 justify-center py-2">
//      {slides.map((slide, slideIndex) => (
//        <div
//          key={slideIndex}
//          onClick={() => goToSlide(slideIndex)}
//          className="text-2xl re text-form cursor-pointer"
//        >

//          <RxDotFilled />
//        </div>
//      ))}
//    </div>
//      </div>
//    </div> 
//*/