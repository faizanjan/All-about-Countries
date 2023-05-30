import { useState } from "react";
import allCountries from "../allCountries";
import CountryCard from "./CountryCard";
import SearchAndFilter from "./SearchAndFilter";

let Home = ({ setCountry, isDarkMode }) => {
  let [region, setRegion] = useState(null);
  let [searchText, setSearchText] = useState("");

  let countriesToDisplay = allCountries.filter(
    (country) =>
      country["name"]["common"]
        .toLowerCase()
        .startsWith(searchText.toLowerCase()) &&
      (region === null || country["region"] === region)
  );

  return (
    <div className={isDarkMode ? " text-light bg-dark" : " text-dark bg-light"}>
      <SearchAndFilter
        setRegion={setRegion}
        setSearchText={setSearchText}
        isDarkMode={isDarkMode}
      />

      <div
        className={
          "all-countries p-5 d-flex flex-row justify-content-around flex-wrap" +
          (isDarkMode ? " bg-dark" : " bg-light")
        }
      >
        {countriesToDisplay.map((country) => (
          <CountryCard
            key={country["name"]["official"]}
            country={country}
            setCountry={setCountry}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
