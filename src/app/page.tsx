import Navbar from "./componets/navabar"
import Hero1 from "./componets/hero1"
import Hero2 from "./componets/hero2"
import Hero3 from "./componets/hero3"
import Hero4 from "./componets/hero4"
import Hero5 from "./componets/hero5"
import Footer from "./componets/footer"

export default function home(){
  return (
    <>
    <Navbar />
    <Hero1 />
    <Hero2 />
    <Hero3 />
    <Hero4 />
    <Hero5 />
    <Footer />
    </>
  )
}