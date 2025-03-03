import { useState } from "react"
import Course from "./Course"
import html from "./assets/HTML.jpg"
import css from "./assets/css.jpg"
import js from "./assets/js.png"
import react from "./assets/react.jpg"



function CourseList () {
    const [courses,setcourses]= useState([
        {
            id:1,
            name: "HTML Full Course",
            price: 499,
            image: html,
            rating: 5,
            
        }
        ,{
            id:2,
            name: "CSS Full Course",
            price: 199,
            image: css,
            rating: 5
        },
        {
            id:3,
            name: "JavaScript",
            price: 499,
            image: js,
            rating: 5
        },
        {
            id:4,
            name: "React Full Course",
            price: 299,
            image: react,
            rating: 5
        }
    ]);

    function handleDelete(id) {
        const newCourses = courses.filter((course) => course.id !==id)
        setcourses(newCourses);
    }

    // Sorting function

    courses.sort((x,y) => y.price - x.price) // Desending order

    const vfmCourses = courses.filter((courses) => courses.price>100) // filtering course price greater than 100

    const coursesList = vfmCourses.map(
        (course) =>
        <Course key={course.id}
        name={course.name}
        image={course.image}
        price={course.price}
        rating = {course.rating} 
        delete = {handleDelete} 
        id = {course.id}/>
        
    )

return (
    <>
    {coursesList}
    </>
);
}
export default CourseList;