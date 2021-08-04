import React from "react";
import { useEffect, useState } from "react";
import { bootstrapURLKeys } from "../bootstrapURLKeys";
import { AppleMap } from './map-styled';

declare global {
  interface Window {
    mapkit: any;
  }
}

export default function Map() {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const { mapkit } = window;

  const appendScript = () => {
    const script = document.createElement("script");
    script.src = "https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.head.appendChild(script);
  };

  useEffect(() => {
     appendScript();
     if(scriptLoaded) init();
  });

  function init(){
      mapkit.init({
        authorizationCallback: (done: Function) => {
          console.log(bootstrapURLKeys)
          done(bootstrapURLKeys);
        },
      });

      var Cupertino = new mapkit.CoordinateRegion(
        new mapkit.Coordinate(37.3316850890998, -122.030067374026),
        new mapkit.CoordinateSpan(0.167647972, 0.354985255)
      );
      var map = new mapkit.Map("appleMap");
      map.region = Cupertino;
  }

  return (<AppleMap id="appleMap"></AppleMap>)
}
