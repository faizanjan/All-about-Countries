let SearchAndFilter = ({ setRegion, setSearchText, isDarkMode }) => {
  let regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div
      className={
        "search-and-filter d-flex flex-row justify-content-between align-items-center mx-5 pt-5"
      }
    >
      <input
        type="text"
        className={
          "border shadow px-5 py-3 w-25 rounded" +
          (isDarkMode
            ? " text-light bg-dark border-secondary"
            : " text-dark bg-light")
        }
        placeholder="Search for a country..."
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />

      {/* Filter By Region Drop-Down */}
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          Filter by Region
        </button>
        <ul className={"dropdown-menu"+ (isDarkMode? " text-light bg-secondary": " text-dark bg-light")}>
          {regions.map((region) => (
            <li
              key={region}
              className={
                "dropdown-item py-2" +
                (isDarkMode
                  ? " text-light bg-secondary"
                  : " text-dark bg-light")
              }
              id={region}
              onClick={() => {
                setRegion(region);
              }}
            >
              {region}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchAndFilter;
