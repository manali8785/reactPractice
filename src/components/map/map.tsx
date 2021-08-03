import React from "react";
import GoogleMapReact from 'google-map-react';
import { bootstrapURLKeys } from "../bootstrapURLKeys";

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 1
  };

  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: bootstrapURLKeys}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      </GoogleMapReact>
    </div>
  );
}