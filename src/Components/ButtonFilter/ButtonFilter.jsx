import React, { useContext } from "react";

import { DatabaseContext } from "../../context/DatabaseContext";

const ButtonFilter = () => {
  const {
    setCategory,
    UniqueCategories,
    setIsChecked,
    activeButton,
    setActiveButton,
  } = useContext(DatabaseContext);

  const handleButtonClick = (selectedCategory) => {
    const initialState = {};
    UniqueCategories.forEach((category) => {
      initialState[category] = false;
    });
    setIsChecked(initialState);
    setCategory(selectedCategory);
    setActiveButton(selectedCategory);
  };

  return (
    <ul className="mb-10 flex gap-4 overflow-y-hidden whitespace-nowrap pb-3 text-sm">
      <li>
        <button
          className={`rounded-md ${activeButton === "" ? "bg-gray-500" : "bg-gray-800"} px-4 py-2 text-white`}
          onClick={() => {
            handleButtonClick(null);
          }}
        >
          All Items
        </button>
      </li>
      {UniqueCategories.map((item) => {
        return (
          <li key={item}>
            <button
              className={`rounded-md px-4 py-2 capitalize text-white ${activeButton === item ? "bg-gray-500" : "bg-gray-800"}`}
              onClick={() => {
                handleButtonClick(item);
              }}
            >
              {item.replace(/-/g, " ")}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ButtonFilter;
