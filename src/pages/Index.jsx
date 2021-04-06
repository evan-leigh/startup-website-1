import React from 'react'
import Main from '../layouts/Main'
import {Button, Testemonial} from '../components/index'
import {CoverImage1, CoverImage2, CoverImage3, ArrowEast} from '../assets/index'
import {Link} from 'react-router-dom'
import Marquee from 'react-fast-marquee'

function Index() {
	return (
		<Main>
			<section id='index'>
				<aside data-aos='fade' style={{maxWidth: '450px'}}>
					<h1>Dedicated to raising the bar</h1>
					<p className='body-medium'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
						elit tincidunt id tempus ut nunc duis non sit.
					</p>
					<Button
						text='Get Started'
						buttonSize='medium'
						buttonStyle='primary'
						iconRight={<ArrowEast />}
					/>
				</aside>
				<img src={CoverImage1} alt='' />
				{/* <div className='divider'>
					<ScrollArrow className='scroll-arrow' />
				</div> */}
			</section>
			<section className='about-section'>
				<img src={CoverImage2} alt='' />
				<aside data-aos='fade'>
					<h2>Build a brand for your business.</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
						aliquet magna leo semper turpis vivamus augue ac dui. Amet
						ullamcorper blandit montes, nibh gravida mattis aenean habitant
						massa. Quam.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nunc
						nibh id placerat ut adipiscing. Vulputate egestas sapien varius nibh
						a lacinia sit vel augue.
					</p>
					<div className='links'>
						<Button
							text='Get Started'
							buttonSize='medium'
							buttonStyle='primary'
						/>
						<Link to='#'>Get Started</Link>
					</div>
				</aside>
			</section>
			<section className='testemonials'>
				<aside data-aos='fade'>
					<h3>Heres what they're saying</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Pellentesque aliquam non mattis est, mauris sit risus pellentesque
						amet. Morbi dictum ut eleifend aliquam. At proin augue interdum
						porta venenatis.
					</p>
				</aside>
				<aside data-aos='fade'>
					<h1>Helping over 493 brands grow their profit.</h1>
				</aside>
				<div style={{overflowX: 'hidden', margin: '0 -2vw', padding: '5vh 0'}}>
					<Marquee gradientWidth='100'>
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
				<div style={{overflowX: 'hidden', padding: '5vh 0'}}>
					<Marquee gradientWidth='100' direction='right'>
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
			</section>

			<section>
				<aside data-aos='fade'>
					<h2>
						We have a team of dedicated professionals ready to provide value
					</h2>
					<blockquote style={{flexBasis: '900px'}}>
						<ul className='block-quote'>
							<li>
								<p>
									<strong>Fast and affordable</strong> dolor sit amet,
									consectetur adipiscing elit, sed do eiusmod tempor. dolor sit
									amet, conse dolor
								</p>
							</li>
							<li>
								<p>
									<strong>24-Hour Support</strong> dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor. dolor sit amet, conse
									dolor
								</p>
							</li>
							<li>
								<p>
									<strong>User Focus</strong> dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor. dolor sit amet, conse
									dolor
								</p>
							</li>
						</ul>
					</blockquote>
				</aside>
				<img src={CoverImage3} alt='' />
			</section>
			<section>
				<div className='banner-cta'>
					<aside>
						<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis
							interdum cum non
						</p>
					</aside>
					<Button
						text='Get Started'
						buttonSize='medium'
						buttonStyle='secondary'
						iconRight={<ArrowEast />}
					/>
				</div>
			</section>
		</Main>
	)
}
export default Index
