'use client'

import React, { useEffect, useState } from 'react'
import { database } from '../appwrite/Config';
import Image from 'next/image';
import { biryai , burger } from '@/public/foodItems';
import { FoodData } from './dummy_data';
import { useRouter } from 'next/navigation';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { storage } from '../appwrite/Config';
import { ProductData } from './dummy_data';



function Products() {
    const router = useRouter();
    const [loader, setLoader] = useState(false);
     


  return (
    <>
         <h2 className='text-xl font-bold  text-white '> Products </h2>
        <div className="flex flex-1 my-2  h-[200px] w-auto ">
            <div className="bg-[#402D49]  w-auto mx-auto gap-4 shadow-[#000000] my-auto shadow-lg rounded-[12px]   ">
                <div className="flex flex-wrap">
                {  ProductData && (

                    ProductData.map((item) => (
                     <div onClick={() => router.push(`/product`)} key={item.name} className=" relative p-4 m-2 md:m-5  cursor-pointer rounded-[20px] h-[250px]   w-[170px] shadow-[#4d4a4a] shadow-xl items-center  flex flex-col ">
                         <Image src={item.url}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  priority alt={item.name} fill   className='bg-auto relative object-center mx-auto  h-auto w-auto rouded-xl  ' />
                    </div>
                    ))
                 )
                }
                <div onClick={() => router.push(`/food`)} className='hover:bg-form cursor-pointer flex text-center justify-items-center gap-2 items-center bg-orange m-auto px-4 py-2 text-white rounded-md '>
                    Read more <span className='h-5 w-5'> <AiOutlineArrowRight /> </span>
                </div>
                </div>
                {/* <img src={data.href} alt={"test img"} className='h-20 w-20' />  */}
            </div>
        </div>  
    </>
  )
}

export default Products