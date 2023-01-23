import { Part } from "./Part"
import { TotalExercises } from "./TotalExercises"


export const Content = ({ parts }) => {
    let totalExercises = 0
    return (
        <div>
            {parts.map((part) => {
                totalExercises += part.exercises
                return (
                    <Part key={part.id} partName={part.name} numberExercises={part.exercises} />
                )
            })}
            <TotalExercises TotalExercises={totalExercises} />
        </div>
    )

}