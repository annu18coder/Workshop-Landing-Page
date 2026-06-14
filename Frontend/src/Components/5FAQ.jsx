import Card from "./Card";

const cards = [
    {title: `Q1: Who can join this workshop?`, value: `A: Any child between 8–14 years of age can join.
   No prior coding experience is required!`},
   
    {title: `Q2: Are the classes live or recorded?`, value: `A: Classes are conducted live online via Zoom/Google Meet. Recordings will be shared after each session.
`},
    {title: `Q3: What does my child need to attend?`, value: `A: Just a laptop/tablet with a stable internet connection.
   All learning materials will be provided by KidRove.`},
    {title: `Q4: Will my child get a certificate?`, value: `A: Yes! Every student who completes the workshop
   receives an official KidRove certificate
];

function FaqSection(){
    return(
        <div>
            <h1>Logo</h1>    
            <p>Call To Action</p>
        </div>
    );
};
export default FaqSection;