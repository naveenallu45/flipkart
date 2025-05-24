import React, { useState } from 'react';

const Dropdown = () => {
  const [country, setCountry] = useState('');

  const HandleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <select value={country} onChange={HandleChange}>
        <option value="">Select a country</option>
        <option value="india">India</option>
        <option value="pak">Pakistan</option>
        <option value="usa">USA</option>
      </select>
      <p>You picked country: {country}</p>
    </div>
  );
};

export default Dropdown;
