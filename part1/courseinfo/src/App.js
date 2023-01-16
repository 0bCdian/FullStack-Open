import { useState } from "react";

const Heading = ({ text }) => <h2>{text}</h2>

const Button = ({ action, text }) => <button onClick={action}>{text}</button>

const Counters = ({ text, counter }) => <p>{text} {counter}</p>

const App = () => {
    const [feedbackValues, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    })

    const changeFeedback = (value) => {
        const newFeedback = {
            ...feedbackValues,
        }
        newFeedback[value] += 1
        return () => setFeedback(newFeedback)
    }

    return (
        <>
            <Heading text="Give Feedback" />
            <Button action={changeFeedback("good")} text="good" />
            <Button action={changeFeedback("neutral")} text="neutral" />
            <Button action={changeFeedback("bad")} text="bad" />
            <Heading text="Statistics" />
            <Counters text="good: " counter={feedbackValues.good} />
            <Counters text="neutral: " counter={feedbackValues.neutral} />
            <Counters text="bad: " counter={feedbackValues.bad} />
        </>
    )
}

export default App;
