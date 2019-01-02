import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import temp from '../images/temp.png';
import user from '../images/u.03.png';
import edit from '../images/profile.png';
import settings from '../images/settings.png';
import track from '../images/track.png';
import report from '../images/report.png';


import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';


const logo = {
    width: "20px",
    height: "25px",
    margin: "5px"
};

const profile = {
    position: "absolute",
    //top: -20,
    right: 15,
    width: "40px",
    height: "40px"
};

const dropItem = {
    width: "25px",
    height: "25px",
    marginRight: "10px"
};

const signOut = {
    marginLeft: "10px"
};

export class NavBar extends Component {

    state = {
        toDashboard: false,
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <Navbar color="light" light expand="md">
                    <img src={temp} style={logo} alt='' />
                    <NavbarBrand href="/">Water Leakage Monitoring</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <img src={user} style={profile} alt='' />
                                <DropdownToggle nav caret>

                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <img src={edit} style={dropItem} alt='' />
                                        Profile
                                    </DropdownItem>
                                    <DropdownItem>
                                        <img src={track} style={dropItem} alt='' />
                                        Track
                                    </DropdownItem>
                                    <DropdownItem>
                                        <img src={report} style={dropItem} alt='' />
                                        Report
                                    </DropdownItem>
                                    <DropdownItem>
                                        <img src={settings} style={dropItem} alt='' />
                                        Settings
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <button type="button" class="btn btn-outline-success" onClick={this.setRedirect} style={signOut}>Sign Out</button>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default NavBar;