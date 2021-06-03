import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...otherProps }) => {
	return (
		<CustomButtonContainer className="custom-button" {...otherProps}>
			{children}
		</CustomButtonContainer>
	)
}

export default CustomButton;