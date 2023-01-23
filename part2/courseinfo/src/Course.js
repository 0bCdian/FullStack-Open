import { Header } from "./Header"
import { Content } from "./Content"

export const Course = ({ course }) => {
    const { name, parts } = course

    return (
        <div>
            <Header headerName={name} />
            <Content parts={parts} />
        </div>
    )
}