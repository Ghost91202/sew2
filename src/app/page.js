import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer"
import CardSlider from "@/components/cards/cardsslider";
import Carousel from "../components/hero/carousel"
import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import DFW from "@/components/layout/whywe"
export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero/>
      {/* <CardSlider /> */}
      {/* <Carousel /> */}
      <About />
      <DFW/>
      <Footer/>
    </main>
  );
}
