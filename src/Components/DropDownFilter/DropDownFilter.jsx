import React, { useContext } from "react";

import { DatabaseContext } from "../../context/DatabaseContext";

const DropDownFilter = () => {
  const { UniqueCategories, setCategory, setIsChecked } =
    useContext(DatabaseContext);

  const handleDropdown = (event) => {
    const selectedCategory = event.target.value;
    const initialState = {};

    UniqueCategories.forEach((category) => {
      initialState[category] = false;
    });
    setIsChecked(initialState);
    setCategory(selectedCategory);
  };
  return (
    <div className="border-t-2 pb-6">
      <h3 className="pb-6 pt-3 text-xl font-bold text-gray-700">Categories</h3>
      <form className="w-full md:w-5/6">
        <select
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm capitalize text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          onChange={handleDropdown}
          defaultValue="all"
        >
          <option value="all" disabled hidden>
            Choose here
          </option>
          {UniqueCategories.map((item) => {
            return (
              <option key={item} value={item}>
                {item.replace(/-/g, " ")}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
};

export default DropDownFilter;
