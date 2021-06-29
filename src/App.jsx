import React, { useEffect, useState } from "react";
import PreLoader from "./PreLoader";
import InfoBox from "./InfoBox";
import Map from "./Map";
import Table from "./Table";
import Footer from "./Footer";
import Info from "./Info";
import "./App.css";
import SearchCountry from "./SearchCountry";
import {
  FormControl,
  Select,
  MenuItem,
  Card,
  CardContent,
} from "@material-ui/core";
import { sortData } from "./util";
import "leaflet/dist/leaflet.css";
import Anime from "react-anime";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
      {/* <div className="app__mainheader">

                <h1 className="app__header">
                    Tr
                    <Anime rotate={360} duration={100000}>
                        <img width={40} className="app__logo" src="httpss://www.un.org/sites/un2.un.org/files/covid-19.svg" style={{ bgColor: "red" }} alt="covid-19"></img>
                    </Anime>
                    cker
                </h1>
            </div> */}

      {countries.length == 2 ? (
        <PreLoader />
      ) : (
        <div>
          <SearchCountry
            country={country}
            countries={countries}
            onCountryChange={onCountryChange}
          />

          <Info countryInfo={countryInfo} />

          <div className="app__map">
            {console.log(country.name, " -----------")}
            <h1 className="app__map__header">
              Map Representation of{" "}
              <span>
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

          <div>
            <Card className="app__table">
              <CardContent>
                <h3>
                  <center>Cases By Countries [ Highest ]</center>
                </h3>

                {/* table */}
                <Table countries={tableData} />
              </CardContent>
            </Card>
          </div>

          {/* <Footer /> */}

          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
