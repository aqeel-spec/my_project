
import Image from "next/image";
import { home , biryai , biryani2 , burger , full } from "@/public/foodItems";


import React from 'react'

function HomePic() {
  return (
    <>
        <Image  src={full} alt='main home img' fill className='object-cover  rounded-xl ' />
        
    </>
  )
}

export { HomePic }