import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';
import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps }) => {
	return (
		<CustomButtonContainer {...otherProps}>
			{children}
		</CustomButtonContainer>
	)
}

export default CustomButton;