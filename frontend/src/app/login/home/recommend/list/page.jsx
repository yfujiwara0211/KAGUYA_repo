"use client";
import React, { useContext } from "react";
import "./shop.css";
import Item from "./item";
import { ShopContext } from "../../../../../context/shop-context";

function Shop() {
  const { items } = useContext(ShopContext);

  return (
    <div className="shop">
      <div className="products">
        {items.map((item) => (
          <Item
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
