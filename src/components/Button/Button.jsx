import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, children, action, className = '' }) => (
	<button
		type='button'
		style={{ minWidth: '180px' }}
		className={`${className} rounded-lg p-1.5 bg-white outline-none active:bg-green-700`}
		onClick={() => action()}
	>
		{text || children}
	</button>
);

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
};

export default Button;
