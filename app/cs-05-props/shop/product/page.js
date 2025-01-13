'use client'

import { useCart } from '@/hooks/use-cart'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify'


const productList = [
  {
    id: 0,
    name: '小熊餅乾',
    price: 50,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    price: 80,
  },
  {
    id: 2,
    name: '小老板海苔',
    price: 100,
  },
]

export default function ProductPage() {
  // onAdd是從context的useCart勾子來
  const { onAdd } = useCart()
  // 土司通知訊息
  const notify = (productName) => {
    toast.success(`${productName} 已成功加入購物車!`)
  }

  return (
    <>
      <hr />
      <h1>商品列表</h1>
      <Link href="/cs-05-props/shop/cart">購物車</Link>
      <hr />
      <ul>
        {productList.map((product) => {
          return (
            <li key={product.id}>
              {product.name}(NT${product.price})
              <button
                onClick={() => {
                  // 加到狀態
                  onAdd(product)
                  // 跳出訊息
                  notify(product.name)
                }}
              >
                加入購物車
              </button>
            </li>
          )
        })}
      </ul>
      <ToastContainer />
    </>
  )
}