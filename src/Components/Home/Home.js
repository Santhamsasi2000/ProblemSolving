import AboutHome from "./AboutHome"
import HeroSection from "./HeroSection/HeroSection"
import ServicesHome from "./ServicesHome"
import "./Home.css";

const Home = () => {
  return (
    <section className="p-3 p-sm-5">
       {/* <HeroSection/> */}
       <AboutHome/>
       <ServicesHome/>
    </section>
  )
}

export default Home
