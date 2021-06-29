import { useState } from "react";
import Map from "./Map";

const MapRep = ({ country, countries }) => {
  let [mapCenter, setMapCenter] = useState([43.45, 35.3]);
  const [mapZoom, setMapZoom] = useState(4);
  return (
    <div className="app__map">
      {console.log(country.name, " -----------")}
      <h1 className="app__map__header">
        Map Representation of{" "}
        <span>
          {typeof country.name === "undefined" ? "worldwide" : country.name}
        </span>
      </h1>
      <Map
        countries={countries}
        country={country}
        center={mapCenter}
        zoom={mapZoom}
      />
    </div>
  );
};

export default MapRep;
