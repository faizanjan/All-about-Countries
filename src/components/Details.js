import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "../ThemeContext";

let Details = ({ }) => {

  const isDarkMode = useTheme();

  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = new URL(window.location.href);
    const countryCode = url.searchParams.get("countryCode");
    fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data[0]);
        setIsLoading(false);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
        setIsLoading(false);
      });
  });

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading indicator
  }

  let currencies = [];
  for (let index in country.currencies) {
    currencies.push(country.currencies[index]["name"]);
  }

  let languages = [];
  for (let index in country.languages) {
    languages.push(country.languages[index]+", ");
  }

  return (
    <div
      className={
        isDarkMode ? " text-light bg-secondary" : " text-dark bg-light"
      }
      style={{ height: "100vh" }}
    >
      <Link
        to="/"
        className={
          "btn border-light px-5 py-2 shadow ms-5 my-5" +
          (isDarkMode
            ? " text-light bg-secondary border-dark"
            : " text-dark bg-light")
        }
      >
        &#8678; Back
      </Link>
      <div
        className={
          "card mb-3 mx-auto border-none" +
          (isDarkMode ? " text-light bg-dark" : " text-dark bg-light")
        }
        style={{ width: "80vw" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={country?.flags?.png}
              className="img-fluid rounded-start w-100 h-100"
              alt={country?.flags?.alt}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body m-5 px-5 ">
              <h1 className="card-title">{country["name"]["common"]}</h1>

              <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                <li className="card-text">
                  Native Name :
                  <span className="text-muted">
                    {country["name"]["official"]}
                  </span>
                </li>
                <li className="card-text">
                  Population :
                  <span className="text-muted">{country["population"]}</span>
                </li>
                <li className="card-text">
                  Region :{" "}
                  <span className="text-muted">{country["region"]}</span>
                </li>
                <li className="card-text">
                  Sub Region :{" "}
                  <span className="text-muted">{country["subregion"]}</span>
                </li>
                <li className="card-text">
                  Capital :{" "}
                  <span className="text-muted">{country["capital"]}</span>
                </li>
                <li className="card-text">
                  Currency : <span className="text-muted">{currencies}</span>
                </li>
                <li className="card-text">
                  Languages : <span className="text-muted">{languages}</span>
                </li>
              </ul>

              <div className="border-countries">
                <span>Border Countries: </span>

                {country.borders?.map((code) => (
                  <Link
                    key={code}
                    className={
                      "btn btn-outline-dark m-2" +
                      (isDarkMode
                        ? " text-light border-light bg-dark"
                        : " text-dark bg-light")
                    }
                    to={"/details?countryCode=" + code}
                  >
                    {code}
                  </Link>
                )) || "N/A"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
