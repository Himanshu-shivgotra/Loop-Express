import CarouselComponent from './CarouselComponent'
import AboutUs from './AboutUs'
import Features from './Features'
import Testimonial from './Testimonial'
import CallToAction from './CallToAction'
import FeaturedWorkouts from './FeaturedWorkouts '
import BMICalc from './BMICalc'


const Home = () => {
    return (
        <>

            <CarouselComponent />
            <AboutUs />
            <Features />
            <CallToAction />
            <FeaturedWorkouts />
            {/* <BMICalc /> */}
            <Testimonial />

        </>

    )
}

export default Home