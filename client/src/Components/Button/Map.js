import React, { Component } from "react";
import { withGoogleMap,withScriptjs, GoogleMap,directionsRenderer} from "react-google-maps";

class Map extends Component {
  state = {
    directions: null
  };

 componentDidMount() {
    const directionsService = new google.maps.DirectionsService();

    const origin = { lat: 35.8235, lng: -78.8256};
    const destination = { lat: 37.5407, lng: -77.4360 };

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }

  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 37.5407, lng: -77.4360 }}
        defaultZoom={13}
      >
        <DirectionsRenderer
          directions={this.state.directions}
        />
      </GoogleMap>
    ));

    return (
      <div>
        <GoogleMapExample
          containerElement={<div style={{ height: `500px`, width: "500px" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map;
