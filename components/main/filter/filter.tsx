"use client";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./filter.module.css";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { SliderWrapper } from "@/sub-components/slider-wrapper/slider-wrapper";

type QueryTypes = {
  category: string;
  sort: string;
} | null;

interface MobileFilterTypes {
  mobileFilterOpen: boolean;
  setMobileFilterOpen: Dispatch<SetStateAction<boolean>>;
  categories: string[];
  setQuery: Dispatch<SetStateAction<QueryTypes>>;
}

interface FilterTypes {
  filterOpen: boolean;
  categories: string[];
  setQuery: Dispatch<SetStateAction<QueryTypes>>;
}

interface FilterBoxTypes {
  title: string;
  fields: string[];
  setQuery: Dispatch<SetStateAction<QueryTypes>>;
}

export const Filter: React.FC<FilterTypes> = ({
  filterOpen = true,
  categories = [],
  setQuery,
}) => {
  return (
    <div
      className={styles["filter-container"]}
      style={{ display: filterOpen ? "block" : "none" }}
    >
      <div className={`${styles["customizable"]} flex-items-center border-b`}>
        <input type="checkbox" name="customizable" id="customizable" />
        <label htmlFor="customizable">Customizable</label>
      </div>
      <FilterBox title="Categories" fields={categories} setQuery={setQuery} />
    </div>
  );
};

export const MobileFilter: React.FC<MobileFilterTypes> = ({
  mobileFilterOpen,
  setMobileFilterOpen,
  categories,
  setQuery,
}) => {
  return (
    <SliderWrapper
      open={mobileFilterOpen}
      heading="filter"
      setOpen={setMobileFilterOpen}
      childProps={{ filterOpen: true, categories, setQuery }}
      Child={Filter}
    />
  );
};

function FilterBox({ title, fields, setQuery }: FilterBoxTypes) {
  // for opening or collapsing the filter fields
  const [collapsed, setCollapsed] = useState<boolean>(true);

  // keeping track of every checked field
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(fields.length).fill(false)
  );

  // handling checking or unchecking every field
  const handleCheckAll = (checked: boolean) => {
    setCheckedItems(new Array(fields.length).fill(checked)); // Set all checkboxes based on 'checked'

    // when all are selected or unselected then clear the category filter
    setQuery((prevQuery) =>
      prevQuery ? { ...prevQuery, category: "" } : { category: "", sort: "" }
    );
  };

  // updating the checked items history on check
  const handleIndividualCheck = (index: number) => {
    const updatedCheckedItems = [...checkedItems];

    const isChecked = !updatedCheckedItems[index];

    // will trigger refetch only when we checked it
    if (isChecked) {
      setQuery((prevQuery) =>
        prevQuery
          ? { ...prevQuery, category: fields[index] }
          : { sort: "", category: fields[index] }
      );
    }
    updatedCheckedItems[index] = isChecked;

    setCheckedItems(updatedCheckedItems);
  };

  return (
    <div className={`${styles["filter-box"]} border-b`}>
      <div
        onClick={() => setCollapsed(!collapsed)}
        className={`${styles["title-bar"]} flex`}
      >
        <h4>{title}</h4>
        <span className={`${styles["collapse"]}`}>
          {collapsed ? <FaChevronDown /> : <FaChevronUp />}
        </span>
      </div>
      <div
        style={{
          display: !collapsed ? "block" : "none",
        }}
      >
        <div onClick={() => handleCheckAll(true)}>
          <button className={`${styles["all"]}`} type="button">
            All
          </button>
        </div>
        <div>
          <button
            onClick={() => handleCheckAll(false)}
            className={styles["unselect-all"]}
            type="button"
          >
            Unselect all
          </button>
        </div>
        <div>
          {fields.map((name, index) => {
            return (
              <div
                key={name}
                className={`${styles["filter-field"]} flex-items-center`}
              >
                <input
                  type="checkbox"
                  name={name}
                  id={name}
                  checked={!!checkedItems[index]} // Controlled by state
                  onChange={() => handleIndividualCheck(index)} // Handle individual checkbox change
                />
                <label htmlFor={name}>{name}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
