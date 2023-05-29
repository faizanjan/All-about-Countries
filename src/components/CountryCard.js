import { Link } from "react-router-dom";

let CountryCard = ({ country, setCountry }) => {
  let { flags, name, population, region, capital } = country;
  return (
    <Link
      to={"/details"}
      className="card shadow m-4"
      style={{ width: "18rem", textDecoration: "none", color: "inherit" }}
      onClick={() => {
        setCountry(country);
      }}
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
