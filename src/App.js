import React, { useState } from "react";
import CountryList from "./components/CountryList";

const App = () => {
  const [countries, setCountries] = useState([]);

  const addCountry = (name) => {
    const newCountry = { id: Date.now(), name, states: [] };
    setCountries([...countries, newCountry]);
  };

  const editCountry = (id, newName) => {
    setCountries(
      countries.map((country) =>
        country.id === id ? { ...country, name: newName } : country
      )
    );
  };

  const deleteCountry = (id) => {
    setCountries(countries.filter((country) => country.id !== id));
  };

  return (
    <div className="app">
      <h1>Country, State, and City Management</h1>
      <CountryList
        countries={countries}
        addCountry={addCountry}
        editCountry={editCountry}
        deleteCountry={deleteCountry}
        setCountries={setCountries} // Pass setCountries here
      />
    </div>
  );
};

export default App;
