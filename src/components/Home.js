import { useState, useEffect } from "react";
import CountryCard from "./CountryCard";
import SearchAndFilter from "./SearchAndFilter";
import { useTheme } from "../ThemeContext";

let Home = () => {
  let [region, setRegion] = useState(null);
  let [searchText, setSearchText] = useState("");

  const [allCountries, setAllCountries] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const isDarkMode = useTheme();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((response) => response.json())
      .then((data) => {
        setAllCountries(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
        setIsLoading(false);
      });
  });

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading indicator
  }

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
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
