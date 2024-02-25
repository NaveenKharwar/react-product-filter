import React, { useContext } from "react";

import { DatabaseContext } from "../../context/DatabaseContext";

const CheckBoxFilter = () => {
  const {
    setCategory,
    UniqueCategories,
    isChecked,
    setIsChecked,
    setActiveButton,
  } = useContext(DatabaseContext);

  const checkboxHandler = (event) => {
    const { value, checked } = event.target;

    setIsChecked((prevState) => {
      return {
        ...prevState,
        [value]: checked,
      };
    });
    setCategory(null);
    setActiveButton(null);
  };

  return (
    <div className="border-t-2 pb-6">
      <h3 className="pb-6 pt-3 text-xl font-bold text-gray-700">
        Product type
      </h3>
      {UniqueCategories.map((item, index) => {
        return (
          <div key={index} className="mb-4 flex items-center">
            <input
              type="checkbox"
              value={item}
              checked={isChecked[item]}
              onChange={checkboxHandler}
              id={item}
              className="bg-ring-blue-500  h-5 w-5 cursor-pointer rounded border-gray-300 bg-gray-100 text-blue-600 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label
              htmlFor={item}
              className="ms-2  cursor-pointer text-lg font-medium text-gray-900"
            >
              {item.replace(/-/g, " ")}
            </label>
          </div>
        );
      })}
    </div>
  );
};
export default CheckBoxFilter;
