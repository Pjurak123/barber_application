import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import type { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";

import React from "react";

type MarkersType = {
  title: string;
  lat: number;
  lng: number;
};

type GoogleMapsCompProps = {
  markers?: MarkersType[];
};

const GoogleMapsComp = ({ markers }: GoogleMapsCompProps) => {
  //default center on Zagreb
  const [mapCenter, setMapCenter] = useState({ lat: 40.74285, lng: -73.98231 });

  useEffect(() => {
    if (markers) {
      setMapCenter({ lat: markers[0].lat, lng: markers[0].lng });
    }
  }, []);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true,
      scrollwheel: true,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC3qkKv0ClW3EExyX73EdG7Lhr2JBP4KkE" as string,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "100%", height: "400px" }}
        onLoad={() => console.log("Map Component Loaded...")}
      >
        {markers &&
          markers.map((marker: any, index: any) => (
            <Marker
              key={index}
              position={{ lat: marker.lat, lng: marker.lng }}
              title={marker.title}
            />
          ))}
      </GoogleMap>
    </div>
  );
};

export default GoogleMapsComp;
