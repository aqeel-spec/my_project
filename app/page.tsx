import Link from "next/link";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";

export default function landingPage() {
  return (
    <div className=" max-w-screen  mx-auto text-form ">
      {/* <Navbar /> */}
      <Home />
    </div>
  );
}
