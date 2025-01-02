'use client';

import { useState } from 'react';

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
    price: 75,
  },
];

const initialCartItems = [
  {
    id: 0,
    name: '小熊餅乾',
    price: 50,
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    price: 80,
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    price: 100,
    count: 2,
  },
];

export default function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const onIncrease = (productId) => {
    const nextcartItems = cartItems.map((v) => {
      // 在陣列中找到id為productId的物件，並將count+1
      if (v.id === productId) {
        // 在陣列中找到id為productId的物件，並將count+1
        return { ...v, count: v.count + 1 };
      }
      return v;
    });

    setCartItems(nextcartItems);
  };
  const onDecrease = (productId) => {
    const nextcartItems = cartItems.map((v) => {
      // 在陣列中找到id為productId的物件，並將count-1
      if (v.id === productId) {
        // 在陣列中找到id為productId的物件，並將count-1
        return { ...v, count: v.count - 1 };
      }

      return v;
    });

    setCartItems(nextcartItems);
  };
  // 刪除商品
  const onRemove = (productId) => {
    const nextcartItems = cartItems.filter((v) => {
      return v.id !== productId;
    });
    setCartItems(nextcartItems);
  };

  // 官網的解答
  function handleDecreaseClick(cartItemId) {
    // 遞減只要有按-按鈕一定會作
    // 一定只能用let，因為下面的filter是重覆指定
    let nextCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === cartItemId) {
        return {
          ...cartItem,
          count: cartItem.count - 1,
        }
      } else {
        return cartItem
      }
    })
    // 過濾，只保留商品數量大於0的在新狀態中
    nextCartItems = nextCartItems.filter((p) => p.count > 0)

    // 如果準備要設到狀態的新物件陣列nextCartItems的項目數，比目前的cartItems少。代表要作的是"刪除"的動作
    if (cartItems.length > nextCartItems.length) {
      // 刪除
      // 提示使用者
      if (confirm('你確定要刪除此商品?')) {
        setCartItems(nextCartItems)
      }
    } else {
      // 遞減
      setCartItems(nextCartItems)
    }
  }

  //計算總數量&總金額(使用reduce, 累加/歸納)
  const totalQty = cartItems.reduce((acc, v) => acc + v.count, 0);
  const totalAmount = cartItems.reduce((acc, v) => acc + v.count * v.price, 1);

  // 加入商品到購物車
  const onAdd = (product) => {
    const foundIndex = cartItems.findIndex((v) => v.id === product.id);

    if(foundIndex !== -1){
      //有找到 ===> 遞增商品數量
      onIncrease(product.id);
    }else{
      //沒找到 ===> 新增商品到購物車
      // product 和 itme(購物車項目)相比，少一個數量屬性count
      const newItem = { ...product,count : 1 };

      // 家道購物車最前面
      const nextcartItems = [newItem, ...cartItems];
      
      
      setCartItems(nextcartItems);
    }
      
  };

  return (
    <>
      <h2>商品列表</h2>
      <ul>
        {productList.map((product) => {
          return (
            <li key={product.id}>
              {product.name}
              <button onClick={() => onAdd(product)}>加入購物車</button>
            </li>
          );
        })}
      </ul>
      <hr />
      <h2>購物車</h2>
      <ul>
        {cartItems.map((product) => (
          <li key={product.id}>
            {product.name} (<b>NT{product.price}</b>) (<b>{product.count}</b>)
            <button
              onClick={() => {
                onIncrease(product.id);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                // 先計算如果按下減按鈕後，商品數量會變成多少
                const nextCount = product.count - 1;
                // 判斷商品數量是否為0 是0就刪除商品 不是就更新商品數量
                if (nextCount <= 0) {
                  if (confirm('確定要刪除商品嗎?')) {
                    onRemove(product.id);
                  }
                } else {
                  onDecrease(product.id);
                }
              }}
            >
              –
            </button>
            <button
              onClick={() => {
                handleDecreaseClick(product.id);
              }}
            >
              -(官方)
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <p>
        總數量:{totalQty} / 總金額: {totalAmount}
      </p>
    </>
  );
}
