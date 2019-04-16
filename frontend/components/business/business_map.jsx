import React from "react";
import { Link } from "react-router-dom";
import MarkerManager from "../../util/marker_manager";

class BusinessMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.8014, lng: -122.40163 }, // this is SF
      zoom: 13
    };

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
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
