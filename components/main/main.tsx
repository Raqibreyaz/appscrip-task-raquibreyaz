"use client";

import { Filter, MobileFilter } from "@/components/main/filter/filter";
import { TopBar } from "@/components/main/top-bar/top-bar";
import { ProductList } from "./product-list/product-list";
import styles from "./main.module.css";
import { useEffect, useState } from "react";
import { fetchCategories, fetchProducts } from "@/utils/products";

export interface productTypes {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  isFavorite: boolean;
}

export const Main = () => {
  // for opening and closing the filter
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  // for showing loading state
  const [loading, setLoading] = useState(false);
  // for keeping all categories
  const [categories, setCategories] = useState<string[] | []>([]);
  // for keeping products
  const [products, setProducts] = useState<productTypes[] | []>([]);
  // for fetching on specific category
  const [query, setQuery] = useState<{ category: string; sort: string } | null>(
    null
  );

  const totalItems = products.length;

  // on query change fetch products for that category
  useEffect(() => {
    setLoading(true);
    fetchProducts(query).then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }, [query]);

  // one time fetch categories
  useEffect(() => {
    fetchCategories().then((res) => setCategories(res));
  }, []);

  return (
    <main>
      <TopBar
        setFilterOpen={setMobileFilterOpen}
        filterOpen={mobileFilterOpen}
        totalItems={totalItems}
        query={query}
        setQuery={setQuery}
      />
      <div className={`flex ${styles["filter-products-container"]}`}>
        <div className={styles["mobile-filter"]}>
          <MobileFilter
            mobileFilterOpen={mobileFilterOpen}
            setMobileFilterOpen={setMobileFilterOpen}
            categories={categories}
            setQuery={setQuery}
          />
        </div>
        <div className={styles["desktop-filter"]}>
          {categories.length > 0 && (
            <Filter
              filterOpen={mobileFilterOpen}
              categories={categories}
              setQuery={setQuery}
            />
          )}
        </div>
        {loading ? (
          <h1 className={`text-center flex-items-center flex-justify-center`}>
            Loading...
          </h1>
        ) : (
          <ProductList products={products} setProducts={setProducts} />
        )}
      </div>
    </main>
  );
};
