import React from "react";
import { useEffect, useState } from "react";
import { bootstrapURLKeys } from "../bootstrapURLKeys";
import { AppleMap } from './map-styled';

declare global {
  interface Window {
    mapkit: any;
  }
}

export function Map() {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [appleMapObj,setAppleMapObj] = useState(null);
  const { mapkit } = window;

  const appendScript = () => {
    const script = document.createElement("script");
    script.src = "https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.head.appendChild(script);
  };

  useEffect(() => {
    if(!scriptLoaded){
      appendScript()
    }else{
      if(!appleMapObj) init();
    }
  });

  function init(){
      console.log("@@@@@@@@@@@@@@@")
      mapkit.init({
        authorizationCallback: (done: Function) => {
          done(bootstrapURLKeys);
        },
      });
      var region = new mapkit.CoordinateRegion(
        new mapkit.Coordinate(45.2733, -66.0633),
        new mapkit.CoordinateSpan(70,50)
      );
      const appleMapObj = new mapkit.Map("appleMap");
      appleMapObj.region = region;
      setAppleMapObj(appleMapObj)
  }

  return (<AppleMap id="appleMap"></AppleMap>)
}
