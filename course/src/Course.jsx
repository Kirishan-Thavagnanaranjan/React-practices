import HTML from "./assets/HTML.png"
const course1 = "HTML"

function Course(){
    return (

        <div className="card">
            <img src={HTML} alt=""/>
            <h3>{course1} </h3>
            <p> This is a full HTML course </p> 
            <button> Enroll</button>
        </div>
    )
}

export default Course;