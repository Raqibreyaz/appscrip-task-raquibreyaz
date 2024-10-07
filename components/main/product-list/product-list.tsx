"use client";

import Image from "next/image";
import styles from "./product-list.module.css";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import React, { Dispatch, memo, SetStateAction } from "react";
import { productTypes } from "../main";

export const ProductList: React.FC<{
  products: productTypes[];
  setProducts: Dispatch<SetStateAction<productTypes[]>>;
}> = memo(({ products, setProducts }) => {

  const makeFavorite = (index: number, favorite: boolean) => {
    const updatedProducts = [...products];
    updatedProducts[index].isFavorite = favorite;
    setProducts(updatedProducts);
  };

  return (
    <div
      className={`${styles["product-list-container"]} `}
    >
      {products.map((values, index) => (
        <ProductCard
          {...values}
          key={index}
          isFavorite={!!values.isFavorite}
          index={index}
          makeFavorite={makeFavorite}
        />
      ))}
    </div>
  );
});

interface ProductCardTypes extends productTypes {
  isFavorite: boolean;
  index: number;
  makeFavorite: (id: number, favorite: boolean) => void;
}

function ProductCard({
  title,
  image,
  isFavorite,
  index,
  makeFavorite,
}: ProductCardTypes) {
  return (
    <div className={styles["product-card"]}>
      <div className={styles.image}>
        <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
      </div>
      <div className={styles["product-name-section"]}>
        <h4>{title}</h4>
        <div className={`flex-items-center justify-between`}>
          <p>Sign in or Create an Account to see Pricing</p>
          <span>
            {isFavorite ? (
              <FaHeart
                className={`${styles["heart-icon"]} ${styles["favorite-product"]}`}
                onClick={() => makeFavorite(index, false)}
              />
            ) : (
              <CiHeart
                className={styles["heart-icon"]}
                onClick={() => makeFavorite(index, true)}
              />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
