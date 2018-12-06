import React, { Component } from 'react';
import {GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react'
import fixed from '../resolved.png';
import normal from '../fixed.png';
import '../../style.css';
import CurrentLocation from '../components/../../Map';
import NavBar from '../NavBar/NavBar'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const mainMap = {
  marginBottom: '50px'
};

const alert = {
  margin: "40px"
};

export class MapContainer extends Component{

  state = {
    showingInfoWindow: false, //Hides or shows infoWindow
    activeMarker: {}, // Shows active marker upon click
    selectedPlace: {} // shows infoWindow to selected place upon a marker
  };

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
      <div>
        <NavBar/>
      </div>
      <div style={alert}>
        <div class="alert alert-dismissible alert-info">
          <button type="button" class="close" data-dismiss="alert">&times;</button>
          <strong>Done!</strong> An issue has been resolved.
        </div>
      </div>
      <div>
        <div style={mainMap}>
        <CurrentLocation
          centerAroundCurrentLocation
          google = {this.props.google}
        >
        
        <Marker 
            onClick = {this.onMarkerClick}
            name = {'ISSUE RESOLVED'}
            options={{icon:`${fixed}`}}
            number = '#21'
            case = 'Water Repaired '
            message = 'This water pump has been serviced, and is back to working condition.'
          />

          <Marker
            onClick = {this.onMarkerClick}
            position = {{ lat: 30.230761, lng: -97.711777}}
            name = {'Oracle - Austin Campus'}
            options={{icon:`${normal}`}}
            number = '#38'
            case = 'WATER PUMP '
            message = 'Major Water System located in this area.'
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
               <b><u>{this.state.selectedPlace.case}@ Pump {this.state.selectedPlace.number} </u></b> <br />
               {this.state.selectedPlace.message}
            </Typography>
        </Paper>
        </InfoWindow>
      </CurrentLocation>
      </div>
      </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBQSaYrjsnUajXRIHdvyZR-h8wYF-amtZk'
})(MapContainer);