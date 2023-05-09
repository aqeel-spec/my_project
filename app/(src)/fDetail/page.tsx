import React from "react";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";

function page() {
  return (
    <>
      <div className=" max-w-6xl m-10 min-h-screen  ">
        <h1 className="text-4xl text-white font-bold">
          Food item_name detail{" "}
        </h1>
        <div className="pt-10 mx-auto justify-between max-w-4xl w-auto flex  ">
          <img
            className="rounded-md h-[400px] w-[400px]"
            src="https://media.istockphoto.com/id/1371318211/photo/groceries-shopping-flat-lay-of-fruits-vegetables-greens-bread-and-oil-in-eco-friendly-bags.jpg?s=1024x1024&w=is&k=20&c=VgAy4XkcbsK_aM9WInQaF49NVVxRb_5_P96eGY69IQ4="
            alt=""
          />

          <div className=" ml-[-70px] font-serif text-white space-y-8  ">
            <p>Available : yes</p>
            <p>Expire in : 1h : 02m</p>
            <p>Price : Rs.0</p>
            <p>Mobile number : 0347-000000</p>
            <p>City : Faisalabad</p>
            <p> Donar Rating </p>
            <p> Location address </p>
          </div>
        </div>
        <div className=" max-w-5xl m-6 pt-6 text-white">
          <h1 className="   text-xl font-medium">Map location</h1>
          <button className="py-2 px-8 items-center mt-6 justify-evenly rounded-[4px] bg-orange flex  gap-[2px] ">
            <FiMapPin className="h-5 w-5" />
            <div className="">View on map</div>
          </button>
          <div className=" pl-[100px]  max-w-5xl mx-auto  flex flex-row-reverse ">
            <Image
              className="mx-auto"
              src={`/map.png`}
              height={500}
              width={650}
              alt="map location"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
