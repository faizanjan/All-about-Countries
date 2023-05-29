import { useState } from "react";
import allCountries from "../allCountries";
import CountryCard from "./countryCard";
import SearchAndFilter from "./searchAndFilter";

let Home = () => {
  let [region, setRegion] = useState(null);
  let [searchText, setSearchText] = useState("");

  return (
    <>
      <SearchAndFilter setRegion={setRegion} setSearchText={setSearchText} />

      <div className="all-countries p-5 d-flex flex-row justify-content-around flex-wrap">
        {allCountries
          .filter(
            (country) =>
              (region === null &&
                country["name"]["common"]
                  .toLowerCase()
                  .startsWith(searchText.toLowerCase())) ||
              (country["region"] === region &&
                country["name"]["common"]
                  .toLowerCase()
                  .startsWith(searchText.toLowerCase()))
          )
          .map((country) => (
            <CountryCard
              key={country["name"]["official"]}
              name={country["name"]["common"]}
              population={country["population"]}
              region={country["region"]}
              capital={country["capital"]}
              flags={country["flags"]}
            />
          ))}
      </div>
    </>
  );
};

export default Home;
