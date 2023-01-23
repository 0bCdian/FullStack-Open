import { Part } from "./Part"
import { Header } from "./Header"


export const Course = ({ course }) => {
    const { name, parts } = course

    return (
        <div>
            <Header headerName={name} />
            {parts.map((part) => {
                return <Part key={part.id} partName={part.name} numberExercises={part.exercises} />
            })}

        </div>
    )
}