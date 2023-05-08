"use client"
import React, { useState } from 'react'
import { database } from '../appwrite/Config';
import Image from 'next/image';
import { biryai , burger } from '@/public/foodItems';
import { FoodData } from './dummy_data';
import { useRouter } from 'next/navigation';
import { AiOutlineArrowRight } from 'react-icons/ai'

function Food() {
    const router = useRouter();



  return (
    <>
         <h2 className='text-xl font-bold  text-white '> Products </h2>
        <div className="flex flex-1 my-2  h-[200px] w-full ">
            <div className="bg-[#402D49]  w-auto mx-auto gap-4 shadow-[#000000] my-auto shadow-lg rounded-[12px]   ">
                <div className="flex flex-wrap ">
                {
                    FoodData.map((item) => (
                    <div onClick={() => router.push(`/food`)} key={item.name} className="   cursor-pointer rounded-[20px] h-auto bg-[#FFFFFF] p-4 m-4 w-[150px] shadow-[#4d4a4a] shadow-xl items-center  flex flex-col text-center  justify-between ">
                        <div className="w-full  rounded-full ">
                        <Image src={item.url} priority alt={item.name} height={200} width={200} className=' object-auto  relative' />
                        </div>
                        <div className="">
                            <h3 className=' text-md font-serif font-bold text-black'> {item.name} </h3>
                            <p className='leading-8 text-sm text-[#FFC83A] '>Rs.{item.price} </p>
                        </div>
                    </div>
                    ))
                }
                <div onClick={() => router.push(`/food`)} className='hover:bg-form cursor-pointer flex text-center justify-items-center gap-2 items-center bg-orange m-auto px-4 py-2 text-white rounded-md '>
                    Read more <span className='h-5 w-5'> <AiOutlineArrowRight /> </span>
                </div>
                </div>
            </div>
        </div>  
    </>
  )
}

export default Food


// create form food items and send to database
 // const handleSubmit = (e : any) => {
    //     e.preventDefault();
    //     const promise =  database.createDocument("645742f1acfa7ac60606","64574308c221d002643e","64574308c221d002643e",{
    //         Item_name : "hello food item"
    //     });
    //     promise.then((res) => {
    //         console.log("document submitted Data",res)
    //     },(error) => {
    //         console.log(error)
    //     });
    //    // e.target.reset();
    // }

            {/* <button type="submit" onClick={handleSubmit} >add food</button> */}