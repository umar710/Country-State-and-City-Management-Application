import React, { useState } from "react";
import CityList from "./CityList";

const StateList = ({ countryId, states, setCountries, countries }) => {
  const [showCities, setShowCities] = useState(null);

  const handleAddState = () => {
    const name = prompt("Enter state name:");
    if (name) {
      const updatedCountries = countries.map((country) =>
        country.id === countryId
          ? {
              ...country,
              states: [...country.states, { id: Date.now(), name, cities: [] }],
            }
          : country
      );
      setCountries(updatedCountries); // Use setCountries here
    }
  };

  const handleEditState = (stateId, currentName) => {
    const newName = prompt("Enter new state name:", currentName);
    if (newName) {
      const updatedCountries = countries.map((country) =>
        country.id === countryId
          ? {
              ...country,
              states: country.states.map((state) =>
                state.id === stateId ? { ...state, name: newName } : state
              ),
            }
          : country
      );
      setCountries(updatedCountries); // Use setCountries here
    }
  };

  const handleDeleteState = (stateId) => {
    if (window.confirm("Are you sure you want to delete this state?")) {
      const updatedCountries = countries.map((country) =>
        country.id === countryId
          ? {
              ...country,
              states: country.states.filter((state) => state.id !== stateId),
            }
          : country
      );
      setCountries(updatedCountries); // Use setCountries here
    }
  };

  return (
    <div>
      <button onClick={handleAddState}>Add State</button>
      <ul>
        {states.map((state) => (
          <li key={state.id}>
            <span>{state.name}</span>
            <button onClick={() => handleEditState(state.id, state.name)}>
              Edit
            </button>
            <button onClick={() => handleDeleteState(state.id)}>Delete</button>
            <button
              onClick={() =>
                setShowCities(showCities === state.id ? null : state.id)
              }
            >
              {showCities === state.id ? "Hide Cities" : "Show Cities"}
            </button>
            {showCities === state.id && (
              <CityList
                stateId={state.id}
                cities={state.cities}
                setCountries={setCountries} // Pass setCountries here
                countries={countries}
                countryId={countryId}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StateList;
