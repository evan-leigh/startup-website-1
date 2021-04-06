import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Main = (props) => (
	<main id='main'>
		<Header links='home' />
		{props.children}
		<Footer />
	</main>
)

export default Main
