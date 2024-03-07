import { SlArrowRight } from "react-icons/sl";
import Link from "next/link";

export default function Looking( params ) {
    return (
        <div>
            <div className=" grid grid-flow-row grid-cols-1 lg:grid-cols-2 mt-20 gap-10">
                <div className="flex justify-center flex-col text-gray-500"><h1 className="lg:text-4xl text-2xl font-semibold flex justify-end">What are you looking for?</h1>
                    <h4 className=" text-lg flex justify-end lg:text-2xl text-gray-400">Explore Shiva Engineering works</h4>
                </div>
                 <div>
                <div className="border-l-2 p-2 flex gap-5 ">
                    <h1 className='text-gray-400'>01</h1>
                    <div className="text-lg lg:text-2xl ">
                        <Link href="#" className=" flex items-center text-red-500 hover:text-red-300">Cutter Solutions <SlArrowRight className="rounded-full border p-1"/></Link>
                        <Link href="#" className=" flex items-center text-red-500 hover:text-red-300">Cutter Solutions <SlArrowRight className="rounded-full border p-1"/></Link>
                        <Link href="#" className=" flex items-center text-red-500 hover:text-red-300">Cutter Solutions <SlArrowRight className="rounded-full border p-1"/></Link>
                        <Link href="#" className=" flex items-center text-red-500 hover:text-red-300">Cutter Solutions <SlArrowRight className="rounded-full border p-1"/></Link>

                    </div>
                </div>
            </div>
            </div>

        </div>
    )
}
