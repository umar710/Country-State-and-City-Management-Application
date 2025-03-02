import React, { useState } from "react";
import StateList from "./StateList";

const CountryList = ({
  countries,
  addCountry,
  editCountry,
  deleteCountry,
  setCountries,
}) => {
  const [showStates, setShowStates] = useState(null);

  const handleAddCountry = () => {
    const name = prompt("Enter country name:");
    if (name) addCountry(name);
  };

  const handleEditCountry = (id, currentName) => {
    const newName = prompt("Enter new country name:", currentName);
    if (newName) editCountry(id, newName);
  };

  const handleDeleteCountry = (id) => {
    if (window.confirm("Are you sure you want to delete this country?")) {
      deleteCountry(id);
    }
  };

  return (
    <div>
      <button onClick={handleAddCountry}>Add Country</button>
      <ul>
        {countries.map((country) => (
          <li key={country.id}>
            <span>{country.name}</span>
            <button onClick={() => handleEditCountry(country.id, country.name)}>
              Edit
            </button>
            <button onClick={() => handleDeleteCountry(country.id)}>
              Delete
            </button>
            <button
              onClick={() =>
                setShowStates(showStates === country.id ? null : country.id)
              }
            >
              {showStates === country.id ? "Hide States" : "Show States"}
            </button>
            {showStates === country.id && (
              <StateList
                countryId={country.id}
                states={country.states}
                setCountries={setCountries} // Pass setCountries here
                countries={countries}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
