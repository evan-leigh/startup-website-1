import React from 'react'
import {NavLink} from 'react-router-dom'
import {Logo, Menu} from '../assets/index'

const NavItem = (props) => (
	<NavLink activeClassName='nav-link-active' to={`/${props.link}`}>
		{props.link}
		{props.children}
	</NavLink>
)

const Header = () => (
	<header>
		<NavItem link=''>
			<Logo />
			<span>Brand Name</span>
		</NavItem>
		<nav>
			<NavItem link='home' />
			<NavItem link='about' />
			<NavItem link='contact' />
		</nav>
		<Menu className='menu' />
	</header>
)

export default Header
