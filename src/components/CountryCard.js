import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";

let CountryCard = ({ country }) => {
  let { flags, name, population, region, capital, cca3 } = country;
  const isDarkMode = useTheme();

  return (
    <Link
      to={"/details?countryCode=" + cca3}
      className={
        "card shadow m-4" +
        (isDarkMode ? " text-light bg-secondary" : " text-dark bg-light")
      }
      style={{ width: "18rem", textDecoration: "none", color: "inherit" }}
    >
      <img
        src={flags["png"]}
        className="card-img-top img-fluid border border-bottom"
        alt={flags["alt"]}
        style={{ height: "10rem" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name["common"]}</h5>
        <ul style={{ listStyle: "none", paddingLeft: "0" }}>
          <li className="card-text">Population : {population}</li>
          <li className="card-text">Region : {region}</li>
          <li className="card-text">Capital : {capital}</li>
        </ul>
      </div>
    </Link>
  );
};

export default CountryCard;
