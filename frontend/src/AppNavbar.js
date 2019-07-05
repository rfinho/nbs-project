import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './AppNavbar.css';
import logo from './logo.png';


export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    // gotoBeanComponent = () => {
    //     this.props.history.push('/add-pet')
    // }

    render() {
        return <Navbar style={{ backgroundColor: '#563d7c' }} dark expand="md" sticky="top">
            <NavbarBrand tag={Link} to="/">
                <img
                    src={logo}
                    //width={250}
                    height={40}
                    className="d-inline-block align-top"
                    alt="Imagify logo"
                />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button className="btn btn-light custom-btn" tag={Link} to="/add-image">Add Image! </Button>
                    </NavItem>

                </Nav>
            </Collapse>
        </Navbar >;
    }
}