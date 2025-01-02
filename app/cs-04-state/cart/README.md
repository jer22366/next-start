# 練習說明: 小型購物車

> 本練習題來自react官網挑戰題: https://react.dev/learn/updating-arrays-in-state

將`shopping-cart.js`檔案複製到練習專案的pages目錄中即可開始練習。目標是完成以下的功能:

1. 按下`+`按鈕增加產品數量，`-`按鈕減少產品數量。(意即 `products` 狀態中的 `count` 屬性的數字增減)

2. 當商品數量為 `0` 時，從畫面上刪除該商品。(意即從 `products` 狀態中，將此商品項目物件移除(或隱藏))，主要要確保畫面上，不會出現有數量為 `0` 的商品

## 補充練習

1. 加入單價，最後可以計算總價與總數量

2. 加入商品列表區域在上方區域，與一個"加入購物車"按鈕，點按可以加入到購物車區域中