import React from 'react';
import './Map.css'
import { Map as LeafletMap, TileLayer, Popup, CircleMarker } from 'react-leaflet';


const Map = ({ countries, country, center, zoom }) => {
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {43.45 === center[0] && 35.3 === center[1] ? console.log("nothing") :
                    <CircleMarker center={center} color="green" radius={20}>
                        <Popup>
                            <div className="map__popup">
                                {country.name} <br />
                                {country.cases} <br />
                                {country.deaths} <br />
                            </div>
                        </Popup>
                    </CircleMarker>
                }

                {countries.map(country => {
                    console.log(country);
                    const reduceSquare = (value) => {
                        return (
                            Math.floor(Math.sqrt(value / 1000))
                        )
                    }
                    return (
                        <CircleMarker radius={reduceSquare(country.cases)} color="red" center={country.center}>
                            <Popup>hello</Popup>
                        </CircleMarker>
                    )

                })}

                {console.log(countries[9])}
            </LeafletMap>
        </div>
    );
}

export default Map;
