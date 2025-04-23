import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '450px'
};

const center = {
  lat: 17.448848, // Hyderabad latitude
  lng: 78.383188  // Hyderabad longitude
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBs3VnJa-P5PE4csdujyMVXFayJuFqt3cs">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;

// AIzaSyBs3VnJa-P5PE4csdujyMVXFayJuFqt3cs
//https://console.cloud.google.com

