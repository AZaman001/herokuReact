import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import { Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';
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
                <Jumbotron style={entry}>
                    <div style={title}>
                        <img src={temp} style={logo} alt='' />
                        <h>Water Leakage Monitoring</h>
                    </div>
                    <h1 class="display-3" style={textStyle}>Login</h1>
                    <Form>
                    <FormGroup>
                        <Label for="exampleInputEmail1">Email address</Label>
                        <Input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleInputPassword1">Password</Label>
                        <Input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </FormGroup>
                    <div>
                        <Button color="success" style={buttonStyle} onClick={this.setRedirect}>Sign In</Button>
                    </div>
                    </Form>
                </Jumbotron>
            </div>
        );
    }
}

export default Login;