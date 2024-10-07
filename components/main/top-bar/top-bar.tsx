"use client";
import styles from "./top-bar.module.css";
import { Dispatch, SetStateAction } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

export const TopBar = ({
  filterOpen,
  setFilterOpen,
  totalItems,
  query,
  setQuery,
}: {
  filterOpen: boolean;
  totalItems: number;
  setFilterOpen: Dispatch<SetStateAction<boolean>>;
  query: { category: string; sort: string } | null;
  setQuery: Dispatch<SetStateAction<{ category: string; sort: string } | null>>;
}) => {
  const sortFields = [
    { name: "recommended", value: "" },
    { name: "price: low to high", value: "asc" },
    { name: "price:high to low", value: "desc" },
  ];

  return (
    <div
      className={`${styles["top-bar-container"]} flex-items-center border-t border-b`}
    >
      {/* will only show on desktop view */}
      <div className={`flex-items-center ${styles["desktop-toggler"]}`}>
        <h2>{totalItems} Total Items</h2>
        <span
          className="flex-items-center"
          onClick={() => setFilterOpen(!filterOpen)}
        >
          {/* showing corresponding icon for open and closed */}
          {filterOpen ? (
            <BiChevronRight className={styles["filter-toggler"]} />
          ) : (
            <BiChevronLeft className={styles["filter-toggler"]} />
          )}
          <button>{filterOpen ? "Hide Filter" : "show filter"}</button>
        </span>
      </div>
      <div className={`${styles["mobile-toggler"]} flex-items-center`}>
        <h2 onClick={() => setFilterOpen(!filterOpen)}>Filter</h2>
      </div>
      {/* sort functionality */}
      <div>
        <select
          name="sortby"
          onChange={(e) => {
            if (e.target.value) {
              setQuery((prevQuery) =>
                prevQuery
                  ? { ...prevQuery, sort: e.target.value }
                  : { category: "", sort: e.target.value }
              );
            }
          }}
          className={styles["sort-by"]}
        >
          {sortFields.map(({ name, value }) => (
            <option
              value={value}
              className={`${styles["sort-field"]} ${
                query?.sort === value ? styles["selected-sort"] : ""
              }`}
              key={name}
            >
              {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
