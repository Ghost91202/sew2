import { LuScale3D } from "react-icons/lu";
import { LiaDonateSolid } from "react-icons/lia";
import { SlCompass } from "react-icons/sl";
import { GiShakingHands } from "react-icons/gi";

export default function Whywe( params ) {
    return (
        <div className="flex flex-col gap-5 p-10 lg:p-20">
            <h1 className=" lg:text-4xl text-2xl font-semibold">This makes IFE unique</h1>
            <div className=" grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 justify-center items-center grid-flow-row gap-5">
                <div className="flex  gap-2">
                    <div className="">
                        <LuScale3D className="bg-orange-600 text-white text-5xl rounded-lg p-1" />
                    </div>
                    <div>
                        <h1 className=" text-xl lg:text-2xl border-b  pb-2">
                            Tailor-made
                        </h1>
                        <h3 className=" text-xs lg:text-lg  text-black/40 text-balance">
                            All machines are adapted to the respective requirement by our design engineers and thus fit perfectly into any process.
                        </h3>
                    </div>
                </div>
                <div className="flex  gap-2">
                    <div className="">
                        <LiaDonateSolid className="bg-orange-600 text-white text-5xl rounded-lg p-1" />
                    </div>
                    <div>
                        <h1 className=" text-xl lg:text-2xl border-b  pb-2">From one source
                        </h1>
                        <h3 className=" text-xs lg:text-lg  text-black/40 text-balance">
                            Vibratory conveying, screening and magnetic technology - IFE is the only manufacturer to offer machines from all three areas and combines them into efficient overall solutions.
                        </h3>
                    </div>
                </div>
                <div className="flex  gap-2">
                    <div className="">
                        <SlCompass className="bg-orange-600 text-white text-5xl rounded-lg p-1" />
                    </div>
                    <div>
                        <h1 className=" text-xl lg:text-2xl border-b  pb-2">
                            Experience
                        </h1>
                        <h3 className=" text-xs lg:text-lg  text-black/40 text-balance">
                            We have been supplying processing technology to a wide range of industries for over 70 years. This wealth of experience benefits all solutions and brings reliable and target-oriented results.
                        </h3>
                    </div>
                </div>
                <div className="flex  gap-2">
                    <div className="">
                        <GiShakingHands className="bg-orange-600 text-white text-5xl rounded-lg p-1" />
                    </div>
                    <div>
                        <h1 className=" text-xl lg:text-2xl border-b  pb-2">
                            Partnership
                        </h1>
                        <h3 className=" text-xs lg:text-lg  text-black/40 text-balance">
                            With our customers, suppliers, employees and other business partners, we maintain long-term relationships at eye level. A handshake still has a high value with us.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
