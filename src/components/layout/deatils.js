import { PiHandWavingFill } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import { BsTools } from "react-icons/bs";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Link from "next/link";
import Img from "../../../public/csm_Technikum_Detail_4_3210dc58b2.webp"
import Image from "next/image";
export default function Details(params) {
  return (
    <div className="lg:mt-32 mt-20">
      <div className=" grid grid-cols-1 lg:grid-cols-2 grid-flow-row p-5 gap-10 text-gray-600 font-serif">
        <div className=" flex flex-col gap-10 lg:gap-20 ">
          <div className=" flex ">
            <PiHandWavingFill className=" text-6xl lg:text-7xl bg-red-600 text-white p-1 lg:p-2" />
            <Link className="group block " href="#">
              <div className=" flex justify-between items-center">
                <h1 className=" border-b group-hover:text-red-600 pb-4 text-xl  lg:text-3xl  pl-10 lg:pl-20 ">
                  CONTACT
                </h1>
                <HiOutlineArrowLongRight className="lg:text-4xl text-3xl font-thin font-mono group-hover:text-red-600" />
              </div>
              <p className=" text-balance pl-10 lg:pl-20">
                Arrow Right Here you will find all contact details of our sales
                team, IFE After Sales, Key Account Management and all 33 sales
                partners.
              </p>
            </Link>
          </div>
          <div className=" flex ">
            <GoSearch className=" text-6xl lg:text-6xl bg-red-500 text-white p-2" />
            <Link className="group block " href="#">
              <div className=" flex justify-between items-center">
                <h1 className=" border-b group-hover:text-red-600 pb-4 text-xl  lg:text-3xl  pl-10 lg:pl-20 ">
                  TEXT CENTER
                </h1>
                <HiOutlineArrowLongRight className="lg:text-4xl text-3xl font-thin font-mono group-hover:text-red-600" />
              </div>
              <p className=" text-balance pl-10 lg:pl-20">
                We test your material and find the best solution for you. Send
                us your request for a material test!
              </p>
            </Link>
          </div>
          <div className=" flex ">
            <BsTools className=" text-6xl lg:text-7xl bg-red-500 text-white p-1 lg:p-2" />
            <Link className="group block " href="#">
              <div className=" flex justify-between items-center">
                <h1 className=" border-b group-hover:text-red-600 pb-4 text-xl  lg:text-3xl  pl-10 lg:pl-20 ">
                  AFTER SALES
                </h1>
                <HiOutlineArrowLongRight className="lg:text-4xl text-3xl font-thin font-mono group-hover:text-red-600" />
              </div>
              <p className=" text-balance pl-10 lg:pl-20">
                Maintenance, spare parts, repairs - the IFE After Sales Team
                offers you fast and uncomplicated service. You can find more
                info and contact details here.
              </p>
            </Link>
          </div>
        </div>
              <div>
            <Image src={Img} className="h-full"/>
        </div>
      </div>
    </div>
  );
}
