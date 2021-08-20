import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown, Figure } from 'react-bootstrap'
import { logout } from '../actions/userActions'
import SearchBox from './SearchBox.js'
import logo from '../img/logo.png'
const Header = () => {
	const dispatch = useDispatch()

	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	const logoutHandler = () => {
		dispatch(logout())
	}
	const cart = useSelector((state) => state.cart)
	const { cartItems } = cart

	return (
		<header>
			<Navbar variant='light' expand='xxl' collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>
							<Figure.Image src={logo} alt='Logo' width={50} fluid />
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<LinkContainer to='/'>
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/home'>
							<Nav.Link>Adopt a plant</Nav.Link>
						</LinkContainer>

						<NavDropdown
							id='nav-dropdown-dark-example'
							title='Categories'
							menuVariant='dark'
							className='mx-0'
						>
							<NavDropdown.Item eventKey='4.1'>Action</NavDropdown.Item>
							<NavDropdown.Item eventKey='4.2'>Another action</NavDropdown.Item>
							<NavDropdown.Item eventKey='4.3'>
								Something else here
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item eventKey='4.4'>Separated link</NavDropdown.Item>
						</NavDropdown>

						<LinkContainer to='/blog'>
							<Nav.Link>Blog</Nav.Link>
						</LinkContainer>
						<Nav className='ms-auto'>
							{/* <LinkContainer to='/'>
								<Nav.Link> About Us</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/'>
								<Nav.Link> Products</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/'>
								<Nav.Link> News</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/'>
								<Nav.Link> Client Zone</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/'>
								<Nav.Link> Policies</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/'>
								<Nav.Link> Careers</Nav.Link>
							</LinkContainer> */}
							{/******************************************************
							 ********************ADD CATEGORIES HERE***************
							 *****************************************************/}
							{/* <NavDropdown title='Categories' id='categoriesmenu'>
								<LinkContainer to='/search/electronics'>
									<NavDropdown.Item>Electronics</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/search/music'>
									<NavDropdown.Item>Music</NavDropdown.Item>
								</LinkContainer>
							</NavDropdown> */}

							<Route
								render={({ history }) => <SearchBox history={history} />}
							/>

							<LinkContainer to='/wishlist'>
								<Nav.Link className='my-2 mx-3'>
									{' '}
									<i className='fas fa-heart fa-lg	'></i>
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/cart'>
								<Nav.Link className='my-2 mx-3'>
									{' '}
									<i className='fas fa-shopping-cart fa-lg	'></i>
								</Nav.Link>
							</LinkContainer>
							{userInfo ? (
								<NavDropdown
									title={userInfo.name}
									id='username'
									className='my-2 mx-3'
								>
									<LinkContainer to='/profile'>
										<NavDropdown.Item>Profile</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={logoutHandler}>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<LinkContainer to='/login' className='my-2 mx-3'>
									<Nav.Link>Sign In</Nav.Link>
								</LinkContainer>
							)}
							{userInfo && userInfo.isAdmin && (
								<NavDropdown title='Admin' id='adminmenu' className='my-2 mx-3'>
									<LinkContainer to='/admin/userlist'>
										<NavDropdown.Item>Users</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/productlist'>
										<NavDropdown.Item>Products</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/orderlist'>
										<NavDropdown.Item>Orders</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/packaginglist'>
										<NavDropdown.Item>Packagings</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
