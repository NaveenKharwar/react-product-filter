import React, { useContext } from "react";

import AllItems from "./AllItems";
import ButtonFilter from "../ButtonFilter/ButtonFilter";
import Result from "./Result";

import { DatabaseContext } from "../../context/DatabaseContext";

const GalleryFilter = () => {
  const { data, category, isChecked } = useContext(DatabaseContext);

  const filteredData = data.filter(
    (item) =>
      isChecked[item.category] ||
      Object.values(isChecked).every((value) => !value),
  );

  return (
    <>
      <ButtonFilter />
      <Result />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((item) => (
          <React.Fragment key={item.id}>
            {(category === null || category === item.category) && (
              <AllItems
                key={item.id}
                title={item.title}
                description={item.description}
                rating={item.rating}
                price={item.price}
                thumbnail={item.thumbnail}
                category={item.category}
                brand={item.brand}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default GalleryFilter;
