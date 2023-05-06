'use client'

import { useForm } from 'react-hook-form';
import {account} from '../../components/appwrite/Config'
import { useRouter } from "next/navigation"
import { HiOutlineMail } from "react-icons/hi";
import {RiKey2Line} from "react-icons/ri";
import { AiFillEyeInvisible , AiFillEye, AiOutlineUser } from "react-icons/ai"
import {  useState } from 'react';
// figmaDefault Icons
import { AppleIcon, FacebookIcon, GoogleIcon, LineLeft , LineRight } from '@/components/Icons/figmaDefault';

interface SignInData {
  email : string , 
  password : string
}
export default  function Signin() {
  const [passwordEye, setPasswordEye] = useState(false);
 
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors } ,
    reset,
    watch
  } = useForm<SignInData>();
  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye)
  }
 
  const loginUser = async (data : SignInData) => {
    //e.preventDefault();
    try {
      await account.createEmailSession(
        data.email,//"test@gmail.com",
        data.password//"12345678"
      );
      router.push(`/`);
      console.log(data);
      reset();
    } catch (error) {
       console.log(error)
    }
  };
  
  return (
    <div className="my-auto pt-[100px] h-screen" > 
      <div className="text-center m-auto ">
            <div>
              <h1 className="text-7xl md:text-6xl sm:text-4xl   font-serif  font-semibold   text-[#EFEFEF] text-center  ">
                Welcome back
              </h1>
            </div>
            <div className="text-form">
              <div className="space-x-1 text-sm text-center md:text-base font-nunito">
                <span>Dont't have an account?</span>
                <a className="font-semibold text-blue-600" href="/signUp">
                  Register
                </a>
              </div>
            </div>
          </div>
      <div className=" p-auto md:px-[200px] grid md:grid-cols-2 w-full  grid-cols-1   text-form ">
        <div className="  w-11/12 p-8 m-auto rounded-lg sm:w-96 bg-opacity-80 bg-clip-padding">
          {/** Above data  */}
          
         
          <div className="my-auto">
            <form
              className="text-base font-nunito"
              onSubmit={handleSubmit(loginUser)}
            >
              
              <div className="space-y-4">
                {/* User Email  */}
                <div className="flex flex-col text-form ">
                  <label htmlFor="Email" className="mb-1">
                    Enter your email
                  </label>
                  <div className="relative flex items-center">
                    <HiOutlineMail className="absolute w-5 h-5 ml-3"/>
                    <input
                      className="input_section"
                      type="email"
                      
                      placeholder="Email"
                      {...register("email",{
                        required : "Email is required",
                        pattern : {
                          value : /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                          message : "Email is not valid"
                        }
                      })}
                    />
                  </div>
                  {/** validation for email address */}
                  {
                    
                    errors.email  && <p className="error_msg"> {errors.email.message as string  } </p>
                  }
                </div>
                {/**  Password section here */}
                <div className="flex flex-col text-form">
                  <label htmlFor="password" className="mb-1">
                    Enter password
                  </label>
                  <div className="relative flex items-center">
                    <RiKey2Line className="absolute w-5 h-5 ml-3" />
                    <input
                      className="input_section"
                      type={ (passwordEye === false) ? "password" : "text" }
                      id='password'
                      placeholder="Password"
                      {...register("password",{
                        required : true,
                        validate : {
                          checkLength : (value) => value.length >= 6,
                          
                        },
                      })}
                    />
                    <div className="absolute text-2xl top-2 right-5">
                      { (passwordEye === false) ? <AiFillEyeInvisible onClick={handlePasswordClick} /> : <AiFillEye onClick={handlePasswordClick} />  }
                    </div>
                  </div>
                  {/** form password validation error show */}
                  {errors.password?.type === "required" && (<p className="error_msg">Password is required.</p>)}
                  {errors.password?.type === "checkLength" && (
                      <p className="error_msg">
                        Password should be at-least 8 characters.
                      </p>
                  )}
                   <div className="text-form text-end  ">
                  Forget password
                </div>
                </div>
               
                
                <div>
                  <button type="submit"  className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full p-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md:text-lg font-nunito  focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg" >
                    Sign In
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/** auth2 athentication */}
        {/* <div className="flex w-full   mx-auto ">
          <div className="flex items-center space-x-2 text-center justify-items-center">
            <LineLeft />
            <p>or Sign in with</p>
            <LineRight />
          </div>
        </div> */}
        <div className=" m-auto md:mt-auto  mt-[-30px] space-y-4 md:pb-0 pb-6 ">
          <div className="space-y-[20px] flex flex-col">
            <div className=" gap-2 md:space-x-0 items-center text-center mx-auto grid md:grid-cols-1 grid-cols-3  space-y-0 md:space-y-6  ">
              <button className="btn-auth2">
                <span className="flex items-center justify-center gap-4">
                  <div className="h-25 w-25 ">
                    <GoogleIcon />
                  </div>
                  <div className=" md:flex hidden" >Sign in with Google</div>
                </span>
              </button>
              <button className="btn-auth2">
                <span className="flex items-center justify-center gap-4">
                  <div className="h-25 w-25 ">
                    <FacebookIcon />
                  </div>
                  <div className="md:flex hidden">Sign in with Facebook</div>
                </span>
              </button>
              <button className="btn-auth2">
                <span className="flex items-center justify-center gap-4">
                  <div className="h-25 w-25 ">
                    <AppleIcon />
                  </div>
                  <div className="md:flex hidden">Sign in with Apple</div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

