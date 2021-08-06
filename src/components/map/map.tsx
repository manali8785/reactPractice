import React from "react";
import { useEffect, useState } from "react";
import { bootstrapURLKeys } from "../bootstrapURLKeys";
import { AppleMap } from './map-styled';
import { useCanIGo } from "../../hooks/useCanIGo";

declare global {
  interface Window {
    mapkit: any;
  }
}

export function Map(props) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [appleMapObj,setAppleMapObj] = useState<any>(null);
  const { mapkit } = window;
  const { loading, error, travelinfo } =useCanIGo(props)
  
  const appendScript = () => {
    const script = document.createElement("script");
    script.src = "https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.head.appendChild(script);
  };

  useEffect(() => {
    if(!travelinfo) return;

    if(!scriptLoaded){
      appendScript()
    }else{
      if(!appleMapObj){
        init();
      }else{
        let overlays = appleMapObj.overlays;
        appleMapObj.removeOverlays(overlays);

        var coords =[new mapkit.Coordinate(travelinfo.canIGo.fromCountry.geocode.lat,travelinfo.canIGo.fromCountry.geocode.long),new mapkit.Coordinate(travelinfo.canIGo.toCountry.geocode.lat, travelinfo.canIGo.toCountry.geocode.long)] //US to Canada
        var style = new mapkit.Style({
            lineWidth: 3,
            lineJoin: "round",
            lineDash: [],
            strokeColor: "#FF4D00"
        });
        var polyline = new mapkit.PolylineOverlay(coords, { style: style });
        appleMapObj.addOverlay(polyline);
      }
    }
  });

  function init(){
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
