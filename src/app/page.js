import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer"
import CardSlider from "@/components/cards/cardsslider";
import Carousel from "../components/hero/carousel"
export default function Home() {
  return (
    <main className="">
      <Navbar/>
      {/* <CardSlider /> */}
      <Carousel/>
      <Footer/>
    </main>
  );
}
