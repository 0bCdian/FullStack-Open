import { Part } from "./Part"
import { TotalExercises } from "./TotalExercises"


export const Content = ({ parts }) => {
    const exercises = parts.reduce((acc, current) => acc + current.exercises, 0)
    return (
        <div>
            {parts.map((part) => {
                return (
                    <Part key={part.id} partName={part.name} numberExercises={part.exercises} />
                )
            })}
            <TotalExercises TotalExercises={exercises} />
        </div>
    )

}