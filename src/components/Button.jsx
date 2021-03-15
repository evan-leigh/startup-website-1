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

export const Button = ({rightIcon, text, type, onClick, style, size}) => {
	// Gets the prop value then adds the respective class
	const setButtonStyle = styles.includes(style) ? style : styles[0]
	const setButtonSize = sizes.includes(size) ? size : sizes[1]

	return (
		<button
			onClick={onClick}
			type={type}
			// Template literal for setting button class
			className={`button ${setButtonStyle} ${setButtonSize}`}
		>
			{text}
			{rightIcon}
		</button>
	)
}

export default Button
