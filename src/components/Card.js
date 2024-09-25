import PropTypes from 'prop-types';

const Card = ({ children, reverse }) => {
    const cardStyles = {
        background: reverse ? 'darkgray' : 'lightgray',
        color: reverse ? '#f9f9f9' : '#333',
        padding: '15px',
        borderRadius: '8px',
        boxShadow: reverse ? 'none' : '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    return (
        <div className={`card ${reverse ? 'reverse' : ''}`} style={cardStyles}>
            {children}
        </div>
    );
};

Card.defaultProps = {
    reverse: false,
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
};

export default Card;
