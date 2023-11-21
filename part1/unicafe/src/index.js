import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

const Title = ({title}) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

const Button = ({handleEvent, text}) => {
  
  return (
    <button onClick={handleEvent}>
      {text}
    </button>
  )
}

const StatisticsLine = ({text, value, symbol}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value} {symbol}</td>
    </tr>
  )
}

const Statistics = (props) => {
  let {good, neutral, bad} = props.feed
  let total = good + bad + neutral

  const averageFeed = ({good, bad}) => {
    let sumFeeds = good - bad
    if(sumFeeds < 0 || total === 0) return 0
    return (sumFeeds / total) 
  }
  const positives = ({good}) => {
    if (total === 0) return 0
    return (good * 100 / total)
  }

  if (total > 0) {
    return (
      <div>
        <table>
        <tbody>
          <StatisticsLine text={"good"} value={good} />
          <StatisticsLine text={"neutral"} value={neutral} />
          <StatisticsLine text={"bad"} value={bad} />
          <StatisticsLine text={"all"} value={total} />
          <StatisticsLine text={"average"} value={averageFeed(props.feed)} />
          <StatisticsLine text={"positive"} value={positives(props.feed)} symbol = {"%"} />
        </tbody>
      </table>
      </div>
    )
  } else {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  
}

const App = () => {
  
  const [feed, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })
  
  const handleGood = () => setFeedback({...feed, good: feed.good + 1})
  const handleNeutral = () => setFeedback({...feed, neutral: feed.neutral + 1})
  const handleBad = () => setFeedback({...feed, bad: feed.bad + 1})
  
  return (
    <div>
      <div>
      <Title title = {"give feedback"} />
    </div>
    <div>
      <Button text={"good"} handleEvent={handleGood} />
      <Button text={"neutral"} handleEvent={handleNeutral} />
      <Button text={"bad"} handleEvent={handleBad} />
    </div>
    <div>
      <Title title={"statistics"} />
      <Statistics feed = {feed} />
    </div>
    </div>
  )
    
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>)
