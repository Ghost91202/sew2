import Image from "next/image"
import Mimg from "../../../public/csm_Material-Link-home_5c361b3c6d.webp"
import Mimg2 from "../../../public/csm_Muellsieb_Cards_fdb57b8b34.webp"
import { SlArrowDown } from "react-icons/sl";

export default function Material( params ) {
    return (
        <div className="text-gray-500 font-serif p-10 mt-10">
            <div>
                <h1 className=" text-2xl font-semibold lg:text-4xl">Consistently solution-oriented.</h1>
                <h3 className=" text-xl  lg:text-2xl font-normal">Find your solution according to:</h3>

            </div>
            <div className=" grid gird-flow-row  grid-cols-1 gap-44 lg:mt-0 mt-20 lg:gap-0 lg:grid-cols-2">
                <div className="lg:p-20">
                    <div>
                        <Image src={Mimg} className="w-60 lg:w-72 absolute mt-10" />
                    </div>
                    <div className="bg-red-600 w-52 h-52 lg:w-72 lg:h-72 ml-20 text-white text-xl p-5 lg:text-3xl flex justify-between"> Material
                        <div className=" -mt-20">
                             <SlArrowDown className=" text-gray-500 "/>
                            <SlArrowDown className=" text-gray-500 "/>
                            <SlArrowDown />
                            <SlArrowDown />
                        </div>
                    </div>
                </div>
                <div className="lg:p-20">
                    <div>
                        <Image src={Mimg2} className=" w-60 lg:w-72 absolute mt-10" />
                    </div>
                    <div className="bg-gray-300 w-52 h-52 lg:w-72 lg:h-72 ml-20 text-white text-xl p-5 lg:text-3xl flex justify-between"> Task
                        <div className=" -mt-20">
                             <SlArrowDown className=" text-red-500 "/>
                            <SlArrowDown className=" text-red-500 "/>
                            <SlArrowDown />
                            <SlArrowDown />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
