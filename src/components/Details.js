import { Link } from "react-router-dom";
import allCountries from "../allCountries";

let Details = ({ country, setCountry }) => {
  let { name, population, region, subregion, capital, borders } = country;

  let currencies = [];
  for (let index in country.currencies) {
    currencies.push(country.currencies[index]["name"]);
  }
  let languages = [];
  for (let index in country.languages) {
    languages.push(country.languages[index]);
  }

  let borderCountries = allCountries.filter((country) =>
    borders && borders.includes(country["fifa"])
  );

  return (
    <>
      <Link to="/" className="btn border-light px-5 py-2 shadow ms-5 my-5">
        &#8678; Back
      </Link>
      <div className="card mb-3 mx-auto border-none" style={{ width: "80vw" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={country["flags"]["png"]}
              className="img-fluid rounded-start w-100 h-100"
              alt={country["flags"]["alt"]}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body m-5 px-5 ">
              <h1 className="card-title">{name["common"]}</h1>

              <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                <li className="card-text">
                  Native Name :
                  <span className="text-muted">{name["official"]}</span>
                </li>
                <li className="card-text">
                  Population :<span className="text-muted">{population}</span>
                </li>
                <li className="card-text">
                  Region : <span className="text-muted">{region}</span>
                </li>
                <li className="card-text">
                  Sub Region : <span className="text-muted">{subregion}</span>
                </li>
                <li className="card-text">
                  Capital : <span className="text-muted">{capital}</span>
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

                {borderCountries.map((country) => (
                  <button
                    key={country["cnn3"]}
                    className="btn btn-outline-dark mx-2"
                    onClick={() => {
                      setCountry(country);
                    }}
                  >
                    {country["name"]["common"]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
