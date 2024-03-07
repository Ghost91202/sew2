import Image from "next/image";
import Banner from "../../../public/weima_shredder_portfolio_web-2048x940.jpg.webp"
import Navbar from "@/components/navbar/navbar";
import CardCarousel from "@/components/hero/carousel2";
export default function Products( params ) {
  return (
    <div>
      <Navbar />
      <div>
        <Image src={Banner} className=" lg:h-full h-96 " />
      </div>
      <div className=" flex lg:-mt-44 font-serif">
        <div className=" bg-zinc-800 w-3/4 flex flex-col justify-center lg:p-44 lg:pt-20 ">
          <h1 className="text-gray-400 text-sm flex ">Home <span className="text-white">| Machines</span> </h1>
          <div className="lg:mt-10 flex text-gray-400 text-sm  lg:text-xl flex-col gap-10">
              <h1 className=" lg:text-3xl text-xl text-white " >Shiva Engineering works Machines</h1>
          <h6 className=" text-balance">WE offers a comprehensive range of Machines. Here you will find the right Machines for every challenge, no matter how demanding.
          </h6>
          <h6 className=" text-balance"> Simply filter according to your criteria and you will receive a solution perfectly matched to your industry and application.</h6>
          <h6 className=" text-balance">
            You can find more information about shredding technology here:
          </h6>

          </div>
        </div>
        <div>
        <CardCarousel/>
        </div>
      </div>
    </div>
  )
}
