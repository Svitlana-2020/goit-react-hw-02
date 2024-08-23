
import './App.css'
import Description from './components/Description'
import Options from './components/Options'
import Feedback from './components/Feedback'
import { useState } from 'react'
import Notification from './components/Notification'


function App() {
const [feedbacks, setFeedback] = useState({
    good: 0,
    bad: 0,
    neutral: 0
})

const updateFeedback = (feedBacktype) => {
  setFeedback((feedbacks) => ({
...feedbacks,
[feedBacktype]:feedbacks[feedBacktype] + 1}))
console.log(feedBacktype)
}

const resetBtn = () => {
  setFeedback({ 
    good: 0,
    bad: 0,
    neutral: 0
  })}

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  console.log(totalFeedback);

  return (
    <>
<Description />
<Options updateFeedback={updateFeedback} resetBtn={resetBtn} totalFeedback={totalFeedback} />
{(totalFeedback > 0) ? <Feedback feedbacks={feedbacks}/> : <Notification/>}
 </>
  )
}

export default App
