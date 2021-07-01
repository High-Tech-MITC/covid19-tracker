import { useEffect, useState } from "react";

import {
  Map as LeafletMap,
  TileLayer,
  Popup,
  CircleMarker,
} from "react-leaflet";

const Map = ({ countries, country, center, zoom }) => {
  const [moveMapCenter, setMoveMapCenter] = useState(10);
  const [moveCenter, setMoveCenter] = useState(true);

  useEffect(() => {
    setInterval(() => {
      moveCenter ? setMoveMapCenter(20) : setMoveMapCenter(10);
      setMoveCenter(!moveCenter);
    }, 100);
  }, []);
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <CircleMarker center={center} color="green" radius={moveMapCenter}>
          <Popup>
            <div className="map__popup">
              {country.name} <br />
              {country.cases} <br />
              {country.deaths} <br />
            </div>
          </Popup>
        </CircleMarker>

        {countries.map((country) => {
          const reduceSquare = (value) => {
            return Math.floor(Math.sqrt(value / 1000));
          };
          return (
            <CircleMarker
              radius={reduceSquare(country.cases)}
              color="#7f1d1d"
              center={country.center}
            >
              <Popup>
                <div className="map__popup">
                  <h2 className="black">{country.name}</h2>
                  <div className="cases black">{country.cases}</div>
                </div>
              </Popup>
            </CircleMarker>
          );
        })}
      </LeafletMap>
    </div>
  );
};

export default Map;
