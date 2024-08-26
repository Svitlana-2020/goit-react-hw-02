
import './App.css'
import Description from './components/Description'
import Options from './components/Options'
import Feedback from './components/Feedback'
import { useState } from 'react'
import Notification from './components/Notification'
import { useEffect } from 'react'


function App() {
const [feedbacks, setFeedback] = useState(() => {
  const localStorageFeedback = localStorage.getItem('feedbacks');
  return localStorageFeedback ? JSON.parse(localStorageFeedback) : { good: 0, bad: 0, neutral: 0 };
}
)

useEffect (() => {
  localStorage.setItem('feedback', JSON.stringify(feedbacks))
}, [feedbacks]);



// {
//   good: 0,
//   bad: 0,
//   neutral: 0
// }

const updateFeedback = (feedBacktype) => {
  setFeedback((feedbacks) => ({
...feedbacks,
[feedBacktype]:feedbacks[feedBacktype] + 1}))

}

const resetBtn = () => {
  setFeedback({ 
    good: 0,
    bad: 0,
    neutral: 0
  })}

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
 const positiveFeedback = totalFeedback > 0 && Math.round((feedbacks.good / totalFeedback) * 100)


  return (
    <>
<Description />
<Options updateFeedback={updateFeedback} resetBtn={resetBtn} totalFeedback={totalFeedback} />
{(totalFeedback > 0) ? <Feedback feedbacks={feedbacks} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}/> : <Notification/>}
 </>
  )
}

export default App
