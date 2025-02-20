import HTML from "./assets/HTML.png"
const course1 = "HTML"

function Course(props){
    return (

        <div className="card">
            <img src={props.image} alt=""/>
            <h3>{props.name} </h3>
            <p> {props.price} </p> 
            <button> Enroll</button>
        </div>
    )
}

export default Course;