'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Oval } from 'react-loader-spinner';

export default function DetailSPPage() {
  // 可以從網址上的搜尋參數取得productCode參數
  const searchParams = useSearchParams();
  const productCode = searchParams?.get('productCode');
  // 定義商品物件
  const [product, setProduct] = useState({
    id: 0,
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  });
  //載入動畫狀態(開關/信號)
  const [loading, setLoading] = useState(true);
  const spinnerArea = (
    <Oval
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
  // 向伺服器fetch的函式
  const getProduct = async (productCode) => {
    const url = `https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/${productCode}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      // 觀察資料
      console.log(data);

      // 設定到products狀態 ==> 重新渲染
      if (data && data?.id) {
        // 保持狀態更動時都是一致的資料類型(物件)
        setProduct(data);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 樣式2: 第一次渲染後，和伺服器fetch資料=>設定到products狀態
  useEffect(() => {
    // params中的變數名稱是對應動態路由資料夾的命名
    getProduct(productCode);
  }, []);

  const dataArea = (
    <>
      <p>ID: {product.id}</p>
      <p>名稱: {product.name}</p>
      <p>價格: {product.price}</p>
    </>
  );
  return (
    <>
      <h1>商品詳細頁</h1>
      <Link href="/cs-07-effect/product-sp">回列表頁</Link>
      <hr />
      {loading ? spinnerArea : dataArea}
    </>
  );
}
