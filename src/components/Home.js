import { useState } from "react";
import allCountries from "../allCountries";
import CountryCard from "./CountryCard";
import SearchAndFilter from "./SearchAndFilter";

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
              country["name"]["common"]
                .toLowerCase()
                .startsWith(searchText.toLowerCase()) &&
              (region === null || country["region"] === region)
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
