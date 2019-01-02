import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'
import marked from '../marked.png';
import normal from '../fixed.png';
import '../../style.css';
import CurrentLocation from '../../Map';


import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const mainMap = {
  marginBottom: '50px'
};


export class MapContainer extends Component {

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
          <div style={mainMap}>
            <CurrentLocation
              centerAroundCurrentLocation
              google={this.props.google}
            >

              <Marker
                onClick={this.onMarkerClick}
                name={'ISSUE DETECTED'}
                options={{ icon: `${marked}` }}
                number='#21'
                case='Water Leakage '
                message='A water leakage has been detected here, please initiate service assignment.'
              />

              <Marker
                onClick={this.onMarkerClick}
                position={{ lat: 30.230761, lng: -97.711777 }}
                name={'Oracle - Austin Campus'}
                options={{ icon: `${normal}` }}
                number='#38'
                case='WATER PUMP '
                message='Major Water System located in this area.'
              />

              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
              >
                <Paper>
                  <Typography
                    variant='headline'
                    component='h4'
                  >
                    {this.state.selectedPlace.name}
                  </Typography>
                  <Typography
                    component='p'
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