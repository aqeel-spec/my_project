"use client";
import React, { useEffect, useState } from "react";
import { Client, Locale } from "appwrite";
import { Location } from "@/components/appwrite/Config";

function page() {
  // geo location
  const [longitude, setLongitude] = useState<any>();
  const [latitue, setLatitude] = useState<any>();

  const weatherApiEndPoint = `https://api.openweathermap.org/data/3.0/onecall?`;
  const apiKey = `451d3ccc6d90b054d957eb1485305105`;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
        console.log("position map", position);
      },
      (error) => {
        console.log("there were some issues");
      }
    );
  }, []);
  (async () => {
    const data = await fetch(
      `https://www.latlong.net/c/?lat=${latitue}&long=${longitude}`
    );
    console.log("weather data", data);
  })();

  console.log("longitude", longitude?.latitude);
  const getUserLocation = () => {
    const promise = Location.get();

    promise.then(
      function (response) {
        console.log("response data from locale api", response); // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };
  return (
    <>
      <button onClick={getUserLocation}>Get user appwrite database api </button>
      <button>Get user geoLocation database api </button>
    </>
  );
}

export default page;
