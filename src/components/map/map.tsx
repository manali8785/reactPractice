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
        showRoute()
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

  function showRoute(){
      clearRoute()
      const from = new mapkit.Coordinate(travelinfo.canIGo.fromCountry.geocode.lat,travelinfo.canIGo.fromCountry.geocode.long);
      const to = new mapkit.Coordinate(travelinfo.canIGo.toCountry.geocode.lat,travelinfo.canIGo.toCountry.geocode.long);

      var coords =[from,to]
      var style = new mapkit.Style({
          lineWidth: 3,
          lineJoin: "round",
          lineDash: [],
          strokeColor: "#FF4D00"
      });
      var polyline = new mapkit.PolylineOverlay(coords, { style: style });
      appleMapObj.addOverlay(polyline);

      const fromMarker = new mapkit.MarkerAnnotation(from, {title: 'src',color:'green'});
      const toMarker = new mapkit.MarkerAnnotation(to, {title: 'dest',color:'red'});

      appleMapObj.addAnnotation(fromMarker);
      appleMapObj.addAnnotation(toMarker);
  }

  function clearRoute(){
      let overlays = appleMapObj.overlays;
      appleMapObj.removeOverlays(overlays);

      let annotations = appleMapObj.annotations;
      appleMapObj.removeAnnotations(annotations);
  }
  return (<AppleMap id="appleMap"></AppleMap>)
}
