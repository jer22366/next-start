'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function DetailPage() {
  // 可以從params.productCode取得目前的動態路由分段
  const params = useParams()
  // 定義商品物件
  const [product, setProduct] = useState({
    id: 0,
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  })

  // 向伺服器fetch的函式
  const getProduct = async (productCode) => {
    const url = `https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/${productCode}`

    try {
      const res = await fetch(url)
      const data = await res.json()
      // 觀察資料
      console.log(data)

      // 設定到products狀態 ==> 重新渲染
      if (data && data?.id) {
        // 保持狀態更動時都是一致的資料類型(物件)
        setProduct(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // 樣式2: 第一次渲染後，和伺服器fetch資料=>設定到products狀態
  useEffect(() => {
    // params中的變數名稱是對應動態路由資料夾的命名
    getProduct(params?.productCode)
  }, [])

  
  return (
    <>
      <h1>商品詳細頁</h1>
      <Link href="/cs-07-effect/product">回列表頁</Link>
      <hr />
      <p>ID: {product.id}</p>
      <p>名稱: {product.name}</p>
      <p>價格: {product.price}</p>
    </>
  )
}