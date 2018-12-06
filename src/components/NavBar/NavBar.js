import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import temp from '../images/temp.png';
import user from '../images/u.03.png';

const logo = {
    width: "20px",
    height: "25px",
    margin: "5px"
};

const profile = {
    position: "absolute",
    right: 115,
    width: "40px",
    height: "40px"
};

const status = {
    position: "absolute",
    right: 25,
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
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <img src={temp} style={logo} alt='' />
                    <h class="navbar-brand">Water Leakage Monitoring</h>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <img src={user} style={profile} alt='' />
                    <button type="button" class="btn btn-outline-success" style={status} onClick={this.setRedirect}>Sign Out</button>
                </nav>
            </div>
        );
    }
}
export default NavBar;