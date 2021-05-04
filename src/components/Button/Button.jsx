import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, children, action, className = '', disabled }) => {
	return (
	<button
		disabled={disabled}
		type='button'
		style={{ minWidth: '180px' }}
		className={`${className} rounded-lg p-1.5 bg-white outline-none active:bg-green-700 disabled:opacity-50 ${disabled ? 'cursor-not-allowed' : ''}`}
		onClick={() => action()}
		title='Proximamente'
	>
		{text || children}
	</button>
)};

Button.defaultProps = {
	text: '',
	children: <br />,
	className: '',
};

Button.propTypes = {
	text: PropTypes.string,
	children: PropTypes.element,
	action: PropTypes.func.isRequired,
	className: PropTypes.string,
	disabled: PropTypes.bool
};

export default Button;
