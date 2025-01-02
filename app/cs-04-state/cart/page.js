'use client'

import { useState } from 'react'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
]

export default function ShoppingCartPage() {
  const [products, setProducts] = useState(initialProducts)

  const onIncrease =(productId) => {
    const nextProducts = products.map((v) => {
      // 在陣列中找到id為productId的物件，並將count+1
      if (v.id === productId) {
        // 在陣列中找到id為productId的物件，並將count+1
        return { ...v, count: v.count + 1 };
      }
      return v;
    });

    setProducts(nextProducts);
  }
  const onDecrease =(productId) => {
    const nextProducts = products.map((v) => {
      // 在陣列中找到id為productId的物件，並將count-1
      if (v.id === productId) {
        // 在陣列中找到id為productId的物件，並將count-1
        return { ...v, count: v.count - 1 };
      }
      
      return v;
    });

    setProducts(nextProducts);
  }
  // 刪除商品
  const onRemove = (productId) => {
    const nextProducts = products.filter((v) => {
      return v.id !== productId;
    })
    setProducts(nextProducts);
  }
  return (
    <ul>
      {products.map((product) => (
        
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)

          <button onClick={() => {
            onIncrease(product.id)
          }}>+</button>
          <button onClick={() => {
            // 先計算如果按下減按鈕後，商品數量會變成多少
            const nextCount = product.count - 1;
            // 判斷商品數量是否為0 是0就刪除商品 不是就更新商品數量
            if(nextCount <= 0){
              if(confirm('確定要刪除商品嗎?')){
                onRemove(product.id)
              }
            }else{
              onDecrease(product.id)
            }
          }}>–</button>
        </li>
      ))}
    </ul>
  )
}
