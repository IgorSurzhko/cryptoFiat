import React, { useContext, useEffect } from 'react';
import classNames from 'classnames';
import UserDropdown from '../UserDropdown/UserDropdown';
import AuthModal from '../LoginModal/AuthModal';

import { AuthContext } from '../../contexts/auth.context';
// reactstrap components
import {
	Button,
	Collapse,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	Input,
	InputGroup,
	NavbarBrand,
	Navbar,
	NavLink,
	Nav,
	Container,
	Modal,
	NavbarToggler,
	ModalHeader
} from 'reactstrap';
import { useState } from 'react';

function HeadNavbar(props) {
	const { isAuthenticated } = useContext(AuthContext);
	const [collapseOpen, setcollapseOpen] = useState(false);
	const [modalSearch, setmodalSearch] = useState(false);
	const [isModalAuthOpen, setIsModalAuthOpen] = useState(false);

	const [color, setcolor] = useState('navbar-transparent');

	useEffect(() => {
		window.addEventListener('resize', updateColor);
		// Specify how to clean up after this effect:
		return function cleanup() {
			window.removeEventListener('resize', updateColor);
		};
	});

	useEffect(() => {
		if (isAuthenticated) {
			setIsModalAuthOpen(false);
		}
	}, [isAuthenticated]);
	// function that adds color white/transparent to the navbar on resize (this is for the collapse)
	const updateColor = () => {
		if (window.innerWidth < 993 && collapseOpen) {
			setcolor('bg-white');
		} else {
			setcolor('navbar-transparent');
		}
	};
	// this function opens and closes the collapse on small devices
	const toggleCollapse = () => {
		if (collapseOpen) {
			setcolor('navbar-transparent');
		} else {
			setcolor('bg-white');
		}
		setcollapseOpen(!collapseOpen);
	};
	// this function is to open the Search modal
	const toggleModalSearch = () => {
		setmodalSearch(!modalSearch);
	};

	const toggleModalAuth = () => {
		setIsModalAuthOpen(!isModalAuthOpen);
	};

	return (
		<>
			<Navbar className={classNames('navbar-absolute', color)} expand="lg">
				<Container fluid>
					<div className="navbar-wrapper">
						<div
							className={classNames('navbar-toggle d-inline', {
								toggled: props.sidebarOpened
							})}>
							<NavbarToggler onClick={props.toggleSidebar}>
								<span className="navbar-toggler-bar bar1" />
								<span className="navbar-toggler-bar bar2" />
								<span className="navbar-toggler-bar bar3" />
							</NavbarToggler>
						</div>
						<NavbarBrand href="#" onClick={e => e.preventDefault()}>
							{props.brandText}
						</NavbarBrand>
					</div>
					<NavbarToggler onClick={toggleCollapse}>
						<span className="navbar-toggler-bar navbar-kebab" />
						<span className="navbar-toggler-bar navbar-kebab" />
						<span className="navbar-toggler-bar navbar-kebab" />
					</NavbarToggler>
					<Collapse navbar isOpen={collapseOpen}>
						<Nav className="ml-auto" navbar>
							<InputGroup className="search-bar">
								<Button color="link" onClick={toggleModalSearch}>
									<i className="tim-icons icon-zoom-split" />
									<span className="d-lg-none d-md-block">Search</span>
								</Button>
							</InputGroup>
							<UncontrolledDropdown nav>
								<DropdownToggle caret color="default" data-toggle="dropdown" nav>
									<div className="notification  d-none d-lg-block d-xl-block" />
									<i className="tim-icons up-notification icon-sound-wave" />
									<p className="d-lg-none">Notifications</p>
								</DropdownToggle>
								<DropdownMenu className="dropdown-navbar" right tag="ul">
									<NavLink tag="li">
										<DropdownItem className="nav-item">
											Mike John responded to your email
										</DropdownItem>
									</NavLink>
									<NavLink tag="li">
										<DropdownItem className="nav-item">
											You have 5 more tasks
										</DropdownItem>
									</NavLink>
									<NavLink tag="li">
										<DropdownItem className="nav-item">
											Your friend Michael is in town
										</DropdownItem>
									</NavLink>
									<NavLink tag="li">
										<DropdownItem className="nav-item">
											Another notification
										</DropdownItem>
									</NavLink>
									<NavLink tag="li">
										<DropdownItem className="nav-item">
											Another one
										</DropdownItem>
									</NavLink>
								</DropdownMenu>
							</UncontrolledDropdown>
							{isModalAuthOpen ? <AuthModal show={toggleModalAuth} /> : ''}
							{isAuthenticated ? (
								<UserDropdown />
							) : (
								<InputGroup className="search-bar">
									<Button color="link" onClick={toggleModalAuth}>
										<i className="tim-icons icon-single-02" />
										<span className="d-lg-none d-md-block">
											SignIn / SignUp
										</span>
									</Button>
								</InputGroup>
							)}

							<li className="separator d-lg-none" />
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
			<Modal modalClassName="modal-search" isOpen={modalSearch} toggle={toggleModalSearch}>
				<ModalHeader>
					<Input placeholder="UNDER DEVELOPMENT PLEASE BE PATIENT" type="text" />
					<button aria-label="Close" className="close" onClick={toggleModalSearch}>
						<i className="tim-icons icon-simple-remove" />
					</button>
				</ModalHeader>
			</Modal>
		</>
	);
}

export default HeadNavbar;
