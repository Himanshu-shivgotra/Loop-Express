
import Container from '../../CommonComponents/Container'

const AboutUs = () => {
    return (
        <Container>
            <div className="w-full  my-6 py-6  border-y border-orange-400 dark:border-gray-800 sm:flex justify-around mx-auto ">
                <div className="text-left">
                    <h6 className="text-lg font-semibold text-[#ff7722]  ">WINNER COACHES</h6>
                    <p className="mt-2 text-gray-500">We pride ourselves on having a team of dedicated and experienced coaches.</p>
                </div>
                <div className="text-left">
                    <h6 className="text-lg font-semibold text-[#ff7722] ">AFFORDABLE PRICE</h6>
                    <p className="mt-2 text-gray-500">We believe that everyone should have access to high-quality fitness.</p>
                </div>
                <div className="text-left">
                    <h6 className="text-lg font-semibold text-[#ff7722] ">MODERN EQUIPMENTS</h6>
                    <p className="mt-2 text-gray-500">Stay ahead of the curve with our state-of-the-art equipment designed.</p>
                </div>
            </div>
        </Container>
    )
}

export default AboutUs