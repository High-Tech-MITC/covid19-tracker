import { FormControl, Select, MenuItem } from "@material-ui/core";

const SearchCountry = ({ country, countries, onCountryChange }) => {
  return (
    <div className="app__mainHeader">
      <div className="app__countryList">
        <FormControl className="text-white">
          <Select
            className="text-white"
            variant="outlined"
            value={country}
            onChange={onCountryChange}
          >
            <MenuItem value="worldwide">
              <p className="text-white">world wide</p>
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
