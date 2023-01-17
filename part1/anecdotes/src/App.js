import { useState } from 'react'



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const votes = new Uint8Array(anecdotes.length);

  const [selected, setSelected] = useState({
    quoteIndex: 0,
    quoteVotes: votes
  })

  const getRandom = () => {
    const lengthArr = anecdotes.length
    let random = Math.floor(Math.random() * lengthArr)
    while (random === selected.quoteIndex) {
      random = Math.floor(Math.random() * lengthArr)
    }
    const newSelected = {
      ...selected,
      quoteIndex: random
    }
    setSelected(newSelected)
  }

  const voteQuote = () => {
    const newSelected = {
      ...selected,
    }
    newSelected.quoteVotes[selected.quoteIndex] += 1
    setSelected(newSelected)
  }

  const getMostVoted = () => {
    const mostVoted = Math.max(...selected.quoteVotes)
    const isMostVoted = (element) => element === mostVoted
    const mostVotedIndex = selected.quoteVotes.findIndex(isMostVoted)
    return mostVotedIndex
  }

  const mostVotedQuote = anecdotes[getMostVoted()]

  return (
    <div>
      <h3>{anecdotes[selected.quoteIndex]}</h3>
      <p>Has {selected.quoteVotes[selected.quoteIndex]} votes</p>
      <button onClick={getRandom}>Next quote</button>
      <button onClick={voteQuote}>Vote</button>
      <div>
        <h4>Anecdote with most votes</h4>
        <p>{mostVotedQuote}</p>
      </div>
    </div>
  )
}

export default App