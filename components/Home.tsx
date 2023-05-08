'use client'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import { RxDotFilled } from 'react-icons/rx';
import Image from 'next/image'
import { full } from '@/public/foodItems';
import Food from './data/Food';
import { database } from './appwrite/Config';
import { isTemplateExpression } from 'typescript';
import Products from './data/Products';
import { jeans } from '@/public/products';
import { AiFillDislike, AiFillHeart, AiFillLike, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BsFillShareFill } from 'react-icons/bs';
import { ReciptData } from './data/dummy_data';

import { useRouter } from 'next/navigation';

function Home() {

   const router = useRouter();

  return (
    <div className={` flex flex-col flex-1 justify-between space-y-16  m-auto  p-4 relative  hover:z-0 `}>
        <Header />
        <Food />
        <Products />
      
        <div className=" my-auto ">
            <div className=" my-auto ">
                <h2 className='text-xl font-bold py-6 text-white '> Food Ricipies </h2>
                 <div className="flex flex-wrap ">
                {
                    ReciptData.map((item) => (
                    <div onClick={() => router.push(`/recipies`)} key={item.name} className=" cursor-pointer max-w-[300px] justify-between flex flex-wrap gap-4 h-auto rounded-3xl my-12 mx-auto bg-[#E4E3E3] ">
                    
                        <Image src={item.url}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" height={300} width={300} priority alt='jeana'  className=' object-cover flex-1 ' />
                        <div className="p-6 flex flex-wrap space-y-2 ">
                            <div className=" leading-2 flex-[2] text-black text-xl font-extra-bold "> {item.name} </div>
                            <div className="flex gap-1 flex-wrap justify-between items-center justify-items-center ">
                                <p className='text-[#393030] '>Ready in {item.readyIn} </p>
                                <div className='flex items-center justify-items-center '>
                                    <AiFillStar  className='text-orange'/>
                                    <AiFillStar className='text-orange' />
                                    <AiFillStar  className='text-orange'/>
                                    <AiFillStar  className='text-orange'/>
                                    <AiFillStar className=' text-rating ' />
                                    <span> ({item.rating}) </span>
                                </div>
                            </div>
                            <div className="flex text-xl p-2 justify-between p-4">
                                <div className='flex  text-center justify-items-center gap-1 '>
                                    <AiFillHeart className='text-red-400' />
                                    <AiFillDislike className='text-[#374151] ' />
                                    <AiFillLike />
                                </div>
                                <h3>
                                    <BsFillShareFill  className='text-[#374151] '  />
                                </h3>
                            </div>
                        </div>
                    </div>

                    ))
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home


// ( ( ( ( ( (      Configuration to get all documents        ))))))
 // const [todos, setTodos] = useState<ListData>();
    // const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //   setLoading(true)
    //   const getTodos = database.listDocuments("645742f1acfa7ac60606","64574308c221d002643e");
    //  getTodos.then((res : any) => {
    //     setTodos(res)
    //     console.log("todos Data",res)
    //   },(error) => {
    //         console.log(error)
    //    });
    //    setLoading(false)
    // }, []);
    // console.log("todos" , todos)

    // const deleteListItem = (id : string) => {
    //     const deleLi = database.deleteDocument("645742f1acfa7ac60606","64574308c221d002643e", id);
    //     deleLi.then((res : any) => {
    //         setTodos(res)
    //         console.log("this item deleted successfully",res)
    //       },(error) => {
    //             console.log(error)
    //     });
    //     window.location.reload();
    // }

 {/* {loading ?  (
                <p>Loading</p>
            ) : (
                <div className="">
                   {
                    todos && todos.documents.map((item) => (
                        <div className="" key={item.$id}>
                            <div className="">{ item.Item_name }</div>
                            <span className="px-4 py-2 cursor-pointer  bg-gray-200"  onClick={() => deleteListItem(item.$id)}>
                                 <span> deleteList </span>
                            </span>
                        </div>
                    ))
                   }
                </div>
            )} */}