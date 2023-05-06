'use client'
import React, { useEffect, useState } from 'react'
import { account } from "../../components/appwrite/Config";
import Link from 'next/link';
import { useRouter } from "next/navigation"

function Profile() {

  const router = useRouter();
  const [userDetails, setUserDetails] = useState();

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
    <div className='text-form'>
     {userDetails ? (
        <>
          <div className="min-h-min max-w-7xl mx-auto shadow-md flex">
            <div>
                <p> {userDetails?.email} </p>
            </div>
            <div className="">
                <button onClick={handleLogout} >
                    Logout
                </button>
            </div>
          </div>
        </>
     ) : (
        <p>
            Please login to see details
            <Link href={`/`}>
               <span>
                  Login
               </span>
            </Link>
        </p>
     )}
     </div>
  )
}

export default Profile