import React, { useEffect, useState } from 'react';
import InfoBox from './InfoBox'
import Map from './Map'
import Table from './Table'
import './App.css'
import {
    FormControl,
    Select,
    MenuItem,
    Card,
    CardContent,
    duration
} from '@material-ui/core'
import { sortData } from './util';
import 'leaflet/dist/leaflet.css'
import Anime from 'react-anime'

const App = () => {

    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState('worldwide');
    const [countryInfo, setCountryInfo] = useState({});
    const [tableData, setTableData] = useState([]);
    let [mapCenter, setMapCenter] = useState([43.45, 35.3])
    const [mapZoom, setMapZoom] = useState(4)
    // const [mapCountry, setMapCountry] = useState({})

    useEffect(() => {
        fetch('http://disease.sh/v3/covid-19/all')
            .then(response => response.json())
            .then(data => setCountryInfo(data))
    }, [])

    // http://disease.sh/v3/covid-19/countries
    useEffect(() => {
        const getCountriesData = async () => {
            await fetch("http://disease.sh/v3/covid-19/countries")
                .then(response => response.json())
                .then(data => {
                    const countries = data.map(country => ({
                        name: country.country,
                        value: country.countryInfo.iso2,
                        cases: country.cases,
                        recovered: country.recovered,
                        deaths: country.deaths,
                        center: [country.countryInfo.lat, country.countryInfo.long]
                    }));
                    const sortedData = sortData(data)
                    setTableData(sortedData)
                    // setMapCountry(data)
                    setCountries(countries)
                })
        }
        getCountriesData()
    }, []);

    const onCountryChange = async (event) => {
        const countryCode = event.target.value;

        const url = countryCode === 'worldwide' ?
            'http://disease.sh/v3/covid-19/all' :
            `http://disease.sh/v3/covid-19/countries/${countryCode.value}`;

        await fetch(url)
            .then(response => response.json())
            .then(data => {
                setCountry(countryCode)
                setCountryInfo(data)
                setMapCenter([data.countryInfo.lat, data.countryInfo.long])
                setMapZoom(4)
            })
    }

    return (
        <div>
            <div className="app__header">

                <h1 className="app__header">
                    <Anime rotate={360} duration={100000}>
                        <img width={40} className="app__logo" src="https://www.un.org/sites/un2.un.org/files/covid-19.svg" style={{ bgColor: "red" }} alt="covid-19"></img>
                    </Anime>
                    Tracker
                </h1>

                <div className="app__dropdown">
                    <FormControl>
                        <Select
                            variant="outlined"
                            value={country}
                            onChange={onCountryChange}
                        >
                            <MenuItem value="worldwide">
                                <p className="app__menuItem">world wide</p>
                            </MenuItem>
                            {countries.map(country => <MenuItem key={country.value} value={country}>
                                <p className="app__menuItem">{country.name}</p>
                            </MenuItem>)}
                        </Select>
                    </FormControl>
                </div>

            </div>
            <div className="app">
                <div className="app__left">

                    {/* stats */}

                    <Anime scale={0.9} direction="" easing="easeInCubic" duration={3000} delay={0}>
                        <div className="app__stats">
                            <InfoBox title="cases" animeDelay={700} bgColor="#F59E0B" cases={countryInfo.todayCases} total={countryInfo.cases} />
                            <InfoBox title="recovered" animeDelay={400} bgColor="#10B981" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
                            <InfoBox title="Deaths" animeDelay={600} bgColor="#EF4444" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
                        </div>
                    </Anime>

                    {/* map */}
                    <Anime scale={1.1} translateY={50} duration={2000} delay={1000}>
                        <Map countries={countries} country={country} center={mapCenter} zoom={mapZoom} />
                    </Anime>

                    <Anime scale={1.1} translateY={30} duration={1000} delay={700}>
                        <Card className="app__right">
                            <CardContent>
                                <h3>Live cases by country</h3>

                                {/* table */}
                                <Table countries={tableData} />
                            </CardContent>
                        </Card>
                    </Anime>

                </div>

            </div >

        </div>

    );
}

export default App;
