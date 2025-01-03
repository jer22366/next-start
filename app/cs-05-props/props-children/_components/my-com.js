'use client';

import React, { useState, useEffect } from 'react';

//props.children是一個props中內建的屬性
//它代表的是，在開頭與結尾的自訂元件中，其中被包裹住的所有子女
export default function MyCom({ children }) {
  return (
    <>
      <main
        className="container"
        style={{
          padding: 10,
          margin: 10,
          backgroundColor: '#ccc',
        }}
      >
        {children}
      </main>
    </>
  );
}