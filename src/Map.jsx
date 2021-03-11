import React from 'react';
import './Map.css'
import { Map as LeafletMap, TileLayer, Marker, Popup, Circle, CircleMarker } from 'react-leaflet';


// BiLocationPlus

const markerOption = { color: "red" }

const Map = ({ countries, country, center, zoom }) => {
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <CircleMarker center={center} pathOptions={markerOption} radius={20}>
                    <Popup>
                        <div className="map__popup">
                            {country.name} <br />
                            {country.cases} <br />
                            {country.deaths} <br />
                        </div>
                    </Popup>
                </CircleMarker>

            </LeafletMap>
        </div>
    );
}

export default Map;
