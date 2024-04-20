"use client";
import { ShopContext } from "../../../../../context/shop-context";
import React, { useContext } from "react";

function Item(props) {
  const { id, title, image, price } = props;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];

  return (
    <div key={id} className="product">
      <div className="content">
        <img src={image} alt={title} className="image" />
        <p className="title">
          {id}. {title}
        </p>
        <p className="price">{price}円</p>
      </div>
      <button className="addToCartBtn" onClick={() => addToCart(id)}>
        カートに追加する {cartItemCount > 0 && <span>({cartItemCount}個)</span>}
      </button>
    </div>
  );
}

export default Item;
