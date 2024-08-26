import css from './Feedback.module.css'

export default function Feedback ({feedbacks: {good, neutral, bad}, totalFeedback, positiveFeedback}) {
    return <div>
    <p className={css.text}>Good:{good}</p>
    <p className={css.text}>Neutral:{neutral}</p>
    <p className={css.text}>Bad:{bad}</p>
    <p className={css.text}>Total:{totalFeedback}</p>
    <p className={css.text}>Positive:{positiveFeedback}%</p>
    </div>
}