import Card from "./Card";
import handleEnrollClick from "../Components/smoothScroll";

function HeroSection() {
    return (
        <div className=" min-h-screen pt-28 px-6 flex items-center justify-center bg-linear-to-br from-purple-100 via-white to-blue-100
        ">
            <Card>
                <div className=" text-center max-w-3xl mx-auto 
                ">
                    <h2 className=" text-3xl md:text-6xl font-bold font-serif text-gray-800 mb-10
                    ">
                        AI & Robotics Summer Workshop</h2>
                    
                    <p className=" bg-purple-600 text-white px-10 py-3 rounded-2xl font-semibold hover:bg-purple-700 transition duration-300 shadow-lg mt-9
                    ">
                        Give your child the skills of tomorrow — today!
                        Join our fun, hands-on AI & Robotics workshop designed
                        for curious minds aged 8–14. Learn, build, and innovate
                        from the comfort of home.
                    </p>
                    <button onClick={handleEnrollClick} className=" bg-purple-600 text-white px-10 py-3 m-10 rounded-full font-semibold hover:bg-purple-700 transition duration-300 shadow-lg ">
                        ENROLL NOW</button>
                    
                    <h4 className=" mt-0 text-red-500 font-bold
                    ">⭐ Limited Seats Available | Starts 15 July 2026
                    </h4>
                </div>
            </Card>
        </div>
    );
};
export default HeroSection;