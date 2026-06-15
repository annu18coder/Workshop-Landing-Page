import Card from "./Card";

const cards = [
    {title: `🧒 Age Group`, value: `8 – 14 Years`},
    {title: `⏱️ Duration`, value: `4 Weeks`},
    {title: `💻 Mode`, value: `Online (Live Classes)`},
    {title: `💰 Fee`, value: `₹2,999`},
    {title: `📅 Start Date`, value: `15 July 2026`}
];

const WorkshopDetails = () => {
    return(
        <div>
            {cards.map((item, index) => ( 
                <Card key={index}>  
                    <h2>{item.title}</h2>  
                    <h4>{item.value}</h4>  
                </Card>
             ))}   
        </div>
    );
};
export default WorkshopDetails;