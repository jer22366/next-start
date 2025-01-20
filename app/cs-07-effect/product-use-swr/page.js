'use client'

import Link from 'next/link'
import { Oval } from 'react-loader-spinner'
import useSWR from 'swr'
// swr要使用的獲取函式
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function ProductPage() {
  const url =
    'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'

  // 注意data必須為陣列資料類型才render
  const { data, isLoading, error } = useSWR(url, fetcher)

  if (isLoading) {
    return (
      <Oval
        visible={true}
        height="40"
        width="40"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    )
  }

  return (
    <>
      <h1>商品列表頁</h1>
      <hr />
      <ul>
        {/* 注意data必須為陣列資料類型才render */}
        {data?.map((product) => {
          return (
            <li key={product.id}>
              <Link
                href={`/cs-07-effect/product-use-swr/detail?productCode=${product.id}`}
              >
                {product.name}/{product.price}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}