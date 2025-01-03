'use client'

import React, { useState, useEffect } from 'react'
// 導入.module.css檔案
import styles from './star-rating.module.css'

// 星星評分更多教學或相關元件
// https://github.com/orgs/mfee-react/discussions/60
// 用value與onChange事件對應的特殊操作介面元件，
// 被稱為可控的(controlled)元件
export default function StarRating({
  value = 0, // 初始評分+完全綁定父母元件狀態，一開始點亮的星星數
  maxCount = 5, // 最多評分
  onChange = () => {}, // 設定評分回父母元件
  fillColor = 'gold',
  emptyColor = 'gray',
  icon = <>&#9733;</>
}) {
  // 記錄點按時的評分，0代表一開始沒有評分
  const [rating, setRating] = useState(value)
  // 記錄滑鼠移入(懸停)時的評分，0代表一開始沒有評分
  const [hoverRating, setHoverRating] = useState(0)

  // 當傳入的屬性value有更動之後，會同步化一次此元件中的rating值。初次渲染之後也會同步化一次。
  useEffect(() => {
    setRating(value)
  }, [value])

  return (
    <>
      <div>
        {/* 如何建立一個有序的數字陣列1...N */}
        {/* https://github.com/orgs/mfee-react/discussions/50 */}
        {Array(maxCount)
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
                  // 回送評分到父母元件
                  onChange(score)
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
                  // 使用style屬性(內聯樣式)套用傳入的顏色屬性
                  // 為了配合css modules解決方案，需要先轉為css變數的用法
                  style={{
                    '--fill-color': fillColor,
                    '--empty-color': emptyColor,
                  }}
                  // 根據目前記錄的評分是否大於等於每個星星按鈕的分數，切換不同的CSS樣式
                  className={
                    score <= rating || score <= hoverRating
                      ? styles.on
                      : styles.off
                  }
                >
                  {icon}
                </span>
              </button>
            )
          })}
      </div>
    </>
  )
}