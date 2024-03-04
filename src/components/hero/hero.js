import Image from "next/image";
import Imgtry from "../../../public/try.jpg"
import "./CardCarousel.css"
export default function Hero(params) {
    return (
        <div>
            <Image src={Imgtry} className="imageSize w-screen"/>
        </div>
    )
}
