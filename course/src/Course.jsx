import { useState } from "react";
import HTML from "./assets/HTML.jpg"
import PropTypes from 'prop-Types'
const course1 = "HTML"

function Course(props){
    const[purchase,setpurchase] = useState(false);

    function BuyCourse(discount,e){
        console.log(props.name , "Purchased with" , discount , "%discount");
        console.log(e);
        setpurchase(true);
    }

        return (

           props.name && <div className="card">
                <img src={props.image} alt=""/>
                <h3>{props.name} </h3>
                <p> ${props.price} </p> 
                <span>{props.rating}</span><br/>
                <button onClick={(event) =>BuyCourse(20,event)}> Buy Now</button>
                <p>{purchase ? "All ready purchased" :"Get it now"} </p>
            </div>
        );
    
       
    
    
}

Course.defaultProps = {
    name: "Code IO Course",
    price: "$0.00",
    image: HTML,
    rating: 5
}

Course.propsTypes={
    name:PropTypes.string,
    rating:PropTypes.number,
    show:PropTypes.bool
}

export default Course;