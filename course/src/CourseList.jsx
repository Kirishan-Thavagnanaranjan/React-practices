import Course from "./Course"
import html from "./assets/HTML.jpg"
import css from "./assets/css.jpg"
import js from "./assets/js.png"
import react from "./assets/react.jpg"

function CourseList () {
    const courses= [
        {
            name: "HTML Full Course",
            price: "$499",
            image: html,
            rating: 5,
            show: true
        }
        ,{
            name: "CSS Full Course",
            price: "$499",
            image: css,
            rating: 5
        },
        {
            name: "JavaScript",
            price: "$499",
            image: js,
            rating: 5
        },
        {
            name: "React Full Course",
            price: "$499",
            image: react,
            rating: 5
        }
    ];

    const coursesList = courses.map(
        (course) =>
        <Course name={course.name}
        image={course.image}
        price={course.price}
        rating = {course.rating} />
        
    )

return (
    <>
    {coursesList}
    </>
);
}
export default CourseList;