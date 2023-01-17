import { useState } from "react";

const Heading = ({ text }) => <h2>{text}</h2>

const Button = ({ action, text }) => <button onClick={action}>{text}</button>

const Statistics = ({ all, average, positive, good, bad, neutral }) => {

    if (all === 0) {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }
    return (
        <div>
            <p>Good {good}</p>
            <p>Bad {bad}</p>
            <p>Neutral {neutral}</p>
            <p>All {all}</p>
            <p>Average {average}</p>
            <p>Positive {positive}</p>
        </div>
    )
}

const App = () => {
    const [feedbackGood, setFeedbackGood] = useState(0)
    const [feedbackNeutral, setFeedbackNeutral] = useState(0)
    const [feedbackBad, setFeedbackBad] = useState(0)

    const changeFeedbackGood = () => {
        setFeedbackGood(feedbackGood + 1)
    }
    const changeFeedbackNeutral = () => {
        setFeedbackNeutral(feedbackNeutral + 1)
    }
    const changeFeedbackBad = () => {
        setFeedbackBad(feedbackBad + 1)
    }
    const all = (feedbackBad + feedbackGood + feedbackNeutral)
    let average = (feedbackGood - feedbackBad) / all
    average = average >= 0 ? average : 0;
    const postiveFeedback = (feedbackGood / all) * 100
    return (
        <>
            <Heading text="Give Feedback" />
            <Button action={changeFeedbackGood} text="good" />
            <Button action={changeFeedbackNeutral} text="neutral" />
            <Button action={changeFeedbackBad} text="bad" />
            <Heading text="Statistics" />
            <Statistics all={all} average={average} positive={postiveFeedback} good={feedbackGood} neutral={feedbackNeutral} bad={feedbackBad} />
        </>
    )
}

export default App;
