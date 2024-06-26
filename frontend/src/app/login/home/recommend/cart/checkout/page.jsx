'use client'
import React from "react";
import { useSearchParams } from 'next/navigation';

const CheckoutAll = () => {
    const searchParams = useSearchParams();
    const cartDataString = searchParams.get('cartData');
    const escapedCartData = JSON.parse(atob(decodeURIComponent(cartDataString)));
  
    // Unicodeエスケープシーケンスを元の文字列に戻す
    const cartData = JSON.parse(JSON.stringify(escapedCartData), (key, value) => {
      if (typeof value === 'string') {
        return value.replace(/\\u([\da-fA-F]{4})/g, (_, group) => String.fromCharCode(parseInt(group, 16)));
      }
      return value;
    });

    // カートに入っているアイテムのみを抽出
    const cartItems = cartData.items.filter(item => cartData.cartItems[item.id] > 0);

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">購入が完了しました！</h1>
      <h2 className="text-lg font-semibold mb-2">ご購入ありがとうございます。</h2>
      <h3 className="text-lg font-semibold mb-2">注文内容</h3>
      <ul className="mb-4">
        {cartItems.map((item) => (
          <li key={item.id} className="text-lg">
            <span>{item.title}</span>
            <span className="ml-4">
              {cartData.cartItems[item.id]} 個 × ${item.price} = ${item.price * cartData.cartItems[item.id]}
            </span>
          </li>
        ))}
      </ul>
      <p className="text-lg font-semibold">合計金額: ${cartData.totalAmount}</p>
    </div>
  );
};

export default CheckoutAll;