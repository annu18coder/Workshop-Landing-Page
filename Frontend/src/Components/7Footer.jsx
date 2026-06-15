import Card from "./Card";

const cards = [
    {
        title: `🤖 KidRove`,
        value: `Empowering young minds with future-ready skills.`
    },
    {
        title: `Quick Links`,
        value: `Home | Workshop | FAQ | Contact`
    },
    {
        title: `Copyright`,
        value: `© 2026 KidRove. All rights reserved.`
    }
];

const Footer = () => {
    return (
        <footer className=" bg-gray-900 text-white py-14 px-6
        ">
            <div className=" max-w-6xl mx-auto grid md:grid-cols-3 gap-8
            ">
                {
                    cards.map((item,index)=>(
                        <div 
                        key={index}
                        className=" text-center md:text-left
                        "
                        >
                            <h2 className=" text-xl font-bold text-purple-400 mb-3
                            ">
                                {item.title}
                            </h2>

                            <p className=" text-gray-300 leading-7
                            ">
                                {item.value}
                            </p>

                        </div>
                    ))
                }
            </div>

            <div className=" border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm
            ">
                Made with ❤️ for young innovators
            </div>

        </footer>
    );
};

export default Footer;