import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer"
import CardSlider from "@/components/cards/cardsslider";
import Carousel from "../components/hero/carousel"
import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import DFW from "@/components/layout/whywe"
import Details from "@/components/layout/deatils";
import Material from "@/components/layout/material";
import Install from "@/components/cards/carouselslider"
export default function Home() {
  return (
    <main className="">
      <Navbar />
      {/* <Hero/> */}
      <Carousel />
      <About />
      <DFW/>
      <CardSlider />
      <Details />
      <Material />
      <Install/>
      <Footer/>
    </main>
  );
}
