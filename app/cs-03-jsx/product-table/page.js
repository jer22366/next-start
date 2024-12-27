'use client'

// 導入時就自動轉為JS資料格式
import products from './_data/Product.json'

//導入樣式(可以直接導入css檔案)
import styles from './_styles/product-table.module.css'

export default function ProductTablePage() {
  console.log(products)
  return (
    <>
      <table className={styles.myTable}>
        <thead>
          <tr>
            <th>編號</th>
            <th>圖片</th>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>{products.map((product) => {
          return <tr key={product.sn}>
            <td>{product.sn}</td>
            {/* 忽略下面一行的檢查,eslint的檢查有時太多了 */}
            {/* eslint-disable-next-line */}
            <td><img src={`/images/${product.photo}`} alt="" /></td>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        })}</tbody>
      </table>
    </>
  )
}