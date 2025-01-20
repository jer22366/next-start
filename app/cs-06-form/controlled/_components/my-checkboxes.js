'use client';

import React, { useState, useEffect } from 'react';

export default function MyCheckboxes(props) {
  const petOptions = ['dog', 'cat', 'pig', 'rabbit'];

  const initState = petOptions.map((v, i) => {
    return { id: i + 1, name: v, checked: false };
  });
  const [pets, setPets] = useState(initState);

  // 處理切換fav屬性布林值
  const onToggleChecked = (petId) => {
    const nextPets = pets.map((v) => {
      // 在陣列中找到id為傳入的petId的物件，並修改checked布林值為反相值(!v.checked)
      if (v.id === petId) return { ...v, checked: !v.checked };
      // 其它沒有影響的物件值直接返回
      else return v;
    });

    // 設定到狀態
    setPets(nextPets);
  };

  const onCheckedAll = (e) => {
    const nextPets = pets.map((v) => {
      // 強制讓所有選項的checked屬性 和e.target.checked一致
      return { ...v, checked: e.target.checked };
    });
    setPets(nextPets);
  };

  return (
    <>
      <h2>核取方塊群組(checkboxes)</h2>
      <input type="checkbox" onChange={onCheckedAll} checked={pets.every(v => v.checked)}/>
      全選
      <hr />
      {pets.map((pet, i) => {
        return (
          <label key={pet.id}>
            <input
              type="checkbox"
              checked={pet.checked}
              onChange={() => {
                onToggleChecked(pet.id);
              }}
            />{' '}
            {pet.name}
          </label>
        );
      })}
    </>
  );
}
