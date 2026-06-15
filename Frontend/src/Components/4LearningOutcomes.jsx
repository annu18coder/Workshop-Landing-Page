import Card from "./Card";

// const details = 

const LearningOutcomes = () => {
    return (
        <section className=" py-16 px-6 bg-gray-50" >
            <div className=" max-w-5xl mx-auto ">
                <h2 className=" text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10
                ">
                    What Your Child Will Learn 🚀
                </h2>
                <Card>
                    <ul className="flex flex-wrap justify-left gap-4 p-4 
                        space-y-5
                        text-gray-700
                        text-lg font-mono font-bold
                    ">
                    <li>✅  Understand basics of Artificial Intelligence & Machine Learning</li>
                    <li>✅  Build and program simple robots using block-based coding</li>
                    <li>✅  Design AI-powered projects using real-world toolsUnderstand basics of Artificial Intelligence & Machine Learning</li>
                    <li>✅  Develop logical thinking and problem-solving skills</li>
                    <li>✅  Create a final project to showcase in a virtual demo day</li>
                    <li>✅  Get a certificate of completion from KidRove</li>
                </ul>
                </Card>
            </div>
        </section>
    );
};
export default LearningOutcomes;