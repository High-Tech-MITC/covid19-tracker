import React, { useEffect, useState } from 'react';
import InfoBox from './InfoBox'
import Map from './Map'
import './App.css'
import {
    FormControl,
    Select,
    MenuItem,
    Card,
    CardContent
} from '@material-ui/core'

const App = () => {

    const url = 'http://disease.sh/v3/covid-19/countries';
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState('worldwide');

    // http://disease.sh/v3/covid-19/countries
    useEffect(() => {
        const getCountriesData = async () => {
            await fetch(url)
                .then(response => response.json())
                .then(data => {
                    const countries = data.map(country => ({
                        name: country.country,
                        value: country.countryInfo.iso2,
                        cases: country.cases,
                        recovered: country.recovered,
                        deaths: country.deaths
                    }));
                    setCountries(countries)
                })
        }
        getCountriesData()
    }, []);

    const onCountryChange = (event) => {
        const countryCode = event.target.value;
        setCountry(countryCode)
    }

    return (
        <div className="app">
            <div className="app__left">
                <div className="app__header">

                    <h1>Covid-19 Tracker</h1>
                    <FormControl className="app__dropdown">
                        <Select
                            variant="outlined"
                            value={country}
                            onChange={onCountryChange}
                        >
                            <MenuItem value="worldwide">world wide</MenuItem>
                            {countries.map(country => <MenuItem value={country}>{country.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>

                {/* stats */}

                <div className="app__stats">
                    <InfoBox title="Coronavirus cases" cases={country.cases} total={253562} />
                    <InfoBox title="recovered" cases={country.recovered} total={2149803} />
                    <InfoBox title="Deaths" cases={country.deaths} total={2149803} />
                </div>

                {/* map */}

                <Map />
            </div>

            <Card className="app__right">
                <CardContent>
                    <h3>Live cases by country</h3>

                    {/* table */}

                    <h3>worldwide new cases</h3>
                </CardContent>
                <h2>hello</h2>
            </Card>
        </div>
    );
}

export default App;
