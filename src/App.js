import React, {Suspense, lazy} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Main from './layouts/Main'
import './scss/main.scss'

const {PUBLIC_URL} = process.env

const About = lazy(() => import('./pages/About'))
const CaseStudies = lazy(() => import('./pages/CaseStudies'))
const Home = lazy(() => import('./pages/Home'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Services = lazy(() => import('./pages/Services'))

const App = () => (
	<BrowserRouter basename={PUBLIC_URL}>
		<Suspense fallback={<Main />}>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/about' component={About} />
				<Route path='/case studies' component={CaseStudies} />
				<Route path='/services' component={Services} />
				<Route component={NotFound} status={404} />
			</Switch>
		</Suspense>
	</BrowserRouter>
)

export default App
