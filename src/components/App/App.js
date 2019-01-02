import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Alert, Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import '../../style.css';
import NavBar from '../NavBar/NavBar';
import MapContainer from '../IssueMap/IssueMap';
import start from '../images/service.png';
import whoops from '../images/x.png';

const mainMap = {
  position: 'fixed',
  top: '80px'
};

const alert = {
  margin: "40px"
};

const service = {
  position: 'absolute',
  left: '450px',
  bottom: '50px',
  marginTop: "65px",
  paddingRight: '20px'
};

const falseAlarm = {
  position: 'absolute',
  left: '750px',
  bottom: '50px',
  marginTop: "65px",
  paddingRight: '20px'
};

const option = {
  width: "30px",
  height: "30px",
  marginRight: "5px"
};

export class App extends Component {

  state = {
    visible: true,
    popOpen1: false,
    popOpen2: false
  };

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 60000)
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/resolved' />
    }
  }

  onDismiss = () => {
    this.setState({
      visible: false
    });
  }

  toggle = () => {
    this.setState({
      popOpen1: !this.state.popOpen1
    });
  }

  toggle2 = () => {
    this.setState({
      popOpen2: !this.state.popOpen2
    })
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <div>
          <NavBar />
        </div>
        <div style={alert}>
          <Alert color='danger' isOpen={this.state.visible} toggle={this.onDismiss}>
            <strong>Oh No!</strong> An issue has been detected. Please check it out!
        </Alert>
        </div>
        <MapContainer style={mainMap}/>
        <Button color="warning" style={service} id="pop1" onClick={this.toggle}> <img src={start} style={option} alt='' /> <u>Initiative Service</u></Button>
        <Popover placement="top" isOpen={this.state.popOpen1} target="pop1" toggle={this.toggle}>
          <PopoverHeader>Service</PopoverHeader>
          <PopoverBody>A service request has been placed for the water pump here.</PopoverBody>
        </Popover>
        <Button color="danger" style={falseAlarm} id="pop2" onClick={this.toggle2}> <img src={whoops} style={option} alt='' /> <u>False Alarm</u></Button>
        <Popover placement="top" isOpen={this.state.popOpen2} target="pop2" toggle={this.toggle2}>
          <PopoverHeader>Discarded</PopoverHeader>
          <PopoverBody>This report will no longer be tracked.</PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default App;