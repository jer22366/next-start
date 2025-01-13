'use client'

// 導入時就自動轉為JS資料格式
import products from './_data/Product.json'

// 導入CSS module檔案，會轉變為模組化的CSS物件
import styles from './_styles/product-table.module.css'

export default function ProductTablePage() {
  // 觀察導入的資料
  console.log(products)

  return (
    <>
      {/* 套用CSS模組化樣式 */}
      <table className={styles.myTable}>
        <thead>
          <tr>
            <th>編號</th>
            <th>圖片</th>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {/* 複數名詞(陣列) map 單數名詞(物件) 的語法很常見 */}
          {products.map((product) => {
            return (
              <tr key={product.sn}>
                <td>{product.sn}</td>
                <td>
                  {/* 忽略下面一行的檢查，eslint的檢查有時太多餘 */}
                  {/* eslint-disable-next-line */}
                  <img src={`/images/${product.photo}`} alt="" />
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
