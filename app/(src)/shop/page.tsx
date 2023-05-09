import React from "react";
import { AiFillBackward } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

function Shopping() {
  return (
    <>
      <div className="">
        <h1 className="text-3xl m-6 text-white font-extra-bold">
          Food Shopping
        </h1>
        <div className="flex flex-wrap max-w-screen-desktop mx-auto space-x-6 p-6 ">
          <div className="mx-auto max-w-screen-laptop w-auto flex-grow  justify-center text-center">
            <div className="bg-[#211A24]  ">
              <div className=" rounded-t-md flex p-2 justify-between pr-20 mx-auto text-center text-md font-medium text-white">
                <h1>Procuts</h1>
                <h1>Quantity</h1>
                <h1 className="pr-10">Price</h1>
              </div>
            </div>
            <div className=" divide-y-2 bg-hamerBurger text-bleck ">
              <div className="bg-[#211A24]  ">
                <div className=" rounded-t-md flex p-2 justify-between  mx-auto text-center text-md font-medium text-white">
                  <h1>Procuts</h1>
                  <h1>Quantity</h1>
                  <h1>Price</h1>
                </div>
              </div>
              <div className="m-1 relative pl-1 justify-items-center items-center my-auto rounded-t-md flex p-2 justify-between mx-auto text-center text-md text-black ">
                <h1>Procuts</h1>
                <h1 className="pl-3">+1</h1>
                <h1 className="pl-5">Rs.200</h1>
                <h1 className="absolute ml-auto self-end  justify-items-center text-end items-center justify-center   hover:bg-red-100 cursor-pointer p-2 rounded-full ">
                  <RxCross1 className="  text-red-400 h-6 w-6 " />
                </h1>
              </div>
            </div>
            {/** go back section */}
            <div className="px-3 flex justify-between mt-6 text-white">
              <div className="flex cursor-pointer decoration-sky-500 gap-1 hover:underline-offset-1 hover:underline text-center items-center justify-center">
                <AiFillBackward className=" h-6 w-6" />
                <span>Go back</span>
              </div>
              <button className="px-5 py-[2px] rounded-[4px] bg-dataOrange ">
                CLEAR
              </button>
            </div>
          </div>
          {/**  PAY NOW SECTIO HERE */}
          <div className="mt-2 p-4 flex-grow space-y-6 mx-auto text-center bg-[#D0D3D7] max-w-sm  ">
            <h1 className="py-6 text-2xl font-bold text-black">Details</h1>
            <div className="text-sm  space-y-6  divide-yellow-500 text-black/50">
              <div className=" border-b-[1px] pb-1 border-b-orange flex px-2 justify-between m-2  ">
                <p>Product price</p>
                <h3>Rs. 450</h3>
              </div>
              <div className=" border-b-[1px] pb-1 border-b-orange flex px-2 justify-between m-2  ">
                <p>Tax</p>
                <h3>Rs. 0</h3>
              </div>
              <div className=" border-b-[1px] pb-1 border-b-orange flex px-2 justify-between m-2  ">
                <p>Total</p>
                <h3>Rs. 450</h3>
              </div>
            </div>
            <div className=" text-end mx-auto items-center justify-center justify-items-center text-white font-sans  ">
              <button className="mx-auto justify-end px-5 py-[2px] rounded-[4px] bg-dataOrange">
                PAY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shopping;
