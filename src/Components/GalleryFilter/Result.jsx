import React, { useContext } from "react";

import { DatabaseContext } from "../../context/DatabaseContext";

const Result = () => {
  const { category, isChecked } = useContext(DatabaseContext);

  return (
    <p className="my-3 capitalize">
      {Object.values(isChecked).some((value) => value === true) == false ? (
        <span className="mb-1 mr-3 inline-block rounded-md bg-amber-300 p-2">
          {category === null ? "All Items" : category.replace(/-/g, " ")}
        </span>
      ) : (
        <>
          {Object.keys(isChecked).map((item, index) => {
            if (isChecked[item]) {
              return (
                <span
                  className="mb-1 mr-3 inline-block rounded-md bg-amber-300 p-2"
                  key={index}
                >
                  {item.replace(/-/g, " ")}
                </span>
              );
            }
            return null;
          })}
        </>
      )}
    </p>
  );
};

export default Result;
