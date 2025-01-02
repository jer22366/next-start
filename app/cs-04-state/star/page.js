'use client'

import React, { useState } from 'react'
// 導入.module.css檔案
import styles from './_styles/star.module.css'

export default function StarPage() {
  // 記錄點按時的評分，0代表一開始沒有評分
  const [rating, setRating] = useState(0)
  // 記錄滑鼠移入(懸停)時的評分，0代表一開始沒有評分
  const [hoverRating, setHoverRating] = useState(0)

  return (
    <>
      <h1>星星評分範例</h1>
      <hr />
      <div>
        {/* 如何建立一個有序的數字陣列1...N */}
        {/* https://github.com/orgs/mfee-react/discussions/50 */}
        {Array(5)
          .fill(1)
          .map((v, i) => {
            // 每個星星按鈕的分數(索引值+1)
            const score = i + 1
            return (
              <button
                key={score}
                className={styles.starBtn}
                onClick={() => {
                  // 點按時，設定評分
                  setRating(score)
                }}
                onMouseEnter={() => {
                  // 滑鼠移入時，設定hover評分
                  setHoverRating(score)
                }}
                onMouseLeave={() => {
                  // 滑鼠移出時，清除hover評分
                  setHoverRating(0)
                }}
              >
                <span
                  // 根據目前記錄的評分是否大於等於每個星星按鈕的分數，切換不同的CSS樣式
                  className={
                    score <= rating || score <= hoverRating
                      ? styles.on
                      : styles.off
                  }
                >
                  &#9733;
                </span>
              </button>
            )
          })}
      </div>
    </>
  )
}