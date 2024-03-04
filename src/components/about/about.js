import "../../app/globals.css"
import "./About.css"
export default function About( params ) {
    return (
        <div className="w-screen">

            <div className=" ml-14 -mt-52 absolute   flex gap-5">
                <div className="w-10  flex flex-col  items-center justify-center">
                    <div className="w-10 h-10 bg-orange-600 "></div>
                    <div className="Linesw flex justify-center h-72 bg-orange-600 "></div>
                    <div className="w-10 h-10 bg-orange-600 "></div>

                </div>
                <div className="">
                    <h1 className="text-white/90 font-semibold text-4xl lg:text-6xl ">Manufacturing, Wholesaling & Exporting</h1>
                    <h2 className="text-white/90 font-semibold text-sm lg:text-xl text-balance w-3/4 ">Gutka Plant Machinery, Pan Masala Plant Machinery, Snack Packing Machine, Packing Machine, Nitrogen Flushing Machine, etc.</h2>
                </div>
            </div>
            <div className=" 2xl:ml-36 ml-32 pt-32 lg:ml-32 lg:pt-32  relative 2xl:pt-32 sm:w-3/4 lg:w-1/2 gap-5 flex flex-col  font-semibold">
                <div className=" flex  flex-col gap-1">
                    <h1 className=" text-2xl lg:text-4xl"> Your solution-oriented partner for success.</h1>
                    <h2 className=" text-xl lg:text-2xl">From material to solution.</h2>
                </div>
                <div className=" flex flex-col gap-2 lg:text-xl text-sm">
                    <h3><span className="text-black/50">
                        Shiva Engineering Works   was founded in 1947 as an institute for research and development and is today one of the world&apos;s leading
                    </span> manufacturers of vibratory feeders, screening machines and magnetic separators.</h3>
                    <h4> Quality and reliability <span className="text-black/50"> as well as the factors of safety and economy have been IFE&apos;s top priorities for more than seven decades: This orientation as well as continuous innovations enable IFE to assert itself on the world market as a leading supplier for machines in the bulk materials industry.</span>   </h4>
                    <h5 className="text-black/50">Experience gained through deliveries for many applications in a wide range of industries is optimally utilized for our customers and is the driving force for continuous further and new product developments.</h5>

                </div>

            </div>
        </div>
    )
}
