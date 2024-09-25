import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedback, deleteFeedback, editFeedback }) => {
    return feedback.length === 0 ? (
        <p>No Feedback Yet</p>
    ) : (
        <div className='feedback-list'>
            {feedback.map((item) => (
                <FeedbackItem
                    key={item.id}
                    item={item}
                    deleteFeedback={deleteFeedback}
                    editFeedback={editFeedback}
                />
            ))}
        </div>
    );
};

export default FeedbackList;
