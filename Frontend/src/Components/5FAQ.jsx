import Card from "./Card";

const cards = [
    {
        title: `Q1: Who can join this workshop?`,
        value: `Any child between 8–14 years of age can join.
        No prior coding experience is required!`
    },

    {
        title: `Q2: Are the classes live or recorded?`,
        value: `Classes are conducted live online via Zoom/Google Meet.
        Recordings will be shared after each session.`
    },

    {
        title: `Q3: What does my child need to attend?`,
        value: `Just a laptop/tablet with a stable internet connection.
        All learning materials will be provided by KidRove.`
    },

    {
        title: `Q4: Will my child get a certificate?`,
        value: `Yes! Every student who completes the workshop
        receives an official KidRove certificate.`
    }
];


const FaqSection = () => {
    return (
        <section className=" py-16 px-6 bg-white
        ">
            <div className=" max-w-5xl mx-auto
            ">
                <h2 className=" text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10
                ">
                    Frequently Asked Questions ❓
                </h2>
                
                <div className="grid gap-6
                ">
                {
                    cards.map((item,index)=>(

                        <Card key={index}>

                            <h3 className=" text-xl font-bold text-purple-600 mb-3
                            ">
                                {item.title}
                            </h3>
                            <p className=" text-gray-600 leading-7 whitespace-pre-line font-mono font-bold
                            ">
                                {item.value}
                            </p>
                        </Card>
                    ))
                }
                </div>
            </div>
        </section>
    );
};

export default FaqSection;