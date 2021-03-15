import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {Logo, Menu} from '../assets/index'

const Header = (props) => (
	<header>
		<div className='brand'>
			<Link to='/'>
				<span className='logo'>
					<Logo />
				</span>
				<span className='label-medium'>{props.brandName}</span>
			</Link>
		</div>
		<div className='nav-menu'>
			<nav>
				<NavLink
					activeClassName='nav-link-active'
					className='label-medium'
					to={`/${props.itemOne}`}
				>
					{props.itemOne}
				</NavLink>
				<NavLink
					activeClassName='nav-link-active'
					className='label-medium'
					to={`/${props.itemTwo}`}
				>
					{props.itemTwo}
				</NavLink>
				<NavLink
					activeClassName='nav-link-active'
					className='label-medium'
					to={`/${props.itemThree}`}
				>
					{props.itemThree}
				</NavLink>
				<NavLink
					activeClassName='nav-link-active'
					className='label-medium'
					to={`/${props.itemFour}`}
				>
					{props.itemFour}
				</NavLink>
				<Menu className='menu' />
			</nav>
		</div>
	</header>
)

export default Header
