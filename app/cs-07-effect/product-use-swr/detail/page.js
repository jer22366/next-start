'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Oval } from 'react-loader-spinner'
import useSWR from 'swr'
// swr要使用的獲取函式
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function DetailseFetchPage() {
  // 可以從網址上的搜尋參數取得productCode參數
  const searchParams = useSearchParams()
  const productCode = searchParams.get('productCode')
  // 注意data應為物件資料類型才渲染
  const { data, isLoading, error } = useSWR(
    `https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/${productCode}`,
    fetcher
  )

  // 載入動畫
  const spinnerArea = (
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

  // 真正要呈現的伺服器端資料，注意data應為物件資料類型才渲染
  const dataArea = (
    <>
      <p>ID: {data?.id}</p>
      <p>名稱: {data?.name}</p>
      <p>價格: {data?.price}</p>
    </>
  )

  return (
    <>
      <h1>商品詳細頁</h1>
      <Link href="/cs-07-effect/product-use-swr">回列表頁</Link>
      <hr />
      {isLoading ? spinnerArea : dataArea}
    </>
  )
}