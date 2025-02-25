import HTML from "./assets/HTML.jpg"
import PropTypes from 'prop-Types'
const course1 = "HTML"

function Course(props){

        return (

            <div className="card">
                <img src={props.image} alt=""/>
                <h3>{props.name} </h3>
                <p> {props.price} </p> 
                <span>{props.rating}</span><br/>
                <button> Enroll</button>
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