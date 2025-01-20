'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// 範例資料網址: https://my-json-server.typicode.com/eyesofkids/json-fake-data/products
export default function ProductPage() {
  const [products, setProducts] = useState([])

  // 向伺服器fetch的函式
  const getProducts = async () => {
    const url =
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'

    try {
      const res = await fetch(url)
      const data = await res.json()
      // 觀察資料
      console.log(data)

      // 設定到products狀態 ==> 重新渲染
      if (Array.isArray(data)) {
        // 保持狀態更動時都是一致的資料類型(陣列)
        setProducts(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // 樣式2: 第一次渲染後，和伺服器fetch資料=>設定到products狀態
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <h1>商品列表頁</h1>
      <hr />
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link href={`/cs-07-effect/product/${product.id}`}>
                {product.name}/{product.price}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}