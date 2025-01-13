'use client'

import { useState } from 'react'

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

// const initialCartItems = [
//   {
//     id: 0,
//     name: '小熊餅乾',
//     price: 50,
//     count: 1,
//   },
//   {
//     id: 1,
//     name: '巧克力豆餅乾',
//     price: 80,
//     count: 5,
//   },
//   {
//     id: 2,
//     name: '小老板海苔',
//     price: 100,
//     count: 2,
//   },
// ]

export default function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState([])

  // 遞增商品數量
  const onIncrease = (cartItemId) => {
    const nextCartItems = cartItems.map((v) => {
      // 在陣列中找到id為cartItemId的物件，將count屬性+1
      if (v.id === cartItemId) return { ...v, count: v.count + 1 }
      // 其它沒有影響的物件值直接返回
      else return v
    })

    // 設定到狀態
    setCartItems(nextCartItems)
  }

  // 遞減商品數量
  const onDecrease = (cartItemId) => {
    const nextCartItems = cartItems.map((v) => {
      // 在陣列中找到id為cartItemId的物件，將count屬性+1
      if (v.id === cartItemId) return { ...v, count: v.count - 1 }
      // 其它沒有影響的物件值直接返回
      else return v
    })

    // 設定到狀態
    setCartItems(nextCartItems)
  }

  // 刪除商品
  const onRemove = (cartItemId) => {
    const nextCartItems = cartItems.filter((v) => {
      return v.id !== cartItemId
    })
    // 設定到狀態
    setCartItems(nextCartItems)
  }

  // 加入商品到購物車
  const onAdd = (product) => {
    // 判斷此商品是否已經在購物車裡
    const foundIndex = cartItems.findIndex((v) => v.id === product.id)

    if (foundIndex !== -1) {
      // 如果有找到==>遞增商品數量
      onIncrease(product.id)
    } else {
      // 沒找到===>新增商品到購物車
      // product和item(購物車項目)相比，少了一個數量屬性count
      const newItem = { ...product, count: 1 }
      // 加到購物車最前面
      const nextCartItems = [newItem, ...cartItems]
      // 設定到狀態
      setCartItems(nextCartItems)
    }
  }

  // 官網的解答
  // function handleDecreaseClick(cartItemId) {
  //   // 遞減只要有按-按鈕一定會作
  //   // 一定只能用let，因為下面的filter是重覆指定
  //   let nextCartItems = cartItems.map((cartItem) => {
  //     if (cartItem.id === cartItemId) {
  //       return {
  //         ...cartItem,
  //         count: cartItem.count - 1,
  //       }
  //     } else {
  //       return cartItem
  //     }
  //   })
  //   // 過濾，只保留商品數量大於0的在新狀態中
  //   nextCartItems = nextCartItems.filter((p) => p.count > 0)

  //   // 如果準備要設到狀態的新物件陣列nextCartItems的項目數，比目前的cartItems少。代表要作的是"刪除"的動作
  //   if (cartItems.length > nextCartItems.length) {
  //     // 刪除
  //     // 提示使用者
  //     if (confirm('你確定要刪除此商品?')) {
  //       setCartItems(nextCartItems)
  //     }
  //   } else {
  //     // 遞減
  //     setCartItems(nextCartItems)
  //   }
  // }

  // 示範如果用for迴圈來作加總數量
  // const calcTotalQty = () => {
  //   let total = 0
  //   for (let i = 0; i < cartItems.length; i++) {
  //     total += cartItems[i].count
  //   }
  //   return total
  // }

  // 計算總數量&總金額(使用reduce, 累加/歸納)
  const totalQty = cartItems.reduce((acc, v) => acc + v.count, 0)
  const totalAmount = cartItems.reduce((acc, v) => acc + v.count * v.price, 0)

  return (
    <>
      <h2>商品列表</h2>
      <ul>
        {productList.map((product) => {
          return (
            <li key={product.id}>
              {product.name}(NT${product.price})
              <button
                onClick={() => {
                  onAdd(product)
                }}
              >
                加入購物車
              </button>
            </li>
          )
        })}
      </ul>
      <hr />
      <h2>購物車</h2>
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
                // 判斷如果按了後商品數量<=0，則進行刪除，否則作遞減
                if (nextCount <= 0) {
                  // 提示使用者
                  if (confirm('你確定要刪除此商品?')) {
                    onRemove(cartItem.id)
                  }
                } else {
                  onDecrease(cartItem.id)
                }
              }}
            >
              –
            </button>
            {/* <button
            onClick={() => {
              handleDecreaseClick(cartItem.id)
            }}
          >
            -(官網)
          </button> */}
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
