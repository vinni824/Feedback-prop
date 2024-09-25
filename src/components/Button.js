import PropTypes from 'prop-types';

const Button = ({ children, version, type, isDisabled }) => {
    const buttonType = type || 'button';
    const buttonVersion = `btn btn-${version || 'primary'}`;
    const disabled = isDisabled !== undefined ? isDisabled : false;

    return (
        <button type={buttonType} disabled={disabled} className={buttonVersion}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
};

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false,
};

export default Button;
