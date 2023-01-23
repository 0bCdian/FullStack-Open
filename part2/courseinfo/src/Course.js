import { Header } from "./Header"
import { Content } from "./Content"

export const Course = ({ courses }) => {
    return (
        <div>
            {
                courses.map((course) => {
                    return (
                        <section key={course.id} >
                            <Header headerName={course.name} />
                            <Content parts={course.parts} />
                        </section>

                    )
                })
            }
        </div>
    )
}