import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {Logo, Menu} from '../assets/index'

const NavItem = (props) => (
	<NavLink
		className='label-large'
		activeClassName='nav-link-active'
		to={`/${props.link}`}>
		<span>{props.link}</span>
		{props.children}
	</NavLink>
)

const Header = () => (
	<header>
		<Link to=''>
			<Logo />
			<span>Context</span>
		</Link>
		<nav>
			<NavItem link='case studies' />
			<NavItem link='about' />
			<NavItem link='services' />
		</nav>
		<Menu className='menu' />
	</header>
)

export default Header
