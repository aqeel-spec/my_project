"use client";
import React, { useEffect, useState } from "react";
import { Client, Locale, Query } from "appwrite";
import { Location, database } from "@/components/appwrite/Config";
import { Glimmer } from "@/components/Loader";
import { CountryData } from "@/utils/types/type";
interface FoodData {
  collectionId: string;
  databaseId: string;
  id: string;
  updatedAt: string;
  Item_name: string;
  countryData: CountryData[];
  name: string;
  imgArray: any[];
  latitude: number;
  logitude: number;
  ph: number;
  price: number;
}
function page() {
  const [data, setData] = useState<FoodData[]>();
  const promise = database.getDocument(
    "645742f1acfa7ac60606",
    "64574308c221d002643e",
    "wow"
  );
  promise.then(
    (res) => console.log(res),
    (error) => console.log(error)
  );

  const listDocumentData = () => {
    const promise = database.listDocuments(
      "645742f1acfa7ac60606",
      "64574308c221d002643e",
      //[Query.equal("Item_name", ["shah", "file1"])]
      [Query.limit(100)]
    );
    promise.then(
      function (res) {
        setData(res.documents);
        console.log("Res data fromlist Doc", res); // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };
  console.log("data of lstDo", data);
  return (
    <div>
      {/* <button onClick={getUserLocation}>Get user appwrite database api </button> */}
      <button>Get user geoLocation database api </button>
      <div className="text-form">
        <div className=""> getDocumentData </div>
      </div>
      <div className="text-form">
        <div className="" onClick={listDocumentData}>
          {" "}
          listDocumentData{" "}
        </div>
      </div>
      {data?.map((doc) => (
        <div className="" id={doc.id}>
          {doc.Item_name}
        </div>
      ))}
    </div>
  );
}

export default page;
