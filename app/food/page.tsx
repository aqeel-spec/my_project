"use client";
import React, { useEffect, useState } from "react";
import { ProductData } from "@/components/data/dummy_data";
import { HiFilter, HiOutlineShoppingCart } from "react-icons/hi";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { CountryData, FoodData } from "@/utils/types/type";
import { database } from "@/components/appwrite/Config";
import { Query } from "appwrite";
import useSWR from "swr";

export interface Pfood {
  total: number;
  document: FoodData[];
}
async function page() {
  const [data, setData] = useState<Pfood>();
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const { data, error, isLoading } = useSWR("/api/auth", fetcher);
  // const data = await fetch("/api/fetch");
  //console.log("product data from food page", data);

  // if (isLoading) return <div className="text-3xl text-form">Loading ...</div>;
  // if (error)
  //   return <div className="text-3xl text-form">Fialed to load data</div>;

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch(`/api/pfood`);
      const allFoodData = await res.json();
      setData(allFoodData);
      console.log("product data from food page", allFoodData);
    }
    fetchUsers();
  }, []);

  return (
    <>
      <div className="container2  flex flex-wrap justify-around">
        {ProductData.map((e) => (
          <div className="team-profile" key={e.name}>
            <img
              src={`https://media.istockphoto.com/id/1065068792/photo/grilled-chicken-breast-with-fresh-peaches-blueberries-arugula-and-feta-cheese-close-up-on-a.jpg?b=1&s=170667a&w=0&k=20&c=YEgTSOoM8YcLOJKBABKKsHlkd15HkZSNJ2bXMSbndCc=`}
              alt={e.name}
              className="team-img"
            />
            <h3 className="font-cold text-orange text-xl"> {e.name} </h3>
          </div>
        ))}
      </div>
      {/** filter section */}
      <div className="container_card  mx-auto justify-center content-center">
        <div className=" flex fex-1 text-white justify-between  ">
          <p className="flex gap-1 font-semibold text-2xl text-center items-center">
            Filter <HiFilter />{" "}
          </p>
          <button className="bg-[#E5B945] text-[#FFFFFF]  text-center px-6 rounded-full py-1">
            Donate now
          </button>
        </div>
        {/** card of product page */}
        <div className="container  pt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
          <div className="item">
            <img src="https://picsum.photos/400/300" alt="" />
            <div>
              <h2 className="text-xl text-black font-bold">Blog title 1</h2>
              <div className=" flex justify-between text-center mt-4 mb-3">
                {/* {data &&
                  data?.document.map((doc) => (
                    <div className="" key={doc.$id}>
                      {" "}
                      {doc.Item_name}{" "}
                    </div>
                  ))} */}
                <p>Rs. 0 </p>
                <div className="flex text-center text-md  items-center text-rating ">
                  <span>
                    <AiFillStar />
                  </span>
                  <span>4.8</span>
                  <span className=" text-dataOrange ">
                    <AiFillHeart />
                  </span>
                </div>
              </div>
              <div className="text-xl flex  justify-between">
                <button className="hover:cursor-pointer rounded-md px-6 py-1 text-center bg-dataOrange text-white ">
                  More info
                </button>
                <div className="hover:cursor-pointer text-xl">
                  <HiOutlineShoppingCart className=" h-8 w-8 text-xl text-dataOrange relative " />
                  <span className="absolute pl-[0.6rem] mt-[-47px] text-white ">
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
