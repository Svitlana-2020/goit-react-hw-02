import css from './Feedback.module.css'

export default function Feedback ({feedbacks: {good, neutral, bad},}) {
    let totalFeedback = good + neutral + bad;
    let positiveFeedback = totalFeedback > 0 && Math.round((good / totalFeedback) * 100)
    console.log(totalFeedback, positiveFeedback)
    return <div>
    <p className={css.text}>Good:{good}</p>
    <p className={css.text}>Neutral:{neutral}</p>
    <p className={css.text}>Bad:{bad}</p>
    <p className={css.text}>Total:{totalFeedback}</p>
    <p className={css.text}>Positive:{positiveFeedback}%</p>
    </div>
}