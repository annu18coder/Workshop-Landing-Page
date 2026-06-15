import Card from "./Card";

const cards = [
    { title: `🧒 Age Group`, value: `8 – 14 Years` },
    { title: `⏱️ Duration`, value: `4 Weeks` },
    { title: `💻 Mode`, value: `Online (Live Classes)` },
    { title: `💰 Fee`, value: `₹2,999` },
    { title: `📅 Start Date`, value: `15 July 2026` }
];


const WorkshopDetails = () => {
    return (

        <section className=" py-16 px-6 bg-white
        ">

            <div className=" max-w-6xl mx-auto
            ">

                <h2 className=" text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                    Workshop Details ✨
                </h2>

                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 ">
                    {
                        cards.map((item, index) => (

                            <Card key={index}>

                                <div className=" text-center ">
                            
                                    <h3 className=" text-lg font-bold text-purple-600 mb-4">
                                        {item.title}
                                    </h3>

                                    <p className=" text-gray-700 font-medium">
                                        {item.value}
                                    </p>

                                </div>

                            </Card>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};
export default WorkshopDetails;