'use client'

import { useCart } from '@/hooks/use-cart'
import Link from 'next/link'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function CartPage() {
  const { cartItems, totalAmount, totalQty, onDecrease, onIncrease, onRemove } =
    useCart()

  // 刪除的訊息
  const notifyAndRemove = (cartItemName, cartItemId) => {
    const MySwal = withReactContent(Swal)

    MySwal.fire({
      title: '你確定要刪除?',
      text: '這個動作將無法復原',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: '取消',
      confirmButtonText: '是的，我要進行刪除!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '刪除成功!',
          text: `已從購物車刪除 ${cartItemName}!`,
          icon: 'success',
        })

        // 進行刪除
        onRemove(cartItemId)
      }
    })
  }

  return (
    <>
      <h1>購物車</h1>
      <Link href="/cs-05-props/shop/product">商品列表</Link>
      <hr />
      <ul>
        {cartItems.map((cartItem) => (
          <li key={cartItem.id}>
            {cartItem.name} (NT${cartItem.price})(<b>{cartItem.count}</b>)
            <button
              onClick={() => {
                onIncrease(cartItem.id)
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                // 先計算如果按下減按鈕，商品數量會變為多少
                const nextCount = cartItem.count - 1
                // 最少要買一樣
                if (nextCount > 0) {
                  onDecrease(cartItem.id)
                }
              }}
            >
              –
            </button>
            <button
              onClick={() => {
                // 跳出提示
                notifyAndRemove(cartItem.name, cartItem.id)
                // 提示使用者
                // if (confirm('你確定要刪除此商品?')) {
                //   onRemove(cartItem.id)
                // }
              }}
            >
              刪除
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <p>
        總數量: {totalQty} 總金額: {totalAmount}
      </p>
    </>
  )
}