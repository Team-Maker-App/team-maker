import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, share }) => (
	<button
		type='button'
		className='rounded-full py-1 bg-white w-36'
		onClick={() => share()}
	>
		{text}
	</button>
);

Button.propTypes = {
	text: PropTypes.string.isRequired,
	share: PropTypes.func.isRequired,
};

export default Button;
