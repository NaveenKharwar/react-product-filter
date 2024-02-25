import React, { useState, useEffect, useContext } from "react";

import GalleryFilter from "./Components/GalleryFilter/GalleryFilter";
import CheckBoxFilter from "./Components/CheckBoxFilter/CheckBoxFilter";

import { DatabaseContext } from "./context/DatabaseContext";
import DropDownFilter from "./Components/DropDownFilter/DropDownFilter";

function App() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState(null);
  const [isChecked, setIsChecked] = useState({});
  const [activeButton, setActiveButton] = useState("");

  const USERS = "https://dummyjson.com/products?limit=30";

  const FetchInfo = async () => {
    try {
      const response = await fetch(USERS);
      if (!response.ok) {
        throw new Error("Filed to fetch data");
      }

      const database = await response.json();
      setData(database.products);

      const initialState = {};
      database.products.forEach((item) => {
        initialState[item.category] = false;
      });
      setIsChecked(initialState);
    } catch {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchInfo();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const UniqueCategories = [...new Set(data.map((item) => item.category))];

  return (
    <DatabaseContext.Provider
      value={{
        data,
        category,
        setCategory,
        UniqueCategories,
        isChecked,
        setIsChecked,
        activeButton,
        setActiveButton,
      }}
    >
      <section className="mb-20 px-4 md:px-0">
        <div className="mb-20 bg-orange-200 py-20">
          <h1 className="font-display text-center text-5xl font-bold tracking-tighter text-gray-700 sm:text-7xl">
            Types of Filters
          </h1>
        </div>
        <div className="container relative mx-auto flex flex-wrap md:flex-nowrap">
          <aside className="static top-10 h-auto w-full md:sticky md:h-screen md:w-4/12">
            <div className="pr-0 md:pr-20">
              <h2 className="pb-6 text-lg font-bold">Filter:</h2>
              <CheckBoxFilter />
              <DropDownFilter />
            </div>
          </aside>
          <div className="w-full md:w-8/12">
            <GalleryFilter />
          </div>
        </div>
      </section>
    </DatabaseContext.Provider>
  );
}

export default App;
