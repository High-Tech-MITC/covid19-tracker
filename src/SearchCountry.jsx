import {
  FormControl,
  Select,
  MenuItem,
  Card,
  CardContent,
} from "@material-ui/core";

const SearchCountry = ({ country, countries, onCountryChange }) => {
  return (
    <div className="app__mainHeader">
      <div className="app__countryList">
        <FormControl className="app__formControl">
          <Select
            className="app__dropdownList"
            variant="outlined"
            value={country}
            onChange={onCountryChange}
          >
            <MenuItem value="worldwide">
              <p className="app__menuItem">world wide</p>
            </MenuItem>
            {countries.map((country) => (
              <MenuItem key={country.value} value={country}>
                <p className="app__menuItem">{country.name}</p>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default SearchCountry;
