import React from 'react'
import Main from '../layouts/Main'
import {Button} from '../components/index'
import {CoverImage, CoverImage2, ArrowEast} from '../assets/index'
import {Link} from 'react-router-dom'

const Index = () => (
	<Main>
		<div id='index'>
			<section className='landing'>
				<div>
					<h1>Your best proposition</h1>
					<p className='body-medium'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
						elit tincidunt id tempus ut nunc duis non sit.
					</p>
					<Button
						text='Get Started'
						size='medium'
						style='primary'
						rightIcon={<ArrowEast />}
					/>
				</div>
				<img src={CoverImage} alt='' />
			</section>
			<div className='divider'></div>
		</div>
		<div className='about-section'>
			<img src={CoverImage2} alt='' />
			<div>
				<h2>Build a brand for your business.</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae aliquet
					magna leo semper turpis vivamus augue ac dui. Amet ullamcorper blandit
					montes, nibh gravida mattis aenean habitant massa. Quam.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nunc nibh
					id placerat ut adipiscing. Vulputate egestas sapien varius nibh a
					lacinia sit vel augue.
				</p>
				<div className='links'>
					<Button text='Get Started' size='small' style='primary' />
					<Link>Get Started</Link>
				</div>
			</div>
		</div>
	</Main>
)

export default Index
