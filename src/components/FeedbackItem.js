import { TiUserDeleteOutline } from 'react-icons/ti';
import { FaUserEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './Card';

const FeedbackItem = ({ item, deleteFeedback, editFeedback }) => {
    return (
        <Card>
            <div className='num-display'>{item.rating}</div>
            <button
                onClick={() => deleteFeedback(item.id)}
                className='close'
                aria-label='Delete feedback'
                title='Delete feedback'
            >
                <TiUserDeleteOutline color='red' />
            </button>
            <button
                onClick={() => editFeedback(item)}
                className='edit'
                aria-label='Edit feedback'
                title='Edit feedback'
            >
                <FaUserEdit color='blue' />
            </button>
            <div className='text-display'>{item.text}</div>
        </Card>
    );
};

FeedbackItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
    deleteFeedback: PropTypes.func.isRequired,
    editFeedback: PropTypes.func.isRequired,
};

export default FeedbackItem;
