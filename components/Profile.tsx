'use client'
import React, { useEffect, useState } from 'react'
import { account } from "./appwrite/Config";
import Link from 'next/link';
import { useRouter } from "next/navigation"
import { NameIcon } from './Icons/figmaDefault';
import Image from 'next/image';

interface UserDetail {
  name : string,
  email : string,
  id : string,
  status : boolean,
  emailVerification : boolean,
  createdAt : string
}

function Profile() {

  const router = useRouter();
  const [userDetails, setUserDetails] = useState<UserDetail>();
  const [openProfile, setOpenProfile] = useState(true)

  useEffect(() => {
        const getData = account.get();
        getData.then(
            function(res : any) {
                setUserDetails(res);
                console.log("res data",res)
            },
            function(error) {
                console.log(error)
            }
        )
  }, [])
  
  const handleLogout = async () => {
    try {
        await account.deleteSession("current");
        router.push(`/`);
    
      } catch (error) {
        console.log(error)
      }
  }
  

  return (
    <>
     {!userDetails ? (
            <div className="text-[#FFFFFF] ">
            <button className='log_btn' onClick={() => router.push(`signin`)}>Sign in</button>
          </div>
            // <p> Hi ,{userDetails.email} </p>
          ) : (
            <>
             <div className="text-[#FFFFFF] ">
             <button className='log_btn' onClick={handleLogout}>Logout</button>
            </div>
            <div onClick={() => setOpenProfile(pre => (!pre) )} className='  cursor-pointer '>  
                <div className=""><NameIcon  /></div>
            </div>

            {/** profile dropdown setting  & data is here  */}
            {!openProfile && (
            <div className=' right-0 md:-right-2 z-10  justify-end w-[300px] absolute flex flex-col'>
              <div className="md:left-0 transition delay-150 ease-in-out duration-300 -left-[18.5rem] md:top-12 top-0 shadow-lg shadow-cyan-500/50 border-[0.5px] divide-y-2  w-full p-4 rounded-lg absolute  bg-backround">
                <div className="px-3 py-2 text-sm ">
                  <div className="font-medium "> Hi ,<span className=' first-letter:uppercase '>{userDetails.name}</span> </div>
                  <div className="truncate">{userDetails.email}</div>
                </div>
                <ul className="py-2 text-sm " aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                  <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>
                  <div className="text-[#FFFFFF] ">
                    <button className='log_btn' onClick={handleLogout}>Logout</button>
                  </div>
              </ul>
              </div>
            </div>
            )}
            {/* <div  className={`  `} >
             <NameIcon  />
            <Image className='rounded-full h-10 w-10 object-contain ' src={"/pic.jpg"} height={50} width={50} alt='Text Image' />
            
          </div> */}
            </>
          )}
     </>
  )
}

export default Profile