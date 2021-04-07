import React from 'react'
import Marquee from 'react-fast-marquee'
import Testemonial from './Testemonial'

function MarqueeContainer() {
	return (
		<div style={{overflowX: 'hidden', margin: '0 -4vw 0 -4vw'}}>
			<div id='marquee-container'>
				<Marquee className='marquee-wrapper' gradientWidth='100'>
					<Testemonial />
					<Testemonial />
					<Testemonial />
					<Testemonial />
					<Testemonial />
					<Testemonial />
					<Testemonial />
					<Testemonial />
					<Testemonial />
				</Marquee>
			</div>
			<div style={{margin: '0 -8vw', overflowX: 'hidden', padding: '5vh 0'}}>
				<Marquee
					className='marquee-wrapper'
					gradientWidth='100'
					direction='right'>
					<Testemonial />
					<Testemonial />
					<Testemonial />
					<Testemonial />
					<Testemonial />
					<Testemonial />
					<Testemonial />
					<Testemonial />
					<Testemonial />
				</Marquee>
			</div>
		</div>
	)
}

export default MarqueeContainer
