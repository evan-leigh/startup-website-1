import React from 'react'
import Main from '../layouts/Main'
import {Button, MarqueeContainer} from '../components/index'
import {
	CoverImage1,
	CoverImage1Webp,
	// CoverImage2,
	// CoverImage3,
	ArrowEast,
	ArrowDown,
	Divider,
} from '../assets/index'
// import {Link} from 'react-router-dom'

function Index() {
	return (
		<Main>
			<section id='home'>
				<aside style={{flexBasis: '560px'}}>
					<h1 style={{maxWidth: '8em'}}>Dedicated to raising the bar</h1>
					<p style={{maxWidth: '27em'}} className='body-medium'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
						elit tincidunt id tempus ut nunc duis non sit.
					</p>
					<Button
						to='about'
						text='Get Started'
						buttonSize='medium'
						buttonStyle='primary'
						iconRight={<ArrowEast />}
					/>
				</aside>
				<picture>
					<source type='image/webp' srcset={CoverImage1Webp} />
					<source type='image/png' srcset={CoverImage1} />
					<img src={CoverImage1} alt=''></img>
				</picture>
			</section>
			<section className='about-section'>
				<div className='divider'>
					<div className='divider-container'>
						<Divider className='divider-bar' />
						<ArrowDown className='scroll-arrow' />
					</div>
				</div>
				<picture>
					<source type='image/webp' srcset={CoverImage1Webp} />
					<source type='image/png' srcset={CoverImage1} />
					<img src={CoverImage1} alt='' />
				</picture>
				<aside style={{flexBasis: '28em'}}>
					<h2 style={{maxWidth: '8em'}}>Build a brand for your business.</h2>
					<p className='body-small'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
						aliquet magna leo semper turpis vivamus augue ac dui. Amet
						ullamcorper blandit montes, nibh gravida mattis aenean habitant
						massa. Quam.
					</p>
					<p className='body-small'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nunc
						nibh id placerat ut adipiscing. Vulputate egestas sapien varius nibh
						a lacinia sit vel augue.
					</p>
					<div className='links'>
						<Button
							to='#'
							text='Get Started'
							buttonSize='medium'
							buttonStyle='primary'
						/>
						<Button to='#' text='More Info' buttonSize='medium' />
					</div>
				</aside>
			</section>
			<section className='testemonials'>
				<aside>
					<h1>Helping over 493 brands grow their profit.</h1>
				</aside>
				<aside>
					<h3>Heres what they're saying...</h3>
					<p className='body-small'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Pellentesque aliquam non mattis est, mauris sit risus pellentesque
						amet. Morbi dictum ut eleifend aliquam. At proin augue interdum
						porta venenatis.
					</p>
				</aside>
				{/* <MarqueeContainer /> */}
			</section>

			<section>
				<aside data-aos='fade'>
					<h2>We have a team of dedicated professionals</h2>
					<blockquote>
						<ul className='block-quote'>
							<li>
								<p className='body-small'>
									<strong>Fast and affordable</strong> dolor sit amet,
									consectetur adipiscing elit, sed do eiusmod tempor. dolor sit
									amet, conse dolor
								</p>
							</li>
							<li>
								<p className='body-small'>
									<strong>24-Hour Support</strong> dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor. dolor sit amet, conse
									dolor
								</p>
							</li>
							<li>
								<p className='body-small'>
									<strong>User Focus</strong> dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor. dolor sit amet, conse
									dolor
								</p>
							</li>
						</ul>
					</blockquote>
				</aside>
				<picture>
					<source type='image/webp' srcset={CoverImage1Webp} />
					<source type='image/png' srcset={CoverImage1} />
					<img src={CoverImage1} alt='' />
				</picture>
			</section>
			<section>
				<div className='banner-cta'>
					<aside>
						<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut</h3>
						<p style={{maxWidth: '25em'}} className='body-small'>
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
