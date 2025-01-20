'use client'

import Link from 'next/link'
import { useFetch } from '@/hooks/use-fetch'
import { Oval } from 'react-loader-spinner'

export default function ProductPage() {
  const url =
    'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'

  // 注意data必須為陣列資料類型才render
  const { data, loading, error } = useFetch(url)

  if (loading) {
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
                href={`/cs-07-effect/product-use-fetch/detail?productCode=${product.id}`}
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