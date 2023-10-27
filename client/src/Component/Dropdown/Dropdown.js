import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dropdown.css";
const Dropdown = (props) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios
        .get("http://localhost:8000/collection-names")
        .then((res) => {
          console.log(res.data);
          setOptions(res.data);
        })
        .catch((err) => console.log(err));
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
    props.onCharngeFilter(event.target.value);
  };
  console.log(options);
  return (
    <div className="dropdown-container">
      <select
        value={selectedOption}
        onChange={handleSelect}
        className="dropdown-select"
      >
        <option value="">Select an option </option>
        {options.map((option) => (
        <option key={option.id} value={option.value}>

        {option}
        </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
