import { useState } from "react";

const Heading = ({ text }) => <h2>{text}</h2>

const Button = ({ action, text }) => <button onClick={action}>{text}</button>

const Counters = ({ text, counter }) => <p>{text} {counter}</p>

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
            <Counters text="good: " counter={feedbackGood} />
            <Counters text="neutral: " counter={feedbackNeutral} />
            <Counters text="bad: " counter={feedbackBad} />
            <Counters text="All " counter={all} />
            <Counters text="Average " counter={average} />
            <Counters text="Positive " counter={postiveFeedback} />
        </>
    )
}

export default App;
