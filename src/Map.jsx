import React from 'react';
import './Map.css'
import { Map as LeafletMap, TileLayer, Circle } from 'react-leaflet'

const Map = ({ countries, center, zoom }) => {
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Circle center={center} radius={2000} color="#fff"></Circle>
            </LeafletMap>
        </div>
    );
}

export default Map;
