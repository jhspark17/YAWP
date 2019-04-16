import React from "react";
import { Link } from "react-router-dom";
import MarkerManager from "../../util/marker_manager";

class BusinessMap extends React.Component {
  constructor(props) {
    super(props);
  }

  mapOptions() {
      if (this.props.businesses.length === 1) {
        return {
          center: {
            lat: this.props.businesses[0].latitude,
            lng: this.props.businesses[0].longitude
          },
          zoom: 16,
          fullscreenControl: false,
          streetViewControl: false,
          zoomControl: this.props.zoom,
          zoomControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT
          },
          gestureHandling: "none"
        };
      } else {
      return({
      center: { lat: 37.8014, lng: -122.40163 }, // this is SF
      zoom: 13
      })
    }
    };

  componentDidMount() {
    // set the map to show SF
    let mapStyle = this.mapOptions()
    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapStyle);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.businesses);
  }

 
  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.businesses);
  }

  render() {
    return <div className="map sticky" ref={map => (this.mapNode = map)} />;
  }
}

export default BusinessMap;
