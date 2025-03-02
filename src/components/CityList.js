import React from "react";

const CityList = ({ stateId, cities, setCountries, countries, countryId }) => {
  const handleAddCity = () => {
    const name = prompt("Enter city name:");
    if (name) {
      const updatedCountries = countries.map((country) =>
        country.id === countryId
          ? {
              ...country,
              states: country.states.map((state) =>
                state.id === stateId
                  ? {
                      ...state,
                      cities: [...state.cities, { id: Date.now(), name }],
                    }
                  : state
              ),
            }
          : country
      );
      setCountries(updatedCountries); // Use setCountries here
    }
  };

  const handleDeleteCity = (cityId) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      const updatedCountries = countries.map((country) =>
        country.id === countryId
          ? {
              ...country,
              states: country.states.map((state) =>
                state.id === stateId
                  ? {
                      ...state,
                      cities: state.cities.filter((city) => city.id !== cityId),
                    }
                  : state
              ),
            }
          : country
      );
      setCountries(updatedCountries); // Use setCountries here
    }
  };

  return (
    <div>
      <button onClick={handleAddCity}>Add City</button>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            <span>{city.name}</span>
            <button onClick={() => handleDeleteCity(city.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;
