import React from 'react'

const styles = [
	'default',
	'default-outline',
	'primary',
	'primary-outline',
	'secondary',
	'secondary-outline',
]

const sizes = ['large', 'medium', 'small']

export const Button = ({
	iconRight,
	text,
	type,
	onClick,
	buttonStyle,
	buttonSize,
}) => {
	// Gets the prop value then adds the respective class
	const setButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0]
	const setButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[1]

	return (
		<button
			onClick={onClick}
			type={type}
			// Template literal for setting button class
			className={`button mobile-full-width ${setButtonStyle} ${setButtonSize}`}>
			{text}
			{iconRight}
		</button>
	)
}

export default Button
