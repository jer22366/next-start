'use client';

import { useState } from 'react';

export default function StateChangePage() {
  const [user, setUser] = useState({
    name: 'joe',
    profile: {
      phone: '0912312312',
      address: {
        city: 'taipei',
      },
    },
  });
  return (
    <>
      <h1>StateChange Page</h1>
      <hr />
      <p>{JSON.stringify(user)}</p>
      <button
        onClick={() => {
          const nextUser = JSON.parse(JSON.stringify(user));
          nextUser.name = '阿吉';

          // 因為name在第一層,所以淺拷貝就足夠
          // const nextUser = {...user,name:'阿吉'}
          setUser(nextUser);
        }}
      >
        更動姓名(name)為阿吉
      </button>
      <br />
      <button
        onClick={() => {
          // 因為city在第三層 所以需要深拷貝(或烤貝到第三層)
          //狀態變動三步驟之一 從目前的狀態拷貝出一個新的復本
          const nextCity = structuredClone(user);
          //狀態變動三步驟之二 在復本(物件/陣列)上做修改
          nextCity.profile.address.city = '新竹市';
          //狀態變動三步驟之二 用setState()方法設定修改後的復本到狀態中
          setUser(nextCity);
        }}
      >
        更動城市(city)為新竹市
      </button>
    </>
  );
}
