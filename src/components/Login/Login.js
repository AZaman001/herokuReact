import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import '../../style.css';
import temp from '../images/temp.png';

const title = {
    position: "absolute",
    top: "1rem",
    left: "10rem"
};

const entry = {
    width: "35rem",
    height: "30rem",
    position: "absolute",
    left: "30rem",
    top: "10rem",
    justifyContent: "center"
};

const logo = {
    width: "20px",
    height: "25px",
    margin: "5px"
};

const textStyle = {
    textAlign: "center",
    marginBottom: "15px"
};

const buttonStyle = {
    position: "absolute",
    left: "15rem",
    marginTop: "20px"
};
export class Login extends Component {

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
            return <Redirect to='/general' />
        }
    }

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <div class="jumbotron" style={entry}>
                    <div style={title}>
                        <img src={temp} style={logo} alt='' />
                        <h>Water Leakage Monitoring</h>
                    </div>
                    <h1 class="display-3" style={textStyle}>Login</h1>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div>
                        <button type="submit" class="btn btn-success" style={buttonStyle} onClick={this.setRedirect}>Sign In</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;