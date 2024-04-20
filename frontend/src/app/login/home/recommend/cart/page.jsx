"use client";

import React, { useContext } from "react";
import { useRouter } from 'next/navigation';
import "./cart.css";
import CartItem from "./cartItem";
import { ShopContext } from "../../../../../context/shop-context";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../../../theme/theme'

const Cart = () => {
  const { items, cartItems, getTotalCartAmount, checkout } =
    useContext(ShopContext);
  // 小数点第2位で四捨五入
  const totalAmount = Math.round(getTotalCartAmount() * 100) / 100;

  const router = useRouter();

  const handleCheckout = () => {
    const cartData = { items, cartItems, totalAmount };
    // cartData内の文字列をUnicodeエスケープシーケンスに変換する
    const escapedCartData = JSON.parse(JSON.stringify(cartData), (key, value) => {
      if (typeof value === 'string') {
        return value.replace(/[^\x00-\x7F]/g, (ch) => '\\u' + ('0000' + ch.charCodeAt(0).toString(16)).slice(-4));
      }
      return value;
    });

    const cartDataString = encodeURIComponent(btoa(JSON.stringify(escapedCartData)));
    router.push(`/login/home/recommend/cart/checkout?cartData=${cartDataString}`);
  };

  return (
    <>
    <ThemeProvider theme={theme}>
        <div className="cart">
          <div>
            <h1>カートの商品</h1>
          </div>
          <div className="cart">
            {items.map((item) => {
              if (cartItems[item.id] !== 0) {
                return <CartItem data={item} key={item.id} />;
              }
            })}
          </div>

          {totalAmount > 0 ? (
            <div className="checkout">
              <p className="total">合計: ${totalAmount}</p>
              <div>
                <button
                onClick={() => {
                  checkout();
                }}
                >
                  カートを空にする
                </button>
                <button onClick={handleCheckout}> {/* 購入するボタンに handleCheckout 関数を紐付け */}
                  購入する
                </button>
             </div>
            </div>
          ) : (
            <h1> cart is empty</h1>
          )}
        </div>
        </ThemeProvider>
      </>
  );
};

export default Cart;
