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
	to,
}) => {
	const setButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0]
	const setButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[1]

	return (
		<button
			onClick={onClick}
			type={type}
			className={`button ${setButtonStyle} ${setButtonSize}`}>
			<a href={to}>
				<span>
					{text}
					{iconRight}
				</span>
			</a>
		</button>
	)
}

export default Button
