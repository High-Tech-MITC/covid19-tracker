import React, { useEffect, useState } from "react";
import PreLoader from "./PreLoader";

import Map from "./Map";
import Table from "./Table";
import Footer from "./Footer";
import Info from "./Info";
import "./tailwind.min.css";
import "./App.css";
import SearchCountry from "./SearchCountry";
import { sortData } from "./util";
import "leaflet/dist/leaflet.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  console.log(countries, "__________________________---------");
  const [tableData, setTableData] = useState([]);
  let [mapCenter, setMapCenter] = useState([43.45, 35.3]);
  const [mapZoom, setMapZoom] = useState(4);
  // const [mapCountry, setMapCountry] = useState({})

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => setCountryInfo(data));
  }, []);

  // https://disease.sh/v3/covid-19/countries
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
            cases: country.cases,
            recovered: country.recovered,
            deaths: country.deaths,
            center: [country.countryInfo.lat, country.countryInfo.long],
          }));
          const sortedData = sortData(data);
          setTableData(sortedData);
          // setMapCountry(data)
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode.value}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
  };
  return (
    <div>
      {countries.length == 2 ? (
        <PreLoader />
      ) : (
        <div className="app">
          <div className="flex justify-between bg-indigo-900 text-white p-5">
            <div>
              <h1 className="text-3xl">COVIDTracker</h1>
            </div>
            <SearchCountry
              country={country}
              countries={countries}
              onCountryChange={onCountryChange}
            />
          </div>
          <div className="md:flex justify-between app__content">
            <div className="max-w-96  app__info">
              <Info countryInfo={countryInfo} />
            </div>
            <div className=" app__map">
              {console.log(country.name, " -----------")}
              <h1 className="text-2xl text-center mt-4 mb-4">
                Map Representation of{" "}
                <span className="bg-indigo-900 text-white p-1">
                  {typeof country.name === "undefined"
                    ? "worldwide"
                    : country.name}
                </span>
              </h1>
              <Map
                countries={countries}
                country={country}
                center={mapCenter}
                zoom={mapZoom}
              />
            </div>

            {/* table */}
            <Table countries={tableData} />
          </div>

          {/* <Footer /> */}
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
