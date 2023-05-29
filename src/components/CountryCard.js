let CountryCard = ({ name, population, region, capital, flags }) => {
  return (
    <div className="card shadow m-4" style={{ width: "18rem" }}>
      <img
        src={flags["png"]}
        className="card-img-top img-fluid border border-bottom"
        alt={flags["alt"]}
        style={{ height: "10rem" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <ul style={{ listStyle: "none", paddingLeft: "0" }}>
          <li className="card-text">Population : {population}</li>
          <li className="card-text">Region : {region}</li>
          <li className="card-text">Capital : {capital}</li>
        </ul>
      </div>
    </div>
  );
};

export default CountryCard;