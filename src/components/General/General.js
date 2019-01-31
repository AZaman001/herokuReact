import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react'
import { Redirect} from 'react-router-dom';
import normal from '../fixed.png';
import NavBar from '../NavBar/NavBar'
import InfoBar from '../InfoBar/InfoBar'

import '../../style.css';


import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const mapStyles = {
  width: '100%',
  height: '60%',
};

const mainMap = {
  marginBottom: '50px'
};

export class MapContainer extends Component{
  
  constructor() {
    super();
    this.state = {
        showingInfoWindow: false, //Hides or shows infoWindow
        activeMarker: {}, // Shows active marker upon click
        selectedPlace: {}, // shows infoWindow to selected place upon a marker
        redirect: false
    };

    this.reloadListener();
  }

  reloadListener() {
    if (window.performance) {
      if (performance.navigation.type === 1) {
        alert( "An issue has been detected!");
        // window.location.replace('http://localhost:3000/detected');
        // For hosted app URL should be: 
        window.location.replace('https://water-react-app.herokuapp.com/detected');
        
      } 
    }
  }

  renderRedirect = () => {
    if (this.state.redirect) {
        return <Redirect to='/detected' />
    }
  }


  //used to show InfoWindow
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  
  // to close out of InfoWindow
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
      <div>
        <NavBar/>
      </div>
      <div>
        <div style={mainMap}>
        <Map
          google = {this.props.google}
          zoom = {4}
          style = {mapStyles} 
          initialCenter = {{
            lat: 38.687654,
            lng: -98.659314
          }}
        >
   
        <Marker 
          onClick = {this.onMarkerClick}
          name = {'Oracle - Reston Campus'}
          position = {{lat: 38.954674, lng: -77.352266}}
          options={{icon:`${normal}`}}
          number = '#21'
          area = 'Fairfax County'
        />

        <Marker
            onClick = {this.onMarkerClick}
            position = {{ lat: 30.230761, lng: -97.711777}}
            name = {'Oracle - Austin Campus'}
            options={{icon:`${normal}`}}
            number = '#38'
        />
        
         <InfoWindow
         marker={this.state.activeMarker}
         visible={this.state.showingInfoWindow}
         onClose={this.onClose}
        >
        <Paper>
          <Typography
              variant = 'headline'
              component = 'h4'
          >
              {this.state.selectedPlace.name}
          </Typography>
          <Typography
            component = 'p'
          >
              WATER PUMP {this.state.selectedPlace.number} <br />
              Major Water System located in this area.
          </Typography>
        </Paper>
        </InfoWindow>
      </Map>
      </div>
      </div>
      <InfoBar/>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBQSaYrjsnUajXRIHdvyZR-h8wYF-amtZk'
})(MapContainer);