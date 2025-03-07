import AboutHome from "./AboutHome"
import HeroSection from "./HeroSection/HeroSection"
import ServicesHome from "./ServicesHome"

const Home = () => {
  return (
    <section className="common-bg p-3 p-sm-5">
       {/* <HeroSection/> */}
       <AboutHome/>
       <ServicesHome/>
    </section>
  )
}

export default Home
