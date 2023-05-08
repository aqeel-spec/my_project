"use client";
import { EmailIcon, KeyIcon, NameIcon } from "@/components/Icons/figmaDefault";
import { SignUpData } from "@/utils/auth";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEyeInvisible, AiOutlineUser } from "react-icons/ai";
import { BiDonateHeart, BiTime } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { Moment } from "moment";
import { RHFInput } from "react-hook-form-input";
import { TimePicker } from "antd";
import ImageUploader from "./ImageUploader";
import { BsTelephoneOutbound } from "react-icons/bs";
import { setTimeout } from "timers/promises";
import { useRouter } from "next/navigation";
import { Location } from "./appwrite/Config";
import { MdDelete } from "react-icons/md";

enum GenderEnum {
  yes = "yes",
  male = "no",
}
interface DonationData {
  Item_name: string;
  duration: { hours: number; minutes: number; seconds?: 0 };
  Item_location: { logitude: number; latitude: number; countryData: any };
  time: any;
  donation: boolean;
  price: number;
  pg: number;
  donate: GenderEnum;
  imgArray: any[];
}

function Donation() {
  const router = useRouter();
  const [foodAdd, setFoodAdd] = useState(false);
  // reactForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<DonationData>({
    defaultValues: {
      donation: true,
    },
  });
  const donate = watch("donate");

  //  ######################                   ############################
  // ###############  ######## Location Data ####### ######################
  // #########################               ##############################

  // get latitude from geo location
  const geoLogAndLat = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setValue("Item_location.latitude", position.coords.latitude);
        setValue("Item_location.logitude", position.coords.longitude);
        console.log("position map", position);
      },
      (error) => {
        console.log("there were some issues");
      }
    );
  };
  // get user location
  const getUserLocation = () => {
    const promise = Location.get();
    promise.then(
      function (response) {
        setValue("Item_location.countryData", response);
        console.log("response data from locale api", response); // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };
  const handlePressLocation = () => {
    geoLogAndLat();
    getUserLocation();
  };

  //  ######################                   ############################
  // ###############  ######## Image Uploader array ####### ######################
  // #########################               ##############################
  const [files, setFile] = useState<File[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(null);
    const selectedFiles: any = e.target.files;
    const newFiles: File[] = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const fileType = selectedFiles[i].type;
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];

      if (validImageTypes.includes(fileType)) {
        newFiles.push(selectedFiles[i]);
      } else {
        setMessage("only images accepted");
      }
    }

    setFile([...files, ...newFiles]);
    setValue("imgArray", [...files, ...newFiles]);
  };
  //  const imgUrl = URL.createObjectURL(files[0]);
  const removeImage = (name: string) => {
    setFile(files.filter((file) => file.name !== name));
  };

  const onSubmit = async (data: DonationData) => {
    try {
      setFoodAdd(!foodAdd);
      reset();
      console.log(data);
    } catch (error) {
      console.error((error as { message: string }).message);
    }
  };

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="w-auto  max-w-xl m-auto py-10 mt-10 px-10 border"
      >
        <div className="  grid md:grid-cols-2 grid-cols-1   justify-between ">
          {/* User name  section 1 */}
          <div className="">
            <div className="flex flex-col text-form">
              <label htmlFor="foodname" className=" label_input  ">
                Item Name
              </label>
              <div className="relative flex items-center ">
                <AiOutlineUser className="icon_style" />
                <input
                  className=" input_section"
                  type="text"
                  placeholder="@foodname"
                  {...register("Item_name", {
                    required: "Name is required",
                  })}
                />
              </div>
              {/** name section validation */}
              {errors.Item_name && (
                <p className="error_msg">
                  {" "}
                  {errors.Item_name.message as string}{" "}
                </p>
              )}
            </div>
            {/* useHook selection form fropdown  */}
            <div className="text-form">
              <label className="label_input">Want to</label>
              <BiDonateHeart className="icon_style mt-1 " />
              <select {...register("donate")} className="input_section  ">
                <option value={"yes"}>Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            {/** location config */}
            <div className="text-form">
              <label className="label_input">Your location</label>
              <GoLocation className="icon_style mt-1 " />
              <button
                className="input_section"
                onClick={() => handlePressLocation()}
              >
                Share your current location
              </button>
              {/* <input
                className="input_section"
                type="text"
                placeholder="Scranton, PA"
                {...register("Item_location", {
                  required: "Please enter a location",
                })}
              />{" "} */}
              {errors.Item_location && (
                <div className="mb-3 text-normal text-red-500 ">
                  {errors.Item_location.message as string}
                </div>
              )}
            </div>
            {/** food expiry time */}
            <label htmlFor="" className="label_input">
              Time to expire food
            </label>
            <div className="flex  justify-between  w-auto   text-form">
              <div className="w-auto   ">
                <label htmlFor="minutes">Hh:</label>
                <input
                  className="w-[60%] input_section "
                  type="number"
                  id="hours"
                  {...register("duration.hours")}
                />
              </div>
              <div className="w-auto ">
                <label htmlFor="minutes">Min:</label>
                <input
                  className="w-[60%]  input_section"
                  type="number"
                  id="hours"
                  {...register("duration.minutes")}
                />
              </div>
              <div className="w-auto">
                <label htmlFor="minutes">Sec:</label>
                <input
                  className="input_section w-[60%]"
                  type="number"
                  id="hours"
                  {...register("duration.seconds")}
                />
              </div>
            </div>
            <div className="flex flex-col text-form">
              <label htmlFor="foodname" className=" label_input  ">
                Item price
              </label>
              <div className="relative flex items-center ">
                <p className="icon_style">Rs.</p>
                <input
                  className=" input_section"
                  type="number"
                  placeholder={`${donate === "yes" ? 0 : "enter price"}`}
                  {...register("donate")}
                />
              </div>
              {/** name section validation */}
              {errors.price && (
                <p className="error_msg"> {errors.price.message as string} </p>
              )}
            </div>
          </div>

          {/** section 2  */}
          <div className="space-y-4">
            {/** ############################################################################## */}
            {/**###                          picture section to upload image                  #####*/}
            {/** #################################################################################### */}

            <div className="relative h-auto flex justify-center items-center  px-2">
              <div className="p-3 md:w-1/2 w-[360px] rounded-md">
                {message && (
                  <span className="flex justify-center items-center bg-white text-[12px] mb-1 text-red-500">
                    {message}
                  </span>
                )}

                <div className="h-32 w-full overflow-hidden relative shadow-md border-2 items-center rounded-md cursor-pointer border-gray-400 border-dotted">
                  <input
                    type="file"
                    className="h-full w-full opacity-0 z-10 absolute"
                    multiple
                    name="files[]"
                    onChange={handleFile}
                  />

                  <div className="h-full w-full bg-gray-200 absolute z-1 flex justify-center items-center top-0">
                    <div className="flex flex-col">
                      <i className="mdi mdi-folder-open text-[30px] text-gray-400 text-center"></i>
                      <span className="text-[12px]">{`Drag and Drop a file`}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {files.map((file, key) => (
                    <div
                      key={key}
                      className="w-full h-16 flex items-center justify-between rounded p-3 bg-white"
                    >
                      <div className="flex flex-row items-center gap-2">
                        <div className="h-12 w-12 ">
                          <img
                            className="w-full h-full rounded"
                            src={URL.createObjectURL(file)}
                          />
                        </div>
                        <span className="truncate w-44">{file.name}</span>
                      </div>
                      <div
                        onClick={() => {
                          removeImage(file.name);
                        }}
                        className="h-6 w-6 bg-red-400 flex items-center cursor-pointer justify-center rounded-sm"
                      >
                        <MdDelete className="mdi mdi-trash-can text-white text-[14px]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* user ph. numeber  */}
            <div className="flex flex-col text-form">
              <label htmlFor="foodname" className=" label_input  ">
                Ph no.
              </label>
              <div className="relative flex items-center ">
                <BsTelephoneOutbound className="icon_style" />
                <input
                  className=" input_section"
                  type="number"
                  placeholder="Enter your current ph. number"
                  {...register("pg", {
                    required: "Number is required",
                  })}
                />
              </div>
              {/** name section validation */}
              {errors.pg && (
                <p className="error_msg"> {errors.pg.message as string} </p>
              )}
            </div>
            {/** Submit btn here */}
            <div>
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full p-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md:text-lg font-nunito  focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Donation;
