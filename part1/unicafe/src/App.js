import { useState } from "react";

const Heading = ({ text }) => <h2>{text}</h2>

const Button = ({ action, text }) => <button onClick={action}>{text}</button>

const StatisticsLine = ({ text, statistic }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{statistic}</td>
    </tr>

  )
}

const Statistics = ({ all, average, positive, good, bad, neutral }) => {

  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <table>
      <StatisticsLine text="Good" statistic={good} />
      <StatisticsLine text="Neutral" statistic={neutral} />
      <StatisticsLine text="Bad" statistic={bad} />
      <StatisticsLine text="All" statistic={all} />
      <StatisticsLine text="Average" statistic={average} />
      <StatisticsLine text="Positive" statistic={positive} />
    </table>
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
  average = average >= 0 ? average + " %" : 0 + " %";
  const postiveFeedback = ((feedbackGood / all) * 100) + " %"
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
